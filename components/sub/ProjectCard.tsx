import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-80 h-auto transform transition-transform duration-300 hover:scale-105">
      <Image
        src={src}
        alt={title}
        width={320}
        height={192}
        className="w-full h-48 object-cover"
      />

      <div className="relative p-4">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;