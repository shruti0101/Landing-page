'use client'

import React from "react";
import Popup from "@/components/Popup";
import { useState } from "react";
const Cta = () => {
      const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <section className="bg-[#1678AE]">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 gap-4 md:gap-0">
          <p className="text-white font-bold text-center md:text-left text-lg md:text-3xl max-w-2xl leading-snug">
            Want to know more about our cubicles? Fill out the form for complete
            product details.
          </p>

          <button
           onClick={() => setIsFormOpen(true)}
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition duration-300 shadow-lg"
          >
            Enquiry Now
          </button>
        </div>
      </section>

      <section className="bg-black ">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-6 gap-1  md:gap-0">
          <p className="text-white text-start   md:text-left text-sm md:text-lg  max-w-2xl leading-snug">
            Copyright © 2025 Ryka Restroom Cubicles . All Rights Reserved.
          </p>

          <a href="https://promozionebranding.com/" className="text-white ">
            Developed & Managed by{" "}
            <span className="underline">Promozione Branding Pvt Ltd.</span>
          </a>
        </div>
      </section>

      
            <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Cta;
