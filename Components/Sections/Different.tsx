export default function Different() {
  return (
    <section id="different" className="py-24 px-4 sm:px-6 lg:px-8 bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white mb-4 tracking-tight">What Makes Us Different</h2>
          <p className="text-gray-500 font-light uppercase tracking-widest text-sm">
            Innovation meets sustainability
          </p>
        </div>

        {/* Content justified ypdated */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 border border-gray-800 hover:border-green-600 transition-all duration-300 text-center">
              <svg className="w-14 h-14 text-green-500 mb-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
              </svg>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Fast Charging Network</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Our proprietary charging stations ensure vehicles are always ready.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 border border-gray-800 hover:border-green-600 transition-all duration-300 text-center">
              <svg className="w-14 h-14 text-green-500 mb-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
              </svg>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Smart App</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                AI-powered booking with real-time tracking and instant driver matching.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 border border-gray-800 hover:border-green-600 transition-all duration-300 text-center">
              <svg className="w-14 h-14 text-green-500 mb-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Regional Focus</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Deep understanding of Central India's routes, culture, and needs.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

  );
}
