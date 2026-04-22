import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center py-20 px-4">
      <Helmet>
        <title>Page Not Found | Advocate Dipak Prajapati</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="bg-white p-10 md:p-14 rounded-2xl shadow-sm border border-gray-100 max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-orange-50 text-orange-500 rounded-full">
            <AlertCircle size={48} />
          </div>
        </div>
        <h1 className="text-4xl font-heading font-bold text-text-primary mb-4">
          404
        </h1>
        <h2 className="text-xl font-heading font-semibold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-text-secondary leading-relaxed mb-8">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-medium transition-colors shadow-sm w-full sm:w-auto"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
