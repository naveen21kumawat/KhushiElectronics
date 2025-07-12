import React from "react";

function Whychooseus() {
  const features = [
    {
      title: "Thoroughly Tested",
      description: "Every laptop undergoes rigorous testing",
      icon: "🔍",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "3-Months Warranty",
      description: "Comprehensive warranty coverage",
      icon: "🛡️",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Free Shipping",
      description: "Free delivery across India",
      icon: "🚚",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Customer Support",
      description: "24/7 dedicated support team",
      icon: "💬",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div id="why-choose-us" className="hero w-full flex flex-col border-2 border-blue-100 p-6 md:p-12 mt-3 justify-between items-center gap-8 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 backdrop-blur-sm transition-all duration-700 hover:shadow-3xl hover:border-blue-200/70 relative overflow-hidden">
      
      {/* Why Choose Us Section */}
      <div className="w-full text-center max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Why Choose Us?
        </h3>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide the best refurbished laptops with quality assurance and excellent customer service
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="group relative bg-white/80 backdrop-blur-sm border-2 border-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:border-blue-300"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.color} text-white text-2xl flex items-center justify-center rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="w-full max-w-4xl mx-auto mt-16">
        <div className="bg-white/80 backdrop-blur-sm border-2 border-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <div className="text-center">
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <blockquote className="text-xl sm:text-2xl text-gray-800 font-medium italic mb-6 leading-relaxed">
              "Great quality laptop at a fraction of the price. The customer service was exceptional and the warranty gives me complete peace of mind. Highly recommend Khushi Laptops!"
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-800">KhushiLaptops</p>
                <p className="text-sm text-gray-600">Verified Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="w-full max-w-4xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-sm border border-blue-200 p-4 rounded-xl text-center hover:bg-white/80 transition-all duration-300">
            <div className="text-2xl mb-2">💰</div>
            <h5 className="font-semibold text-gray-800 mb-1">Best Prices</h5>
            <p className="text-sm text-gray-600">Competitive pricing guaranteed</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-blue-200 p-4 rounded-xl text-center hover:bg-white/80 transition-all duration-300">
            <div className="text-2xl mb-2">⚡</div>
            <h5 className="font-semibold text-gray-800 mb-1">Fast Delivery</h5>
            <p className="text-sm text-gray-600">Quick and secure shipping</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-blue-200 p-4 rounded-xl text-center hover:bg-white/80 transition-all duration-300">
            <div className="text-2xl mb-2">🔄</div>
            <h5 className="font-semibold text-gray-800 mb-1">Easy Returns</h5>
            <p className="text-sm text-gray-600">30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychooseus;
