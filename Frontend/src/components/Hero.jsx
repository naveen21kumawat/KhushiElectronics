
import { useEffect, useState } from "react";

function Hero() {
  return (
    <>
      <div className="hero w-full flex-wrap  flex border-2 p-10 shadow-t justify-around rounded-lgx px-4">
        <div className="hero-content p-10 text-center border-2 item-center w-1/2  justify-center flex flex-col gap-4">
          <h1 className="text-4xl font-bold mb-2">
            Top Quality Refurbished Laptops
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            at Unbeatable Prices
          </h2>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded">
              Shop Now
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded">
              View Deals
            </button>
          </div>
        </div>


        <div className="hero-image w-1/2">
          <div className="h-64 bg-gray-100 mb-4 flex items-center justify-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
        </div>
      </div>
    </>
  );
}

// Simple image slider component
function ImageSlider() {
  const images = [
    "https://i.redd.it/msl53vqmf4xb1.jpg",
    "https://cdn.mos.cms.futurecdn.net/Gw3Se82bvppoJsHc4rCVsQ-1200-80.jpg.webp",
    "https://via.placeholder.com/300x200?text=Laptop+3",
    "https://via.placeholder.com/300x200?text=Laptop+4"
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={images[current]}
      alt={`Laptop ${current + 1}`}
      className="object-fill h-64 w-full transition-all duration-1000"
      style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
  );
}

export default Hero;
