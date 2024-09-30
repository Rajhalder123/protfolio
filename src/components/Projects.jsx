import React from "react";
import project from './data/Projects.json'; // Ensure this path is correct
import './Projects.css'; // Import the updated CSS file

const Projects = () => {
  return (
    <>
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="row d-flex justify-content-center align-content-center">
        {project.map((data) => (
          <div key={data.key} className="project-card" data-aos="flip-right" data-aos-duration="1000">
            <img
              src={data.imageSrc}
              className="project-image"
              alt={data.title}
            />
            <div className="project-card-body">
              <h5 className="project-title">{data.title}</h5>
              <p className="project-description">{data.description}</p>
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
        ))}
      </div>
    </div>
    </>
  );
};

export default Projects;
