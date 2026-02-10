"use client";

import React from "react";
import Slider from "react-slick";


export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // large mobile
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480, // small mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

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

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h2 className="text-black font-extrabold text-3xl md:text-5xl text-center mb-10">
          Industries We Serve
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="px-2 sm:px-3">
              <div
                className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
               
                <div className="absolute bottom-0 bg-white/90 backdrop-blur-sm py-3 md:py-4 text-center w-full">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="tel:+919873516255"
            className="inline-block bg-[#E7000B] text-white px-2 md:px-5 py-3  rounded-lg font-semibold md:text-lg hover:opacity-90 transition-all duration-300"
          >
          Instant Callback from Supplier

          </a>
        </div>
      </div>
    </section>
  );
}
