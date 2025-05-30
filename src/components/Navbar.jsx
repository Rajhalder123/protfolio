import React, { useState, useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../content/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav_bar" data-aos="fade-down" data-aos-duration="1000">
      <div className="left nav_items logo-box">PORTFOLIO</div>

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
        <a href="#home" className="nav_items" onClick={closeMenu}>
          HOME
        </a>
        <a href="#skills" className="nav_items" onClick={closeMenu}>
          SKILLS
        </a>
        <a href="#experience" className="nav_items" onClick={closeMenu}>
          EXPERIENCE
        </a>
        <a href="#projects" className="nav_items" onClick={closeMenu}>
          PROJECTS
        </a>
        <a href="#contact" className="nav_items" onClick={closeMenu}>
          CONTACT
        </a>

        {/* Theme Toggle button inside nav links (responsive-friendly) */}
        <button className="theme-toggle-btn" onClick={() => {
          toggleTheme();
          closeMenu(); // close menu on theme toggle
        }}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
