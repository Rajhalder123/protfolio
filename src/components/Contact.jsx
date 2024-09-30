import React from "react";
import { FaInstagram, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      <div
        className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a href="https://www.instagram.com/raj_halderr/" target="_blank" rel="noreferrer" className="items">
          <FaInstagram className="icons" />
        </a>
        <a href="https://www.facebook.com/halderraj8000/" target="_blank" rel="noreferrer" className="items">
          <CiFacebook className="icons" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="items">
          <CiLinkedin className="icons" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="items">
          <FaTwitterSquare className="icons" />
        </a>
        <a href="https://github.com/Rajhalder123" target="_blank" rel="noreferrer" className="items">
          <FaGithubSquare className="icons" />
        </a>
        {/* Removed target="_blank" */}
        <a href="mailto:rajhalder8000@gmail.com" rel="noreferrer" className="items">
          <SiGmail className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
