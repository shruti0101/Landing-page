"use client";

import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
useEffect(() => {
  const swiper = new Swiper(".multiple-slide-carousel", {
    modules: [Navigation, Autoplay],
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    autoHeight: false, // 🔹 Prevents height from changing per slide
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      1024: { slidesPerView: 3, spaceBetween: 30 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1, spaceBetween: 15 },
    },
  });
}, []);


  const testimonials = [
    {
      text: "Ryka’s Carlton Prime doors streamlined our mall renovation with no wet work, minimal disruption, and significant time saved. The upgrade made our restrooms feel modern, clean, and more premium to visitors.",
      logo: "/clientele/cinepolis.webp",
    },
    {
      text: "Thanks to Ryka, our hotel restrooms now reflect modern luxury. Guests often compliment the sleek, clean design—an upgrade that has elevated the overall experience and enhanced our amenities significantly.",
      logo: "/club.webp",
    },
    {
      text: "Ryka’s skilled team installed the toilet cubicles and wall paneling flawlessly, delivering exceptional quality with a perfect finish and precise alignment. Their professionalism ensured a smooth process.",
      logo: "/cris.webp",
    },
    {
      text: "The Freasking Booths installed at DMRC offer outstanding durability and performance. Built to withstand heavy usage, they reflect quality engineering and robust construction. A perfect fit for high-footfall environments.",
      logo: "/clientele/metro.webp",
    },
    {
      text: "Carlton Pristine was installed at our Uno Minda facility on time. The quick, hassle-free installation and clean, high-quality finish showed true professionalism and efficiency. Highly appreciated work.",
      logo: "/clientele/uno.webp",
    },
    {
      text: "Ryka Restroom Cubicles delivered luxury and hygiene with sleek, durable, low-maintenance partitions. Their professional team ensured a smooth upgrade, transforming commercial restrooms with modern style and quality.",
      logo: "/clientele/saya.png",
    },
    {
      text: "When upgrading restrooms at K. R. Mangalam University, we needed a reliable partner. Choosing Grand and Canvas EVO cubicles was the right decision, delivering quality, professionalism, and timely execution.",
      logo: "/clientele/kr.webp",
    },
    {
      text: "Despite tight deadlines, the Carlton Prime cubicles were delivered and installed with precision. The team demonstrated excellent workmanship, professionalism, and a commitment to high standards.",
      logo: "/clientele/zudio.webp",
    },
  ];

  return (
    <section
      style={{ backgroundImage: "url('/testimonial.webp')" }}
      className="bg-center bg-cover bg-no-repeat py-12 sm:py-16 bg-[#FEFAEB]"
    >
      <div>
        <p className="font-bold text-2xl sm:text-4xl md:text-6xl text-center">
          Testimonials
        </p>
      </div>
      <div
        className="border-t-4 border-black w-16 sm:w-24 mx-auto mt-3 sm:mt-4 mb-8 sm:mb-10"
        style={{ borderStyle: "dotted" }}
      ></div>

      <div className="w-full relative px-4">
        <div className="swiper multiple-slide-carousel swiper-container relative px-4 sm:px-6">
          <div className="swiper-wrapper ">
            {testimonials.map((item, index) => (
            <div className="swiper-slide" key={index}>
  <div className="border border-black bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col justify-between h-full min-h-[380px] text-center">
    <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed flex-grow">
      {item.text}
    </p>
    <img
      src={item.logo}
      alt="Client Logo"
      className="h-30 object-contain mx-auto mt-4 sm:mt-6"
    />
  </div>
</div>

            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:block ">

          <button className="  swiper-button-prev absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-50  sm:w-10 sm:h-7    flex items-center justify-center text-black "></button>
          <button className=" swiper-button-next absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-50  sm:w-10 sm:h-7    flex items-center justify-center text-black "></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
