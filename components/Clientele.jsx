"use client";
import React, { useState } from "react";
import Image from "next/image";
import PopupForm from "@/components/Popup"; // make sure this path matches your project
const logos = [
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976081/daikin_ksvvb0.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976089/jurasik_park_qk4669.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976090/kidzania_xbtfcd.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976093/m2k_zwlr1u.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976088/jsw_truixc.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976104/radisson_onvlgg.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976103/policy_qntsmt.webp",
    "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976084/godrej_ys8pxk.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976099/mitsubishi_n7sw1b.webp",
    "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976109/tata_oxamqt.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976077/bikanervala_li2fta.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976086/hdfc_nxh0tk.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976098/metro_tp3sal.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976114/zudio_oqqoin.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976108/tarak_gbokme.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976106/siemens_uudvhs.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976101/orange_tatbuo.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976095/m3m_st5v4i.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976107/skyline_wtaqqa.webp"
];
const moreLogos = [
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976077/abp_uqf5jp.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976103/policy_qntsmt.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976081/daikin_ksvvb0.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976100/motherhood_olhru1.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976085/gsk_hb1gqn.webp",
    "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976107/skyline_wtaqqa.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976083/getwell_mwkhzt.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976080/crystal_z9kt6m.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976089/jurasik_park_qk4669.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976090/kidzania_xbtfcd.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976077/cinepolis_uk2swj.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976082/dlf_zypghf.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976096/maxxis_cyxpnf.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976086/ikuni_om9j3z.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976102/oyo_iurge0.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976110/uno_a8ykt4.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976111/vedanata_b8qdbn.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976108/tarak_gbokme.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976101/orange_tatbuo.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976113/Ykk_yz0bio.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976097/mercedes_rinc3z.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761976112/whirlpool_hqigev.webp"
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
          {/* <button
            onClick={() => setIsFormOpen(true)}
            className="bg-[#1279AF] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
         
          </button> */}


 <a
      href="https://wa.me/+919873516255"
      className=" bg-[#1279AF] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"

      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Rykarestroom Cubicles "
    >
       View More
    </a>



        </div>
      </section>

      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
