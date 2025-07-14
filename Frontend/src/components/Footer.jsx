import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 mt-16 border-t-2 border-blue-500/20">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Khushi Electronics
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted source for high-quality refurbished laptops. 
              Quality guaranteed with excellent customer support.
            </p>
            <div className="flex space-x-4">
             
              <a to="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a to="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/review" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Warranty Info
                </Link>
              </li>
              <li>
                <Link to="/contact-support" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Jaipur, Rajasthan, India
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                khushilaptops15@gmail.com
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 98765 43210
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Khushi Electronics. All rights reserved.
              </p>
            </div>

            {/* Developer Info */}
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-3">Developed By</p>
              <div className="flex items-center justify-center gap-4">
                
                {/* Naveen */}
                <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                  <img
                    src="https://naveencodes.netlify.app/naveen.png"
                    alt="Naveen Kumawat"
                    className="w-6 h-6 rounded-full border border-blue-400 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-semibold text-white">Naveen Kumawat</span>
                    <a
                      href="https://naveencodes.netlify.app/"
                      className="text-xs text-blue-400 hover:underline"
                    >
                      Contact
                    </a>
                  </div>
                </div>

                {/* Manish */}
                <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                  <img
                    src="https://mypersonalpfolio.netlify.app/1707530238951.jpg"
                    alt="Manish Prajapati"
                    className="w-6 h-6 rounded-full border border-blue-400 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-semibold text-white">Manish Prajapati</span>
                    <a
                      href="https://mypersonalpfolio.netlify.app/"
                      className="text-xs text-blue-400 hover:underline"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
