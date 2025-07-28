import { useState } from 'react';
import Modal from './components/Modal/Modal';
import SimpleMessage from './components/ModalContent/SimpleMessage';
import ContactForm from './components/ModalContent/ContactForm';
import ImageGallery from './components/ModalContent/ImageGallery';
import { MessageCircle, Mail, Image, Sparkles, Zap, Heart } from 'lucide-react';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [formSubmissionData, setFormSubmissionData] = useState(null);

  // Datos de ejemplo para la galería
  const sampleImages = [
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Montañas al Amanecer',
      description: 'Una vista espectacular de las montañas durante el amanecer, con colores cálidos que pintan el cielo.',
      author: 'John Photographer'
    },
    {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      title: 'Bosque Encantado',
      description: 'Un sendero misterioso que se adentra en un bosque lleno de vida y naturaleza.',
      author: 'Nature Lover'
    },
    {
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
      title: 'Lago Sereno',
      description: 'La tranquilidad de un lago cristalino reflejando el cielo azul y las nubes blancas.',
      author: 'Water Artist'
    }
  ];

  const closeModal = () => setActiveModal(null);

  const handleFormSubmit = (formData) => {
    // Mostrar mensaje de éxito usando el modal
    setActiveModal('form-success');
    // Guardar datos del formulario para mostrar en el mensaje
    setFormSubmissionData(formData);
  };

  const handleSimpleConfirm = () => {
    closeModal();
  };

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Modal Reutilizable
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Componente versátil, diseñado para cualquier contexto.
        </p>
      </div>

      {/* Demo Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Card 1: Mensaje Simple */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:bg-white/90 hover:shadow-lg transition-all duration-300 group">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Mensaje Simple
            </h3>

            <p className="text-gray-600 mb-6">
              Modal básico con mensaje de confirmación y diferentes tipos de alerta.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => setActiveModal('success')}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Éxito
              </button>
              <button
                onClick={() => setActiveModal('warning')}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:from-yellow-600 hover:to-orange-700 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Advertencia
              </button>
              <button
                onClick={() => setActiveModal('info')}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Información
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Formulario */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:bg-white/90 hover:shadow-lg transition-all duration-300 group">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Formulario de Contacto
            </h3>
            <p className="text-gray-600 mb-6">
              Modal con formulario, validación y manejo de estados.
            </p>
            <button
              onClick={() => setActiveModal('form')}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:from-purple-600 hover:to-pink-700 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Zap size={16} />
              Abrir Formulario
            </button>
          </div>
        </div>

        {/* Card 3: Galería */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:bg-white/90 hover:shadow-lg transition-all duration-300 group">

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <Image className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Galería de Imágenes
            </h3>
            <p className="text-gray-600 mb-6">
              Modal con galería interactiva, navegación y acciones sociales.
            </p>
            <button
              onClick={() => setActiveModal('gallery')}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:from-pink-600 hover:to-rose-700 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Heart size={16} />
              Ver Galería
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Características del Modal
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:bg-white/90 hover:shadow-md transition-all duration-300">
            <div className="text-3xl mb-3">🎨</div>
            <h4 className="font-semibold text-gray-800 mb-2">Animaciones Suaves</h4>

            <p className="text-gray-600 text-sm">Transiciones con Framer Motion</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:bg-white/90 hover:shadow-md transition-all duration-300">
            <div className="text-3xl mb-3">⌨️</div>
            <h4 className="font-semibold text-gray-800 mb-2">Accesible</h4>
            <p className="text-gray-600 text-sm">Soporte para teclado y lectores de pantalla</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:bg-white/90 hover:shadow-md transition-all duration-300">
            <div className="text-3xl mb-3">🔧</div>
            <h4 className="font-semibold text-gray-800 mb-2">Reutilizable</h4>
            <p className="text-gray-600 text-sm">Patrón de composición flexible</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:bg-white/90 hover:shadow-md transition-all duration-300">
            <div className="text-3xl mb-3">📱</div>
            <h4 className="font-semibold text-gray-800 mb-2">Responsivo</h4>
            <p className="text-gray-600 text-sm">Adaptable a cualquier dispositivo</p>
          </div>
        </div>
      </div>

      {/* Modales */}
      <Modal 
        isOpen={activeModal === 'success'} 
        onClose={closeModal}
      >
        <SimpleMessage
          type="success"
          title="¡Operación Exitosa!"
          message="La acción se ha completado correctamente."
          onConfirm={handleSimpleConfirm}
        />
      </Modal>

      <Modal 
        isOpen={activeModal === 'warning'} 
        onClose={closeModal}
      >
        <SimpleMessage
          type="warning"
          title="Advertencia Importante"
          message="Por favor, revisa la información antes de continuar."
          onConfirm={handleSimpleConfirm}
        />
      </Modal>

      <Modal 
        isOpen={activeModal === 'info'} 
        onClose={closeModal}
      >
        <SimpleMessage
          type="info"
          title="Información del Sistema"
          message="Información relevante sobre el estado actual."
          onConfirm={handleSimpleConfirm}
        />
      </Modal>

      <Modal 
        isOpen={activeModal === 'form'} 
        onClose={closeModal}
        className="max-w-lg"
      >
        <ContactForm
          onSubmit={handleFormSubmit}
          onCancel={closeModal}
        />
      </Modal>

      <Modal 
        isOpen={activeModal === 'gallery'} 
        onClose={closeModal}
        className="max-w-4xl"
      >
        <ImageGallery images={sampleImages} />
      </Modal>

      {/* Modal de confirmación de formulario */}
      <Modal 
        isOpen={activeModal === 'form-success'} 
        onClose={closeModal}
      >
        <SimpleMessage
          type="success"
          title="¡Mensaje Enviado!"
          message={formSubmissionData ? `¡Gracias ${formSubmissionData.name}! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.` : '¡Tu mensaje ha sido enviado correctamente!'}
          onConfirm={closeModal}
        />
      </Modal>
    </div>
  );
}

export default App;
