"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
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
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length > 10) return;
      setFormData({ ...formData, [name]: digitsOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCaptcha = (value) => {
    setCaptchaValue(value);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!captchaValue) {
    setStatus("⚠️ Please verify the CAPTCHA before submitting.");
    return;
  }

  setStatus("⏳ Sending...");

  try {
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    payload.append("_subject", "🚀 New Lead from Website");
    payload.append("_captcha", "false");
    payload.append("_template", "box");
    payload.append("_nosponsor", "true");
    payload.append("_cc", "inquiry.promozione@gmail.com");

    const res = await fetch("https://formsubmit.co/rykarestroomcubicle@gmail.com", {
      method: "POST",
      body: payload,
    });

    if (res.ok) {
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
      setCaptchaValue(null);

      
      const phoneNumber = "+919873516255";
      window.location.href = `tel:${phoneNumber}`;
    } else {
      setStatus("❌ Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    setStatus("❌ Failed to send. Please try later.");
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
    
        <div className="grid grid-cols-2 gap-4">
          <input
            type="hidden"
            name="_subject"
            value="🚀 New Lead from Website"
          />
         <input type="hidden" name="_cc" value="inquiry.promozione@gmail.com" />

          <input type="hidden" name="_nosponsor" value="true" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 bg-[#F5F5F4]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 bg-[#F5F5F4]"
          />
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 bg-[#F5F5F4]"
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
            className="w-full border rounded-lg p-2 bg-[#F5F5F4]"
          />
        </div>

 
        <div className="flex items-center border rounded-lg overflow-hidden">
          <div className="flex items-center px-3 bg-gray-100">
            <img src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975025/flag_z7xfex.jpg" alt="flag" className="w-6 h-4 object-cover" />
            <span className="ml-2 text-gray-600">+91</span>
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="8912558738"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}
            required
            className="flex-1 p-3 outline-none"
          />
        </div>

        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 bg-[#F5F5F4]"
        />

      
        <div className="flex justify-start">
          <ReCAPTCHA
            sitekey="6Le5Ua0rAAAAAKOHq-C5mx8Syw3ri8Y9WMAKd1nb"
            onChange={handleCaptcha}
          />
        </div>

   
        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base"
        >
          Request a Quote
        </button>

        {status && <p className="text-center text-sm mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default Form;
