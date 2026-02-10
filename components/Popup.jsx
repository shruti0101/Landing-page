"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PopupForm({ isOpen, onClose }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    place: "",
    phone: "",
    description: "",
    _cc: "inquiry.promozione@gmail.com",
    _nosponsor: "true",
    _subject: "🚀 New Enquiry from Website",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // lock body scroll while modal is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // close on Esc
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("⏳ Sending...");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/rykarestroomcubicle@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setStatus("✅ Your request has been submitted!");
        setFormData({
          name: "",
          email: "",
          projectType: "",
          place: "",
          phone: "",
          description: "",
          _cc: "",
          _nosponsor: "true",
          _subject: "🚀 New Enquiry from Website",
        });

        // ✅ redirect to Thank You page after 1.5s
        setTimeout(() => {
          router.push("/thankyou"); 
        }, 1500);
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>

        <h3 className="text-xl sm:text-2xl font-bold text-center mb-2">
          Request a Quote
        </h3>
        <p className="text-center text-sm text-gray-600 mb-4">
          Fill the form and our team will contact you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md bg-stone-100"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md bg-stone-100"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md bg-stone-100 appearance-none"
              required
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
              name="place"
              value={formData.place}
              onChange={handleChange}
              placeholder="Place"
              className="w-full px-3 py-2 border rounded-md bg-stone-100"
              required
            />
          </div>

          <div className="flex gap-3">
            <span className="flex items-center px-3 py-2 border rounded-l-md bg-stone-100">
              🇮🇳
            </span>
            <input
              name="phone"
              value={formData.phone}
              maxLength={10}
              onChange={handleChange}
              placeholder="Phone number"
              className="flex-1 px-3 py-2 border rounded-r-md bg-stone-100"
              required
            />
          </div>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Project Description"
            rows={4}
            className="w-full px-3 py-2 border rounded-md bg-stone-100"
          />

          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-[#1279AF] text-white px-5 py-2 rounded-md hover:opacity-95 disabled:opacity-60 transition"
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </button>

            {status && (
              <p
                className={`text-sm ${
                  status.startsWith("✅") ? "text-green-600" : "text-red-600"
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
