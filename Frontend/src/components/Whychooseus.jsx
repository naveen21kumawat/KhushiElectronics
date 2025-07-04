import React from "react";

function Whychooseus() {
  return (
    <div className="bg-white  font-sans px-4 py-10">
      
      {/* Why Choose Us Section */}
      <div className="text-center max-w-screen-md mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Why Choose Us?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            "Thoroughly Tested",
            "1-Year Warranty",
            "Free Shipping",
            "Customer Support",
          ].map((item) => (
            <div key={item} className="flex flex-col items-center text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full mb-2 text-xl font-bold">
                ✓
              </div>
              <p className="text-gray-700 text-sm sm:text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mt-12 text-center italic max-w-screen-md mx-auto">
        <p className="text-lg sm:text-xl text-gray-800">
          "Great quality laptop at a fraction of the price. Highly recommend this shop."
        </p>
        <p className="mt-2 text-sm text-gray-600">- KhushiLaptops</p>
      </div>
    </div>
  );
}

export default Whychooseus;
