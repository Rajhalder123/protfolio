import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import "./Skills.css";
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact />, level: 85 },
      { name: "HTML5", icon: <FaHtml5 />, level: 90 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 88 },
      { name: "JavaScript", icon: <FaJsSquare />, level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 80 },
      { name: "Express.js", icon: <SiExpress />, level: 78 },
      { name: "MongoDB", icon: <SiMongodb />, level: 82 },
      { name: "Firebase", icon: <SiFirebase />, level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 80 },
      { name: "GitHub", icon: <FaGithub />, level: 82 },
      { name: "Figma", icon: <FaFigma />, level: 70 },
      { name: "REST API", icon: <SiExpress />, level: 75 },
    ],
  },
];

const SkillBar = ({ level }) => {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // animation duration in ms
    const stepTime = 15; // update interval ms
    const steps = Math.ceil(duration / stepTime);
    const increment = level / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= level) {
        start = level;
        clearInterval(interval);
      }
      setWidth(start);
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(interval);
  }, [level]);

  return (
    <>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <span className="skill-percent">{count}%</span>
    </>
  );
};

const Skills = () => {
<<<<<<< HEAD
  
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">MY SKILLS</h2>
=======
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">🛠 MY SKILLS</h2>
>>>>>>> 2bbdbc8fcd857699331372607d7bdacc2dde7269

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card" data-aos="fade-up">
            <h3 className="skill-category">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div className="skill-item" key={idx}>
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-details">
                    <span className="skill-name">{skill.name}</span>
                    <SkillBar level={skill.level} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
