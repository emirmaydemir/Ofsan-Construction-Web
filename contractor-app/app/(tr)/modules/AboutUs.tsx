import { Container } from "@/components/Container";
import { SectionName } from "@/components/SectionName";
import React from "react";

export const AboutUs = () => {
  return (
    <section>
      <Container>
        <SectionName name="About Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          <h2 className="font-medium">OUR TEAM IS READY TO BUILD YOUR DREAMS</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam alias veniam dolore fugit, aperiam repudiandae impedit saepe illum aliquam in expedita optio ad dolores magnam fuga, maiores omnis aut!</p>
        </div>
        <div className="relative "></div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100" />
          <video src="/home_video.mp4" muted autoPlay loop className="object-cover h-[200px] md:h-[450px] w-full" />
        </div>

        <div className="grid grid-cols-2 md:flex justify-between gap-4 md:gap-8 mt-4">
          {data.map((item) => (
            <div key={item.title} className="text-center">
              <h2 className="mb-2 text-primary">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const data = [
  {
    title: "20+",
    description: "YEARS OF EXPERIENCE",
  },
  {
    title: "250+",
    description: "PROJECTS COMPLETED",
  },
  {
    title: "55+",
    description: "MILLION EUROS IN REVENUE",
  },
  {
    title: "30+",
    description: "EMPLOYEES",
  },
];
