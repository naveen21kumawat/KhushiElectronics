import React from "react";

function WarrantyInfo() {
  return (
    <div className="container mx-auto py-10 px-4 text-gray-800 max-w-3xl">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Warranty Information</h1>
      <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-400">1. Warranty Coverage</h2>
      <p className="mb-4">All refurbished laptops come with a standard 6-month warranty covering hardware defects and malfunctions under normal use.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-400">2. Warranty Duration</h2>
      <p className="mb-4">The warranty period starts from the date of purchase and lasts for 6 months unless otherwise specified.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-400">3. Exclusions</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Accidental damage, misuse, or unauthorized repairs.</li>
        <li>Software issues or viruses.</li>
        <li>Normal wear and tear (e.g., battery, keyboard, etc.).</li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-400">4. Claim Process</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Contact our support team with your order details and issue description.</li>
        <li>We will assess the claim and provide instructions for repair or replacement.</li>
        <li>Shipping costs may apply for returns.</li>
      </ul>
      <p className="mt-6 text-sm text-gray-500">For warranty claims, email <a href="mailto:khushilaptops15@gmail.com" className="text-blue-500 underline">khushilaptops15@gmail.com</a> or call +91 98765 43210.</p>
    </div>
  );
}

export default WarrantyInfo; 