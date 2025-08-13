"use client";
import React, { useState } from "react";
import Image from "next/image";
import Popup from "@/components/Popup";

const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const servicesTop = [
    { img: "/heroimg.jpg", title: "Kids Restroom Partitions", desc: "Our Kids Restroom Partitions are specially designed for children." },
    { img: "/services-partition.webp", title: "Urinal Partitions", desc: "Ensuring privacy and hygiene in public restrooms." },
    { img: "/services-coloured.webp", title: "Premium Finish", desc: "Elegant, durable finishes for modern commercial restrooms." },
  ];

  const servicesBottom = [
    { img: "/services-red.webp", title: "Public Restrooms Partitions", desc: "Upgrade your washroom spaces with Ryka Restroom Cubicles." },
    { img: "/services-white.webp", title: "Luxe Partition Systems", desc: "Discover the perfect blend of luxury and functionality with Luxe Partition Systems." },
  ];

  return (
    <>
      {/* Intro Section */}
      <section className="bg-[#FFFBEC] px-4">
        <h2 className="font-extrabold text-center pt-10 md:pt-14 text-3xl md:text-5xl text-gray-900">
          Explore Our Most Trusted Cubicle Solutions
        </h2>
        <p className="text-center py-6 text-lg text-gray-700 tracking-wide max-w-3xl mx-auto">
          Choose from high-quality, water-resistant toilet cubicle partitions designed for commercial spaces like malls, offices, schools, and institutions. Tailored to your space — delivered across India.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-[#FAF7F2] md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesTop.map((service, idx) => (
              <Card key={idx} {...service} onEnquiry={() => setIsFormOpen(true)} />
            ))}
          </div>

          {/* Bottom larger cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {servicesBottom.map((service, idx) => (
              <Card key={idx} {...service} large onEnquiry={() => setIsFormOpen(true)} />
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
      className={`bg-white border-2 border-stone-600 rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-[#f9fafb] ${
        large ? "sm:col-span-1" : ""
      }`}
    >
      <div className="border-2 border-stone-600 relative w-full h-56 md:h-64">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-base mb-6">{desc}</p>
        <button
          onClick={onEnquiry}
          className="bg-[#1279AF] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Enquiry Now
        </button>
      </div>
    </div>
  );
}

export default Services;
