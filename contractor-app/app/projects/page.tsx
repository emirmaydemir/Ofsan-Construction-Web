import { Container } from "@/components/Container";
import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import Link from "next/link";
import { Project } from "./components/Project";
import { Filtering } from "./components/Filtering";
import { Route, SearchParams } from "@/types/route";
import { PaginationControl } from "./components/PaginationControl";
import { fetchProjects } from "@/data/strapi";

export default async function ProjectsPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const data = await fetchProjects();
  const projects = data.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    year: project.year,
    location: project.location,
    images: project.images.map((image) => image.url),
  }));
  const page = searchParams[SearchParams.PAGE] ?? "1";
  const perPage = searchParams[SearchParams.PER_PAGE] ?? "6";
  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);
  const totalPages = Math.ceil(projects.length / Number(perPage));
  const years = Array.from(new Set(projects.map((project) => project.year)));
  const locations = Array.from(new Set(projects.map((project) => project.location)));

  const filteredProjects = projects.filter((project) => {
    const year = searchParams[SearchParams.YEAR];
    const location = searchParams[SearchParams.LOCATION];
    if (year && location) {
      return project.year === Number(year) && project.location == location;
    } else if (year) {
      return project.year === Number(year);
    } else if (location) {
      return project.location == location;
    } else {
      return true;
    }
  });

  const paginatedProjects = filteredProjects.slice(start, end);

  const isPaginationVisible = filteredProjects.length > Number(perPage);

  return (
    <>
      <Banner />

      <SectionSplit>
        <Container>
          <h1 className="mb-4">Our Work</h1>
          <Filtering years={years} locations={locations} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            {paginatedProjects.map((project) => (
              <Link href={`${Route.PROJECTS}/${project.id}`} key={project.id}>
                <Project {...project} />
              </Link>
            ))}
          </div>

          {isPaginationVisible && <PaginationControl page={page} perPage={perPage} hasNextPage={projects.length > end} hasPrevPage={start > 0} totalPages={totalPages} />}
        </Container>
      </SectionSplit>
    </>
  );
}

export const projects = [
  {
    id: 1,
    title: "Project 1",
    year: 2021,
    location: "New York",
    images: ["/hero.jpg"],
    description: "New York'ta gerçekleştirilen yenilikçi bir inşaat projesi.",
  },
  {
    id: 2,
    title: "Project 2",
    year: 2021,
    location: "Los Angeles",
    images: ["/hero2.jpg"],
    description: "Los Angeles'ta modern bir konut projesi.",
  },
  {
    id: 3,
    title: "Project 3",
    year: 2021,
    location: "Chicago",
    images: ["/hero3.jpg"],
    description: "Chicago'da sürdürülebilir bir ofis binası.",
  },
  {
    id: 4,
    title: "Project 4",
    year: 2021,
    location: "New York",
    images: ["/hero.jpg"],
    description: "New York'ta lüks bir apartman kompleksi.",
  },
  {
    id: 5,
    title: "Project 5",
    year: 2021,
    location: "New York",
    images: ["/hero2.jpg"],
    description: "New York'ta tarihi bir binanın restorasyonu.",
  },
  {
    id: 6,
    title: "Project 6",
    year: 2021,
    location: "New York",
    images: ["/hero3.jpg"],
    description: "New York'ta yenilikçi bir ticaret merkezi.",
  },
  {
    id: 7,
    title: "Project 7",
    year: 2021,
    location: "New York",
    images: ["/hero.jpg"],
    description: "New York'ta gerçekleştirilen yenilikçi bir inşaat projesi.",
  },
  {
    id: 8,
    title: "Project 8",
    year: 2021,
    location: "Los Angeles",
    images: ["/hero2.jpg"],
    description: "Los Angeles'ta modern bir konut projesi.",
  },
  {
    id: 9,
    title: "Project 9",
    year: 2021,
    location: "Chicago",
    images: ["/hero3.jpg"],
    description: "Chicago'da sürdürülebilir bir ofis binası.",
  },
  {
    id: 10,
    title: "Project 10",
    year: 2021,
    location: "New York",
    images: ["/hero.jpg"],
    description: "New York'ta lüks bir apartman kompleksi.",
  },
  {
    id: 11,
    title: "Project 11",
    year: 2021,
    location: "New York",
    images: ["/hero2.jpg"],
    description: "New York'ta tarihi bir binanın restorasyonu.",
  },
  {
    id: 12,
    title: "Project 12",
    year: 2021,
    location: "New York",
    images: ["/hero3.jpg"],
    description: "New York'ta yenilikçi bir ticaret merkezi.",
  },
];
