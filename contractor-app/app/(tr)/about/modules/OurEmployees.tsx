import { SectionName } from "@/components/SectionName";
import React from "react";
import { Card } from "../components/Card";

export const OurEmployees = () => {
  return (
    <div>
      <SectionName name="ORGANİZASYON EKİBİ" id="our-employees" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {people.map((person) => (
          <div key={person.name}>
            <Card {...person} />
          </div>
        ))}
      </div>
    </div>
  );
};

const people = [
  {
    image: "/person1.jpg",
    name: "Sezin Cesur Alçep",
    position: "Mimar",
  },
  {
    image: "/person2.jpg",
    name: "Meral Güleş",
    position: "İnşaat Mühendisi",
  },
  {
    image: "/person3.jpg",
    name: "İslam Fatih Yıldırım",
    position: "İnşaat Mühendisi",
  },
  {
    image: "/person4.jpg",
    name: "Zeynep Yıldırım",
    position: "Mimar",
  },
  {
    image: "/person4.jpg",
    name: "Şahyettin Veziroğlu",
    position: "İnşaat Mühendisi",
  },
  {
    image: "/person4.jpg",
    name: "Taha Yasin Yıldırım",
    position: "Makine Mühendisi",
  },
  {
    image: "/manager3.jpg",
    name: "Hasan Yıldırım",
    position: "Satın Alma Mdr.",
  },
];
