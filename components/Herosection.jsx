"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./Form";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import PopupForm from "./Popup";

const slides = [
  {
    img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975025/4_wbiq4n.webp",
    title: "Ryka Restroom Cubicles",
    subtitle: "Ryka Restroom Cubicles",
    button: "Whatsapp Now",
    description:
      "Serving offices, malls, schools & commercial spaces across India – 15+ years experience in custom restroom partition solutions.",
  },
  {
    img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975024/2_wfizni.webp",
    title: "Ryka Restroom Cubicles",
    subtitle: "Kids Cubicles",
    button: "Whatsapp Now",
    description:
      "Bright, safe, and child-friendly restroom cubicles designed specially for schools, preschools, and daycare centers. Rounded edges, vibrant colors, and durable materials ensure maximum safety and comfort for kids.",
  },
  {
    img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975024/3_yqeinj.webp",
    title: "Ryka Restroom Cubicles",
    subtitle: "Office Partitions",
    button: "Whatsapp Now",
    description:
      "Durable & stylish office partition systems designed to maximize space and privacy.",
  },
  {
    img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975024/1_kokcfd.webp",
    title: "Ryka Restroom Cubicles",
    subtitle: "School Restrooms",
    button: "Whatsapp Now",
    description:
      "Safe, hygienic, and colorful restroom cubicles tailored for schools & institutions.",
  },
  {
    img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975024/2_wfizni.webp",
    title: "Ryka Restroom Cubicles",
    subtitle: "Mall Washrooms",
    button: "Whatsapp Now",
    description:
      "Premium mall washroom cubicles with modern designs & easy maintenance.",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  // ✅ Auto-slide (pause while tab is inactive)
  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  // ✅ Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentSlide = slides[index];

  return (
    <div>
      {/* ✅ Top bar */}
      <div
        className={`fixed top-0 left-0 w-full flex justify-between items-center p-3 transition-all duration-500 z-50 ${scrolled ? "bg-[#FFFAE7] shadow-md" : "bg-transparent"
          }`}
      >
        <Image
          width={170}
          height={150}
          src={scrolled ? "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975029/logo-ryka_irxwux.webp" : "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975030/logo-ryka2_h5hqog.webp"}
          alt="Ryka Logo"
          priority
          sizes="(max-width: 768px) 120px, (max-width: 1024px) 150px, 180px"
          className="w-[120px] sm:w-[150px] md:w-[180px] h-auto"
        />
        <a
          href="tel:+919873516255"
          className="bg-gradient-to-r from-[#1472B0] to-blue-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out text-sm sm:text-xl animate-bounce"
        >
          📞 +91-9873516255
        </a>
      </div>

      {/* ✅ Hero Section */}
      <div className="relative w-full h-[450px] sm:h-[500px] md:h-[680px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            {/* ✅ Optimized Next.js Image */}
            <Image
              src={currentSlide.img}
              alt={currentSlide.subtitle}
              fill

              className="object-cover"
              sizes="100vw"
              // Only preload the first slide for faster LCP
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              quality={75} // reduce weight without visible quality loss
            />
          </motion.div>
        </AnimatePresence>

        {/* ✅ Overlay Content */}
        <div className="md:block absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between">
            {/* Left Content */}
            <div className="bg-black/40 rounded-2xl p-6 sm:p-8 max-w-lg">
              <h4 className="text-white text-lg sm:text-xl font-medium mb-2">
                {currentSlide.title}
              </h4>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
                {currentSlide.subtitle}
              </h2>
              <p className="text-white mb-6 text-sm sm:text-lg leading-relaxed md:block hidden">
                {currentSlide.description}
              </p>

              <div className="flex flex-wrap gap-3 justify-center w-full">
                <a
                  href="https://wa.me/919873516255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:inline-flex hidden items-center gap-2 bg-[#25D366] text-white font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow hover:scale-105 transition text-sm sm:text-lg "
                >
                  <FaWhatsapp className="text-lg" /> {currentSlide.button}
                </a>
                <a
                  href="tel:+919873516255"
                  className="md:inline-flex hidden items-center gap-2 bg-gradient-to-r from-[#1472B0] to-blue-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out text-sm sm:text-lg "
                >
                  <FaPhone /> Call Us Today
                </a>
                <button onClick={() => setIsFormOpen(true)}
                  className="md:hidden block bg-[#1279AF] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  Contact Now
                </button>
              </div>
            </div>

            {/* Right Form */}
            <div className="hidden md:block rounded-2xl shadow-xl md:mt-24 w-full max-w-lg">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

    </div>
  );
}
