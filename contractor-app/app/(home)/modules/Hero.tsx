import { Button } from "@/components/Button";
import Image from "next/image";
import { Container } from "@/components/Container";
import React from "react";
import StarImg from "@/public/star.png";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { HeroCarousel } from "./HeroCarousel";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full pt-12 md:pt-0 overflow-hidden">
      <HeroCarousel />
      <Container className="relative z-10 flex flex-col justify-between h-full text-white">
        <div />

        <div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Image key={`star${i}`} src={StarImg} alt="star" width={16} height={16} />
              ))}
            </div>
            <p className="text-sm text-white font-bold">25+ successful projects</p>
          </div>

          <h1 className="my-4">
            WE BUILD WITH <br />
            <span className="text-primary">PRECISION</span>
          </h1>

          <p className="mb-8 md:max-w-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquam maiores perspiciatis maxime magnam! Hic sed est aliquid itaque iste molestiae id dolor ullam voluptas, numquam quidem nostrum incidunt optio!</p>

          <Button />
        </div>

        <div>
          <Link href="/" className=" inline-block rounded-full p-2 bg-transparent text-white border-2 border-white shadow-lg animate-bounce">
            <FaArrowDown size="24" />
          </Link>
        </div>
      </Container>
    </div>
  );
};
