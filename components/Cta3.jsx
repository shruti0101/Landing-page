"use client";

import React, { useState } from "react";
import axios from "axios";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country_code: "+91",
    phone: "",
    product: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");

      if (digitsOnly.length > 10) return;

      setFormData((prev) => ({
        ...prev,
        phone: digitsOnly,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setStatus("⚠️ Please enter a valid 10-digit phone number.");
      return;
    }

    if (!formData.product) {
      setStatus("⚠️ Please select a project type.");
      return;
    }

    setIsSubmitting(true);
    setStatus("⏳ Sending...");

    try {
      const data = {
        supplierToken: "6a9bb67ac077e066ff1e0d9e",
        platform: "Ryka Restroom Cubicles",
        platformEmail: "rykarestroomcubicle@gmail.com",

        name: formData.name,
        email: formData.email,
        company: "NA",

        // Include country code with phone
        phone: `${formData.country_code}${formData.phone}`,

        product: formData.product,
        place: "N/A",
        message: `Project Type: ${formData.product}`,
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status >= 200 && res.status < 300) {
        setStatus("✅ Your request has been submitted!");

        // Reset form
        setFormData({
          name: "",
          email: "",
          country_code: "+91",
          phone: "",
          product: "",
        });

        // Redirect to thank-you page
        setTimeout(() => {
          window.location.href =
            "https://rykarestroom.toiletcubiclespartition.com/thankyou";
        }, 700);
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);

      if (error.response) {
        console.error("API response:", error.response.data);

        setStatus(
          error.response.data?.message ||
            "❌ Something went wrong while submitting the form."
        );
      } else if (error.request) {
        setStatus(
          "❌ Unable to connect to the server. Please check your internet connection."
        );
      } else {
        setStatus("❌ Failed to send. Please try later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="hidden md:block relative bg-[#2986B6] py-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Upgrade Your Space with Modern Toilet, Bathroom & Restroom
          Partitions – Get a Free Quote Today!
        </h2>

        {/* Form */}
        <form
          id="contact"
          onSubmit={handleSubmit}
          className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4 items-center"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="col-span-1 md:col-span-1 border-2 border-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white bg-white/10 text-white placeholder-white"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="col-span-1 md:col-span-1 border-2 border-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white bg-white/10 text-white placeholder-white"
          />

          {/* Phone */}
          <div className="col-span-1 flex border-2 border-white rounded-md overflow-hidden">
            <select
              name="country_code"
              value={formData.country_code}
              onChange={handleChange}
              disabled={isSubmitting}
              className="px-2 bg-white text-black focus:outline-none"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              pattern="[0-9]{10}"
              inputMode="numeric"
              placeholder="9876543210"
              required
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 focus:outline-none bg-white/10 text-white placeholder-white"
            />
          </div>

          {/* Product / Project Type */}
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="col-span-1 border-2 border-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white bg-white text-black"
          >
            <option value="">Select Project Type</option>
            <option value="Commercial">Commercial</option>
            <option value="Residential">Residential</option>
            <option value="Industrial">Industrial</option>
            <option value="Educational">Educational</option>
            <option value="Other">Other</option>
          </select>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`col-span-1 text-white font-semibold py-3 rounded-md shadow-md transition ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 cursor-pointer hover:bg-red-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* Status */}
        {status && (
          <p className="mt-4 text-white font-medium text-sm">
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactSection;