import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Calculator size={24} />
              </div>
              <span className="font-heading font-bold text-2xl text-text-primary">
                Acumen<span className="text-primary">Tax</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-primary font-semibold'
                    : 'text-text-secondary hover:text-primary transition-colors'
                } font-medium`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-md font-medium transition-colors"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-blue-50 text-primary border-l-4 border-primary'
                    : 'text-text-secondary hover:bg-gray-50 border-l-4 border-transparent'
                } block px-3 py-3 text-base font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-center items-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
