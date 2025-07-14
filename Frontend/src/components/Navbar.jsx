import {
  faArrowUp,
  faBars,
  faContactCard,
  faHouse,
  faLaptop,
  faMapLocationDot,
  faShop,
  faStar,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { name: "Home", icon: faHouse, to: "/" },
    { name: "Shop", icon: faShop, to: "/shop" },
    { name: "Location", icon: faMapLocationDot, to: "/location" },
    { name: "Contact", icon: faContactCard, to: "/about" },
    { name: "Review", icon: faStar, to: "/review" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-4">
          <div className="relative bg-blue-100 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Logo Section */}
              <div className="flex-shrink-0 flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <FontAwesomeIcon
                      icon={faLaptop}
                      className="text-white text-xl group-hover:rotate-12 transition-transform duration-300"
                    />
                    {/* <img src="./images/logo.jpg" alt="" /> */}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-serif italic">
                    Khushi Laptop
                  </h1>
                  <span className="text-xs text-gray-600 font-medium">
                    Premium Refurbished
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={`group relative px-4 py-2 rounded-xl transition-all duration-300 ${
                        isActive ? 'bg-blue-100 shadow-md' : ''
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`flex items-center space-x-2 transition-colors duration-300 ${
                        isActive 
                          ? 'text-blue-700 font-semibold' 
                          : 'text-gray-700 group-hover:text-blue-600'
                      }`}>
                        <FontAwesomeIcon
                          icon={item.icon}
                          className={`text-lg transition-transform duration-300 ${
                            isActive 
                              ? 'text-blue-600' 
                              : 'group-hover:scale-110 group-hover:rotate-12'
                          }`}
                        />
                        <span className="font-medium">{item.name}</span>
                      </div>

                      {/* Underline on hover or active */}
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 origin-left rounded-full ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}></div>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Toggle */}
              <div className="md:hidden flex items-center gap-2">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <FontAwesomeIcon
                    icon={isOpen ? faTimes : faBars}
                    className="text-gray-700 text-xl"
                  />
                </button>
              </div>
            </div>

            {/* Mobile Nav */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive ? 'bg-blue-100 shadow-md' : ''
                        }`}
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          transform: isOpen ? "translateY(0)" : "translateY(-10px)",
                          transition: `all 0.3s ease ${index * 0.1}s`,
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          className={`transition-colors duration-300 text-lg ${
                            isActive 
                              ? 'text-blue-600' 
                              : 'text-gray-600 group-hover:text-blue-600'
                          }`}
                        />
                        <span className={`font-medium transition-colors duration-300 ${
                          isActive 
                            ? 'text-blue-700 font-semibold' 
                            : 'text-gray-700 group-hover:text-blue-600'
                        }`}>
                          {item.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-lg" />
        </button>
      )}
    </>
  );
}

export default Navbar;
