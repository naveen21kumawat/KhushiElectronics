import React from "react";

function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-10 px-4 text-gray-800 max-w-3xl">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Privacy Policy</h1>
      <p className="mb-4">We value your privacy. This policy explains how we collect, use, and protect your information when you use our services.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-400">1. Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal information (name, email, contact number) when you contact us or make a purchase.</li>
        <li>Usage data (pages visited, time spent, etc.) for analytics and improvement.</li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-400">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To process orders and provide customer support.</li>
        <li>To improve our website and services.</li>
        <li>To send updates or promotional offers (you can opt out anytime).</li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-400">3. Cookies</h2>
      <p className="mb-4">We use cookies to enhance your browsing experience. You can disable cookies in your browser settings, but some features may not work properly.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-400">4. Your Rights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Access, update, or delete your personal information by contacting us.</li>
        <li>Opt out of marketing communications at any time.</li>
      </ul>
      <p className="mt-6 text-sm text-gray-500">For questions about this policy, contact us at <a href="mailto:khushilaptops15@gmail.com" className="text-blue-500 underline">khushilaptops15@gmail.com</a>.</p>
    </div>
  );
}

export default PrivacyPolicy; 