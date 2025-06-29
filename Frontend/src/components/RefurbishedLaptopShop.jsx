import React, { useEffect } from "react";

// Dummy data for demonstration
const fallbackLaptops = [
  { id: 1, name: "Dell Latitude 7490", price: "₹32,000" },
  { id: 2, name: "HP EliteBook 840 G5", price: "₹34,500" },
  { id: 3, name: "Lenovo ThinkPad T480", price: "₹31,000" },
];

// You can fetch laptops from API or use state, for now, we'll use an empty array to trigger fallback
const laptops = [];

function RefurbishedLaptopShop() {
  const displayLaptops = laptops.length > 0 ? laptops : fallbackLaptops;

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-2">
          Top Quality Refurbished Laptops
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          at Unbeatable Prices
        </h2>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Shop Now</button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded">
            View Deals
          </button>
        </div>
      </div>

      {/* Example: Display laptops */}
      <div className="px-6 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayLaptops.map((laptop) => (
          <div key={laptop.id} className="border rounded-lg p-4 shadow">
            <h3 className="font-semibold text-lg mb-2">{laptop.name}</h3>
            <p className="text-blue-600 font-bold">{laptop.price}</p>
          </div>
        ))}
      </div>

      {/* <div className="px-6 mt-10 text-center">
        <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['Thoroughly Tested', '1-Year Warranty', 'Free Shipping', 'Customer Support'].map((item) => (
            <div key={item} className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                ✓
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div> 
{/* 
      <div className="px-6 mt-12 text-center italic">
        <p className="text-lg">"Great quality laptop at a fraction of the price. Highly recommend this shop."</p>
        <p className="mt-2 text-sm text-gray-600">- KhushiLaptops</p>
      </div>

      <div className="px-6 py-10 grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h4 className="text-xl font-semibold mb-2">Testimonials</h4>
          <p className="text-gray-600">
            Great-quality laptop at a fraction of the office flagship. Recommend.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h4>
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-2 w-full rounded mb-2"
          />
          <button className="bg-blue-600 text-white w-full py-2 rounded">
            Subscribe
          </button>
        </div>
      </div>*/}
      </div> 
  );
}
export default RefurbishedLaptopShop;
