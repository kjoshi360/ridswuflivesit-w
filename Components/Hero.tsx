'use client';
import LeadForm from './LeadForm';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden z-10">
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_rgba(16,185,129,0.06)_1px,_transparent_0)] bg-[length:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-green-600/10 border border-green-600/30 px-5 py-2 rounded-full mb-8">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
              <p className="text-xs font-light uppercase tracking-widest text-green-400">Central India's Fastest-Growing  EV cab Network</p>
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-none tracking-tight">
              Ride Green,<br /><span className="text-green-500">Ride Clean</span>
            </h1>
            <p className="text-lg mb-10 text-gray-400 font-light leading-relaxed max-w-xl">
           Switch to a smarter way of travel. 100% electric, zero-emission rides that are comfortable, reliable, and designed for a cleaner tomorrow.
            </p>
            {/*<button className="bg-green-600 text-black px-10 py-4 rounded-full text-base font-bold hover:bg-green-500 contact-button uppercase tracking-wide shadow-2xl shadow-green-600/50 relative z-30">
              Book Your EV Cab
            </button>*/}

            
          </div>

          <div className="relative z-20">
            <div className="rounded-full" />
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
