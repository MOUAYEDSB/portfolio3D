import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/projrt-1.webp"
          title="HealthCab website"
          description="HealthCab is your premier destination for reliable transportation services tailored to the healthcare sector. With a focus on safety, comfort, and efficiency."
        />
        <ProjectCard
          src="/project-2.png"
          title="ShopSmart website"
          description="ShopSmart is your one-stop destination for all your online shopping needs. Browse through our wide range of products"
        />
         <ProjectCard
          src="/webrtc.png"
          title="3D portfolio website"
          description="3D Portfolio! Dive into a world where imagination meets innovation. From stunning visualizations and realistic renderings to captivating animations."
        />
        <ProjectCard
          src="/project-3.png"
          title="3D portfolio website"
          description="3D Portfolio! Dive into a world where imagination meets innovation. From stunning visualizations and realistic renderings to captivating animations."
        />
      </div>
    </div>
  );
};

export default Projects;