"use client";
import React, { useState } from "react";
import Image from "next/image";
import PopupForm from "@/components/Popup"; // make sure this path matches your project
const logos = [
  "/clientele/daikin.webp",
  "/clientele/jurasik park.webp",
  "/clientele/kidzania.webp",
  "/clientele/m2k.webp",
  "/clientele/jsw.webp",
  "/clientele/radisson.webp",
  "/clientele/policy.webp",
    "/clientele/godrej.webp",
  "/clientele/mitsubishi.webp",
    "/clientele/tata.webp",
  "/clientele/bikanervala.webp",
  "/clientele/hdfc.webp",
  "/clientele/metro.webp",
  "/clientele/zudio.webp",
  "/clientele/tarak.webp",
  "/clientele/siemens.webp",
  "/clientele/orange.webp",
  "/clientele/m3m.webp",
  "/clientele/skyline.webp"
];
const moreLogos = [
  "/clientele/abp.webp",
  "/clientele/policy.webp",
  "/clientele/daikin.webp",
  "/clientele/motherhood.webp",
  "/clientele/gsk.webp",
    "/clientele/skyline.webp",
  "/clientele/getwell.webp",
  "/clientele/crystal.webp",
  "/clientele/jurasik park.webp",
  "/clientele/kidzania.webp",
  "/clientele/cinepolis.webp",
  "/clientele/dlf.webp",
  "/clientele/maxxis.webp",
  "/clientele/ikuni.webp",
  "/clientele/oyo.webp",
  "/clientele/uno.webp",
  "/clientele/vedanata.webp",
  "/clientele/tarak.webp",
  "/clientele/orange.webp",
  "/clientele/Ykk.webp",
  "/clientele/mercedes.webp",
  "/clientele/whirlpool.webp"
];

export default function Clientele() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="bg-[#E4E4E4] py-12  overflow-hidden">
        <h2 className="font-bold text-center text-3xl sm:text-6xl">Our Clientele</h2>

        <div className="border-t-4 border-black w-24 mx-auto mt-4 mb-10" style={{ borderStyle: "dotted" }} />

        <div className="relative flex overflow-hidden mb-6">
          <div className="flex animate-marquee gap-6">
            {[...logos, ...logos].map((logo, i) => (
              <Image key={i} src={logo} alt="Client logo" width={120} height={80} className="bg-white p-3 border rounded shadow-md" />
            ))}
          </div>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee-reverse gap-6">
            {[...moreLogos, ...moreLogos].map((logo, i) => (
              <Image key={i} src={logo} alt="Client logo" width={120} height={80} className="bg-white p-3 border rounded shadow-md" />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-[#1279AF] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            View More
          </button>
        </div>
      </section>

      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
