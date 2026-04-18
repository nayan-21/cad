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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Contact Information & Action Buttons */}
            <div className="lg:w-5/12 bg-gray-50 p-10 lg:border-r border-gray-100 flex flex-col">
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8 flex-grow">
                {/* Instant Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <a 
                    href="tel:+15551234567" 
                    className="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-text-primary font-medium px-4 py-3 rounded-lg flex items-center justify-center transition-colors shadow-sm"
                  >
                    <Phone className="mr-2 text-primary" size={20} /> Click to Call
                  </a>
                  <a 
                    href="https://wa.me/15551234567" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-4 py-3 rounded-lg flex items-center justify-center transition-colors shadow-sm"
                  >
                    <MessageCircle className="mr-2" size={20} /> WhatsApp
                  </a>
                </div>

                <div className="border-t border-gray-200 pt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full text-primary shadow-sm border border-gray-100">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary mb-1">Email</h4>
                      <p className="text-text-secondary">contact@acumentax.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full text-primary shadow-sm border border-gray-100">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary mb-1">Our Office</h4>
                      <p className="text-text-secondary leading-relaxed">123 Financial District<br />New York, NY 10004</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div className="lg:w-7/12 p-10">
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
                Send us a Message
              </h2>
              <p className="text-text-secondary mb-8">
                Fill out the form below and we will get back to you within 24 hours.
              </p>
              
              <form className="space-y-6 max-w-lg">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3.5 rounded-lg transition-colors shadow-sm text-lg mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Google Maps (Optional Section) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-xl font-heading font-bold text-text-primary mb-6">
          Find Us Here
        </h2>
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-80">
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
