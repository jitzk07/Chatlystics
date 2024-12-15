// src/components/ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Your query has been sent successfully!");
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-[#1E3A8A]  text-white flex items-center justify-center">
      <div className="max-w-4xl w-full bg-[#1D2B53] p-8 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-3xl font-bold underline decoration-blue-400 mb-4">
          Contact <span className="text-blue-400">Us</span>
        </h1>
        <p className="mb-8">Do you have any doubts or any query?</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#0F172A] text-white outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#0F172A] text-white outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Mobile Number Field */}
          <div>
            <label htmlFor="mobile" className="block text-sm mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#0F172A] text-white outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Query Field */}
          <div>
            <label htmlFor="query" className="block text-sm mb-1">
              Your Query
            </label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded-md bg-[#0F172A] text-white outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
