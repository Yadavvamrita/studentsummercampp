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
  { label: "Form", id: "form", isRoute: true },
];

const scrollToSection = (id, navigate) => {
  if (id === "form") {
    navigate("/form");
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const carouselImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=600&q=80",
];

const LandingPage = () => {
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();
  const [carouselIndex, setCarouselIndex] = useState(0);

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
                href={link.isRoute ? "/form" : `#${link.id}`}
                onClick={(e) => {
                  if (link.isRoute) {
                    e.preventDefault();
                    navigate("/form");
                  } else {
                    const el = document.getElementById(link.id);
                    if (el) {
                      e.preventDefault();
                      scrollToSection(link.id, navigate);
                      setActiveLink(link.id);
                    }
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
              <span className="learn" style={{ color: "#7c3aed", fontStyle: "italic", fontWeight: 700 }}>learn</span> and <span className="play" style={{ color: "#22c55e", fontStyle: "italic", fontWeight: 700 }}>play</span><br />
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
        {/* Image Carousel Section */}
        <section className="carousel-section">
          <h2 className="carousel-title">Camp Memories</h2>
          <div className="carousel-wrapper">
            <button
              className="carousel-arrow left"
              onClick={() => setCarouselIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
              aria-label="Previous image"
            >
              &#8592;
            </button>
            <img
              src={carouselImages[carouselIndex]}
              alt={`Camp memory ${carouselIndex + 1}`}
              className="carousel-image"
            />
            <button
              className="carousel-arrow right"
              onClick={() => setCarouselIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))}
              aria-label="Next image"
            >
              &#8594;
            </button>
          </div>
          <div className="carousel-dots">
            {carouselImages.map((_, idx) => (
              <span
                key={idx}
                className={`carousel-dot${carouselIndex === idx ? " active" : ""}`}
                onClick={() => setCarouselIndex(idx)}
              >
                ●
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
