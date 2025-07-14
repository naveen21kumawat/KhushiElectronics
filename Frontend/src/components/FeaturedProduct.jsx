

import { useEffect, useState } from 'react';
const URL = import.meta.env.VITE_API_URL;

function FeaturedProduct() {
  
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    fetch(`${URL}/products`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched laptops:', data);
        setLaptops(data);
      })
      .catch(error => {
        console.error('Error fetching laptops:', error);
        setLaptops(defaultLaptops);
      });
  }, []);

  return (
    <>
      {/* Products */}
      <div id="featured-products" className="hero w-full flex flex-col border-2 border-blue-100 p-6 md:p-12 mt-3 justify-between items-center gap-8 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 backdrop-blur-sm transition-all duration-700 hover:shadow-3xl hover:border-blue-200/70 relative overflow-hidden">
        <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Laptops
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {laptops
            .slice() // copy array
            .sort((a, b) => {
              // Sort by createdAt descending if available
              if (a.createdAt && b.createdAt) {
                return new Date(b.createdAt) - new Date(a.createdAt);
              }
              return 0;
            })
            .slice(0, 12)
            .map((laptop, idx) => (
              <div
                key={laptop.name + idx}
                className="border-2 border-blue-100 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform hover:scale-105 hover:border-blue-300 animate-fadeIn backdrop-blur-sm"
              >
                <div className="w-full h-48 bg-gray-100 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={laptop.image}
                    alt={laptop.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h4 className="font-bold text-sm sm:text-base mb-2 text-gray-800 line-clamp-2">{laptop.name}</h4>
                <p className="text-blue-600 font-bold text-lg mb-2">₹{laptop.price}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {laptop.specs || laptop.processor || "Specs not available"}
                </p>
                <button
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  onClick={() =>
                    window.location.href = `/product/${encodeURIComponent(laptop._id || idx)}`
                  }
                >
                  View Details
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedProduct;

