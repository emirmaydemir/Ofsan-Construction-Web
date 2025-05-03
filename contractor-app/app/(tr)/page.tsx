import { Hero } from "@/app/(tr)/modules/Hero";
import { CoreValues } from "./modules/CoreValues";
import { AboutUs } from "./modules/AboutUs";
import { SectionSplit } from "@/components/SectionSplit";
import { Services } from "@/modules/Services";
import { Projects } from "@/modules/Projects";
import { Career } from "./modules/Career";
import { ContactUs } from "@/modules/ContactUs";
import data from "@/locales/tr/projects.json";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreValues />
      <SectionSplit>
        <AboutUs />
        <Services />
        <Projects data={data} />
        <Career />
      </SectionSplit>
      <ContactUs />
    </>
  );
}
