import {
    Award,
    CheckCircle,
    Clock,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Shield,
    Star,
    Truck,
    Users
} from 'lucide-react';
import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const companyInfo = {
    name: "Khushi Electronics",
    tagline: "Your Trusted Partner for Premium Refurbished Laptops",
    phone: "+91 98765 43210",
    email: "khushilaptops15@gmail.com",
    address: "G-44, 45 Ganpati Plaza, M.I. Road, Jaipur, Rajasthan 302001",
    hours: "Monday - Saturday: 10:00 AM - 8:00 PM"
  };

  const stats = [
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "1000+", label: "Laptops Sold", icon: Award },
    { number: "4.0", label: "Customer Rating", icon: Star },
    { number: "24/7", label: "Support Available", icon: Shield }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every laptop undergoes rigorous testing and certification"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and secure delivery across Jaipur and nearby areas"
    },
    {
      icon: CheckCircle,
      title: "Warranty Backed",
      description: "Comprehensive warranty on all refurbished products"
    },
    {
      icon: Star,
      title: "Expert Support",
      description: "Dedicated team of technical experts to help you"
    }
  ];

  const team = [
    {
      name: "Naveen Kumawat",
      role: "Designing And Development",
      image: "https://naveencodes.netlify.app/naveen.png",
      bio: "Expert in desigining and development services",
      url : "https://naveencodes.netlify.app/"
    },
    {
      name: "Manish Prajapati",
      role: "Database And Product Management",
      image: "https://mypersonalpfolio.netlify.app/1707530238951.jpg",
      bio: "Dedicated to providing exceptional customer service",
      url : "https://mypersonalpfolio.netlify.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              About Khushi Electronics
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your trusted destination for premium-quality, affordable refurbished laptops. 
              We provide tested, certified, and warranty-backed laptops from top brands.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'about'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'contact'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'team'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Our Team
            </button>
          </div>
        </div>

        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="space-y-8">
            {/* Mission & Vision */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To make high-performance laptops accessible to everyone by offering cost-effective, 
                  eco-friendly alternatives. We ensure each device is thoroughly tested, cleaned, 
                  and certified for reliability while contributing to environmental sustainability.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To become the most trusted name in refurbished electronics, known for quality, 
                  reliability, and exceptional customer service. We aim to bridge the gap between 
                  affordability and performance in the laptop market.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Achievements</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Choose Us?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Call Us</h3>
                      <a href={`tel:${companyInfo.phone}`} className="text-blue-600 hover:underline">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email Us</h3>
                      <a href={`mailto:${companyInfo.email}`} className="text-blue-600 hover:underline">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Visit Us</h3>
                      <p className="text-gray-600">{companyInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Business Hours</h3>
                      <p className="text-gray-600">{companyInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <WhatsAppIcon className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Product Information</option>
                    <option>Technical Support</option>
                    <option>Warranty Claim</option>
                    <option>Other</option>
                  </select>
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
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Development Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                 Connect For Help
              </p>
            </div>

            {/*  */}

            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                  <a className='text-blue-400 font-bold' href={member.url}>Click Here To  Contact</a>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Join Us</h3>
              <p className="mb-6">
                We're always looking for passionate individuals who share our vision of 
                making quality technology accessible to everyone.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                View Our Profile From Footer Section
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
