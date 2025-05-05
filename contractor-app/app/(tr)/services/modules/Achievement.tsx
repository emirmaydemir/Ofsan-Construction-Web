import { Container } from "@/components/Container";
import Image from "next/image";
import React from "react";

const sections = [
  {
    id: 1,
    title: "Modern Çözümlemeler",
    image: "/uploads/hero_b5c582e107.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est ullam dolorem vitae. Commodi iure voluptatibus repellendus possimus nulla. Necessitatibus mollitia cum praesentium. Repellat soluta voluptatem ratione totam accusamus corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est ullam dolorem vitae. Commodi iure voluptatibus repellendus possimus nulla. Necessitatibus mollitia cum praesentium. Repellat soluta voluptatem ratione totam accusamus corporis?",
    reverse: false,
  },
  {
    id: 2,
    title: "Yenilikçi Yaklaşımlar",
    image: "/uploads/hero_b5c582e107.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est ullam dolorem vitae. Commodi iure voluptatibus repellendus possimus nulla. Necessitatibus mollitia cum praesentium. Repellat soluta voluptatem ratione totam accusamus corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est ullam dolorem vitae. Commodi iure voluptatibus repellendus possimus nulla. Necessitatibus mollitia cum praesentium. Repellat soluta voluptatem ratione totam accusamus corporis?",
    reverse: true,
  },
  {
    id: 3,
    title: "Güçlü Altyapı",
    image: "/uploads/hero_b5c582e107.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est ullam dolorem vitae. Commodi iure voluptatibus repellendus possimus nulla. Necessitatibus mollitia cum praesentium. Repellat soluta voluptatem ratione totam accusamus corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est ullam dolorem vitae. Commodi iure voluptatibus repellendus possimus nulla. Necessitatibus mollitia cum praesentium. Repellat soluta voluptatem ratione totam accusamus corporis?",
    reverse: false,
  },
];

export const Achievement = () => {
  return (
    <section>
      <Container>
        <h1 className="mb-20">SERVICES</h1>

        <div className="space-y-20">
          {sections.map(({ id, title, image, text, reverse }) => (
            <div key={id} className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-start gap-8 md:gap-16`}>
              <div className="w-full md:w-1/2">
                <Image src={image} alt={title} width={600} height={400} className="rounded-2xl shadow-lg object-cover w-full h-auto" />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
