"use client";

import React from "react";
import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export const SocialMediaBar = () => {
  return (
    <div
      className="
      absolute z-50 text-white flex gap-5

      /* Mobil: altta yatay ortalı */
      max-md:bottom-12
      max-md:left-1/2
      max-md:transform
      max-md:-translate-x-1/2

      /* Masaüstü (md ve üstü): sol ortalı */
      md:left-6 md:top-1/2 md:-translate-y-1/2 md:flex-col
    "
    >
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
        <FaInstagram size={24} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
        <FaLinkedin size={24} />
      </a>
      <a href="tel:+901234567890" className="hover:text-primary transition-colors">
        <FaPhone size={24} />
      </a>
      <a href="mailto:info@example.com" className="hover:text-primary transition-colors">
        <FaEnvelope size={24} />
      </a>
      <a href="https://wa.me/901234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};
