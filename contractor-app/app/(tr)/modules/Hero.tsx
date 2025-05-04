"use client";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import React from "react";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { HeroCarousel } from "./HeroCarousel";
import { Route } from "@/types/route";
import { SocialMediaBar } from "./SocialMediaBar";

export const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

  const headings = [
    { title: "WE BUILD WITH", highlight: "PRECISION" },
    { title: "WE CREATE WITH", highlight: "PASSION" },
    { title: "WE DELIVER WITH", highlight: "EXCELLENCE" },
  ];

  return (
    <div className="relative h-screen w-full pt-12 md:pt-0 overflow-hidden">
      <HeroCarousel onImageChange={setCurrentTextIndex} />
      {/* Sosyal Medya İkonları */}
      <SocialMediaBar />

      <Container className="relative z-10 flex flex-col justify-between h-full text-white">
        <div />
        <div>
          <h1 className="my-4">
            {headings[currentTextIndex].title} <br />
            <span className="text-primary">{headings[currentTextIndex].highlight}</span>
          </h1>

          <Button />
        </div>

        <div>
          <Link href={Route.HOME} className=" inline-block rounded-full p-2 bg-transparent text-white border-2 border-white shadow-lg animate-bounce">
            <FaArrowDown size="24" />
          </Link>
        </div>
      </Container>
    </div>
  );
};
