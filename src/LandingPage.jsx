import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

// Avatar and badge images
const avatar2 = "https://randomuser.me/api/portraits/lego/2.jpg";
const avatar3 = "https://randomuser.me/api/portraits/lego/3.jpg";
const badgeImg = "https://randomuser.me/api/portraits/lego/4.jpg";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Features", id: "features" },
  { label: "About us", id: "about" },
  { label: "Contact us", id: "contact" },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const LearnArrow = () => (
  <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-svg learn-arrow">
    <path d="M10 30 Q60 10 110 30" stroke="#7c3aed" strokeWidth="4" fill="none" />
    <polygon points="110,30 120,32 112,24" fill="#7c3aed" />
  </svg>
);

const PlayArrow = () => (
  <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-svg play-arrow">
    <path d="M10 30 Q60 10 110 30" stroke="#22c55e" strokeWidth="4" fill="none" />
    <polygon points="110,30 120,32 112,24" fill="#22c55e" />
  </svg>
);

const LandingPage = () => {
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="landing-container">
      {/* Navigation Bar */}
      <nav className="landing-nav">
        <div className="nav-logo">
          <span role="img" aria-label="sun">🌞</span>
          <span className="logo-text">Summer Camp</span>
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
                    setActiveLink(link.id);
                  }
                }}
                className={activeLink === link.id ? "active" : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="landing-main">
        <div className="landing-hero-row">
          <img src="/creativity.png" alt="Creativity" className="hero-img hero-img-left" />
          <div className="hero-center">
            <h1 className="landing-title">
              The best place to
              <br />
              <span className="learn-arrow-wrap">
                <span className="learn">learn</span>
                <LearnArrow />
              </span>
              {" and "}
              <span className="play-arrow-wrap">
                <span className="play">play</span>
                <PlayArrow />
              </span>
              <br />
              for Kids
            </h1>
            <div className="landing-badges-row">
              <img src={avatar2} alt="avatar2" className="lego-avatar" />
              <img src={avatar3} alt="avatar3" className="lego-avatar" />
              <div className="badge-customers">
                <img src={badgeImg} alt="badge" className="badge-img" />
                <span>2k+<br />meda Customers</span>
              </div>
            </div>
            <div className="landing-desc">
              Fun, learning, and adventures await your child at our Summer Camp 2025.
            </div>
            <button className="cta-btn" onClick={handleRegisterClick}>Click to Start</button>
          </div>
          <img src="/concept.png" alt="Concept" className="hero-img hero-img-right" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
