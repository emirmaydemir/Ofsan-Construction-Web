import { Banner } from "@/modules/Banner";
import { ContactUs } from "@/modules/ContactUs";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Services() {
  return (
    <>
      <Banner />
      <ContactUs />
      <Map />
    </>
  );
}
