import Image from "next/image";
import React from "react";
import { LabelWithIcon } from "./LabelWithIcon";

interface ProjectProps {
  title: string;
  year: number;
  location: string;
  images: string[];
}

export const Project = ({ title, year, location, images }: ProjectProps) => {
  return (
    <div>
      <div className="relative h-56 w-full transform transition-transform hover:scale-105 hover:opacity-70">
        <Image src={images[0]} alt="project image" fill className="object-cover" />
        <div className="absolute bottom-1 right-1 gap-1">
          <div className="flex gap-1">
            <div className="flex items-center gap-2 p-2 bg-white">
              <Image src="/location.png" alt="location" width={24} height={24} />
              <p className="text-sm">{location}</p>
            </div>

            <LabelWithIcon text={location} icon="/location.png" alt="location" />
            <LabelWithIcon text={year} icon="/calendar.png" alt="calendar" />

            <div className="flex items-center gap-2 p-2 bg-white">
              <Image src="/calendar.png" alt="calendar" width={24} height={24} />
              <p className="text-sm">{year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
