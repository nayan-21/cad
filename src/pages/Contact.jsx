import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../config/constants';
import { trackEvent } from '../utils/analytics';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service) {
      setFormData(prev => ({
        ...prev,
        message: `Hi Advocate Dipak, I am interested in exploring your ${service} services. Please let me know how we can proceed.`
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trackEvent('form_submission', { form_name: 'contact_lead_form' });
    const text = `Name: ${formData.name}%0A` +
                 `Phone: ${formData.phone}%0A%0A` +
                 `Message: ${formData.message}`;
    window.open(`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-background min-h-screen pb-24">
      <Helmet>
        <title>Contact Us | Advocate Dipak Prajapati</title>
        <meta name="description" content="Get in touch with Advocate Dipak Prajapati. Call or WhatsApp 7016965221, or visit our office at Nirnaynagar, Ahmedabad for your tax and legal queries." />
      </Helmet>
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto">
            Ready to simplify your taxes and secure your financial future? Reach out to us today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Information & Action Buttons */}
            <div className="bg-gray-50 p-10 md:p-14 flex flex-col justify-center border-r border-gray-100">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center lg:text-left">
                Contact Information
              </h2>
              <div className="w-full space-y-10">
                {/* Instant Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`tel:+91${CONTACT_INFO.PHONE_RAW}`} 
                    onClick={() => trackEvent('call_intent', { location: 'contact_page' })}
                    className="flex-1 bg-white hover:bg-gray-100 border border-gray-200 text-text-primary font-medium px-6 py-4 rounded-xl flex items-center justify-center transition-colors shadow-sm text-lg"
                    aria-label={`Call us at ${CONTACT_INFO.PHONE_DISPLAY}`}
                  >
                    <Phone className="mr-3 text-primary" size={24} aria-hidden="true" /> {CONTACT_INFO.PHONE_DISPLAY}
                  </a>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Advocate Dipak, I would like to inquire about your services.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('whatsapp_intent', { location: 'contact_page' })}
                    className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-6 py-4 rounded-xl flex items-center justify-center transition-colors shadow-sm text-lg"
                    aria-label="Message us on WhatsApp"
                  >
                    <MessageCircle className="mr-3" size={24} aria-hidden="true" /> WhatsApp
                  </a>
                </div>

                <div className="border-t border-gray-200 pt-10 flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-4 rounded-full text-primary shadow-sm border border-gray-100 shrink-0">
                      <Mail size={28} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading font-semibold text-text-primary text-lg mb-1">Email</h4>
                      <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-text-secondary hover:text-primary transition-colors hover:underline break-all">{CONTACT_INFO.EMAIL}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-4 rounded-full text-primary shadow-sm border border-gray-100 shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary text-lg mb-1">Office</h4>
                      <p className="text-text-secondary leading-relaxed">{CONTACT_INFO.ADDRESS.LINE_1}<br />{CONTACT_INFO.ADDRESS.LINE_2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center lg:text-left">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="+91 ----------"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Your Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-4 rounded-xl flex items-center justify-center transition-colors shadow-sm text-lg"
                >
                  <Send className="mr-2" size={20} /> Send via WhatsApp
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Google Maps (Optional Section) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-heading font-bold text-text-primary text-center mb-8">
          Find Us Here
        </h2>
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-96">
          <iframe 
            src={CONTACT_INFO.MAPS_EMBED_URL} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
