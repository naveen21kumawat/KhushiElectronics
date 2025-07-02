import React from "react";

const laptops = [
  {
    name: "HP Spectre x360",
    image: "https://via.placeholder.com/300x200?text=HP+Spectre",
  },
  {
    name: "MacBook Pro",
    image: "https://via.placeholder.com/300x200?text=MacBook+Pro",
  },
  {
    name: "Dell XPS 13",
    image: "https://via.placeholder.com/300x200?text=Dell+XPS+13",
  },
  {
    name: "Lenovo Yoga",
    image: "https://via.placeholder.com/300x200?text=Lenovo+Yoga",
  },
];

function AnimatedLaptops() {
  return (
    <div className="px-4 sm:px-8 py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Explore Our Laptops
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {laptops.map((laptop, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg shadow-lg p-4 transition transform duration-500 hover:scale-105 hover:-rotate-1 cursor-pointer"
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={laptop.image}
                alt={laptop.name}
                className="w-full h-40 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <h3 className="mt-4 text-center text-gray-800 font-semibold text-sm sm:text-base">
              {laptop.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedLaptops;
