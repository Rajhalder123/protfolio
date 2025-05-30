import React from "react";
import projectData from "./data/Projects.json"; // Make sure the path is correct
import "./Projects.css";
const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h1 className="projects-title">PROJECTS</h1>

      <div className="projects-grid">
        {projectData.map((data) => (
          <div
            key={data.key}
            className="project-card"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img
              src={data.imageSrc}
              alt={data.title}
              className="project-image"
              loading="lazy"
            />
            <div className="project-card-body">
              <h3 className="project-title">{data.title}</h3>
              <p className="project-description">{data.description}</p>
              <div className="project-buttons">
                <a
                  href={data.demo}
                  className="project-button demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href={data.source}
                  className="project-button code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;