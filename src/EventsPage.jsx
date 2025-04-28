import React, { useEffect, useRef, useState } from "react";
import "./LandingPage.css";

const eventData = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Being Artistic by himani- Mothers Day Special Workshop",
    location: "Malviya Nagar",
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "The Star Kidz-National Level Solo Song Competition",
    location: "Online",
  },
  {
    img: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=400&q=80",
    title: "The Star Kidz: Coloursmith Contest",
    location: "Online",
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "The Storry Band-Reva a Book and Baby Program (Easter Special)",
    location: "Friends colony",
  },
  {
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
    title: "Kids Science Fair",
    location: "Science Park",
  },
  {
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    title: "Robotics Workshop",
    location: "Tech Center",
  },
];

const EventsPage = () => {
  const [startIdx, setStartIdx] = useState(0);
  const intervalRef = useRef();
  const visibleCount = 4;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % eventData.length);
    }, 2500);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Get 4 visible events, wrap around if needed
  const getVisibleEvents = () => {
    const events = [];
    for (let i = 0; i < visibleCount; i++) {
      events.push(eventData[(startIdx + i) % eventData.length]);
    }
    return events;
  };

  return (
    <div className="events-bg">
      <div className="events-carousel-section">
        <h2 className="carousel-title">Upcoming Events</h2>
        <div className="events-carousel-wrapper">
          {getVisibleEvents().map((event, idx) => (
            <div className="event-card" key={idx}>
              <div className="event-img-wrap">
                <img src={event.img} alt={event.title} className="event-img" />
                <span className="event-location">{event.location}</span>
              </div>
              <div className="event-title">{event.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage; 