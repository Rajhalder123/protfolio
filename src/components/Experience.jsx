import React from "react";
import experience from "./data/experience.json";
import "./Experience.css";

const Experience = () => {
  const mainExperiences = experience.filter(
    (exp) =>
      !["Fotoflex App", "Chatty App", "QR Code Generator"].includes(exp.organisation)
  );

  const inHandProjects = experience.filter(
    (exp) =>
      ["Fotoflex App", "Chatty App"].includes(exp.organisation)
  );

  const frontendProjects = experience.filter(
    (exp) => exp.organisation === "QR Code Generator"
  );

  const renderSection = (title, items) => (
    <div className="experience-section">
<<<<<<< HEAD
      {items.map(
        (
          {
            id,
            role,
            organisation,
            startDate,
            endDate,
            experiences,
            imageSrc,
            demo,
            source,
          },
          index
        ) => (
          <article
            key={id}
            className="experience-card"
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            data-aos-duration="800"
          >
=======
      
      {items.map(
        ({ id, role, organisation, startDate, endDate, experiences, imageSrc, demo, source }) => (
          <article
            key={id}
            className="experience-card"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            

>>>>>>> 2bbdbc8fcd857699331372607d7bdacc2dde7269
            <h4 className="experience-org-date">
              {organisation && (
                <span className="experience-org">{organisation} | </span>
              )}
              <span className="experience-date">
                {startDate} - {endDate}
              </span>
            </h4>

            <ul className="experience-list">
<<<<<<< HEAD
              {experiences.map((exp, i) => (
                <li key={i}>{exp}</li>
              ))}
            </ul>
=======
              {experiences.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>

          
>>>>>>> 2bbdbc8fcd857699331372607d7bdacc2dde7269
          </article>
        )
      )}
    </div>
  );

  return (
    <section id="experience" aria-label="Work and project experience section">
      <h1>EXPERIENCE</h1>
<<<<<<< HEAD
=======

>>>>>>> 2bbdbc8fcd857699331372607d7bdacc2dde7269
      {renderSection("Professional & Club Experience", mainExperiences)}
      {renderSection("In-Hand Projects (Full Stack)", inHandProjects)}
      {renderSection("Frontend Project", frontendProjects)}
    </section>
  );
};

export default Experience;
