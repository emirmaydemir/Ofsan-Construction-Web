"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const images = ["/parapija.jpg", "/hero2.jpg", "/hero3.jpg"];

export const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleImageChange = (newIndex: number) => {
    if (newIndex !== currentImageIndex) {
      setCurrentImageIndex(newIndex);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleImageChange((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {images.map((img, index) => (
          <div key={img} className={`absolute inset-0 transition-all duration-1000 ${index === currentImageIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}>
            <Image src={img} alt={`Carousel image ${index + 1}`} fill className="object-cover object-center" priority={index === currentImageIndex} />
          </div>
        ))}
      </div>
    </>
  );
};
