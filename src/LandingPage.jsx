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
              The best place to<br />
              <span className="fancy-row">
                <span className="arrowed-word">
                  <span className="learn">learn</span>
                  <svg className="arrow-svg learn-arrow" width="90" height="32" viewBox="0 0 90 32" fill="none">
                    <path d="M5 25 Q45 5 85 25" stroke="#a259e6" strokeWidth="4" fill="none"/>
                    <polygon points="75,23 89,28 80,17" fill="#a259e6"/>
                  </svg>
                </span>
                <span className="and-text">and</span>
                <span className="arrowed-word">
                  <span className="play">play</span>
                  <svg className="arrow-svg play-arrow" width="90" height="32" viewBox="0 0 90 32" fill="none">
                    <path d="M5 25 Q45 5 85 25" stroke="#22c55e" strokeWidth="4" fill="none"/>
                    <polygon points="75,23 89,28 80,17" fill="#22c55e"/>
                  </svg>
                </span>
              </span>
              <br />
              <span className="for-kids">for Kids</span>
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
