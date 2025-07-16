<<<<<<< HEAD
import React, { useContext } from "react";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { ThemeContext } from "../content/ThemeContext"; // adjust path as needed

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const containerStyle = {
    padding: "4rem 1rem",
    background: isDark ? "#121212" : "#2c2c7a",
   
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "800",
    marginBottom: "2.5rem",
    letterSpacing: "1px",
    color: isDark ? "white" : "#ebeef4ff",
  };

  const iconsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "2rem",
    transition: "all 0.3s ease-in-out",
  };

  const iconStyle = {
    fontSize: "3rem",
    color: isDark ? "#f1f5f9" : "#1e293b",
    transition: "transform 0.3s ease, color 0.3s ease",
  };

  const hoverEffect = {
    transform: "scale(1.15)",
    color: isDark ? "#38bdf8" : "#0ea5e9",
  };

  return (
    <section style={containerStyle} id="contact">
      <h1 style={titleStyle}>CONTACT ME</h1>
      <div
        style={iconsContainerStyle}
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        {[
          {
            href: "https://www.instagram.com/raj_halderr/",
            Icon: FaInstagram,
            label: "Instagram",
          },
          {
            href: "https://www.facebook.com/halderraj8000/",
            Icon: CiFacebook,
            label: "Facebook",
          },
          {
            href: "https://www.linkedin.com",
            Icon: CiLinkedin,
            label: "LinkedIn",
          },
          {
            href: "https://github.com/Rajhalder123",
            Icon: FaGithubSquare,
            label: "GitHub",
          },
          {
            href: "mailto:rajhalder8000@gmail.com",
            Icon: SiGmail,
            label: "Email",
          },
        ].map(({ href, Icon, label }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            style={{ transition: "all 0.3s ease" }}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.firstChild.style, hoverEffect)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.firstChild.style, iconStyle)
            }
          >
            <Icon style={{ ...iconStyle }} />
          </a>
        ))}
=======
import React from "react";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <h1 className="contact-title">CONTACT ME</h1>
      <div
        className="contact-icons"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a
          href="https://www.instagram.com/raj_halderr/"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
          aria-label="Instagram"
        >
          <FaInstagram className="contact-icon" />
        </a>
        <a
          href="https://www.facebook.com/halderraj8000/"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
          aria-label="Facebook"
        >
          <CiFacebook className="contact-icon" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
          aria-label="LinkedIn"
        >
          <CiLinkedin className="contact-icon" />
        </a>
        <a
          href="https://github.com/Rajhalder123"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
          aria-label="GitHub"
        >
          <FaGithubSquare className="contact-icon" />
        </a>
        <a
          href="mailto:rajhalder8000@gmail.com"
          rel="noreferrer"
          className="contact-item"
          aria-label="Email"
        >
          <SiGmail className="contact-icon" />
        </a>
>>>>>>> 2bbdbc8fcd857699331372607d7bdacc2dde7269
      </div>
    </section>
  );
};

export default Contact;
