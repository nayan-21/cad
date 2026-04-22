import { Briefcase, GraduationCap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-background min-h-screen pb-24">
      <Helmet>
        <title>About Us | Advocate Dipak Prajapati</title>
        <meta name="description" content="Learn about Advocate Dipak Prajapati, an experienced Advocate and GST Practitioner in Ahmedabad serving corporate and individual clients for over 10 years." />
      </Helmet>
      {/* 1. Profile Header */}
      <section className="bg-primary pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Profile Image Wrapper */}
          <div className="relative inline-block mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto bg-white flex items-center justify-center">
              <img 
                src="/profile-pic.jpg" 
                alt="Advocate Dipak Prajapati, Advocate & GST Practitioner" 
                className="w-full h-full object-cover object-top scale-[0.85] translate-y-3"
                width="192"
                height="192"
                loading="eager"
              />
            </div>
          </div>
          
          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Advocate Dipak Prajapati
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 font-medium tracking-wide">
            Advocate & GST Practitioner
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="-mt-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            
            {/* 2. Introduction */}
            <div className="p-10 md:p-12 border-b border-gray-100">
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
                Introduction
              </h2>
              <div className="text-lg text-text-secondary leading-relaxed space-y-4">
                <p>
                  We started with a vision to simplify complex tax and legal frameworks for businesses and individuals. Over the years, we have organically grown from serving local small businesses to managing comprehensive compliance portfolios for corporate clients.
                </p>
                <p>
                  Our core philosophy is built on absolute transparency, relentless accuracy, and establishing long-term, trusted working relationships with our clients to ensure complete legal safety.
                </p>
              </div>
            </div>

            {/* 3. Experience */}
            <div className="p-10 md:p-12 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white text-primary rounded-lg shadow-sm border border-gray-100">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-text-primary">
                  Experience
                </h2>
              </div>
              <ul className="space-y-8">
                <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  <h4 className="font-heading font-bold text-text-primary mb-1 text-xl">Advocate & GST Practitioner</h4>
                  <p className="text-primary font-semibold mb-3">10+ Years Experience</p>
                  <p className="text-text-secondary leading-relaxed">Handling corporate and individual clients with precision and reliability. We ensure end-to-end management of legal and tax compliances, represent clients before tax authorities, and structure proactive tax planning strategies that save both time and resources.</p>
                </li>
              </ul>
            </div>

            {/* 4. Qualifications */}
            <div className="p-10 md:p-12 border-b border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 text-primary rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-text-primary">
                  Qualifications
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-100 p-6 rounded-xl">
                  <h4 className="font-heading font-bold text-text-primary mb-2">Advocate</h4>
                  <p className="text-text-secondary">Providing robust legal counsel and defense.</p>
                </div>
                <div className="border border-gray-100 p-6 rounded-xl">
                  <h4 className="font-heading font-bold text-text-primary mb-2">GST Practitioner</h4>
                  <p className="text-text-secondary">Expertise in accurate and timely GST compliance.</p>
                </div>
              </div>
            </div>

            {/* 5. Why people trust him */}
            <div className="p-10 md:p-12 bg-gray-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white text-primary rounded-lg shadow-sm border border-gray-100">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-text-primary">
                  Why Clients Trust Us
                </h2>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                We provide complete solutions under one roof, ensuring clients do not need to go anywhere else. From small businesses to large clients, we deliver reliable, accurate, and timely services with a strong focus on client satisfaction.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "100% Data Security & Confidentiality",
                  "Transparent & Upfront Pricing",
                  "Zero Hidden Fees or Surprise Charges",
                  "Direct Access and Timely Responses",
                  "Proactive Over Reactive Tax Planning",
                  "Ethical and Honest Advising"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                    <span className="text-text-primary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-20 bg-primary mt-20 relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to discuss your legal or tax needs?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized advice and accurate compliance support from an experienced professional.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-primary hover:bg-gray-50 px-10 py-4 rounded-lg font-bold text-lg transition-colors shadow-sm"
            aria-label="Navigate to contact page to get a consultation"
          >
            Get a Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
