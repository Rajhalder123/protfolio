import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h1>SKILLS</h1>
      <div className="items">
        {skills.map((data) => {
          console.log(data); // Debugging
          return (
            <div
              className="item"
              key={data.id}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              
              <img src={`${process.env.PUBLIC_URL}/${data.imageSrc}`} alt={data.title} />
              <h3>{data.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
