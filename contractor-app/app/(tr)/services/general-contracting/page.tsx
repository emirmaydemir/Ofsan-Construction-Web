import React from "react";
import { ServicePageContent } from "../modules/ServicePageContent";

export default function GeneralContracting() {
  return <ServicePageContent {...data} />;
}

const data = {
  title: "GENERAL CONTRACTING",
  subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, quidem. Ut repellendus eveniet sunt architecto dolore. Ipsa maxime officiis non eos, ullam in molestias. Suscipit placeat doloremque ullam corrupti harum?",
  image: "/hero.jpg",
  description: (
    <>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, distinctio hic eaque vero dicta amet reiciendis dolorem quasi! Eveniet, debitis eius commodi aliquam incidunt possimus dolor nihil voluptas obcaecati? Nam!
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, explicabo sit dolore ad suscipit earum maxime similique aliquid ea pariatur sapiente in veniam provident esse ullam asperiores? Enim, deserunt soluta!
    </>
  ),
};
