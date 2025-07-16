import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3 className="footer-title">Raj Halder — Transforming Ideas Into Code</h3>
          
          <p className="footer-description">
            Passionate about building modern, scalable, and user-centric web applications.
            Let’s bring your ideas to life with clean code and stunning UI.
          </p>
        </div>

        
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Raj Halder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
