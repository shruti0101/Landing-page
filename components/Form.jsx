import React, { useState } from "react";
import Image from "next/image";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    place: "",
    phone: "",
    description: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Sending...");

    try {
      const res = await fetch("https://formsubmit.co/ajax/shrutiguptacu@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Your request has been submitted!");
        setFormData({
          name: "",
          email: "",
          projectType: "",
          place: "",
          phone: "",
          description: "",
        });
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send. Please try later.");
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl w-full max-w-xl mx-auto">
      <h3 className="text-lg sm:text-xl md:text-2xl text-center font-bold text-gray-900 mb-2">
        Looking for Restroom Cubicles?
      </h3>
      <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
        Let our team reach out to you!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Name / Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full bg-stone-100 px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID"
            required
            className="w-full bg-stone-100 px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Dropdown / Place */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full bg-stone-100 px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          >
            <option value="">Project Type</option>
            <option>Commercial Buildings</option>
            <option>Educational Institutions</option>
            <option>Healthcare Facilities</option>
            <option>Government Projects</option>
            <option>Hospitality Sector</option>
            <option>Retail & Malls</option>
            <option>Industrial & Warehouses</option>
            <option>Transportation Hubs</option>
            <option>Recreational & Public Spaces</option>
            <option>Residential Projects</option>
            <option>Religious & Cultural Places</option>
            <option>Automobile Showrooms & Service Centers</option>
            <option>Others</option>
          </select>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            placeholder="Place"
            required
            className="w-full bg-stone-100 px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div className="flex">
          <span className="bg-stone-100 border border-gray-300 px-2 flex items-center rounded-l-lg">
            <Image src="/flag.jpg" alt="India Flag" width={23} height={18} />
          </span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="081234 56789"
            required
            className="w-full px-3 py-2 text-sm sm:text-base rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Project Description"
          rows="3"
          className="w-full bg-stone-100 px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base"
        >
          Request a Quote
        </button>

        {status && (
          <p className="text-center text-sm mt-2">{status}</p>
        )}
      </form>
    </div>
  );
};

export default Form;
