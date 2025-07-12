import { useEffect, useState } from "react";
import { ShoppingCart, Eye, Star, Award, Users, Zap, Shield, Truck, Clock, CheckCircle } from "lucide-react";

function Hero() {
  return (
    <div className="hero w-full flex flex-col md:flex-row border-2 border-blue-100/50 p-6 md:p-12 shadow-2xl mt-3 justify-between items-center rounded-3xl gap-8 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 backdrop-blur-sm transition-all duration-700 hover:shadow-3xl hover:border-blue-200/70 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-6 left-1/3 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Text Content */}
      <div className="hero-content text-center md:text-left w-full md:w-1/2 flex flex-col justify-center gap-6 animate-fade-in-up relative z-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight tracking-tight">
            Top Quality Refurbished Laptops
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-gray-700 via-blue-700 to-purple-700 bg-clip-text text-transparent">
            at Unbeatable Prices
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Discover premium refurbished laptops with guaranteed quality, extended warranties, and unmatched performance for work, gaming, and creativity.
          </p>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/50">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="font-medium">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/50">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="font-medium">10K+ Customers</span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/50">
            <Award className="w-4 h-4 text-purple-500" />
            <span className="font-medium">Certified Quality</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 text-sm mb-6">
          <div className="flex items-center gap-2 text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>1 Year Warranty</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Shield className="w-4 h-4 text-blue-500" />
            <span>Quality Tested</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Truck className="w-4 h-4 text-purple-500" />
            <span>Free Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Clock className="w-4 h-4 text-orange-500" />
            <span>24/7 Support</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 font-semibold text-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Shop Now
            <Zap className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
          </button>
          <button className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 font-semibold text-lg overflow-hidden bg-white/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            View Deals
          </button>
        </div>
      </div>

      {/* Hero Image / Slider */}
      <div className="hero-image w-full md:w-1/2 animate-fade-in-right relative z-10">
        <div className="h-80 md:h-96 lg:h-[28rem] bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm relative group">
          {/* Decorative border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 -z-10"></div>
          
          <ImageSlider />
          
          {/* Enhanced floating elements */}
          <div className="absolute top-6 right-6 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
            <span className="text-sm font-semibold flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Premium Quality
            </span>
          </div>
          <div className="absolute bottom-6 left-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
            <span className="text-sm font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Best Deals
            </span>
          </div>
          <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
            <span className="text-sm font-semibold flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Warranty
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Image Slider (keeping your exact logic)
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
    <div className="relative w-full h-full group">
      <img
        src={images[current]}
        alt={`Laptop ${current + 1}`}
        className="object-cover w-full h-full transition-all duration-1000 ease-in-out rounded-2xl transform group-hover:scale-110"
        style={{
          filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
        }}
      />
      
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl"></div>
      
      {/* Elegant slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-500 rounded-full ${
              index === current 
                ? 'bg-white w-8 h-3 shadow-lg shadow-white/50' 
                : 'bg-white/60 w-3 h-3 hover:bg-white/80 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Progress indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 rounded-t-2xl overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100 ease-linear"
          style={{
            width: `${((current + 1) / images.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

export default Hero;