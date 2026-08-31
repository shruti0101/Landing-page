
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Airport",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761978934/airport-cubicles_cfdmyd.webp",
  },
  {
    id: 2,
    title: "Hospitals",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761978934/Hospitals_jy05wq.webp",
  },
  {
    id: 3,
    title: "Malls",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761978935/malls_efadi1.webp",
  },
  {
    id: 4,
    title: "Offices",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761978936/office_ielsyp.webp",
  },
  {
    id: 5,
    title: "Restaurants",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761978936/Restaurants_xp2jbq.webp",
  },
];

const AUTOPLAY_TIME = 4000;

export default function IndustriesSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // -----------------------------------
  // RESPONSIVE CARDS
  // -----------------------------------
  const getSlidesToShow = () => {
    if (typeof window === "undefined") return 2;

    if (window.innerWidth < 768) return 1;
    return 2;
  };

  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // -----------------------------------
  // MAX SLIDE INDEX
  // -----------------------------------
  const maxIndex = Math.max(0, slides.length - slidesToShow);

  // -----------------------------------
  // AUTOPLAY
  // -----------------------------------
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }

        return prev + 1;
      });
    }, AUTOPLAY_TIME);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  // -----------------------------------
  // DOT CLICK
  // -----------------------------------
  const goToSlide = (slideIndex) => {
    setIndex(Math.min(slideIndex, maxIndex));
  };

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* =========================
            TITLE
        ========================== */}
        <h2 className="mb-10 text-center text-3xl font-extrabold text-black md:text-5xl">
          Industries We Serve
        </h2>

        {/* =========================
            SLIDER
        ========================== */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / slidesToShow)}%)`,
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full shrink-0 px-2 md:w-1/2"
              >
                <div className="group relative h-64 overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl sm:h-72 md:h-80 lg:h-96">

                  {/* IMAGE */}
                  <Image
                    src={slide.image}
                    alt={`${slide.title} restroom cubicles`}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    quality={75}
                    loading={slide.id <= 2 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/10" />

                  {/* TITLE */}
                  <div className="absolute bottom-0 left-0 w-full bg-white/90 px-3 py-3 text-center backdrop-blur-sm md:py-4">
                    <h3 className="text-xl font-bold text-gray-900 md:text-3xl">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            DOTS
        ========================== */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={index === i ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === i
                  ? "w-8 bg-[#E7000B]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* =========================
            CTA
        ========================== */}
        <div className="mt-10 text-center">
          <a
            href="tel:+919667233007"
            className="inline-block rounded-lg bg-[#E7000B] px-5 py-3 text-base font-semibold text-white transition-all duration-300 hover:opacity-90 md:text-lg"
          >
            Instant Callback from Supplier
          </a>
        </div>
      </div>
    </section>
  );
}

