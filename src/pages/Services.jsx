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
      title: "GST Registration & Filing",
      description: "End-to-end management of GST registration, monthly/quarterly return filings, and resolving GST disputes.",
      icon: <FileText size={28} />,
      showPricingLabel: true
    },
    {
      title: "Income Tax Return (ITR)",
      description: "Seamless preparation and e-filing of ITR for salaried individuals, freelancers, and large corporations.",
      icon: <Receipt size={28} />,
      showPricingLabel: true
    },
    {
      title: "Business Registration",
      description: "Complete support in setting up Private Limited Companies, LLPs, Partnerships, and Proprietorships.",
      icon: <Building size={28} />,
      showPricingLabel: true
    },
    {
      title: "Bookkeeping",
      description: "Accurate maintenance of daily ledgers, bank reconciliations, profit & loss statements, and balance sheets.",
      icon: <BookOpen size={28} />,
      showPricingLabel: false
    },
    {
      title: "TDS Filing",
      description: "Timely computation, deduction, and quarterly filing of Tax Deducted at Source (TDS) for your business.",
      icon: <ScrollText size={28} />,
      showPricingLabel: true
    },
    {
      title: "Financial Consulting",
      description: "Strategic advice on budgeting, cash flow forecasting, and overall financial health checkups.",
      icon: <TrendingUp size={28} />,
      showPricingLabel: false
    }
  ];

  return (
    <div className="bg-background min-h-screen">
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

      {/* Custom Needs Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">
            Looking for something specific?
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Every business and financial situation is unique. If you have complex requirements not listed above, we likely handle it. Reach out to discuss a customized service package.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-medium transition-colors shadow-sm"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
