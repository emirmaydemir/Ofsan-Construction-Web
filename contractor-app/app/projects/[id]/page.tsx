import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { ProjectSingle } from "./modules/ProjectSingle";
import { SimilarProject } from "./modules/SimilarProject";
import { fetchProjects } from "@/data/strapi";

export default async function Work({ params }: { params: { id: string } }) {
  const data = await fetchProjects();
  const project = data.find((p) => p.id === Number(params.id));

  const similarProjects = data
    .filter((p) => p.location === project?.location && p.id !== project?.id)
    .map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      year: p.year,
      location: p.location,
      images: p.images.map((image) => image.url),
    }))
    .slice(0, 3);
  return (
    <>
      <Banner />
      <SectionSplit>
        {project && <ProjectSingle title={project.title} description={project.description} year={project.year} location={project.location} images={project.images.map((image) => image.url)} />}
        {similarProjects.length > 0 && <SimilarProject projects={similarProjects} />}
      </SectionSplit>
    </>
  );
}
