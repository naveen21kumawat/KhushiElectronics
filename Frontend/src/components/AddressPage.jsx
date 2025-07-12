import {
    CheckCircle,
    Clock,
    ExternalLink,
    Mail,
    MapPin,
    Navigation,
    Phone,
    Shield,
    Star,
    Truck
} from 'lucide-react';
import React, { useState } from 'react';

const AddressPage = () => {
  const [activeTab, setActiveTab] = useState('location');

  const locationInfo = {
    address: "G-44, 45 Ganpati Plaza, A Block",
    landmark: "Nearby Airtel Store",
    fullAddress: "M.I. Road Ganpati Plaza Shop No G-44,45, Jaipur, Rajasthan 302001",
    phone: "+91 98765 43210",
    email: "info@khushielectronics.com",
    hours: "Monday - Saturday: 10:00 AM - 8:00 PM",
    coordinates: {
      lat: 26.9208776,
      lng: 75.8001057
    }
  };

  const features = [
    { icon: CheckCircle, title: "Expert Consultation", description: "Get professional advice on choosing the right laptop" },
    { icon: Shield, title: "Quality Assurance", description: "All products thoroughly tested and certified" },
    { icon: Truck, title: "Free Delivery", description: "Fast and secure delivery across Jaipur" },
    { icon: Star, title: "Customer Support", description: "Dedicated support team available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Visit Our Store
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our premium refurbished laptops in person. Our expert team is ready to help you find the perfect device.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('location')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'location'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Location & Map
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'contact'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Contact Info
            </button>
            <button
              onClick={() => setActiveTab('hours')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'hours'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Business Hours
            </button>
          </div>
        </div>

        {/* Location Tab */}
        {activeTab === 'location' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Location</h2>
                <p className="text-gray-600">Find us in the heart of Jaipur</p>
              </div>
              
              <div className="relative">
                <img
                  src="images/map.png"
                  alt="Store Location Map"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Map Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Khushi Electronics</h3>
                      <p className="text-sm text-gray-600">{locationInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <a
                  href={`https://www.google.com/maps/dir//${encodeURIComponent(locationInfo.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Address Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Store Address</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">{locationInfo.address}</p>
                      <p className="text-gray-600">{locationInfo.landmark}</p>
                      <p className="text-gray-600">{locationInfo.fullAddress}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href={`tel:${locationInfo.phone}`} className="text-blue-600 hover:underline">
                      {locationInfo.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href={`mailto:${locationInfo.email}`} className="text-blue-600 hover:underline">
                      {locationInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Visit Our Store?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                    <a href={`tel:${locationInfo.phone}`} className="text-blue-600 hover:underline">
                      {locationInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                    <a href={`mailto:${locationInfo.email}`} className="text-blue-600 hover:underline">
                      {locationInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Visit Us</h3>
                    <p className="text-gray-600">{locationInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Hours Tab */}
        {activeTab === 'hours' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Business Hours</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Store Hours</h3>
                  <div className="space-y-3">
                    {[
                      { day: 'Monday', hours: '10:00 AM - 8:00 PM' },
                      { day: 'Tuesday', hours: '10:00 AM - 8:00 PM' },
                      { day: 'Wednesday', hours: '10:00 AM - 8:00 PM' },
                      { day: 'Thursday', hours: '10:00 AM - 8:00 PM' },
                      { day: 'Friday', hours: '10:00 AM - 8:00 PM' },
                      { day: 'Saturday', hours: '10:00 AM - 8:00 PM' },
                      { day: 'Sunday', hours: 'Closed' }
                    ].map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-800">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Special Notes</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Best Time to Visit</h4>
                        <p className="text-gray-600 text-sm">Weekdays 2-6 PM for personalized consultation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Appointments</h4>
                        <p className="text-gray-600 text-sm">Available for technical consultations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                      <Truck className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Delivery</h4>
                        <p className="text-gray-600 text-sm">Same-day delivery available in Jaipur</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressPage;
