import React from 'react';

export default function ProductPage() {
  return (
    <div className="font-sans border-4 bg-white text-gray-900 gap-10 p-4 md:p-10 max-w-5xl mx-auto">
     

      {/* Product Title */}
      <h2 className="text-4xl font-bold text-center mt-8 mb-6">HP EliteBook 840</h2>

      {/* Product Section */}
      <div className="flex flex-col gap-20 md:flex-row items-center gap-8">
        <img
          src="https://m.media-amazon.com/images/I/71vsGFjZ9rL._AC_UF894,1000_QL80_.jpg"
          alt="HP EliteBook 840"
          className="w-full md:w-1/2 rounded-xl border"
        />

        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-4">Specifications</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            <li>15.6” Full HD</li>
            <li>Intel Core i5-8365U</li>
            <li>16GB DDR4</li>
            <li>256GB SSD</li>
          </ul>
          <p className="text-2xl font-bold mt-4">$450</p>
          <button className="mt-3 bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800">
            Purchase
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10 space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">Product Description</h3>
          <p className="mt-2 text-gray-700">
            HP EliteBook 840 is a powerful and durable laptop designed for business professionals.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Product Description</h3>
          <p className="mt-2 text-gray-700">
            The HP EliteBook 840 as a powerful and durable laptop designed for business professionals.
          </p>
        </div>
      </div>
    </div>
  );
}
