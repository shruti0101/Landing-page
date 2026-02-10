"use client";
import React, { useState } from "react";
import Image from "next/image";
import Popup from "@/components/Popup";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {


  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
    });
  }, []);


  const [isFormOpen, setIsFormOpen] = useState(false);

  const servicesTop = [
    { img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975025/heroimg_avoue4.webp", title: "Kids Restroom Partitions", desc: "Our Kids Restroom Partitions are specially designed for children." },
    { img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975025/closet-urinal_ft3qgh.webp", title: "Urinal Partitions", desc: "Ensuring privacy and hygiene in public restrooms." },
    { img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975030/services-coloured_gvodti.webp", title: "Premium Finish", desc: "Elegant, durable finishes for modern commercial restrooms." },
  ];

  const servicesBottom = [
    { img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975031/services-red_gwvysl.webp", title: "Public Restrooms Partitions", desc: "Upgrade your washroom spaces with Ryka Restroom Cubicles." },
    { img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975032/services-white_hsctrx.webp", title: "Luxe Partition Systems", desc: "Discover the perfect blend of luxury and functionality with Luxe Partition Systems." },
  ];

  return (
    <>
      {/* Intro Section */}
      <section className="bg-[#FFFBEC] px-4">
        <h2 className="font-extrabold text-center pb-3 md:pb-0 pt-10 md:pt-14 text-3xl md:text-5xl text-gray-900">
          Explore Our Most Trusted Cubicle Solutions
        </h2>
        <p className="hidden md:block text-center py-6 text-lg text-gray-700 tracking-wide max-w-3xl mx-auto">
          Choose from high-quality, water-resistant toilet cubicle partitions designed for commercial spaces like malls, offices, schools, and institutions. Tailored to your space — delivered across India.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-[#FAF7F2] md:py-14">
        <div className="max-w-7xl mx-auto px-4">



   {/* Bottom larger cards */}
          <div data-aos="fade-up" data-aos-duration="1500" className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            {servicesBottom.map((service, idx) => (
              <Card key={idx} {...service} large onEnquiry={() => setIsFormOpen(true)} />
            ))}
          </div>


          {/* Top cards */}
          <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {servicesTop.map((service, idx) => (
              <Card key={idx} {...service} onEnquiry={() => setIsFormOpen(true)} />
            ))}
          </div>

       
        </div>
      </section>

      {/* Single Popup shared by all buttons */}
      <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

function Card({ img, title, desc, large, onEnquiry }) {
  return (
    <div 
      className={` border-2 border-stone-600 rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-[#f9fafb] ${
        large ? "sm:col-span-1" : ""
      }`}
    >
      <div className="border-2 border-stone-600 relative w-full h-50 md:h-64">
        <Image src={img} alt={title} fill className="object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-2 text-center">
        <h3 className="text-xl font-semibold text-gray-900 ">{title}</h3>
        <p className="text-gray-600 text-base mb-4">{desc}</p>
        {/* <button 
          onClick={onEnquiry}
          
        >
     
        </button> */}



  <a
          href="tel:+919873516255"
          className="bg-[#1279AF] text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition"
        >
           Enquiry Now
        </a>


      </div>
    </div>
  );
}

export default Services;
