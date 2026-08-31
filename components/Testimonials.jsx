"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "Ryka’s Carlton Prime doors streamlined our mall renovation with no wet work, minimal disruption, and significant time saved. The upgrade made our restrooms feel modern, clean, and more premium to visitors.",
    logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976077/cinepolis_uk2swj.webp",
  },
  {
    text: "Thanks to Ryka, our hotel restrooms now reflect modern luxury. Guests often compliment the sleek, clean design—an upgrade that has elevated the overall experience and enhanced our amenities significantly.",
    logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975024/club_rhzyov.webp",
  },
  {
    text: "Ryka’s skilled team installed the toilet cubicles and wall paneling flawlessly, delivering exceptional quality with a perfect finish and precise alignment. Their professionalism ensured a smooth process.",
    logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975024/cris_unatvv.webp",
  },
  {
    text: "The Freasking Booths installed at DMRC offer outstanding durability and performance. Built to withstand heavy usage, they reflect quality engineering and robust construction. A perfect fit for high-footfall environments.",
    logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976098/metro_tp3sal.webp",
  },
  {
    text: "Carlton Pristine was installed at our Uno Minda facility on time. The quick, hassle-free installation and clean, high-quality finish showed true professionalism and efficiency. Highly appreciated work.",
    logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976110/uno_a8ykt4.webp",
  },
  {
    text: "Ryka Restroom Cubicles delivered luxury and hygiene with sleek, durable, low-maintenance partitions. Their professional team ensured a smooth upgrade, transforming commercial restrooms with modern style and quality.",
    logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976105/saya_sneabk.png",
  },
  {
    text: "When upgrading restrooms at K. R. Mangalam University, we needed a reliable partner. Choosing Grand and Canvas EVO cubicles was the right decision, delivering quality, professionalism, and timely execution.",
    logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976093/kr_gpoxul.webp",
  },
  {
    text: "Despite tight deadlines, the Carlton Prime cubicles were delivered and installed with precision. The team demonstrated excellent workmanship, professionalism, and a commitment to high standards.",
    logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976114/zudio_oqqoin.webp",
  },
];

const AUTO_PLAY = 3000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [paused, setPaused] = useState(false);

  // ==========================================
  // RESPONSIVE SLIDES
  // ==========================================
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  // ==========================================
  // MAX INDEX
  // ==========================================
  const maxIndex = Math.max(0, testimonials.length - slidesPerView);

  // ==========================================
  // AUTO PLAY
  // ==========================================
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }

        return prev + 1;
      });
    }, AUTO_PLAY);

    return () => clearInterval(timer);
  }, [paused, maxIndex]);

  // ==========================================
  // PREVIOUS
  // ==========================================
  const previousSlide = () => {
    setIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }

      return prev - 1;
    });
  };

  // ==========================================
  // NEXT
  // ==========================================
  const nextSlide = () => {
    setIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }

      return prev + 1;
    });
  };

  return (
    <section
      className="bg-[#FEFAEB] bg-cover bg-center bg-no-repeat py-12 sm:py-16"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975033/testimonial_evbhug.webp')",
      }}
    >
      {/* ========================================
          TITLE
      ========================================= */}
      <div>
        <h2 className="text-center text-2xl font-bold text-black sm:text-4xl md:text-6xl">
          Testimonials
        </h2>

        <div
          className="mx-auto mt-3 mb-8 w-16 border-t-4 border-black sm:mt-4 sm:mb-10 sm:w-24"
          style={{ borderStyle: "dotted" }}
        />
      </div>

      {/* ========================================
          SLIDER
      ========================================= */}
      <div
        className="relative w-full px-4 sm:px-6 lg:px-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* VIEWPORT */}
        <div className="mx-auto max-w-7xl overflow-hidden">
          {/* TRACK */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / slidesPerView)}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="w-full shrink-0 px-2 md:w-1/2 lg:w-1/3">
                {/* CARD */}
                <div className="flex min-h-[380px] flex-col justify-between rounded-2xl border border-black bg-white p-4 text-center shadow-md transition-shadow duration-300 hover:shadow-xl sm:p-6">
                  {/* TEXT */}
                  <p className="flex-grow text-base italic leading-relaxed text-gray-700 sm:text-lg">
                    {item.text}
                  </p>

                  {/* LOGO */}
                  <div className="relative mt-6 h-24 w-full">
                    <Image
                      src={item.logo}
                      alt="Ryka client logo"
                      fill
                      sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 30vw"
                      quality={70}
                      className="object-contain"
                      loading={i < 3 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================
            PREVIOUS BUTTON
        ========================================= */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous testimonial"
          className="absolute left-1 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl font-bold text-black shadow-lg transition hover:bg-black hover:text-white md:flex lg:left-2"
        >
          ‹
        </button>

        {/* ========================================
            NEXT BUTTON
        ========================================= */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="absolute right-1 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl font-bold text-black shadow-lg transition hover:bg-black hover:text-white md:flex lg:right-2"
        >
          ›
        </button>
      </div>

      {/* ========================================
          DOTS
      ========================================= */}
      <div className="mt-7 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={index === i ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === i
                ? "w-8 bg-black"
                : "w-2.5 bg-black/30 hover:bg-black/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
