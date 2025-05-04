import { Banner } from "@/modules/Banner";
import { ContactUs } from "@/modules/ContactUs";
import { ContactInfoBar } from "@/modules/ContactUs/ContactInfoBar";
import dynamic from "next/dynamic";
import { Col } from "reactstrap";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Contact() {
  return (
    <>
      <Banner />
      <ContactInfoBar address="Ziya Gökalp, Olimpiyat Stadı Yolu No: 30/A, 34499 Başakşehir/İstanbul" phone="+90 (533) 653 61 49" email="info@ofsan.com.tr" />
      <ContactUs />
      <div className="map-container" style={{ width: "100%", height: "500px" }}>
        <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.297260100397!2d28.77053987542611!3d41.08435131473819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5445ce584b3%3A0x8af60dcf89c72858!2sOfsan%20Mimarl%C4%B1k%20Yap%C4%B1%20Market%20(Nalbur)!5e0!3m2!1str!2str!4v1746364370827!5m2!1str!2str" width="100%" height="100%" style={{ border: 0 }} aria-hidden="false"></iframe>
      </div>
    </>
  );
}
