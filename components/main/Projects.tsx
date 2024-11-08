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
      <div className="h-full w-full flex flex-wrap gap-10 px-10 justify-center">
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
          title="Real-Time Communication"
          description="WebRTC and Socket.io project enables real-time, peer-to-peer communication, allowing users to seamlessly engage in video, audio, and data exchanges over the web. By integrating WebRTC with Socket.io for efficient signaling and event-driven communication."
        />
         <ProjectCard
          src="/project4.png"
          title="Interactive E-Learning Platform for Kids"
          description="Graines d'Entrepreneur is an engaging e-learning platform designed to cultivate entrepreneurial skills in young learners. Tailored specifically for children, it combines interactive learning modules, creative exercises, and hands-on activities that inspire critical thinking and innovation"
        />
        <ProjectCard
          src="/projects-3.png"
          title="3D portfolio website"
          description="3D Portfolio! Dive into a world where imagination meets innovation. From stunning visualizations and realistic renderings to captivating animations."
        />
      </div>
    </div>
  );
};

export default Projects;