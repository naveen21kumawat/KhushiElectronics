import { useEffect, useState } from 'react';


function FeaturedProduct() {
  const defaultLaptops = [
    {
      name: "HP EliteBook 840",
      price: "$450",
      specs: "Processor / 4.4G SB",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dell Latitude 5400",
      price: "$400",
      specs: "Processor / 4GB",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Lenovo ThinkPad",
      price: "$420",
      specs: "Processor / 4.SSD",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Apple MacBook Air",
      price: "$600",
      specs: "Processor / 15SD",
      image:'https://cdn.mos.cms.futurecdn.net/Gw3Se82bvppoJsHc4rCVsQ-1200-80.jpg.webp'
    },
  ];
  const [laptops, setLaptops] = useState(defaultLaptops);

  useEffect(() => {
    // Simulate fetching data from an API
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched laptops:', data);
        // Assuming the API returns an array of laptops
        setLaptops(data);
      })
      .catch(error => {
        console.error('Error fetching laptops:', error);
        // Fallback to static data in case of error
        setLaptops(defaultLaptops);
      });
  }, []);


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
          {laptops.map((laptop, idx) => (
            <div key={laptop.name + idx} className="border p-4 rounded shadow overflow-hidden">
              <div className="w-full h-auto bg-gray-100 mb-4 flex items-center justify-center">
                <span className="text-gray-400 ">
                  <img src={laptop.image} alt={laptop.name} />
                </span>
              </div>
              <h4 className="font-semibold">{laptop.name}</h4>
              <p className="text-blue-600 font-bold">Price: {laptop.price}</p>
              <p className="text-sm text-gray-600">Processor: {laptop.processor}</p>
              <button
                className="mt-2 bg-blue-600 text-white w-full py-1 rounded"
                onClick={() => window.location.href = `/product/${encodeURIComponent(laptop._id)}`}
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

export default FeaturedProduct