import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to simplify your taxes and secure your financial future? Reach out to us today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            
          {/* Contact Information & Action Buttons */}
          <div className="bg-gray-50 p-10 md:p-14 flex flex-col items-center text-center">
            
            <div className="w-full max-w-2xl space-y-10">
              {/* Instant Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+15551234567" 
                  className="flex-1 bg-white hover:bg-gray-100 border border-gray-200 text-text-primary font-medium px-6 py-4 rounded-xl flex items-center justify-center transition-colors shadow-sm text-lg"
                >
                  <Phone className="mr-3 text-primary" size={24} /> Click to Call
                </a>
                <a 
                  href="https://wa.me/15551234567" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-6 py-4 rounded-xl flex items-center justify-center transition-colors shadow-sm text-lg"
                >
                  <MessageCircle className="mr-3" size={24} /> WhatsApp
                </a>
              </div>

              <div className="border-t border-gray-200 pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-4 rounded-full text-primary shadow-sm border border-gray-100">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-text-primary text-lg mb-1">Email</h4>
                    <p className="text-text-secondary">contact@acumentax.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-4 rounded-full text-primary shadow-sm border border-gray-100">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-text-primary text-lg mb-1">Our Office</h4>
                    <p className="text-text-secondary leading-relaxed">123 Financial District<br />New York, NY 10004</p>
                  </div>
                </div>
              </div>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14448744574972!3d40.69763123330663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
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
