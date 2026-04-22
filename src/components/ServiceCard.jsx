import { ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <div 
      className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">{title}</h3>
      <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      <Link 
        to={`/contact?service=${encodeURIComponent(title)}`} 
        className="flex items-center justify-between w-full text-primary font-medium group-hover:text-primary-dark transition-colors mt-auto border-t border-gray-50 pt-4"
        aria-label={`Discuss ${title} service via contact page`}
      >
        <span aria-hidden="true">Discuss Service</span>
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </Link>
    </div>
  );
};

export default ServiceCard;
