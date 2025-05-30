import React, { useRef, useEffect, useState, useContext } from 'react';
import Typed from 'typed.js';
import pdf from '../pdf/resume.pdf';
import { ThemeContext } from '../content/ThemeContext';
import { db } from '../firebase';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import CountUp from 'react-countup';


const strings = [
  "Hi, I'm Raj Haldar 👋",
  "Full Stack Web Developer 💻",
  "Turning Ideas into Scalable Solutions 🚀",
  "Empowering the Web with MERN Stack 🔧",
];

const quotes = [
  "“Code is not just code, it's your digital signature.”",
  "“Build to solve, not just to deploy.”",
  "“Design with clarity, develop with precision.”",
  "“Chasing bugs one line at a time.”"
];

const backgroundsLight = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
  'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
  'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
];

const backgroundsDark = [
  'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
  'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
  'linear-gradient(135deg, #222222 0%, #333333 100%)',
  'linear-gradient(135deg, #2b2b2b 0%, #444444 100%)',
];

const Home = () => {
  const typedRef = useRef(null);
  const [currentTypedIndex, setCurrentTypedIndex] = useState(0);
  const [visitorCount, setVisitorCount] = useState(null);
  const { theme } = useContext(ThemeContext);
  const imageSrc = 'assets/hero/hero3.png';

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
      onStringTyped: (arrayPos) => {
        setCurrentTypedIndex(arrayPos);
      },
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        const visitorDoc = doc(db, "visitors", "count");
        const docSnap = await getDoc(visitorDoc);

        if (docSnap.exists()) {
          await updateDoc(visitorDoc, { count: increment(1) });
          const updatedSnap = await getDoc(visitorDoc);
          setVisitorCount(updatedSnap.data().count);
        } else {
          await setDoc(visitorDoc, { count: 1 });
          setVisitorCount(1);
        }
      } catch (error) {
        console.error("Error updating visitor count:", error);
      }
    };

    updateVisitorCount();
  }, []);

  

  return (
    <section
      id="home"
      className={`home-section ${theme === 'dark' ? 'dark' : ''}`}
      style={{
        background: theme === 'dark' ? backgroundsDark[currentTypedIndex] : backgroundsLight[currentTypedIndex],
        transition: 'background 0.8s ease-in-out',
        color: theme === 'dark' ? '#eee' : '#111',
      }}
    >
      <div className="home-container">
        <div className="home-left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 className="typed-heading">
            <span ref={typedRef} aria-label="Typing role" />
          </h1>

          <p className="home-intro">
            I'm <strong>Raj Haldar</strong>, a MERN stack developer dedicated to delivering fast, scalable, and user-centric web solutions. My goal? Turning complex challenges into simple, elegant digital experiences.
          </p>

          <p className="home-highlight">
            I design modern frontends and build robust backends. Whether it's a dynamic startup idea or an enterprise-grade platform — I bring it to life with code.
          </p>

          <blockquote className="developer-quote">
            <em>{quotes[currentTypedIndex]}</em>
          </blockquote>

          <div className="cta-buttons">
            <a href="#projects" className="cta-btn">🚀 View Projects</a>
            <a href={pdf} download="Raj_Haldar_Resume.pdf" className="download-btn">📄 Resume</a>
          </div>

        
  <p className="visitor-count" style={{ marginTop: '2rem', fontWeight: '600' }}>
  Total Visitors:{' '}
  {visitorCount !== null ? (
    <CountUp
      start={0}
      end={visitorCount}
      duration={2}
      separator=","
      delay={0.3}
    />
  ) : (
    'Loading...'
  )}
</p>



        </div>

        <div className="home-right" data-aos="fade-up-left" data-aos-duration="1000">
          <img
            src={`${process.env.PUBLIC_URL}/${imageSrc}`}
            alt="Raj Haldar - Full Stack Developer"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
