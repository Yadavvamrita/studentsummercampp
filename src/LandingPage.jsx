import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

// Placeholder images (replace with your own assets as needed)
const avatar2 = "https://randomuser.me/api/portraits/lego/2.jpg";
const avatar3 = "https://randomuser.me/api/portraits/lego/3.jpg";
const badgeImg = "https://randomuser.me/api/portraits/lego/4.jpg";
const medalIcon = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Emoji_u1f3c6.svg";

// Arrow SVG components
const LearnArrow = () => (
  <svg className="learn-arrow" width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 30 Q60 10 110 30" stroke="#8f3fff" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L8,4 L0,8 L2,4 L0,0" fill="#8f3fff" />
      </marker>
    </defs>
  </svg>
);

const PlayArrow = () => (
  <svg className="play-arrow" width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 30 Q60 10 110 30" stroke="#19c23d" strokeWidth="4" fill="none" markerEnd="url(#arrowhead2)" />
    <defs>
      <marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L8,4 L0,8 L2,4 L0,0" fill="#19c23d" />
      </marker>
    </defs>
  </svg>
);

// Navigation links
const navLinks = [
  { label: "Home", id: "home" },
  { label: "Features", id: "features" },
  { label: "About us", id: "about" },
  { label: "Contact us", id: "contact" },
];

// Smooth scroll function
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize `useNavigate` hook

  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to /register page
  };

  return (
    <div className="landing-container">
      {/* Navigation Bar */}
      <nav className="landing-nav">
        <div className="nav-logo">
          🌞 <span className="logo-text">Summer Camp</span>
        </div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  const el = document.getElementById(link.id);
                  if (el) {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="landing-main">
        <img src="/creativity.png" alt="Creativity" className="creative-img-left" />
        <img src="/concept.png" alt="Concept" className="concept-img-right" />

        <div className="landing-content" id="home">
          <div className="heading-wrapper">
            <h1 className="landing-title">
              <span className="main-line">The best place to</span>
              <span className="second-line">
                <span className="learn-wrap">
                  <span className="learn">learn</span>
                  <LearnArrow />
                </span>
                {" and "}
                <span className="play-wrap">
                  <span className="play">play</span>
                  <PlayArrow />
                </span>
              </span>
              <span className="third-line">for Kids</span>
            </h1>
          </div>

          {/* Avatars and Badges */}
          <div className="landing-badges-row">
            <div className="avatar-group">
              <img src={avatar2} alt="avatar2" className="lego-avatar" />
              <img src={avatar3} alt="avatar3" className="lego-avatar" />
            </div>
            <div className="badge-customers">
              <img src={badgeImg} alt="badge" className="badge-img" />
              <img src={medalIcon} alt="medal" className="medal-icon" />
              <span>2k+<br />Customers</span>
            </div>
          </div>

          {/* Description */}
          <div className="landing-desc">
            Fun, learning, and adventures await your child at our Summer Camp 2025.
          </div>

          {/* Button to navigate to registration */}
          <button onClick={handleRegisterClick} className="cta-btn">
            Click to Start
          </button>
          {/* 
          Alternatively, you could use a Link:
          <Link to="/register" className="cta-btn">Click to Start</Link> 
          */}
        </div>

        {/* Placeholder sections for scrolling */}
        <div id="features" style={{ height: '300px' }}></div>
        <div id="about" style={{ height: '300px' }}></div>
        <div id="contact" style={{ height: '300px' }}></div>
      </main>
    </div>
  );
};

export default LandingPage;
