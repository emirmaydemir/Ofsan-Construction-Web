import { SectionName } from "@/components/SectionName";
import React from "react";
import { Card } from "../components/Card";

export const OurManagement = () => {
  return (
    <div>
      <SectionName name="Our Management" id="our-management" />
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
    name: "Alice Smith",
    position: "CEO",
  },
  {
    image: "/manager2.jpg",
    name: "Bob Johnson",
    position: "CFO",
  },
  {
    image: "/manager3.jpg",
    name: "Charlie Brown",
    position: "COO",
  },
  {
    image: "/manager4.jpg",
    name: "Daisy Lee",
    position: "CTO",
  },
];
