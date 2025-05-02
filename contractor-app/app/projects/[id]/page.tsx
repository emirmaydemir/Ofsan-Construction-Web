import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { projects } from "../page";
import { ProjectSingle } from "./modules/ProjectSingle";
import { SimilarProject } from "./modules/SimilarProject";

export default function Work({ params }: { params: { id: string } }) {
  const project = projects.find((project) => project.id === Number(params.id));

  const similarProjects = projects.filter((p) => p.location === project?.location && p.id !== project?.id).slice(0, 3);
  return (
    <>
      <Banner />
      <SectionSplit>
        {project && <ProjectSingle {...project} />}
        {similarProjects.length > 0 && <SimilarProject projects={similarProjects} />}
      </SectionSplit>
    </>
  );
}
