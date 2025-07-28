import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Download, Share2 } from 'lucide-react';

const ImageGallery = ({ images, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLiked, setIsLiked] = useState(false);

  const currentImage = images[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleDownload = () => {
    // Simular descarga
    const link = document.createElement('a');
    link.href = currentImage.url;
    link.download = currentImage.title || 'imagen';
    link.click();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentImage.title,
        text: currentImage.description,
        url: currentImage.url,
      });
    } else {
      // Fallback: copiar al portapapeles
      navigator.clipboard.writeText(currentImage.url);
      alert('URL copiada al portapapeles');
    }
  };

  return (
    <div className="w-full">
      {/* Imagen principal */}
      <div className="relative mb-4">
        <img
          src={currentImage.url}
          alt={currentImage.title}
          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg shadow-lg"
        />
        
        {/* Controles de navegación */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1.5 sm:p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            >
              <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1.5 sm:p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            >
              <ChevronRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </>
        )}
        
        {/* Indicador de posición */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Información de la imagen */}
      <div className="mb-4 px-1">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          {currentImage.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {currentImage.description}
        </p>
        {currentImage.author && (
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Por: {currentImage.author}
          </p>
        )}
      </div>

      {/* Acciones */}
      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-4">
        <button
          onClick={handleLike}
          className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
            isLiked 
              ? 'bg-red-100 text-red-600 hover:bg-red-200' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Heart size={14} className={`sm:w-4 sm:h-4 ${isLiked ? 'fill-current' : ''}`} />
          <span className="hidden sm:inline">{isLiked ? 'Te gusta' : 'Me gusta'}</span>
          <span className="sm:hidden">{isLiked ? '❤️' : '🤍'}</span>
        </button>
        
        <button
          onClick={handleDownload}
          className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-200 text-sm"
        >
          <Download size={14} className="sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Descargar</span>
          <span className="sm:hidden">📥</span>
        </button>
        
        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-200 text-sm"
        >
          <Share2 size={14} className="sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Compartir</span>
          <span className="sm:hidden">📤</span>
        </button>
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-2 px-1">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === currentIndex 
                  ? 'border-blue-500 shadow-lg' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;