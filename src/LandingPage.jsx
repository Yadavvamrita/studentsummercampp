import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RegistrationLinks from "./components/RegistrationLinks";
import "./LandingPage.css";
import "./index.css";

const LandingPage = () => {
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
      {/* Top Section (reverted to previous state) */}
      <section
        className="first-section-responsive"
        style={{
          width: '100vw',
          height: 'auto',
          background: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
          margin: 0,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: 0,
          paddingBottom: '-10cm',
        }}
      >
        <div
          className="first-section-main-row"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          {/* sc20252.png - left, moved 2cm right and up by 1cm */}
          <img src="/sc20252.png" alt="Summer Camp 2025" style={{ height: 200, width: 'auto', flexShrink: 0, marginLeft: '2cm', marginTop: '-1cm' }} />

          {/* Center: Logo group, reduced size and moved right */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 32, marginLeft: '2cm' }}>
            <img src="/Dasc.png" alt="Dream Advance" style={{ height: 90, width: 'auto', flexShrink: 0, marginLeft: '1cm', marginTop: '-1cm' }} />
          </div>

          {/* Registration Buttons - right */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12, marginLeft: '2cm', marginTop: '-1cm' }}>
            <a href="/register" style={{ background: 'none', height: 48, display: 'flex', alignItems: 'center', padding: '0 32px', fontWeight: 600, fontSize: '1.1rem', color: '#111', textDecoration: 'none', boxShadow: '0 1px 4px rgba(51,153,255,0.07)', border: 'none', borderRadius: 0, whiteSpace: 'nowrap', outline: 'none' }}>Student Registration</a>
            <a href="/host-camp" style={{ background: 'none', height: 48, display: 'flex', alignItems: 'center', padding: '0 32px', fontWeight: 600, fontSize: '1.1rem', color: '#111', textDecoration: 'none', boxShadow: '0 1px 4px rgba(76,175,80,0.07)', border: 'none', borderRadius: 0, whiteSpace: 'nowrap' }}>School/Society Registration</a>
          </div>
        </div>
      </section>

      {/* Custom Hero Section as per user image and description */}
      <section style={{ minHeight: '100vh', background: '#fff', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        {/* Middle Row: Logos and Name */}
        <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 48 }}>
          {/* Center: sc3logoc.png */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/sc3logoc.png" alt="SC3 Logo" style={{ height: 420, width: 'auto', marginBottom: 8, marginTop: '-3cm', marginLeft: '2cm' }} />
          </div>
          {/* Right of Center: mainlogo.png */}
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 48 }}>
            <img src="/mainlogo.png" alt="Main Logo" style={{ height: 650, width: 'auto', marginLeft: '3cm', marginTop: '-2cm' }} />
          </div>
        </div>
      </section>

      {/* Summer Camp IIITD 2024 Info Section */}
      <section style={{ width: '100vw', minHeight: 'auto', background: '#949494', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 0' }}>
        <div style={{ background: '#fff', borderRadius: '24px', boxShadow: '0 2px 16px rgba(0,0,0,0.18)', maxWidth: 1000, width: '100%', padding: '2.5rem 2.5rem 2.5rem 2.5rem', margin: '0 1rem', textAlign: 'left' }}>
          <h1 style={{ fontFamily: 'inherit', fontWeight: 900, color: '#3b5be4', fontSize: '2.5rem', textAlign: 'center', marginBottom: '1.2rem', letterSpacing: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.7rem' }}>
            <span role="img" aria-label="sun">🌞</span> Dream Advance Summer Camp 2025
          </h1>
          <div style={{ fontSize: '1.1rem', color: '#222', marginBottom: '1.2rem', fontWeight: 500, textAlign: 'center' }}>
            Organized by Dream Advance in collaboration with <b>IIIT Delhi Innovation & Incubation Center</b><br />
            <b>Venue:</b> IIIT Delhi Campus, New Delhi
          </div>
          <div style={{ fontSize: '1.1rem', color: '#222', marginBottom: '1.2rem', textAlign: 'center' }}>
            <b>Dates:</b><br />
            Batch 1: 25th May – 5th June 2025<br />
            Batch 2: 15th June – 25th June 2025<br />
            <b>Time:</b> 09:00 AM – 12:00 PM
          </div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#2563eb', marginBottom: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span role="img" aria-label="about">🧩</span> About the Camp
          </h2>
          <p style={{ marginBottom: '1.2rem', color: '#444' }}>
            The Dream Advance Summer Camp 2025 is an immersive, project-based learning experience aimed at nurturing curiosity and creativity in school students (Grade III and above). Hosted at the prestigious IIIT Delhi Campus, this 10-day residential camp offers two exciting tracks focusing on emerging technologies through fun, hands-on activities.<br /><br />
            Aligned with NEP 2020 and NCF 2023, Dream Advance bridges the gap between textbook learning and real-world application by introducing students to Robotics, IoT, AI, Drone Tech, and more — all under the guidance of expert mentors from IITs and NITs.
          </p>
        </div>
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
        html, body {
          max-width: 100vw;
          overflow-x: hidden;
        }
        .container-custom {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        section {
          width: 100vw;
          box-sizing: border-box;
        }
        @media (max-width: 1200px) {
          .container-custom {
            max-width: 98vw;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }
        @media (max-width: 1024px) {
          .first-section-main-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1.2rem !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            width: 100vw !important;
            margin-top: 0 !important;
          }
          .first-section-main-row > div,
          .first-section-main-row img {
            min-width: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            text-align: center !important;
            position: static !important;
          }
          .first-section-main-row img {
            max-width: 95vw !important;
            height: auto !important;
            display: block !important;
            margin: 0.5rem auto !important;
            flex-shrink: 1 !important;
          }
          .first-section-main-row a {
            width: 95vw !important;
            max-width: 350px !important;
            margin: 0.5rem auto !important;
            display: block !important;
            text-align: center !important;
            font-size: 1.1rem !important;
          }
          .first-section-main-row > div {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0.7rem !important;
            width: 100% !important;
          }
          .first-section-heading {
            margin-top: 1.2rem !important;
            margin-bottom: 0.5rem !important;
            font-size: 2.2rem !important;
            text-align: center !important;
          }
          .first-section-logos {
            margin-bottom: 0.5rem !important;
            gap: 1.2rem !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          .first-section-registration {
            margin-bottom: 0.5rem !important;
            gap: 0.5rem !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .first-section-hero-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1.2rem !important;
            width: 100% !important;
            margin: 0 !important;
          }
          .first-section-hero-row > div {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            margin: 0 !important;
            flex-direction: column !important;
          }
          .first-section-hero-row img {
            max-width: 80vw !important;
            height: auto !important;
            margin: 0.5rem auto !important;
            display: block !important;
          }
          /* General section padding for all sections */
          section {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          h1, h2, h3, h4 {
            word-break: break-word;
            font-size: 1.2em !important;
          }
        }
        @media (max-width: 900px) {
          .container-custom {
            max-width: 100vw;
            padding-left: 0.2rem;
            padding-right: 0.2rem;
          }
          section {
            padding-left: 0.2rem !important;
            padding-right: 0.2rem !important;
            padding-top: 1.2rem !important;
            padding-bottom: 1.2rem !important;
          }
        }
        @media (max-width: 600px) {
          .first-section-main-row {
            gap: 0.7rem !important;
          }
          .first-section-main-row img {
            max-width: 98vw !important;
          }
          .first-section-main-row a {
            max-width: 98vw !important;
            font-size: 1rem !important;
            padding: 0.5rem 1rem !important;
          }
          .first-section-heading {
            font-size: 1.3rem !important;
            margin-top: 0.7rem !important;
          }
          section {
            padding-left: 0.1rem !important;
            padding-right: 0.1rem !important;
            padding-top: 0.7rem !important;
            padding-bottom: 0.7rem !important;
          }
        }
        /* Responsive grid for highlights, program structure, etc. */
        @media (max-width: 900px) {
          .grid, .grid-cols-1, .md\:grid-cols-2, .lg\:grid-cols-3 {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.2rem !important;
          }
        }
        @media (max-width: 600px) {
          .grid, .grid-cols-1, .md\:grid-cols-2, .lg\:grid-cols-3 {
            gap: 0.7rem !important;
          }
        }
        /* Responsive images in all sections */
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
