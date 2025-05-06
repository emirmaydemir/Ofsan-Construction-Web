import { SectionName } from "@/components/SectionName";
import React from "react";
import { Card } from "../components/Card";

export const OurManagement = () => {
  return (
    <div>
      <SectionName name="YÖNETİM EKİBİ" id="our-management" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {managers.map((manager) => (
          <div key={manager.name}>
            <Card {...manager} />
          </div>
        ))}
      </div>
    </div>
  );
};

const managers = [
  {
    image: "/manager1.jpg",
    name: "Murat Alçep",
    position: "İnşaat Mühendisi - Kurucu Ortak",
  },
  {
    image: "/manager2.jpg",
    name: "Fatih Yıldırım",
    position: "Kurucu Ortak",
  },
];
