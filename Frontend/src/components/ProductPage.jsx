// import React from 'react';

// export default function ProductPage() {
//   return (
//     <div className="font-sans border-4 bg-white text-gray-900 gap-10 p-4 md:p-10 max-w-5xl mx-auto">
     

//       {/* Product Title */}
//       <h2 className="text-4xl font-bold text-center mt-8 mb-6">HP EliteBook 840</h2>

//       {/* Product Section */}
//       <div className="flex flex-col gap-20 md:flex-row items-center gap-8">
//         <img
//           src="https://m.media-amazon.com/images/I/71vsGFjZ9rL._AC_UF894,1000_QL80_.jpg"
//           alt="HP EliteBook 840"
//           className="w-full md:w-1/2 rounded-xl border"
//         />

//         <div className="text-left">
//           <h3 className="text-2xl font-semibold mb-4">Specifications</h3>
//           <ul className="list-disc pl-5 space-y-1 text-gray-800">
//             <li>15.6” Full HD</li>
//             <li>Intel Core i5-8365U</li>
//             <li>16GB DDR4</li>
//             <li>256GB SSD</li>
//           </ul>
//           <p className="text-2xl font-bold mt-4">$450</p>
//           <button className="mt-3 bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800">
//             Purchase
//           </button>
//         </div>
//       </div>

//       {/* Description */}
//       <div className="mt-10 space-y-6">
//         <div>
//           <h3 className="text-2xl font-semibold">Product Description</h3>
//           <p className="mt-2 text-gray-700">
//             HP EliteBook 840 is a powerful and durable laptop designed for business professionals.
//           </p>
//         </div>
//         <div>
//           <h3 className="text-2xl font-semibold">Product Description</h3>
//           <p className="mt-2 text-gray-700">
//             The HP EliteBook 840 as a powerful and durable laptop designed for business professionals.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

 function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-gray-900 font-sans">
     

      {/* Product Info */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://m.media-amazon.com/images/I/71vsGFjZ9rL._AC_UF894,1000_QL80_.jpg"
          alt="HP EliteBook 840"
          className="w-full rounded-xl shadow-md"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">HP EliteBook 840</h2>
          <ul className="text-lg space-y-2">
            <li><strong>Display:</strong> 15.6" Full HD</li>
            <li><strong>Processor:</strong> Intel Core i5-8365U</li>
            <li><strong>RAM:</strong> 16GB DDR4</li>
            <li><strong>Storage:</strong> 256GB SSD</li>
            <li><strong>Condition:</strong> Refurbished & Tested</li>
            <li><strong>Warranty:</strong> 1 Year</li>
          </ul>
          <p className="text-2xl font-bold text-blue-700 mt-4">$450</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-2">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          The HP EliteBook 840 is a powerful and durable laptop tailored for business professionals.
          Equipped with a fast SSD, large RAM, and a vibrant display, it's perfect for multitasking, remote work, and productivity.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl text-blue-600 mb-2">🔍</div>
            <p>Thoroughly Tested</p>
          </div>
          <div>
            <div className="text-3xl text-blue-600 mb-2">🛡️</div>
            <p>1-Year Warranty</p>
          </div>
          <div>
            <div className="text-3xl text-blue-600 mb-2">🚚</div>
            <p>Free Shipping</p>
          </div>
          <div>
            <div className="text-3xl text-blue-600 mb-2">💬</div>
            <p>Customer Support</p>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mt-16 bg-gray-100 p-6 rounded-md text-center">
        <p className="italic text-lg">
          “Great quality laptop at a fraction of the price. Highly recommend this shop.”
        </p>
        <p className="mt-2 font-semibold">— Khushi Electronics</p>
      </div>
    </div>
  );
}
export default ProductPage;
