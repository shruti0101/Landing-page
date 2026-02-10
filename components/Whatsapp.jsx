// WhatsAppChat.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Whatsapp = () => {
  return (

    <div>
      <a
      href="https://wa.me/+919873516255"
      className="whatsapp-float"

      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Rykarestroom Cubicles "
    >
      <FaWhatsapp size={29} />
    </a>


<a
  href="tel:+919873516255"
  className="call-float block md:hidden"
  aria-label="Call Rykarestroom Cubicles"
>
  <FaPhoneAlt size={22} />
</a>


    </div>
    
  );
};

export default Whatsapp;



