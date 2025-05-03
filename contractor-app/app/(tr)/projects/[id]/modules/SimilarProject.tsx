import { Container } from "@/components/Container";
import { SectionName } from "@/components/SectionName";
import Link from "next/link";
import React from "react";
import { Project } from "../../components/Project";
import { Route } from "@/types/route";

interface ProjectProps {
  id: number;
  title: string;
  images: string[];
  location: string;
  year: number;
}

interface SimilarProjectProps {
  projects: ProjectProps[];
}

export const SimilarProject = ({ projects }: SimilarProjectProps) => {
  return (
    <section>
      <Container>
        <SectionName name="similar projects" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project) => (
            <Link href={`${Route.PROJECTS}/${project.id}`} key={project.id}>
              <Project {...project} />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
