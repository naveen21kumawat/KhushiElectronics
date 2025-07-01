import { faInfo, faPhone ,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800">
      {/* Title */}

      {/* Intro Section */}
      <p className="text-lg text-center mt-8 mb-8">
        Welcome to <strong>Refurbished Laptop Shop</strong>, your trusted destination for premium-quality, affordable refurbished laptops. We provide tested, certified, and warranty-backed laptops from top brands like HP, Dell, Lenovo, and Apple.
      </p>

      {/* Mission Section */}
      <div className="bg-blue-50 p-6 rounded-xl shadow mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
          Our mission is to make high-performance laptops accessible to everyone by offering cost-effective, eco-friendly alternatives. We ensure each device is thoroughly tested, cleaned, and certified for reliability.
        </p>
      </div>

      {/* Team or Values */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Why Trust Us?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Certified refurbished laptops with 1-year warranty</li>
          <li>Free and fast delivery across India</li>
          <li>Friendly customer support</li>
          <li>Thousands of happy customers</li>
        </ul>
      </div>

      {/* Contact & Social Media */}
      <div className="grid md:grid-cols-2 gap-8 bg-white border-t pt-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faInfo} /> info@refurbishedlaptopshop.com
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FontAwesomeIcon icon={faPhone} /> +91-9876543210
          </p>
          <p className="mt-2">Jaipur, Rajasthan, India</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-2xl text-blue-600">
            {/* <a href="#"><FontAwesomeIcon icon={faFacebook } /></a> */}
            {/* <a href="#"><FontAwesomeIcon icon={FaInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={FaTwitter} /></a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
