import ContactForm from '../ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black transition-colors duration-300 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4 tracking-tight">Get In Touch</h2>
          <p className="text-gray-500 font-light uppercase tracking-widest text-sm">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-black p-10 border border-gray-800 transition-colors duration-300">
            <div className="flex items-start space-x-4 mb-8 pb-8 border-b border-gray-800">
              <svg className="w-6 h-6 text-green-500 mt-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <div>
                <h3 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Office Address</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">919, 9th floor, thinkNtap, Shekar center, Near Palasia, AB Road, Indore, Madhya Pradesh, 452001</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-8 pb-8 border-b border-gray-800">
              <svg className="w-6 h-6 text-green-500 mt-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <div>
                <h3 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Phone Number</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">+91 94258 25000</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-500 mt-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <div>
                <h3 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Email Address</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">greencabsindore@gmail.com</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
      <div style={{width: "100%"}}>
        <iframe 
          width="100%" 
          height="300" 
          frameBorder="0" 
          title="Google Map" 
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=shekhar%20central+(Green%20Cars%20Cab%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </section>
  );
}
