import React from 'react';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const AddressPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Location</h1>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4 text-center">
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-blue-600 text-4xl mb-2" />
          <h2 className="text-xl font-semibold">G-44 45 Ganpati plaza
</h2>
          <p> A block nearby airtel store</p>
          <p>M.I. Road ganpati plaza shop no G-44,45, Jaipur, Rajasthan 300201</p>
        </div>

        <div className="mt-6">
          {/* Replace the src below with your own Google Maps embed or image */}
         
          <a
            href="https://www.google.com/maps/dir//GANPATI+PLAZA,+G-44+45,+Mirza+Ismail+Rd,+Lalpura+Colony,+Sindhi+Camp,+Jaipur,+Rajasthan+302001/@26.9208537,75.7177042,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396db3c12746c7c9:0x83db571f38e9d33a!2m2!1d75.8001057!2d26.9208776?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-blue-600 hover:underline text-lg"
          > <img
          
            src="../public/images/map.png" // Adjust the path as necessary
            alt="Google Map"
            className="rounded-md border shadow"
          />

            
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
