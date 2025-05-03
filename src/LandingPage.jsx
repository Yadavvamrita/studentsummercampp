import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RegistrationLinks from "./components/RegistrationLinks";
import "./LandingPage.css";
import "./index.css";

const LandingPage = () => {
  // Hero section background transition state
  const [heroBgIndex, setHeroBgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroBgIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000); // 4 seconds per image
    return () => clearInterval(interval);
  }, []);
  const heroBgImages = [
    "/per1.jpg",
    "/per2.jpg"
  ];

  // Modal state for highlights images
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Redesigned Hero Section to match provided image exactly */}
      <section style={{ minHeight: '100vh', background: '#fff', padding: 0, margin: 0 }}>
        {/* Top row: Dream Advance logo (left), IIITD logo (center), Registration buttons (right) */}
        <div
          style={{
            width: '100%',
            maxWidth: 1400,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 24,
            marginBottom: 8,
            position: 'relative',
            zIndex: 101,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          className="first-section-top-row"
        >
          {/* Dream Advance logo on the left */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <img src="/logo.png" alt="Dream Advance Logo" style={{ height: 100, width: 'auto' }} />
          </div>
          {/* IIITD logo in the center, bigger and shifted left by 2cm */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <img src="/name.jpg" alt="IIIT Delhi Logo" style={{ height: 90, width: 'auto', display: 'block', position: 'relative', left: '-2cm' }} />
          </div>
          {/* Registration buttons on the right */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 24 }}>
            <div style={{ background: '#f1f7fe', borderRadius: 8, padding: '8px 20px', display: 'inline-block', border: '3px solid #3399ff', fontWeight: 600 }}>
              <a href="/register" style={{ fontSize: '1.15rem', color: '#111', textDecoration: 'none', fontWeight: 800 }}>Student Registration</a>
            </div>
            <div style={{ background: '#f3fcf6', borderRadius: 8, padding: '8px 20px', display: 'inline-block', border: '3px solid #4caf50', fontWeight: 600 }}>
              <a href="/host-camp" style={{ fontSize: '1.15rem', color: '#111', textDecoration: 'none', fontWeight: 800 }}>School/Society Registration</a>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .first-section-top-row {
              flex-direction: column !important;
              align-items: center !important;
              gap: 1.5rem !important;
            }
            .first-section-top-row > div {
              flex: none !important;
              width: 100% !important;
              justify-content: center !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
            .first-section-top-row img[alt='IIIT Delhi Logo'] {
              left: 0 !important;
              margin: 0 auto !important;
            }
            .first-section-top-row img[alt='Dream Advance Logo'] {
              margin: 0 auto 0.5rem auto !important;
              height: 70px !important;
            }
            .first-section-top-row div[style*='gap: 24px'] {
              flex-direction: column !important;
              gap: 0.7rem !important;
              align-items: center !important;
            }
          }
        `}</style>
        {/* Main content row: event details and illustration */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 1200,
            margin: '40px auto 0 auto',
            minHeight: 420,
          }}
          className="first-section-main-row"
        >
          {/* Left: Event details */}
          <div style={{ flex: 1, minWidth: 350, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', marginTop: '8cm' }}>
            {/* SC3 Logo above content */}
            <img src="/sc3logo.jpg" alt="SC3 Logo" style={{ height: 300, width: 'auto', alignSelf: 'center', marginBottom: 24, marginTop: '-7cm' }} />
            <div style={{ fontSize: '1.6rem', color: '#111', fontWeight: 700, marginBottom: 8, marginLeft: 'calc(8px + 3.5cm)', lineHeight: 1.2, marginTop: '2cm' }}>
              Organized by Dream Advance in<br />
              collaboration with IIIT Delhi<br />
              Innovation & Incubation Center
            </div>
          </div>
          {/* Right: Illustration */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minWidth: 350, marginTop: 'calc(1.5cm + 2cm - 2cm - 1cm - 4cm - 5cm + 2cm + 1cm + 4cm + 2cm)', marginLeft: '2cm' }}>
            <img src="/main illustration.png" alt="Mountain Illustration" style={{ width: '100%', maxWidth: 900, background: '#fcfcf7', borderRadius: 6, boxSizing: 'border-box' }} />
            {/* Event details below illustration */}
            <div style={{ fontSize: '1.05rem', color: '#111', fontWeight: 600, marginTop: '24px', marginLeft: 8, textAlign: 'center', width: '100%' }}>
              Venue: IIIT Delhi Campus, New Delhi
            </div>
            <ul style={{ fontSize: '1.05rem', color: '#111', fontWeight: 500, margin: 0, paddingLeft: 0, marginBottom: 0, textAlign: 'center', width: '100%', listStyle: 'none' }}>
              <li>Batch 1: 25th May – 5th June 2025</li>
              <li>Batch 2: 15th June – 25th June 2025</li>
            </ul>
            <div style={{ fontSize: '1.05rem', color: '#111', fontWeight: 500, marginTop: 4, marginLeft: 8, textAlign: 'center', width: '100%' }}>
              Time: 09:00 AM – 12:00 PM
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) {
            .first-section-main-row {
              flex-direction: column !important;
              align-items: center !important;
              gap: 2rem !important;
            }
            .first-section-main-row > div {
              min-width: 0 !important;
              width: 100% !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
              margin-top: 0 !important;
            }
            .first-section-main-row img[alt='SC3 Logo'] {
              height: 180px !important;
              margin-top: 0 !important;
            }
            .first-section-main-row img[alt='Mountain Illustration'] {
              max-width: 100vw !important;
              margin-top: 1.2rem !important;
            }
            .first-section-main-row div[style*='marginLeft: \'2cm\''] {
              margin-left: 0 !important;
            }
            .first-section-main-row div[style*='marginLeft: \'calc(8px + 3.5cm)\''] {
              margin-left: 0 !important;
              text-align: center !important;
            }
          }
        `}</style>
      </section>

      {/* Program Structure & Tracks */}
      <section className="py-10 sm:py-14 md:py-16 bg-gray-50 mt-8 sm:mt-10 md:mt-12">
        <div className="container-custom">
          <div className="flex justify-center">
            <h2 className="section-title drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text" style={{ paddingBottom: '0.5em' }}>
              <span role="img" aria-label="tools">🛠️</span> Program Structure & Tracks
            </h2>
          </div>
          <p className="text-base sm:text-lg text-center text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 animate-fade-in-up delay-150">
            Over the course of 10 days, students can choose between two learning tracks. Each track includes theoretical sessions, guided hands-on activities, group projects, competitions, and flying/demo sessions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-yellow-50 active:scale-95 cursor-pointer">
              <h3 className="text-2xl font-bold mb-6">🚀 Track 1: Robotics + IoT + Artificial Intelligence</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Basics of electronics, sensors, and Arduino
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Introduction to robotics and automation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Build obstacle-avoiding bots
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Explore AI tools like ChatGPT, Sora, Bard
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Hands-on with Raspberry Pi and IoT integrations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Build your first AI model
                </li>
              </ul>
              <p className="mt-6 text-blue-600 font-semibold italic">
                Ideal for students who love gadgets, programming, and automation.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-50 active:scale-95 cursor-pointer">
              <h3 className="text-2xl font-bold mb-6">✈️ Track 2: Drone Tech + Aero Modelling</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Learn the science of aerodynamics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Build your own RC plane and quadcopter
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Drone frame construction, wiring, and calibration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Flight testing and challenge rounds
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Introduction to drone programming and automation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Explore real-world drone applications
                </li>
              </ul>
              <p className="mt-6 text-blue-600 font-semibold italic">
                Perfect for hands-on learners who dream of flying machines and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Participate */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title animate-fade-in-up">
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 text-transparent bg-clip-text font-extrabold typewriter-heading">Who Can Participate?</span>
          </h2>
          <h3 className="text-xl md:text-2xl text-blue-600 font-bold text-center mb-12 animate-fade-in-up delay-150">
            Students from Class IV to Class XII who are:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-orange-400 transition-colors active:border-yellow-500 animate-fade-in-up delay-200 cursor-pointer group h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center mb-6 overflow-hidden w-full">
                <img src="/sec4.jpg" alt="Learning" className="rounded-xl object-cover w-full h-56 md:h-64 transition-transform duration-300 group-hover:scale-110 animate-fade-in-up delay-300" />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-4">Curious and eager to learn by doing Experiment</h3>
                <p className="text-gray-600">
                  Start your day with hands-on exploration and real-world learning. Build, experiment, and solve problems as a team—discover new interests, develop practical skills, and grow in confidence in a fun, energetic environment.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-400 transition-colors active:border-blue-400 animate-fade-in-up delay-300 cursor-pointer group h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center mb-6 overflow-hidden w-full">
                <img src="/sec41.jpg" alt="Technology" className="rounded-xl object-cover w-full h-56 md:h-64 transition-transform duration-300 group-hover:scale-110 animate-fade-in-up delay-400" />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-4">Interested in robotics, drones, coding, or design</h3>
                <p className="text-gray-600">
                  Our sessions light up with creativity! Dive into tech tinkering, digital design labs, and interactive workshops. Collaborate, solve challenges, and bring your ideas to life in a supportive, innovative environment.
                </p>
              </div>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-green-400 transition-colors active:border-green-400 animate-fade-in-up delay-400 cursor-pointer group h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center mb-6 overflow-hidden w-full">
                <img src="/sec42.jpg" alt="Innovation" className="rounded-xl object-cover w-full h-56 md:h-64 transition-transform duration-300 group-hover:scale-110 animate-fade-in-up delay-500" />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-4">Excited to build, create, explore, and innovate</h3>
                <p className="text-gray-600">
                  Live in a vibrant, inspiring environment where innovation thrives. Our nurturing space supports young minds eager to invent, explore, and bring their ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights of the Camp */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-transparent bg-clip-text drop-shadow-lg mb-12 mx-auto w-fit border-b-4 border-yellow-300 pb-2 animate-fade-in-up transition-all duration-700">
            Highlights of the Camp
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
              <img src="/sec51.jpg" alt="IIT/NIT Experts" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer" onClick={() => openModal('/sec51.jpg')} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">🧠 Curated by IIT/NIT Experts</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-100">
              <img src="/sec52.jpg" alt="Mentor Support" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer" onClick={() => openModal('/sec52.jpg')} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">👨‍🏫 Mentor Support Throughout</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-200">
              <img src="/sec53.jpg" alt="Project Kits" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer" onClick={() => openModal('/sec53.jpg')} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">📦 Custom Project Kits Provided</h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-300">
              <img src="/sec54.jpg" alt="Study Materials" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer" onClick={() => openModal('/sec54.jpg')} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">📚 Printable Study Materials</h3>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-400">
              <img src="/sec56.jpg" alt="Competitions" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer" onClick={() => openModal('/sec56.jpg')} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">🏆 Competitions & Presentations</h3>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-500">
              <img src="/sec566.jpg" alt="Certificate" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer" onClick={() => openModal('/sec566.jpg')} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">🎓 Certificate from CoGrad & IIIT Delhi</h3>
              </div>
            </div>
          </div>

          {/* Modal for image popup */}
          {modalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeModal}>
              <div className="relative max-w-3xl w-full mx-4" onClick={e => e.stopPropagation()}>
                <button className="absolute top-2 right-2 text-white text-3xl font-bold z-10" onClick={closeModal}>&times;</button>
                <img src={modalImg} alt="Highlight Large" className="w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain transition-all duration-500" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Registration Links Section */}
      <RegistrationLinks />

      {/* Camp Fee & Offers */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-500">
        <div className="container-custom relative z-10">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-transparent bg-clip-text drop-shadow-lg transition-all duration-700">Camp Fee & Offers</h2>
          <div className="max-w-3xl mx-auto text-center text-white space-y-4">
            <p className="text-2xl font-bold">
              Standard Fee: <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-transparent bg-clip-text transition-all duration-700">₹9590 9500 + GST</span> (inclusive of kits & materials)
            </p>
            <p className="text-2xl font-bold">
              Early Bird Discount: <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-transparent bg-clip-text transition-all duration-700">₹1000 off</span> (Till 15th May 2025)
            </p>
            <p className="text-xl mt-8 font-bold">Batch Options:</p>
            <p className="text-lg">Batch 1: 25 May – 5 June 2025</p>
            <p className="text-lg">Batch 2: 15 June – 25 June 2025</p>
            <p className="text-lg italic text-yellow-200 mt-6">Limited seats per batch. First come, first served basis.</p>
          </div>
        </div>
      </section>

      {/* Glimpses from Previous Camps */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">Glimpses from Previous Camps</span>
          </h2>
          <p className="text-lg text-center text-gray-700 mb-10 font-medium">Explore photos and testimonials from our 100+ schools across India.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img src="/sec3.jpg" alt="Camp Glimpse 1" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            <img src="/G2.jpg" alt="Camp Glimpse 2" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            <img src="/G3.jpg" alt="Camp Glimpse 3" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            <img src="/G4.jpg" alt="Camp Glimpse 4" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            <img src="/G5.jpg" alt="Camp Glimpse 5" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            <img src="/G6.jpg" alt="Camp Glimpse 6" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Camp Coordinators Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-2 drop-shadow-lg animate-fade-in-up flex items-center justify-center gap-3">
            <span className="text-3xl">🎓</span> <span className="typewriter-coord">Camp Coordinators</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in-up delay-150">For any queries, feel free to reach out to:</p>
          <div className="bg-white/90 border-2 border-yellow-200 rounded-3xl shadow-2xl p-10 mb-6 mx-auto max-w-xl animate-fade-in-up delay-300 flex flex-col items-center gap-2">
            <div className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-yellow-500">👩‍💼</span> Manvi Bansal
            </div>
            <div className="text-lg text-gray-800 mb-1 flex items-center gap-2"><span className="text-blue-500">📞</span> Phone: <span className="font-semibold">9717095359</span></div>
            <div className="text-lg text-gray-800 mb-4 flex items-center gap-2"><span className="text-pink-500">✉️</span> Email: <a href="mailto:Manvibs66@gmail.com" className="text-blue-600 hover:underline">Manvibs66@gmail.com</a></div>
            <div className="text-lg text-gray-800 mb-1 flex items-center gap-2"><span className="text-green-600">🏢</span> IIIT Delhi Innovation & Incubation Center</div>
            <div className="text-lg text-gray-800 mb-1 flex items-center gap-2"><span className="text-pink-500">📍</span> IIIT Delhi Campus, New Delhi</div>
            <div className="text-lg text-gray-800 flex items-center gap-2"><span className="text-blue-500">🌐</span> <a href="https://www.dream.cograd.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.dream.cograd.in</a></div>
          </div>
        </div>
      </section>

      {/* Why Choose Dream Advance Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair flex items-center justify-center gap-3">
            <span className="typewriter-dream">Why Choose Dream Advance?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-2xl shadow p-6 border-2 border-transparent transition-all duration-300 active:border-yellow-500 cursor-pointer">
              <div className="text-2xl font-bold text-yellow-600 mb-2">50,000+ students trained | 500+ workshops conducted</div>
              <div className="text-gray-700">Dream Advance has empowered over 50,000 young minds through hands-on STEM learning, delivering more than 500 engaging workshops nationwide.</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 border-2 border-transparent transition-all duration-300 active:border-yellow-500 cursor-pointer">
              <div className="text-2xl font-bold text-yellow-600 mb-2">100+ Schools across 10+ states</div>
              <div className="text-gray-700">Our programs have reached 100+ schools in over 10 states, making quality tech education accessible to students from diverse backgrounds.</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 border-2 border-transparent transition-all duration-300 active:border-yellow-500 cursor-pointer">
              <div className="text-2xl font-bold text-yellow-600 mb-2">Endorsed by educators, innovators, and tech leaders</div>
              <div className="text-gray-700">Our initiatives are recognized and recommended by leading educators, industry innovators, and technology leaders for their impact and quality.</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 border-2 border-transparent transition-all duration-300 active:border-yellow-500 cursor-pointer">
              <div className="text-2xl font-bold text-yellow-600 mb-2">Backed by IIIT Delhi, one of India's top tech institutes</div>
              <div className="text-gray-700">Dream Advance is proudly supported by IIIT Delhi, ensuring world-class mentorship, resources, and credibility.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-6" style={{ background: 'linear-gradient(to bottom, #fffbe7 0%, #ffe082 100%)' }}>
        <div className="container-custom">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/dream.cograd/" className="text-black hover:text-orange-300 transition-colors transform hover:scale-110" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="5" stroke="black" strokeWidth="2" fill="none" />
                  <circle cx="17.5" cy="6.5" r="1.5" stroke="black" strokeWidth="2" fill="none" />
                </svg>
              </a>
              <a href="https://www.facebook.com/dreamadvance" className="text-black hover:text-orange-300 transition-colors transform hover:scale-110" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M16 8h-2a2 2 0 00-2 2v2h4l-1 4h-3v4" stroke="black" strokeWidth="2" fill="none" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@dreamadvance" className="text-black hover:text-orange-300 transition-colors transform hover:scale-110" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" fill="none" />
                  <polygon points="10,8 16,12 10,16" stroke="black" strokeWidth="2" fill="none" />
                </svg>
              </a>
            </div>

            {/* Terms and Privacy Links */}
            <div className="flex space-x-4 text-sm">
              <Link to="/terms" className="text-black hover:text-orange-300 transition-colors">Terms & Conditions</Link>
              <span className="text-black">|</span>
              <Link to="/privacy" className="text-black hover:text-orange-300 transition-colors">Privacy Policy</Link>
            </div>

            {/* Copyright */}
            <div className="text-sm text-black">
              Copyright © {new Date().getFullYear()} Summer Camp. All Rights Reserved.
            </div>
          </div>
        </div>
      </section>

      {/* Global responsive overrides for any inline styles */}
      <style>{`
        @media (max-width: 900px) {
          .first-section-top-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1.5rem !important;
          }
          .first-section-top-row > div {
            flex: none !important;
            width: 100% !important;
            justify-content: center !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .first-section-top-row img[alt='IIIT Delhi Logo'] {
            left: 0 !important;
            margin: 0 auto !important;
          }
          .first-section-top-row img[alt='Dream Advance Logo'] {
            margin: 0 auto 0.5rem auto !important;
            height: 70px !important;
          }
          .first-section-top-row div[style*='gap: 24px'] {
            flex-direction: column !important;
            gap: 0.7rem !important;
            align-items: center !important;
          }
        }
        @media (max-width: 1024px) {
          .first-section-main-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 2rem !important;
          }
          .first-section-main-row > div {
            min-width: 0 !important;
            width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            margin-top: 0 !important;
          }
          .first-section-main-row img[alt='SC3 Logo'] {
            height: 180px !important;
            margin-top: 0 !important;
          }
          .first-section-main-row img[alt='Mountain Illustration'] {
            max-width: 100vw !important;
            margin-top: 1.2rem !important;
          }
          .first-section-main-row div[style*='marginLeft: \'2cm\''] {
            margin-left: 0 !important;
          }
          .first-section-main-row div[style*='marginLeft: \'calc(8px + 3.5cm)\''] {
            margin-left: 0 !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
