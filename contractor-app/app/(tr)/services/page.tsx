import { Banner } from "@/modules/Banner";
import { SectionSplit } from "@/components/SectionSplit";
import { Achievement } from "./modules/Achievement";
import { Services as ServicesSection } from "@/modules/Services";
import { Projects } from "@/modules/Projects";
import data from "@/locales/tr/projects.json";

export default function Services() {
  return (
    <>
      <Banner />

      <SectionSplit>
        <Achievement />
        <ServicesSection />
        <Projects data={data} />
      </SectionSplit>
    </>
  );
}
