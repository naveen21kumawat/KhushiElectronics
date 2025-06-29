import { faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 flex  items-center justify-around ">
      <div className="mt-4  flex flex-row items-center w-1/3 ">
        <a
          href=""
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-block ml-10 mr-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-
          2 px-4 rounded inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </a>
      </div>
      <div className="container w-1/3 mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Refurbished Laptop Shop. All rights
          reserved.
        </p>
        <p className="text-xs mt-2">Built with ❤️ by Your Name</p>
      </div>

      {/* Developer Information */}
      <div className="w-1/3 flex justify-center  p-2  mr-3 rounded-lg">
        <div className="p-1">
          <h1 className="text-center font-bold text-white text-xs mt-4">
            Developed By
          </h1>
          {/* Naveen Profile */}
          <div  className="flex items-center text-white font-bold">
            <span className="mr-2">
              <img
                src="https://naveencodes.netlify.app/naveen.png"
                alt="Naveen Kumawat"
                className="w-6 h-6 rounded-full inline-block"
              />
            </span>
            <span className="e text-xs flex gap-3">
              <h1>Naveen Kumawat</h1>
            <a href="https://naveencodes.netlify.app/" className="text-xs text-white-900 font-bold border-2  px-2">Click Here TO Contact</a>
            </span>
          </div>

          {/* Manish Profile */}
          <div children="mt-2" className="flex items-center text-white font-bold">
            <span className="mr-2">
              <img
                src="https://mypersonalpfolio.netlify.app/1707530238951.jpg"
                alt="Naveen Kumawat"
                className="w-6 h-6 rounded-full inline-block"
              />
            </span>
            <span className=" text-xs flex gap-3">
              <h1>Manish Prajapati</h1>
            <a href="https://mypersonalpfolio.netlify.app/" className="text-xs text-white-900 font-bold border-2 px-2">Click Here TO Contact</a>
            </span>
          </div>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
