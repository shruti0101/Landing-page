"use client";

import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

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
  const [captchaValue, setCaptchaValue] = useState(null);
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
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // CAPTCHA validation
    // if (!captchaValue) {
    //   setStatus("⚠️ Please verify the CAPTCHA before submitting.");
    //   return;
    // }

    // Phone validation
    if (formData.phone.length !== 10) {
      setStatus("⚠️ Please enter a valid 10-digit phone number.");
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
        phone: formData.phone,

        // Project Type → Product
        product: formData.projectType,

        place: formData.place || "N/A",

        // Description → Message
        message: formData.description || "",
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
          projectType: "",
          place: "",
          phone: "",
          description: "",
        });

        // Reset CAPTCHA
        // setCaptchaValue(null);

        // Call phone number after successful submission
        const phoneNumber = "+919667233007";

        setTimeout(() => {
          window.location.href = `tel:${phoneNumber}`;
        }, 500);
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);

      if (error.response) {
        console.error("API Error:", error.response.data);

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
    <div className="block md:hidden backdrop-blur-xs mt-4 p-4 sm:p-5 rounded-2xl shadow-xl w-full max-w-xl mx-auto">
      <h3 className="text-lg sm:text-xl md:text-2xl text-center font-bold text-black md:text-white mb-2">
        Looking for Restroom Cubicles?
      </h3>

      <p className="text-black md:text-white mb-4 text-center text-sm sm:text-base">
        Let our team reach out to you!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Name / Email / Project Type / Place */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full border rounded-lg p-2 bg-[#F5F5F4] outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full border rounded-lg p-2 bg-[#F5F5F4] outline-none"
          />

          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full border rounded-lg p-2 bg-[#F5F5F4] outline-none"
          >
            <option value="">Select Project Type</option>
            <option value="Commercial">Commercial</option>
            <option value="Residential">Residential</option>
            <option value="Industrial">Industrial</option>
            <option value="Educational">Educational</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            name="place"
            placeholder="Place"
            value={formData.place}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full border rounded-lg p-2 bg-[#F5F5F4] outline-none"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center border rounded-lg overflow-hidden">
          <div className="flex items-center px-3 bg-gray-100">
            <img
              src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975025/flag_z7xfex.jpg"
              alt="India flag"
              className="w-6 h-4 object-cover"
            />

            <span className="ml-2 text-gray-600">+91</span>
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="8912558738"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}
            inputMode="numeric"
            required
            disabled={isSubmitting}
            className="flex-1 p-3 outline-none"
          />
        </div>

        {/* Project Description */}
        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          disabled={isSubmitting}
          rows={4}
          className="w-full border rounded-lg p-3 bg-[#F5F5F4] outline-none resize-none"
        />

        {/* CAPTCHA */}
        {/* <div className="flex justify-start">
          <ReCAPTCHA
            sitekey="6Le5Ua0rAAAAAKOHq-C5mx8Syw3ri8Y9WMAKd1nb"
            onChange={handleCaptcha}
          />
        </div> */}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full text-white py-3 rounded-lg font-semibold transition text-sm sm:text-base ${isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
        >
          {isSubmitting ? "Submitting..." : "Request a Quote"}
        </button>

        {/* Status */}
        {status && (
          <p className="text-center text-sm mt-2 font-medium">
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;