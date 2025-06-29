import React from 'react'
const laptops = [
    {
    name: "HP EliteBook 840",
    price: "$450",
    specs: "Processor / 4.4G SB",
  },
  {
    name: "Dell Latitude 5400",
    price: "$400",
    specs: "Processor / 4GB",
  },
  {
    name: "Lenovo ThinkPad",
    price: "$420",
    specs: "Processor / 4.SSD",
  },
  {
    name: "Apple MacBook Air",
    price: "$600",
    specs: "Processor / 15SD",
  },

];
function FeaturedProduct() {

  return (
<>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 mb-6">
        {['Brand', 'Price Range', 'RAM', 'Storage'].map((filter) => (
          <select key={filter} className="border p-2 rounded">
            <option>{filter === 'Brand' ? 'All' : 'Any'}</option>
          </select>
        ))}
      </div>

      <div className="px-6">
        <h3 className="text-2xl font-semibold mb-4">Featured Laptops</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {laptops.map((laptop) => (
            <div key={laptop.name} className="border p-4 rounded shadow">
              <div className="h-32 bg-gray-100 mb-4 flex items-center justify-center">
                <span className="text-gray-400">Image</span>
              </div>
              <h4 className="font-semibold">{laptop.name}</h4>
              <p className="text-blue-600 font-bold">{laptop.price}</p>
              <p className="text-sm text-gray-600">{laptop.specs}</p>
              <button className="mt-2 bg-blue-600 text-white w-full py-1 rounded">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div></>
  )
}

export default FeaturedProduct