import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import pdf from '../pdf/resume.pdf';
import hero from './data/hero.json';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Raj Halder",
        "I'm a full stack developer",
        "Let's code something amazing together!",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      {/* Left Section */}
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        {/* Provide fallback content for accessibility */}
        <h1 ref={typedRef}>Welcome to my profile</h1>
        <a
          href={pdf}
          download="Resume.pdf"
          className="btn btn-outline-warning my-3"
        >
          Download Resume
        </a>
      </div>

      {/* Right Section */}
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img src={`/assets/${hero.imgSrc}`} alt="hero"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
