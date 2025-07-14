import React, { useState } from "react";

function ContactSupport() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend or email service
  };

  return (
    <div className="container mx-auto py-10 px-4 text-gray-800 max-w-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Contact Support</h1>
      <p className="mb-6">Have a question or need help? Fill out the form below or reach us directly at <a href="mailto:khushilaptops15@gmail.com" className="text-blue-500 underline">khushilaptops15@gmail.com</a> or call +91 98765 43210.</p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send Message
        </button>
        {submitted && (
          <p className="mt-4 text-green-600">Thank you for contacting us! We will get back to you soon.</p>
        )}
      </form>
      <div className="mt-8 text-sm text-gray-600">
        <p><span className="font-semibold">Email:</span> khushilaptops15@gmail.com</p>
        <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
        <p><span className="font-semibold">Address:</span> Jaipur, Rajasthan, India</p>
      </div>
    </div>
  );
}

export default ContactSupport; 