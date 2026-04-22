import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../config/constants';
import { trackEvent } from '../utils/analytics';

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=Hi%20Advocate%20Dipak%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('whatsapp_intent', { location: 'floating_widget' })}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 md:p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group animate-bounce-slow"
      aria-label="Chat on WhatsApp"
      style={{ animationDuration: '3s' }}
    >
      <MessageCircle size={28} className="md:w-8 md:h-8" />
      
      {/* Tooltip visible on hover (desktop only) */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block shadow-md">
        Chat with us!
        {/* Tooltip triangle tail */}
        <span className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-gray-900"></span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
