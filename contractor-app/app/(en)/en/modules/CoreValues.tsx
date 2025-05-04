import React from "react";
import Image from "next/image";

export const CoreValues = () => {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.map((item, index) => {
          const isSecondItem = index === 1;
          return (
            <div key={item.title} className={`flex flex-col items-center p-8 ${isSecondItem && "bg-primary text-black"}`}>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className={`w-20 h-20 border-2 ${isSecondItem ? "border-black" : "border-white"} rounded-full flex items-center justify-center`}>
                  <Image src={item.img || "/innovation.png"} alt="icon" width={34} height={34} />
                </div>
                <h3>{item.title}</h3>
                <p className="max-w-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const data = [
  {
    img: "/excellence.png",
    title: "Excellence",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum soluta eius, ex officia magni in illum, quod expedita voluptatibus quia hic consequuntur numquam cum laborum! Officia provident doloribus vel molestias?",
  },
  {
    img: "/excellence.png",
    title: "Innovation",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum soluta eius, ex officia magni in illum, quod expedita voluptatibus quia hic consequuntur numquam cum laborum! Officia provident doloribus vel molestias?",
  },
  {
    img: "/customer.png",
    title: "Customer Focus",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum soluta eius, ex officia magni in illum, quod expedita voluptatibus quia hic consequuntur numquam cum laborum! Officia provident doloribus vel molestias?",
  },
];
