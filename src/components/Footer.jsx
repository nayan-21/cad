import { Link } from 'react-router-dom';
import { Calculator, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Calculator size={20} />
              </div>
              <span className="font-heading font-bold text-2xl">
                Acumen<span className="text-primary">Tax</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional accounting, tax preparation, and financial consulting services tailored to your personal and business needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">FB</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">X (TW)</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">IN</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Firm</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Tax Preparation</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Bookkeeping</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Payroll Services</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Business Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span className="text-gray-400">123 Financial District,<br />New York, NY 10004</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span className="text-gray-400">contact@acumentax.com</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} AcumenTax Accounting. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
