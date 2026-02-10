"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const About = () => {
  const stats = [
    { end: 15000, suffix: "+", label: "Projects" },
    { end: 15, suffix: "+", label: "Year of Experience" },
    { end: 50000, suffix: "+", label: "Cubicle Installed" },
    { end: 11000, suffix: "+", label: "Happy Client" },
  ];

  return (
    <div>
      {/* About Section */}
      <section className="bg-[#EDEDED] px-4 py-10 ">
        <p className="text-center font-semibold text-red-500 text-xl sm:text-2xl mb-4">
          Toilet Cubicles Partition Manufacturer
        </p>
        <h2 className="text-center font-bold text-3xl sm:text-4xl">About Us</h2>
        <div
          className="border-t-4 border-black w-24 mx-auto mt-4"
          style={{ borderStyle: "dotted" }}
        ></div>
        <p className="mt-6 text-center max-w-5xl mx-auto text-sm sm:text-base leading-relaxed px-2">
       We are a toilet cubicle manufacturer and supplier offering high-quality HPL restroom partitions. Our modern cubicles are stylish, durable, and hygienic—ideal for offices, malls, and commercial spaces. Made of premium HPL, our toilet cubicles resist impact, moisture, and scratches, ensuring long-lasting performance. We offer fast installation, expert customer service, and many designs and colors for the perfect fit. Choose affordable, reliable solutions for high-traffic areas from a leading supplier in India.

        </p>
      </section>

      {/* Stats Section */}
      <section>
        <div className="bg-[#1976a3] py-12 px-4 border-2 border-black">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((item, idx) => (
              <div key={idx}>
                <h2 className="text-4xl sm:text-5xl font-bold">
                  <CountUp end={item.end} duration={9.8} separator="," />
                  {item.suffix}
                </h2>
                <p className="mt-2 text-base sm:text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
<section className="bg-[#F5F1F0]">
  <div className="py-10 px-4">
    {/* Heading */}
    <p className="text-center font-semibold text-red-500 text-sm sm:text-base md:text-xl mb-2">
      INTRODUCING CUBICLE PERFECTION
    </p>
    <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl">
      Cubicle Systems, Reinvented
    </h2>
    <div
      className="border-t-4 border-black w-20 sm:w-24 mx-auto mt-5"
      style={{ borderStyle: "dotted" }}
    ></div>
  </div>

  {/* Icons grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-7 px-8 md:px-0 sm:gap-10 pb-12">
    {[
      { src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975025/layer1_d54dxm.webp", alt: "Anti-Bacteria", label: "Anti-Bacteria", w: 95, h: 95 },
      { src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975028/layer6_qw9dqv.webp", alt: "Highly Durable", label: "Highly Durable", w: 75, h: 70 },
      { src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975027/layer3_w32kdt.webp", alt: "Fire Resistant", label: "Fire Resistant", w: 95, h: 95 },
      { src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975027/layer4_wexjbb.webp", alt: "Easy to Clean", label: "Easy to Clean", w: 95, h: 95 },
      { src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975028/layer5_ktdwdy.webp", alt: "Impact Resistant", label: "Impact Resistant", w: 100, h: 100 },
      { src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975026/layer2_wwhccr.webp", alt: "Scratch & Graffiti Resistant", label: <>Scratch & Graffiti <br /> Resistant</>, w: 85, h: 85 },
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-center text-center gap-4">
        <Image
          width={item.w}
          height={item.h}
          alt={item.alt}
          src={item.src}
          className="mx-auto object-contain"
        />
        <p className="text-xs sm:text-sm md:text-lg font-semibold hover:text-red-500 leading-tight">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default About;
