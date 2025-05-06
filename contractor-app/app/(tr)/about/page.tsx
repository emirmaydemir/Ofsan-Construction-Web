import { Container } from "@/components/Container";
import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { CompanyHistory } from "./modules/CompanyHistory";
import { OurEmployees } from "./modules/OurEmployees";
import { OurManagement } from "./modules/OurManagement";
import { OurVision } from "./modules/OurVision";
import { OurMission } from "./modules/OurMission";
import { Certificates } from "./modules/Certificates";
import Link from "next/link";
import { CoreValues } from "../modules/CoreValues";
import { DealerShip } from "./modules/DealerShip";

export default function About() {
  return (
    <>
      <Banner />

      <SectionSplit>
        <Container>
          <h1 className="mb-8">HAKKIMIZDA</h1>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-8 relative min-h-screen">
            <div className="space-y-8">
              <CompanyHistory />
              <OurEmployees />
              <OurManagement />
              <OurVision />
              <OurMission />
              <Certificates />
              <DealerShip />
            </div>

            <div className="relative">
              <div className="sticky top-16">
                <ul className="hidden md:block space-y-2">
                  {links.map((link, i) => (
                    <li className="flex items-center gap-2" key={link.text}>
                      <span className="w-8 h-1 bg-primary" />
                      <Link href={link.href} className="underline">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionSplit>
      <CoreValues />
    </>
  );
}

const links = [
  {
    href: "#company-history",
    text: "Şirketin Amacı",
  },
  {
    href: "#our-employees",
    text: "Organizasyon Ekibi",
  },
  {
    href: "#our-management",
    text: "Yönetim Ekibi",
  },
  {
    href: "#our-vision",
    text: "Vizyon",
  },
  {
    href: "#our-mission",
    text: "Misyon",
  },
  {
    href: "#certificates",
    text: "Referanslar",
  },
  {
    href: "#dealership",
    text: "Bayiliklerimizin Bazıları",
  },
];
