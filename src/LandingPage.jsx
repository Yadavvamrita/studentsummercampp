import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import StudentForm from "./StudentForm";

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
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
];

const LandingPage = () => {
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const visibleCount = 4;

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < visibleCount; i++) {
      images.push(carouselImages[(carouselIndex + i) % carouselImages.length]);
    }
    return images;
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
          <div className="carousel-wrapper multi">
            <button
              className="carousel-arrow left"
              onClick={() => setCarouselIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
              aria-label="Previous image"
            >
              &#8592;
            </button>
            {getVisibleImages().map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Camp memory ${((carouselIndex + idx) % carouselImages.length) + 1}`}
                className="carousel-image multi"
              />
            ))}
            <button
              className="carousel-arrow right"
              onClick={() => setCarouselIndex((prev) => (prev + 1) % carouselImages.length)}
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
        {/* Registration Form Section */}
        <section className="landing-form-section">
          <StudentForm />
        </section>
        {/* Info Showcase Section */}
        <section className="landing-info-section">
          <div className="info-content">
            <div className="info-text">
              <h2 className="info-title">Summer Camp 2025</h2>
              <h3 className="info-subtitle">Pathways World School - The Flagship Campus</h3>
              <div className="info-underline"></div>
              <p className="info-desc">
                <b>Pathways Rediscovering Minds</b> is an exciting residential program for children in Grades 3 to 8, designed to go beyond learning and spark personal growth. More than just a camp, it's a chance for kids to explore new interests, build confidence, and develop lifelong skills—all while having a great time!<br />
                With fun, hands-on modules and a supportive environment, they'll gain independence, make new friends, and rediscover the joy of learning in a whole new way.
              </p>
            </div>
            <div className="info-image-wrap">
              <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80" alt="Showcase" className="info-image" />
            </div>
          </div>
        </section>
        {/* Program Details Section */}
        <section className="program-details-section">
          <div className="program-details-bg">
            <h2 className="program-details-title">Program Details</h2>
            <div className="program-details-content">
              <div className="program-col">
                <h3 className="program-col-title">Movers (Grades 3 & 4)</h3>
                <ul className="program-list">
                  <li><span className="program-icon">📅</span> Dates: 2 - 7 June 2025 (6 Days)</li>
                  <li><span className="program-icon">💰</span> Cost: INR 35,000</li>
                  <li><span className="program-icon">🏠</span> Type: Residential</li>
                  <li><span className="program-icon">👥</span> Open To: 20 Students</li>
                </ul>
              </div>
              <div className="program-divider"></div>
              <div className="program-col">
                <h3 className="program-col-title">Flyers (Grades 5 - 8)</h3>
                <ul className="program-list">
                  <li><span className="program-icon">📅</span> Dates: 29 May - 7 June 2025 (10 Days)</li>
                  <li><span className="program-icon">💰</span> Cost: INR 55,000</li>
                  <li><span className="program-icon">🏠</span> Type: Residential</li>
                  <li><span className="program-icon">👥</span> Open To: 40 Students</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Highlights Of The Camp Section 1 */}
        <section className="camp-highlight-section">
          <div className="highlight-content">
            <div className="highlight-image-wrap">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" alt="Creative Expressions" className="highlight-image" />
            </div>
            <div className="highlight-text">
              <h2 className="highlight-title">Highlights Of The Camp</h2>
              <h3 className="highlight-subtitle">Creative Expressions</h3>
              <p className="highlight-desc">
                Unleash your imagination and bring ideas to life! From <b>Art & Craft</b>, <b>Theatre</b>, <b>Dance</b>, and <b>Music</b>, campers explore different forms of self-expression. Whether painting a masterpiece, performing on stage, dancing to the beat, or creating music, this is the perfect space to build confidence, creativity, and teamwork!
              </p>
              <button className="highlight-btn">EXPLORE</button>
            </div>
          </div>
        </section>
        {/* Highlights Of The Camp Section 2 */}
        <section className="camp-highlight-section alt">
          <div className="highlight-content">
            <div className="highlight-text">
              <h2 className="highlight-title">Innovation & Discovery</h2>
              <p className="highlight-desc">
                Think, design, and create! Our <b>Design & Technology</b> sessions introduce campers to coding, design thinking, and hands-on innovation. Whether building prototypes, experimenting with digital creativity, or solving real-world problems, this space fuels curiosity and sparks the imagination of future innovators!
              </p>
              <button className="highlight-btn">LEARN MORE</button>
            </div>
            <div className="highlight-image-wrap">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Innovation & Discovery" className="highlight-image" />
            </div>
          </div>
        </section>
        {/* Highlights Of The Camp Section 3 */}
        <section className="camp-highlight-section">
          <div className="highlight-content">
            <div className="highlight-image-wrap">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Outdoor Adventures & Exploration" className="highlight-image" />
            </div>
            <div className="highlight-text">
              <h2 className="highlight-title">Outdoor Adventures & Exploration</h2>
              <p className="highlight-desc">
                Step into nature's classroom on our lush 32-acre campus! Our <b>Nature Exploration</b> sessions encourage campers to connect with the environment, whether at the petting zoo, through tree-planting initiatives, or outdoor learning experiences. It's all about curiosity, adventure, developing a deep love for nature and becoming a true eco-warrior!
              </p>
              <button className="highlight-btn">EXPLORE</button>
            </div>
          </div>
        </section>
        {/* Boarding Experience Section */}
        <section className="boarding-experience-section">
          <h2 className="boarding-title">Boarding Experience</h2>
          <p className="boarding-subtitle">
            Sharing everything from dinner to laughter with friends makes every moment more special! Living together for two weeks isn't just about fun—it's about building friendships, creating unforgettable memories, and making learning an adventure. This is where everyday moments turn into lifelong bonds!
          </p>
          <div className="boarding-cards-row">
            <div className="boarding-card morning">
              <div className="boarding-card-header">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Morning Activities" className="boarding-card-img" />
                <span className="boarding-card-title">MORNING ACTIVITIES</span>
              </div>
              <div className="boarding-card-desc">
                Mornings at our summer camp kick off with a burst of energy, offering an array of invigorating activities like:
                <ul>
                  <li>Trekking</li>
                  <li>Cycling</li>
                  <li>Bird Watching</li>
                  <li>Yoga</li>
                  <li>Sports</li>
                </ul>
              </div>
              <button className="boarding-card-btn morning">ENQUIRE NOW</button>
            </div>
            <div className="boarding-card evening">
              <div className="boarding-card-header">
                <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Fun Filled Evenings" className="boarding-card-img" />
                <span className="boarding-card-title">FUN FILLED EVENINGS</span>
              </div>
              <div className="boarding-card-desc">
                Evenings at our summer camp are a delightful blend of fun and camaraderie, offering a range of enjoyable activities like:
                <ul>
                  <li>Campfires</li>
                  <li>Story Telling</li>
                  <li>Socializing</li>
                  <li>Evening Games</li>
                </ul>
              </div>
              <button className="boarding-card-btn evening">ENQUIRE NOW</button>
            </div>
            <div className="boarding-card stay">
              <div className="boarding-card-header">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Stay & Accommodation" className="boarding-card-img" />
                <span className="boarding-card-title">STAY & ACCOMMODATION</span>
              </div>
              <div className="boarding-card-desc">
                Our campers will enjoy the comfort of twin-sharing spacious bedrooms, each equipped with attached bathrooms to ensure privacy and comfort. Our dedicated residence parents, experienced and caring individuals, are there to support and guide campers, ensuring a safe and nurturing environment throughout their stay.
              </div>
              <button className="boarding-card-btn stay">ENQUIRE NOW</button>
            </div>
          </div>
        </section>
        {/* Testimonials/Stats Section */}
        <section className="camp-stats-section">
          <div className="camp-stats-bg">
            <h2 className="camp-stats-title">What Campers & Parents Say About Last Year</h2>
            <div className="camp-stats-row">
              <div className="camp-stat">
                <div className="camp-stat-icon">☆</div>
                <div className="camp-stat-heading">An Unforgettable Experience!</div>
                <div className="camp-stat-value"><b>97%</b> <span>of students rated their overall camp experience as <i>Good or Excellent</i>.</span></div>
              </div>
              <div className="camp-stat">
                <div className="camp-stat-icon">🏢</div>
                <div className="camp-stat-heading">Comfortable & Welcoming Residences!</div>
                <div className="camp-stat-value"><b>98%</b> <span>of students found their stay <i>Good or Excellent</i>.</span></div>
              </div>
              <div className="camp-stat">
                <div className="camp-stat-icon">👥</div>
                <div className="camp-stat-heading">Parents Approve!</div>
                <div className="camp-stat-value"><b>95%</b> <span>of parents rated the camp as <i>Good or Excellent</i>.</span></div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog/Articles Carousel Section */}
        <section className="blog-carousel-section">
          <h2 className="blog-carousel-title">Latest Articles & Tips</h2>
          <BlogCarousel />
        </section>
        {/* Schedule Section */}
        <section className="schedule-section">
          <h2 className="schedule-title">Schedule</h2>
          <div className="schedule-table-wrapper">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Time / Date</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="2">8 AM-9 AM</td>
                  <td colSpan="5">Morning Session</td>
                </tr>
                <tr>
                  <td>G1</td><td>Maths</td><td>Physics</td><td>English</td><td>MAT</td><td>Computer science</td>
                </tr>
                <tr>
                  <td>G2</td><td>Computer science</td><td>Maths</td><td>Physics</td><td>English</td><td>MAT</td>
                </tr>
                <tr>
                  <td>G3</td><td>MAT</td><td>Computer science</td><td>Maths</td><td>Physics</td><td>English</td>
                </tr>
                <tr>
                  <td>G4</td><td>English</td><td>MAT</td><td>Computer science</td><td>Maths</td><td>Physics</td>
                </tr>
                <tr>
                  <td>G5</td><td>Physics</td><td>English</td><td>MAT</td><td>Computer science</td><td>Maths</td>
                </tr>
                <tr>
                  <td rowSpan="2">11 AM-12</td>
                  <td colSpan="5">Lunch</td>
                </tr>
                <tr>
                  <td>G1</td><td>GK</td><td>EMC</td><td>Fun Zone</td><td>Activities</td><td>Robotics</td>
                </tr>
                <tr>
                  <td>G2</td><td>Robotics</td><td>GK</td><td>EMC</td><td>Fun Zone</td><td>Activities</td>
                </tr>
                <tr>
                  <td>G3</td><td>Activities</td><td>Robotics</td><td>GK</td><td>EMC</td><td>Fun Zone</td>
                </tr>
                <tr>
                  <td>G4</td><td>Fun Zone</td><td>Activities</td><td>Robotics</td><td>GK</td><td>EMC</td>
                </tr>
                <tr>
                  <td>G5</td><td>EMC</td><td>Fun Zone</td><td>Activities</td><td>Robotics</td><td>GK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Footer Section */}
        <footer className="camp-footer">
          <div className="footer-socials">
            <a href="#" className="footer-icon" aria-label="Instagram"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="6" stroke="#f59e42" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#f59e42" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="#f59e42"/></svg></a>
            <a href="#" className="footer-icon" aria-label="Facebook"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#f59e42" strokeWidth="2"/><path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 2H12v6" stroke="#f59e42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            <a href="#" className="footer-icon" aria-label="YouTube"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="4" stroke="#f59e42" strokeWidth="2"/><path d="M10 9.5v5l5-2.5-5-2.5z" fill="#f59e42"/></svg></a>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">Terms & Conditions</a>
            <span className="footer-divider">|</span>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
          <div className="footer-copy">
            Copyright © 2025 Summer Camp. All Rights Reserved.<br />
          </div>
        </footer>
      </main>
    </div>
  );
};

// BlogCarousel component
function BlogCarousel() {
  const articles = [
    {
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // Drawing/Art class
      date: "18 Apr, 2025",
      title: "Top Summer Camps in Delhi NCR for Kids – 2025",
    },
    {
      img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80", // Outdoor activity
      date: "14 Apr, 2025",
      title: "First Time at Summer Camp? Here's What Parents Should Know",
    },
    {
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80", // Kids playing
      date: "07 Apr, 2025",
      title: "How to Reduce Screen Time for Kids Without Tantrums",
    },
    {
      img: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=600&q=80", // Group activity
      date: "01 Apr, 2025",
      title: "After-School Programs: Their Benefits & Transformative Power",
    },
    {
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // Drawing/Art class
      date: "28 Mar, 2025",
      title: "The Benefits of Music & Dance Classes for Kids",
    },
    {
      img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80", // Outdoor activity
      date: "18 Mar, 2025",
      title: "Best Spring Camps & Workshops for Kids in Delhi NCR – 2025",
    },
    {
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80", // Kids playing
      date: "12 Mar, 2025",
      title: "Safe & Eco-Friendly Holi Celebrations for Kids",
    },
    {
      img: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=600&q=80", // Group activity
      date: "16 Jan, 2025",
      title: "Complete Guide to Sports Complexes for Kids in Delhi NCR",
    },
  ];
  const visibleCount = 3;
  const [startIdx, setStartIdx] = React.useState(0);
  const intervalRef = React.useRef();

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % articles.length);
    }, 2500);
    return () => clearInterval(intervalRef.current);
  }, [articles.length]);

  const getVisibleArticles = () => {
    const cards = [];
    for (let i = 0; i < visibleCount; i++) {
      cards.push(articles[(startIdx + i) % articles.length]);
    }
    return cards;
  };

  return (
    <div className="blog-carousel-wrapper">
      {getVisibleArticles().map((article, idx) => (
        <div className="blog-card" key={idx}>
          <img src={article.img} alt={article.title} className="blog-card-img" />
          <div className="blog-card-date"><span role="img" aria-label="calendar">📅</span> {article.date}</div>
          <div className="blog-card-title">{article.title}</div>
          <button className="blog-card-btn">Read More</button>
        </div>
      ))}
    </div>
  );
}

export default LandingPage;
