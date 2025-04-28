import { Hero } from "@/app/(home)/modules/Hero";
import { CoreValues } from "./modules/CoreValues";
import { AboutUs } from "./modules/AboutUs";
import { SectionSplit } from "@/components/SectionSplit";
import { Services } from "@/modules/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreValues />
      <SectionSplit>
        <AboutUs />
        <Services />
      </SectionSplit>
    </>
  );
}
