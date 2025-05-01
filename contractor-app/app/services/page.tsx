import { Banner } from "@/modules/Banner";
import { SectionSplit } from "@/components/SectionSplit";
import { Achievement } from "./modules/Achievement";
import { Services as ServicesSection } from "@/modules/Services";
import { Projects } from "@/modules/Projects";

export default function Services() {
  return (
    <>
      <Banner />

      <SectionSplit>
        <Achievement />
        <ServicesSection />
        <Projects />
      </SectionSplit>
    </>
  );
}
