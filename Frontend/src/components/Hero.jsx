import { useEffect, useState } from "react";

function Hero() {
  return (
    <div className="hero w-full flex flex-col md:flex-row border-2 p-4 md:p-10 shadow-lg mt-3 justify-between items-center rounded-2xl gap-6 bg-white">
      
      {/* Hero Text Content */}
      <div className="hero-content text-center md:text-left w-full md:w-1/2 flex flex-col justify-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Top Quality Refurbished Laptops
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          at Unbeatable Prices
        </h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Shop Now
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition">
            View Deals
          </button>
        </div>
      </div>

      {/* Hero Image / Slider */}
      <div className="hero-image w-full md:w-1/2">
        <div className="h-64 md:h-72 bg-gray-100 flex items-center justify-center overflow-hidden rounded ">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}

// Image Slider
function ImageSlider() {
  const images = [
    "https://i.redd.it/msl53vqmf4xb1.jpg",
    "https://cdn.mos.cms.futurecdn.net/Gw3Se82bvppoJsHc4rCVsQ-1200-80.jpg.webp",
    "https://sm.mashable.com/mashable_in/photo/default/images-1_9uxj.jpg"
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
      className="object-cover w-full h-full transition-opacity  rounded"
    />
  );
}

export default Hero;
