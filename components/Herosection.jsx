
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Form from "./Form";
import PopupForm from "./Popup";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const slides = [
  {
    img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975025/4_wbiq4n.webp",
    title: "Ryka Restroom Cubicles",
    subtitle: "Ryka Restroom Cubicles",
    description:
      "Serving offices, malls, schools & commercial spaces across India – 15+ years experience in custom restroom partition solutions.",
  },
  {
    img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975024/2_wfizni.webp",
    title: "Ryka Restroom Cubicles",
    subtitle: "Kids Cubicles",
    description:
      "Bright, safe, and child-friendly restroom cubicles designed specially for schools, preschools, and daycare centers. Rounded edges, vibrant colors, and durable materials ensure maximum safety and comfort for kids.",
  },
  {
    img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975024/3_yqeinj.webp",
    title: "Ryka Restroom Cubicles",
    subtitle: "Office Partitions",
    description:
      "Durable & stylish office partition systems designed to maximize space and privacy.",
  },
  {
    img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975024/1_kokcfd.webp",
    title: "Ryka Restroom Cubicles",
    subtitle: "School Restrooms",
    description:
      "Safe, hygienic, and colorful restroom cubicles tailored for schools & institutions.",
  },
  {
    img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975024/2_wfizni.webp",
    title: "Ryka Restroom Cubicles",
    subtitle: "Mall Washrooms",
    description:
      "Premium mall washroom cubicles with modern designs & easy maintenance.",
  },
];

const SLIDE_INTERVAL = 5000;

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const currentSlide = slides[index];

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  // Navbar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Preload next slide
  useEffect(() => {
    const nextIndex = (index + 1) % slides.length;

    const image = new window.Image();
    image.src = slides[nextIndex].img;
  }, [index]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between px-3 py-2 sm:px-5 sm:py-3 transition-all duration-300 ${
          scrolled ? "bg-[#FFFAE7] shadow-md" : "bg-transparent"
        }`}
      >
        <Image
          src={
            scrolled
              ? "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975029/logo-ryka_irxwux.webp"
              : "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975030/logo-ryka2_h5hqog.webp"
          }
          alt="Ryka Restroom Cubicles"
          width={180}
          height={100}
          priority
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
          className="h-auto w-[120px] sm:w-[150px] md:w-[180px]"
        />

        <a
          href="tel:+919667233007"
          aria-label="Call Ryka at +91 9667233007"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1472B0] to-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:px-6 sm:py-3 sm:text-lg"
        >
          <FaPhone aria-hidden="true" />
          <span>+91-9667233007</span>
        </a>
      </header>

      {/* HERO */}
      <section className="relative h-[450px] w-full overflow-hidden sm:h-[550px] md:h-[785px]">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-black">
          <Image
            key={currentSlide.img}
            src={currentSlide.img}
            alt={currentSlide.subtitle}
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            quality={70}
            sizes="100vw"
            className="hero-image object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div
          className="absolute inset-0 z-[1] bg-black/30"
          aria-hidden="true"
        />

        {/* CONTENT */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between gap-8">
              {/* LEFT CONTENT */}
              <div
                key={index}
                className="hero-content w-full max-w-lg rounded-2xl bg-black/40 p-5 sm:p-8"
              >
                <p className="mb-2 text-base font-medium text-white sm:text-xl">
                  {currentSlide.title}
                </p>

                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {currentSlide.subtitle}
                </h1>

                <p className="mb-6 hidden text-sm leading-relaxed text-white md:block sm:text-lg">
                  {currentSlide.description}
                </p>

                {/* DESKTOP BUTTONS */}
                <div className="hidden flex-wrap gap-3 md:flex">
                  <a
                    href="https://wa.link/nt1jey"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact Ryka on WhatsApp"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    <FaWhatsapp aria-hidden="true" />
                    Whatsapp Now
                  </a>

                  <a
                    href="tel:+919667233007"
                    aria-label="Call Ryka"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1472B0] to-blue-700 px-5 py-3 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    <FaPhone aria-hidden="true" />
                    Call Us Today
                  </a>
                </div>

                {/* MOBILE BUTTON */}
                <button
                  type="button"
                  onClick={() => setIsFormOpen(true)}
                  className="rounded-lg bg-[#1279AF] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 md:hidden"
                >
                  Contact Now
                </button>
              </div>

              {/* FORM */}
              <div className="hidden w-full max-w-lg md:block">
                <Form />
              </div>
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={`${slide.subtitle}-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${slide.subtitle}`}
              aria-current={i === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* POPUP */}
      <PopupForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />

      {/* CSS ANIMATION */}
      <style jsx>{`
        .hero-image {
          animation: heroZoom 5s ease-out forwards;
        }

        .hero-content {
          animation: heroContent 0.6s ease-out forwards;
        }

        @keyframes heroZoom {
          0% {
            opacity: 0;
            transform: scale(1.05);
          }

          20% {
            opacity: 1;
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes heroContent {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-image,
          .hero-content {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

