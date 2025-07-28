import { CheckCircle, AlertTriangle, Info } from 'lucide-react';

const SimpleMessage = ({ type = 'info', title, message, onConfirm }) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={48} />;
      case 'warning':
        return <AlertTriangle className="text-yellow-500" size={48} />;
      case 'error':
        return <AlertTriangle className="text-red-500" size={48} />;
      default:
        return <Info className="text-blue-500" size={48} />;
    }
  };

  const getButtonClass = () => {
    switch (type) {
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700';
      case 'error':
        return 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700';
      default:
        return 'btn-primary';
    }
  };

  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        {getIcon()}
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        {title}
      </h2>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {message}
      </p>
      
      <button
        onClick={onConfirm}
        className={`${getButtonClass()} text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-50`}
      >
        Aceptar
      </button>
    </div>
  );
};

export default SimpleMessage;