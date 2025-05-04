import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

interface ContactInfoBarProps {
  address: string;
  phone: string;
  email: string;
}

export function ContactInfoBar({ address, phone, email }: ContactInfoBarProps) {
  return (
    <div className="bg-white p-6 md:p-20 rounded-lg shadow-lg min-h-[12rem] flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl text-center md:text-left">
        {/* Adres */}
        <div className="flex flex-col items-center md:items-start mx-auto">
          <div className="flex items-center gap-2">
            <a href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <FaMapMarkerAlt className="text-2xl text-primary" />
              <p className="font-semibold text-base">Adres</p>
            </a>
          </div>
          <p className="text-sm break-words mt-2">{address}</p>
        </div>

        {/* Telefon */}
        <div className="flex flex-col items-center mx-auto">
          <div className="flex items-center gap-2">
            <a href={`tel:${phone}`} className="flex items-center gap-2 hover:underline">
              <FaPhoneAlt className="text-2xl text-primary" />
              <p className="font-semibold text-base">Telefon</p>
            </a>
          </div>
          <p className="text-sm mt-2">{phone}</p>
        </div>

        {/* E-Posta */}
        <div className="flex flex-col items-center md:items-end mx-auto">
          <div className="flex items-center gap-3">
            <a href={`mailto:${email}`} className="flex items-center gap-2 hover:underline">
              <FaEnvelope className="text-2xl text-primary" />
              <p className="font-semibold text-base">E-Posta</p>
            </a>
          </div>
          <p className="text-sm mt-2">{email}</p>
        </div>
      </div>
    </div>
  );
}
