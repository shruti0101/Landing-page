"use client";
import { useState } from "react";
import PopupForm from "./Popup";

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

          <button onClick={() => setIsFormOpen(true)}

            className="bg-[#E7000B] cursor-pointer text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition duration-300  text-lg"
          >
            Connect With Us
          </button>
        </div>
      </section>

      <section className="bg-black ">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-6 gap-1  md:gap-0">
          <p className="text-white text-start   md:text-left text-sm md:text-lg  max-w-2xl leading-snug">
            Copyright © 2025 Ryka Restroom Cubicles . All Rights Reserved.
          </p>
          <a href="https://toiletcubiclespartition.com/privacy-policy" className="text-white underline">Privacy Policy</a>

          <a href="https://promozionebranding.com/" className="text-white ">
            Developed & Managed by{" "}
            <span className="underline">Promozione Branding Pvt Ltd.</span>
          </a>
        </div>
      </section>
      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

    </>
  );
};

export default Cta;
