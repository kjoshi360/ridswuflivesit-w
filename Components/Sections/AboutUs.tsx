export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Green Cabs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reliable, eco-friendly cab services powered by cutting-edge technology.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Providing sustainable transportation solutions with electric vehicles,
              real-time tracking, and exceptional service across India.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-0.5" />
                100% Electric Fleet
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-0.5" />
                24/7 Customer Support
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-0.5" />
                Affordable Pricing
              </li>
            </ul>
          </div>
          <div className="relative">
            <img 
              src="/images/about-driver.jpg" 
              alt="Green Cabs Driver" 
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
