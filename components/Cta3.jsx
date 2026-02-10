"use client";
import React from "react";

const ContactSection = () => {
  return (
    <section className="hidden md:block relative bg-[#2986B6] py-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Upgrade Your Space with Modern Toilet, Bathroom & Restroom Partitions – Get a Free Quote Today!
        </h2>

        {/* Form */}
        <form
          id="contact"
          action="https://formsubmit.co/rykarestroomcubicle@gmail.com" 
          method="POST"
          className="mt-8 grid grid-cols-1  md:grid-cols-5 gap-4 items-center"
        >
          {/* Hidden Inputs for FormSubmit config */}
          <input type="hidden" name="_cc" value="inquiry.promozione@gmail.com" /> 
          <input type="hidden" name="_next" value="https://rykarestroom.toiletcubiclespartition.com/thankyou" />
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="col-span-1 md:col-span-1 border-2 border-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            required
            className="col-span-1 md:col-span-1 border-2 border-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <div className="col-span-1 flex border-2 border-white rounded-md overflow-hidden">
            <select name="country_code" className="px-2 bg-transparent focus:outline-none">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input
              type="tel"
              name="phone"
              maxLength={10}
              pattern="[0-9]{10}"
              placeholder="081234 56789"
              required
              className="flex-1 px-4 py-3 focus:outline-none"
            />
          </div>
          <select
            name="product"
            required
            className="col-span-1 border-2 border-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
          >
           
                 <option value="">Select Project Type</option>
            <option value="Commercial">Commercial</option>
            <option value="Residential">Residential</option>
            <option value="Industrial">Industrial</option>
            <option value="Educational">Educational</option>
            <option value="Other">Other</option>
          </select>
          <button
            type="submit"
            className="col-span-1 bg-red-600 cursor-pointer  text-white font-semibold py-3 rounded-md shadow-md hover:bg-red-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
