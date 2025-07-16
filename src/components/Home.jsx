import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../content/ThemeContext";
import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import CountUp from "react-countup";
import resume from "../pdf/resume.pdf";

const Home = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        const ref = doc(db, "visitors", "count");
        const snap = await getDoc(ref);
        if (snap.exists()) {
          await updateDoc(ref, { count: increment(1) });
          const newSnap = await getDoc(ref);
          setVisitorCount(newSnap.data().count);
        } else {
          await setDoc(ref, { count: 1 });
          setVisitorCount(1);
        }
      } catch (err) {
        console.error("Visitor count error:", err);
      }
    };

    updateVisitorCount();
    setTimeout(() => setIsVisible(true), 200);

    const handleMouseMove = (e) => {
      if (Math.random() < 0.1) {
        createInteractiveBubble(e.clientX, e.clientY);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const createInteractiveBubble = (x, y) => {
    const bubble = document.createElement("div");
    bubble.className = "interactive-bubble";
    bubble.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${Math.random() * 30 + 10}px;
      height: ${Math.random() * 30 + 10}px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10;
      backdrop-filter: blur(4px);
      animation: floatUp 3s ease-out forwards;
    `;
    document.body.appendChild(bubble);
    setTimeout(() => bubble.remove(), 3000);
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10%, 90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }

        @keyframes floatUp {
          0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .home-container {
          animation: ${isVisible ? "fadeInUp 0.8s ease-out" : "none"};
        }

        .action-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .name-highlight {
          background: linear-gradient(135deg, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .welcome-container {
          position: relative;
          min-height: 100vh;
          background: ${isDark ? "#121212" : "#2c2c7a"};
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 2rem;
        }

        .bubbles, .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .bubble, .floating-element {
          position: absolute;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }

        .bubble {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: float 15s infinite linear;
        }

        .floating-element {
          background: rgba(255, 255, 255, 0.05);
          animation: floatSlow 20s infinite ease-in-out;
        }

        .bubble:nth-child(1) { left: 10%; width: 80px; height: 80px; animation-delay: 0s; }
        .bubble:nth-child(2) { left: 20%; width: 60px; height: 60px; animation-delay: 2s; }
        .bubble:nth-child(3) { left: 35%; width: 100px; height: 100px; animation-delay: 4s; }
        .bubble:nth-child(4) { left: 50%; width: 120px; height: 120px; animation-delay: 6s; }
        .bubble:nth-child(5) { left: 70%; width: 90px; height: 90px; animation-delay: 8s; }
        .bubble:nth-child(6) { left: 85%; width: 70px; height: 70px; animation-delay: 10s; }
        .bubble:nth-child(7) { left: 5%; width: 110px; height: 110px; animation-delay: 12s; }
        .bubble:nth-child(8) { left: 75%; width: 50px; height: 50px; animation-delay: 14s; }

        .floating-element:nth-child(1) { top: 20%; left: 10%; width: 40px; height: 40px; animation-delay: 0s; }
        .floating-element:nth-child(2) { top: 60%; left: 80%; width: 60px; height: 60px; animation-delay: 5s; }
        .floating-element:nth-child(3) { top: 80%; left: 20%; width: 30px; height: 30px; animation-delay: 10s; }
        .floating-element:nth-child(4) { top: 30%; left: 70%; width: 50px; height: 50px; animation-delay: 15s; }

        @media (max-width: 768px) {
          .buttons {
            flex-direction: column;
          }
          .action-button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <section id="home" className="welcome-container">
        <div className="bubbles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bubble"></div>
          ))}
        </div>

        <div className="floating-elements">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="floating-element"></div>
          ))}
        </div>

        <div
          className="home-container"
          style={{
            maxWidth: "900px",
            width: "100%",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            padding: "3rem",
            borderRadius: "1.25rem",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 20px 45px rgba(0,0,0,0.1)",
            textAlign: "left",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.25rem, 6vw, 3rem)",
              fontWeight: 800,
              marginBottom: "1.25rem",
              color: "#ffffff",
              lineHeight: "1.2",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            Hi, I'm <span className="name-highlight">Raj Haldar</span>
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "2rem",
              lineHeight: "1.8",
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
            }}
          >
            A motivated and detail-oriented{" "}
            <strong>MERN Stack Developer</strong> with a{" "}
            <strong>B.Tech in Information Technology</strong>. I'm passionate
            about building clean, scalable, and user-centric web applications.
            Skilled in <strong>React.js</strong>, <strong>Node.js</strong>,{" "}
            <strong>MongoDB</strong>, and <strong>Tailwind CSS</strong>, I
            translate ideas into responsive, intuitive digital products.
            Currently expanding my skills in{" "}
            <strong>Python Full Stack Development</strong>.
          </p>

          <div
            className="buttons"
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            <a
              href="#projects"
              className="action-button"
              style={buttonStyle("rgba(255, 255, 255, 0.2)")}
            >
              Explore Projects
            </a>
            <a
              href={resume}
              download="Raj_Haldar_Resume.pdf"
              className="action-button"
              style={buttonStyle("rgba(0, 0, 0, 0.2)")}
            >
              📄 Download Resume
            </a>
          </div>

          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "2.5rem",
              paddingTop: "1rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: 1.6,
              width: "100%",
            }}
          >
            <span
              style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
            >
              <span>Total Visitors:</span>
              <span style={{ color: "#10b981", fontWeight: "800" }}>
                {visitorCount !== null ? (
                  <CountUp end={visitorCount} duration={2} separator="," />
                ) : (
                  "Loading..."
                )}
              </span>
            </span>
            <span style={{ color: "#1f829dff" }}> Thank You for visiting!</span>
          </p>
        </div>
      </section>
    </>
  );
};

// Extracted button style
const buttonStyle = (bgColor) => ({
  background: bgColor,
  backdropFilter: "blur(10px)",
  padding: "0.85rem 1.6rem",
  borderRadius: "0.75rem",
  color: "#ffffff",
  fontWeight: 600,
  textDecoration: "none",
  transition: "all 0.3s ease",
  flex: "1 1 220px",
  textAlign: "center",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
});

export default Home;
