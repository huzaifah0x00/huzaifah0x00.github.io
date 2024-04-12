import { Fragment, useState } from "react";

import contactPlus1 from "@/public/portfolio-content/contactplus/Reports.png";
import contactPlus2 from "@/public/portfolio-content/contactplus/Department.png";
import contactPlus3 from "@/public/portfolio-content/contactplus/robot.png";
import contactPlus4 from "@/public/portfolio-content/contactplus/chat.png";
import contactPlus5 from "@/public/portfolio-content/contactplus/close ticket chat.png";

import vgpro1 from "@/public/portfolio-content/vgpro/vgpro1.png";
import vgpro2 from "@/public/portfolio-content/vgpro/vgpro2.jpg";
import vgpro3 from "@/public/portfolio-content/vgpro/vgpro3.jpg";
import vgpro4 from "@/public/portfolio-content/vgpro/vgpro4.jpg";

import Project from "./project";

const portfolioData = {
  projects: [
    {
      id: "contactplus",
      title: "ContactPlus+",
      description: "A customer support software for a Services provider company, using WhatsApp as a communication medium.",
      technologies: ["Angular + Material", "NestJS + MongoDB", "WhatsApp API"],
      features: ["Real-time Chat", "Customizable Chat Bot", "Ticketing System", "Queue Management System", "Portuguese Localization"],
      images: [
        { src: contactPlus1, alt: "ContactPlus-portfolio" },
        { src: contactPlus2, alt: "ContactPlus-portfolio" },
        { src: contactPlus3, alt: "ContactPlus-portfolio" },
        { src: contactPlus4, alt: "ContactPlus-portfolio" },
        { src: contactPlus5, alt: "ContactPlus-portfolio" },
      ],
    },
    {
      id: "vgpro",
      title: "VGPro",
      description: "An app for a company in France specializing in periodic verification of Heavy Machinery to minimize accident risks.",
      technologies: ["Flutter", "Firebase (Firestore, Push Notifications)"],
      features: ["Push Notifications", "Dynamic forms UI based on google forms json format"],
      images: [
        { src: vgpro1, alt: "vgpro-portfolio", height: 500 },
        { src: vgpro2, alt: "vgpro-portfolio", height: 500 },
        { src: vgpro3, alt: "vgpro-portfolio", height: 500 },
        { src: vgpro4, alt: "vgpro-portfolio", height: 500 },
      ],
    },
  ],
};

export function PortfolioSection() {
  const [activeProject, setActiveProject] = useState("");

  return (
    <article id="portfolio-section" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1rem" }}>
      <header style={{ display: "block" }}>
        <h2>Projects</h2>
        {portfolioData.projects.map((project) => (
          <h5 key={project.id}>
            <a
              className={activeProject === project.id ? "active" : ""}
              href={`#project-${project.id}`}
              onClick={() => setActiveProject(project.id)}
            >
              {project.title}
            </a>
          </h5>
        ))}
      </header>

      <div style={{ display: "grid", gap: "1rem" }}>
        {portfolioData.projects.map((project) => (
          <Fragment key={project.id}>
            <Project
              id={`project-${project.id}`}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              features={project.features}
              images={project.images}
              onVisible={() => setActiveProject(project.id)}
            />
            <div className="divider"></div>
          </Fragment>
        ))}
      </div>
    </article>
  );
}
