import { Hero } from "@/app/(home)/modules/Hero";
import { CoreValues } from "./modules/CoreValues";
import { AboutUs } from "./modules/AboutUs";
import { SectionSplit } from "@/components/SectionSplit";
import { Services } from "@/modules/Services";
import { Projects } from "@/modules/Projects";
import { Career } from "./modules/Career";
import { ContactUs } from "@/modules/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreValues />
      <SectionSplit>
        <AboutUs />
        <Services />
        <Projects />
        <Career />
      </SectionSplit>
      <ContactUs />
    </>
  );
}
