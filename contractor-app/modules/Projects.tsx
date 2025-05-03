import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import { Container } from "@/components/Container";
import { SectionName } from "@/components/SectionName";
import { Route } from "@/types/route";
import React from "react";

export const Projects = ({ data }: any) => {
  const projects = data
    .map((p: any) => ({
      image: p.images[0].url,
      title: p.title,
      link: `${Route.PROJECTS}/${p.id}`,
    }))
    .slice(0, 3);

  return (
    <section>
      <Container>
        <SectionName name="Projects" />
        <EmblaCarousel slides={projects} />
      </Container>
    </section>
  );
};
