"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function PopupForm({ isOpen, onClose }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    place: "",
    phone: "",
    description: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Close modal on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

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

    // Validate phone number
    if (formData.phone.length !== 10) {
      setStatus("⚠️ Please enter a valid 10-digit phone number.");
      return;
    }

    if (!formData.projectType) {
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
        phone: `+91${formData.phone}`,

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

        // Redirect to Thank You page
        setTimeout(() => {
          onClose();
          router.push("/thankyou");
        }, 1000);
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Popup form submission error:", error);

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          disabled={isSubmitting}
          className="absolute right-4 top-4 text-gray-600 hover:text-gray-900 text-lg disabled:opacity-50"
        >
          ✖
        </button>

        {/* Heading */}
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-2 pr-6">
          Request a Quote
        </h3>

        <p className="text-center text-sm text-gray-600 mb-4">
          Fill the form and our team will contact you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md bg-stone-100 outline-none focus:ring-2 focus:ring-[#1279AF]"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md bg-stone-100 outline-none focus:ring-2 focus:ring-[#1279AF]"
            />
          </div>

          {/* Project Type + Place */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-3 py-2 border rounded-md bg-stone-100 appearance-none outline-none focus:ring-2 focus:ring-[#1279AF]"
            >
              <option value="">Project Type</option>
              <option value="Commercial Buildings">
                Commercial Buildings
              </option>
              <option value="Educational Institutions">
                Educational Institutions
              </option>
              <option value="Healthcare Facilities">
                Healthcare Facilities
              </option>
              <option value="Government Projects">
                Government Projects
              </option>
              <option value="Hospitality Sector">
                Hospitality Sector
              </option>
              <option value="Retail & Malls">Retail & Malls</option>
              <option value="Industrial & Warehouses">
                Industrial & Warehouses
              </option>
              <option value="Transportation Hubs">
                Transportation Hubs
              </option>
              <option value="Recreational & Public Spaces">
                Recreational & Public Spaces
              </option>
              <option value="Residential Projects">
                Residential Projects
              </option>
              <option value="Religious & Cultural Places">
                Religious & Cultural Places
              </option>
              <option value="Automobile Showrooms & Service Centers">
                Automobile Showrooms & Service Centers
              </option>
              <option value="Others">Others</option>
            </select>

            <input
              name="place"
              type="text"
              value={formData.place}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="Place"
              className="w-full px-3 py-2 border rounded-md bg-stone-100 outline-none focus:ring-2 focus:ring-[#1279AF]"
            />
          </div>

          {/* Phone */}
          <div className="flex">
            <div className="flex items-center px-3 py-2 border border-r-0 rounded-l-md bg-stone-100 text-gray-700">
              🇮🇳 +91
            </div>

            <input
              name="phone"
              type="tel"
              value={formData.phone}
              maxLength={10}
              inputMode="numeric"
              pattern="[0-9]{10}"
              onChange={handleChange}
              placeholder="Phone number"
              required
              disabled={isSubmitting}
              className="flex-1 px-3 py-2 border rounded-r-md bg-stone-100 outline-none focus:ring-2 focus:ring-[#1279AF]"
            />
          </div>

          {/* Description */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="Project Description"
            rows={4}
            className="w-full px-3 py-2 border rounded-md bg-stone-100 outline-none focus:ring-2 focus:ring-[#1279AF] resize-none"
          />

          {/* Submit + Status */}
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-[#1279AF] text-white px-5 py-2 rounded-md hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </button>

            {status && (
              <p
                className={`text-sm ${
                  status.startsWith("✅")
                    ? "text-green-600"
                    : status.startsWith("⏳")
                    ? "text-gray-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}