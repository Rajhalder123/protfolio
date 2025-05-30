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
      </div>
    </section>
  );
};

export default Contact;
