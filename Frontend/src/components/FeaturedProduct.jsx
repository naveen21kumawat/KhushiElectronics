

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
      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 sm:px-6 mb-6 mt-3 border-2 pb-4 py-4 rounded-lg shadow-lg bg-gray-50">
        {['Brand', 'Price Range', 'RAM', 'Storage'].map((filter) => (
          <select key={filter} className="border p-2 rounded w-full text-sm">
            <option>{filter === 'Brand' ? 'All Brands' : `Any ${filter}`}</option>
          </select>
        ))}
      </div>

      {/* Products */}
      <div className="px-4 sm:px-6">
        <h3 className="text-2xl font-semibold mb-6">Featured Laptops</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {laptops.map((laptop, idx) => (
            <div
              key={laptop.name + idx}
              className="border p-4 rounded-lg shadow hover:shadow-xl transition duration-500 bg-white transform hover:scale-105 animate-fadeIn"
            >
              <div className="w-full h-40 bg-gray-100 mb-4 overflow-hidden rounded-md">
                <img
                  src={laptop.image}
                  alt={laptop.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h4 className="font-semibold text-sm sm:text-base mb-1">{laptop.name}</h4>
              <p className="text-blue-600 font-bold text-sm">Price: {laptop.price}</p>
              <p className="text-sm text-gray-600">
                {laptop.specs || laptop.processor || "Specs not available"}
              </p>
              <button
                className="mt-3 bg-blue-600 hover:bg-blue-700 text-white w-full py-2 text-sm rounded transition duration-300"
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

