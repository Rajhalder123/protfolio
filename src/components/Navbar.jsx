import React, { useState, useContext } from "react";

import "./Navbar.css";
import { ThemeContext } from "../content/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav_bar" data-aos="fade-down" data-aos-duration="1000">
      <div className="left nav_items logo-box">PORTFOLIO</div>

      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      <div
        className="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
      >
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>

      <div className={`right nav_links ${isOpen ? "show" : ""}`}>
        <a href="#home" className="nav_items" onClick={() => setIsOpen(false)}>
          HOME
        </a>

        <a
          href="#skills"
          className="nav_items"
          onClick={() => setIsOpen(false)}
        >
          SKILLS
        </a>
        <a
          href="#experience"
          className="nav_items"
          onClick={() => setIsOpen(false)}
        >
          EXPERIENCE
        </a>

        <a
          href="#projects"
          className="nav_items"
          onClick={() => setIsOpen(false)}
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className="nav_items"
          onClick={() => setIsOpen(false)}
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
