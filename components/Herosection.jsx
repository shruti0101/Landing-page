'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./Form";

const images = [

  "/10.webp",
  "/11.webp",
  "/12.webp",
  "/13.webp",
];

export default function Herosection() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Top bar */}
      <div className=" w-full flex justify-between  items-center p-3 bg-[#FFFAE7] shadow-md gap-3 sm:gap-0">
        <Image
          width={150}
          height={150}
          src="/logo-ryka.webp"
          alt="Ryka Logo"
          className="w-[120px] sm:w-[150px] md:w-[180px] h-auto"
        />
        <a
          href="tel:+911234567890"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out text-sm sm:text-base"
        >
          📞 Call Now
        </a>
      </div>

      {/* Mobile: Framer Motion Carousel */}
      <div className="block md:hidden w-full overflow-hidden relative h-74">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`Slide ${index + 1}`}
              fill
              className="object-fill "
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop: Hero with background image */}
      <div
        className="hidden md:flex w-full flex-row items-center justify-between min-h-screen bg-cover bg-center px-4 sm:px-6 md:px-16 py-8 "
        style={{ backgroundImage: "url('/heroimg.jpg')" }}
      >
        <h2 className="max-w-xl text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug tracking-wide drop-shadow-lg text-center md:text-left">
          Trusted Toilet Partition & Cubicle Solutions – Made in India Certified, Durable & Delivered Across India
        </h2>
      <Form></Form>
      </div>

      {/* Mobile: Form after carousel */}
      <div className="block md:hidden p-4">
        <Form></Form>
      </div>
    </div>
  );
}


