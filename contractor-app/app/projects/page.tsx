import { Container } from "@/components/Container";
import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import Link from "next/link";
import { Project } from "./components/Project";

export default function ProjectsPage() {
  return (
    <>
      <Banner />

      <SectionSplit>
        <Container>
          <h1 className="mb-4">Our Work</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
            {projects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.title}>
                <Project {...project} />
              </Link>
            ))}
          </div>
        </Container>
      </SectionSplit>
    </>
  );
}

const projects = [
  {
    id: 1,
    title: "Project 1",
    year: 2021,
    location: "New York",
    images: ["/hero.jpg"],
  },
  {
    id: 2,
    title: "Project 2",
    year: 2021,
    location: "Los Angeles",
    images: ["/hero2.jpg"],
  },
  {
    id: 3,
    title: "Project 3",
    year: 2021,
    location: "Chicago",
    images: ["/hero3.jpg"],
  },
  {
    id: 4,
    title: "Project 4",
    year: 2021,
    location: "New York",
    images: ["/hero.jpg"],
  },
  {
    id: 5,
    title: "Project 5",
    year: 2021,
    location: "New York",
    images: ["/hero2.jpg"],
  },
  {
    id: 6,
    title: "Project 6",
    year: 2021,
    location: "New York",
    images: ["/hero3.jpg"],
  },
];
