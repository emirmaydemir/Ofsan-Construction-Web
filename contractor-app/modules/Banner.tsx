import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { Overlay } from "@/components/Overlay";
import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[350px]">
      <Image src="/hero2.jpg" alt="banner" fill className="object-cover" />
      <Overlay />

      <div className="absolute bottom-4 left-0 w-full h-auto">
        <Container>
          <Breadcrumbs />
        </Container>
      </div>
    </div>
  );
};
