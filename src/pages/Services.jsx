import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Receipt, 
  Building, 
  BookOpen, 
  ScrollText, 
  TrendingUp 
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
  const allServices = [
    {
      title: "GST Filing",
      description: "Complete GST services including GSTR-1, GSTR-3B, annual returns, reconciliation, and handling notices.",
      icon: <FileText size={28} />,
      showPricingLabel: true
    },
    {
      title: "Income Tax Return",
      description: "Filing of all types of income tax returns for individuals, professionals, and businesses.",
      icon: <Receipt size={28} />,
      showPricingLabel: true
    },
    {
      title: "Company Registration",
      description: "Business setup services including LLP registration, company incorporation, and compliance support.",
      icon: <Building size={28} />,
      showPricingLabel: true
    },
    {
      title: "TDS Filing",
      description: "Accurate and timely TDS return filing along with compliance management.",
      icon: <ScrollText size={28} />,
      showPricingLabel: true
    },
    {
      title: "Audit Support",
      description: "Assistance in statutory audit, tax audit, and related documentation.",
      icon: <FileText size={28} />,
      showPricingLabel: true
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Helmet>
        <title>Our Services | GST, ITR & Registration | Advocate Dipak Prajapati</title>
        <meta name="description" content="Comprehensive financial and legal solutions including GST Filing, Income Tax Return, Company Registration, TDS Filing, and Audit Assistance." />
      </Helmet>
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Explore Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive, accurate, and professional financial solutions tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 50}
                showPricingLabel={service.showPricingLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">
            Need specialized tax or legal support?
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Whether you're dealing with complex GST compliance, require audit assistance, or need expert legal counsel, we provide complete solutions under one roof. Reach out to discuss your specific requirements.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-medium transition-colors shadow-sm"
          >
            Contact Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
