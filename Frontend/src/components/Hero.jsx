import { ArrowRight, Award, CheckCircle, Clock, Eye, Play, Shield, Sparkles, Star, Truck, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

function Hero() {
  // Scroll helpers for smooth navigation
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse delay-1500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Premium Refurbished Laptops</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Showcasing
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Premium Laptops
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover our carefully curated collection of high-quality refurbished laptops. 
                Expertly tested, certified, and ready to inspire your next purchase decision.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/50">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">4.8/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/50">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">500+ Reviews</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/50">
                <Award className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-gray-700">Certified Quality</span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">Expertly Tested</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50">
                <Shield className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">Trusted Brands</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50">
                <Truck className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">Latest Models</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">Updated Daily</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('featured-products')}
                className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 font-semibold text-lg overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 font-semibold text-lg overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Learn More
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">1000+</div>
                <div className="text-sm text-gray-600">Laptops Showcased</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">50+</div>
                <div className="text-sm text-gray-600">Brands Available</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Slider */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative h-80 sm:h-96 lg:h-[500px] bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm overflow-hidden">
                {/* Decorative border glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 -z-10"></div>
                
                <ImageSlider />
                
                {/* Floating Badges */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-transform">
                  <span className="text-xs sm:text-sm font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Premium Quality</span>
                    <span className="sm:hidden">Quality</span>
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-transform">
                  <span className="text-xs sm:text-sm font-semibold flex items-center gap-1">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Handpicked</span>
                    <span className="sm:hidden">Best</span>
                  </span>
                </div>
                
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-transform">
                  <span className="text-xs sm:text-sm font-semibold flex items-center gap-1">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Trusted</span>
                    <span className="sm:hidden">Safe</span>
                  </span>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-4 backdrop-blur-sm">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">4.8★</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">500+</div>
                    <div className="text-xs text-gray-600">Reviews</div>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">100%</div>
                    <div className="text-xs text-gray-600">Tested</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Image Slider
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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full group">
      <img
        src={images[current]}
        alt={`Premium Laptop ${current + 1}`}
        className="object-cover w-full h-full transition-all duration-1000 ease-in-out rounded-3xl transform group-hover:scale-105"
        style={{
          filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
        }}
      />
      
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl"></div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-500 rounded-full ${
              index === current 
                ? 'bg-white w-6 h-2 shadow-lg shadow-white/50' 
                : 'bg-white/60 w-2 h-2 hover:bg-white/80 hover:scale-110'
            }`}
          />
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 rounded-t-3xl overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100 ease-linear"
          style={{
            width: `${((current + 1) / images.length) * 100}%`,
          }}
        />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
      >
        <ArrowRight className="w-5 h-5 rotate-180" />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

export default Hero;