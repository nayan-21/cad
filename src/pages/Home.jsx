import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CONTACT_INFO } from '../config/constants';
import { trackEvent } from '../utils/analytics';
import { 
  Phone, 
  MessageCircle, 
  FileText, 
  IndianRupee, 
  Building, 
  BookOpen, 
  Award, 
  CheckCircle, 
  Clock 
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
      title: "GST Filing",
      description: "Complete GST services including GSTR-1, GSTR-3B, annual returns, reconciliation, and handling notices.",
      icon: <FileText size={28} />
    },
    {
      title: "Income Tax Return",
      description: "Filing of all types of income tax returns for individuals, professionals, and businesses.",
      icon: <IndianRupee size={28} />
    },
    {
      title: "Company Registration",
      description: "Business setup services including LLP registration, company incorporation, and compliance support.",
      icon: <Building size={28} />
    },
    {
      title: "Bookkeeping",
      description: "Accurate maintenance of daily ledgers, bank reconciliations, profit & loss statements, and balance sheets.",
      icon: <BookOpen size={28} />
    }
  ];

  const whyChooseUs = [
    {
      title: "Experienced Professionals",
      description: "Years of industry experience ensure your finances are in safe, professional hands.",
      icon: <Award size={32} className="text-primary mb-4" />
    },
    {
      title: "Accurate Filing",
      description: "We proactively manage deadlines, guaranteeing precision in every form submitted.",
      icon: <CheckCircle size={32} className="text-primary mb-4" />
    },
    {
      title: "Quick Support",
      description: "We are always one call or message away to answer your financial queries.",
      icon: <Clock size={32} className="text-primary mb-4" />
    }
  ];

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Reliable Tax & Legal Services | Advocate Dipak Prajapati</title>
        <meta name="description" content="Expert tax and legal solutions in Ahmedabad. GST filing, income tax returns, bookkeeping, and company registration by trusted Advocate Dipak Prajapati." />
      </Helmet>
      {/* 1. Hero Section */}
      <section className="relative bg-white pt-24 pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9fafb_1px,transparent_1px),linear-gradient(to_bottom,#f9fafb_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary leading-tight max-w-4xl mx-auto mb-6">
            Accurate Accounting & Tax Services
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            Simplifying your taxes, compliance, and business needs with accuracy and reliability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href={`tel:+91${CONTACT_INFO.PHONE_RAW}`} 
              onClick={() => trackEvent('call_intent', { location: 'home_hero' })}
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center justify-center text-lg shadow-sm"
              aria-label={`Call us via phone at ${CONTACT_INFO.PHONE_DISPLAY}`}
            >
              <Phone className="mr-2" size={20} aria-hidden="true" /> Call Now
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=Hi%20Advocate%20Dipak%2C%20I%20am%20interested%20in%20your%20services.`} 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_intent', { location: 'home_hero' })}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center justify-center text-lg shadow-sm"
              aria-label="Message us on WhatsApp"
            >
              <MessageCircle className="mr-2" size={20} aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Trusted Expertise</span>
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">
            Expert Tax & Compliance Solutions You Can Trust
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            With over 10 years of experience, we provide reliable accounting, taxation, and compliance services for individuals and businesses. Our focus is on accuracy, transparency, and long-term client trust.
          </p>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-text-secondary">
              Focused solutions designed to keep your finances organized and compliant.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-text-secondary">
              Delivering on promises with integrity and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="bg-white p-10 rounded-2xl text-center shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            Get your taxes filed today
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-primary hover:bg-gray-50 px-10 py-4 rounded-lg font-bold text-lg transition-colors shadow-sm"
            aria-label="Navigate to contact page to file your taxes"
          >
            Contact Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
