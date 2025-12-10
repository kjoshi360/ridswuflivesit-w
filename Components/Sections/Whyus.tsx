export default function WhyUs() {
  return (
    <section id="why" className="py-24 px-4 sm:px-6 lg:px-8 bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white mb-4 tracking-tight">Why Choose Us</h2>
          <p className="text-gray-500 font-light uppercase tracking-widest text-sm">Leading the green revolution in transportation</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 justify-center">
          <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-none border border-gray-800 hover:border-green-600 card-hover transition-all duration-300">
            <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mb-8 border border-green-600/30">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Eco-Friendly</h3>
            <p className="text-gray-400 font-light leading-relaxed">Zero emissions, 100% electric vehicles reducing carbon footprint across Central India.</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-none border border-gray-800 hover:border-green-600 card-hover transition-all duration-300">
            <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mb-8 border border-green-600/30">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Premium Experience</h3>
            <p className="text-gray-400 font-light leading-relaxed">Luxury electric vehicles with trained drivers and top-tier comfort features.</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-none border border-gray-800 hover:border-green-600 card-hover transition-all duration-300">
            <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mb-8 border border-green-600/30">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Affordable Rates</h3>
            <p className="text-gray-400 font-light leading-relaxed">Competitive pricing with no surge charges, making green rides accessible to all.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
