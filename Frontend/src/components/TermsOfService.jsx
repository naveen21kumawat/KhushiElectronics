import React from "react";

function TermsOfService() {
  return (
    <div className="container mx-auto py-10 px-4 text-gray-800 max-w-3xl">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Terms of Service</h1>
      <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-400">1. Acceptance of Terms</h2>
      <p className="mb-4">By using our website and services, you agree to these terms. If you do not agree, please do not use our site.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-400">2. User Responsibilities</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Provide accurate and up-to-date information.</li>
        <li>Do not misuse our services or attempt unauthorized access.</li>
        <li>Respect intellectual property and copyright laws.</li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-400">3. Limitations</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>We are not liable for indirect or consequential damages.</li>
        <li>Product availability and pricing may change without notice.</li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-400">4. Changes to Terms</h2>
      <p className="mb-4">We may update these terms at any time. Continued use of the site means you accept the new terms.</p>
      <p className="mt-6 text-sm text-gray-500">For questions, contact us at <a href="mailto:khushilaptops15@gmail.com" className="text-blue-500 underline">khushilaptops15@gmail.com</a>.</p>
    </div>
  );
}

export default TermsOfService; 