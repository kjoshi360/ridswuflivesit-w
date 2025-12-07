export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
              </svg>
              <span className="text-2xl font-black tracking-tight">GreenRide</span>
            </div>
            <p className="text-gray-500 font-light text-sm">Central India's largest EV cab booking service.</p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li><a href="#home" className="hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="#why" className="hover:text-green-500 transition-colors">Why Us</a></li>
              <li><a href="#about" className="hover:text-green-500 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li>City Rides</li>
              <li>Airport Transfers</li>
              <li>Outstation</li>
              <li>Corporate Bookings</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all"><span className="text-lg">f</span></a>
              <a href="#" className="w-12 h-12 bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all"><span className="text-lg">𝕏</span></a>
              <a href="#" className="w-12 h-12 bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all"><span className="text-lg">in</span></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-widest font-light">© 2024 GreenRide. All rights reserved. Proudly serving Central India.</p>
        </div>
      </div>
    </footer>
  );
}
