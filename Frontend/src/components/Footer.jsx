import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
          <a
            href="#"
            className="hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
          <a
            href="/location"
            className="hover:text-blue-400 transition"
            rel="noopener noreferrer"
          >
            Location
          </a>
        </div>

        {/* Center Text */}
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Refurbished Laptop Shop. All rights reserved.
          </p>
          <p className="text-xs mt-1 text-gray-400">Built with ❤️ by Your Name</p>
        </div>

        {/* Developer Info */}
        <div className="text-center text-xs font-semibold">
          <p className="mb-2 text-white">Developed By</p>

          {/* Naveen */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <img
              src="https://naveencodes.netlify.app/naveen.png"
              alt="Naveen Kumawat"
              className="w-8 h-8 rounded-full border-2 border-white hover:scale-105 transition"
            />
            <div className="flex flex-col items-start">
              <span>Naveen Kumawat</span>
              <a
                href="https://naveencodes.netlify.app/"
                className="text-blue-400 hover:underline"
              >
                Click Here To Contact
              </a>
            </div>
          </div>

          {/* Manish */}
          <div className="flex items-center justify-center gap-2">
            <img
              src="https://mypersonalpfolio.netlify.app/1707530238951.jpg"
              alt="Manish Prajapati"
              className="w-8 h-8 rounded-full border-2 border-white hover:scale-105 transition"
            />
            <div className="flex flex-col items-start">
              <span>Manish Prajapati</span>
              <a
                href="https://mypersonalpfolio.netlify.app/"
                className="text-blue-400 hover:underline"
              >
                Click Here To Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
