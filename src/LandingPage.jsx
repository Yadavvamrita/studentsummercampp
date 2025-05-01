import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LandingPage.css";
import "./index.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRegisterClick = () => {
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full h-auto md:h-20 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-b-xl z-50">
        <div className="container-custom h-full">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between h-20">
            <div className="flex-1"></div>
            <div className="flex items-center gap-3 mx-auto">
              <span className="text-4xl" role="img" aria-label="sun">🌞</span>
              <div className="flex items-center gap-2 text-3xl font-black">
                <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-transparent bg-clip-text">Dream Advance</span>
                <span className="text-gray-900">Summer Camp</span>
                <span className="text-secondary">2K25</span>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <button onClick={handleRegisterClick} className="btn-primary">Login</button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center justify-between h-16 px-4">
              {/* Mobile Logo */}
              <div className="flex items-center gap-2">
                <span className="text-2xl" role="img" aria-label="sun">🌞</span>
                <div className="flex flex-col">
                  <span className="text-lg font-black bg-gradient-to-r from-indigo-500 to-cyan-500 text-transparent bg-clip-text">Dream Advance</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-gray-900">Summer Camp</span>
                    <span className="text-sm font-bold text-secondary">2K25</span>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="px-4 pt-2 pb-3 space-y-1 bg-gradient-to-r from-yellow-50 to-orange-50 border-t border-gray-200">
                <button
                  onClick={handleRegisterClick}
                  className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* IIITD logo */}
      <div className="container-custom pt-24 pb-8">
        <img src="/name.jpg" alt="IIIT Delhi Logo" className="max-w-[320px] mx-auto rounded-xl shadow-sm" />
      </div>

      {/* Hero Section */}
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <div className="text-center lg:text-left">
              <div className="font-playfair font-black text-5xl lg:text-6xl text-yellow-500 leading-tight animate-pulse">
                SUMMER<br />CAMP<br />
                <span className="font-luckiest text-6xl lg:text-7xl">2025</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="text-lg md:text-xl font-semibold text-blue-900 space-y-4">
              <p>Organized by Dream Advance in collaboration with IIIT Delhi Innovation & Incubation Center</p>
              <p>Venue: IIIT Delhi Campus, New Delhi</p>
              <p>Dates:</p>
              <p>Batch 1: 25th May – 5th June 2025</p>
              <p>Batch 2: 15th June – 25th June 2025</p>
              <p>Time: 09:00 AM – 12:00 PM</p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="animate-bounce-slow">
              <img src="/concept.png" alt="Hero Illustration" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Program Structure & Tracks */}
      <section className="py-16 bg-gray-50 mt-40">
        <div className="container-custom">
          <h2 className="section-title bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-lg animate-fade-in-up">🛠️ Program Structure & Tracks</h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-150">
            Over the course of 10 days, students can choose between two learning tracks. Each track includes theoretical sessions, guided hands-on activities, group projects, competitions, and flying/demo sessions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-yellow-50 active:scale-95 cursor-pointer">
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

            <div className="bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-50 active:scale-95 cursor-pointer">
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
              </ul>
              <p className="mt-6 text-blue-600 font-semibold italic">
                Perfect for hands-on learners who dream of flying machines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Participate */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title animate-fade-in-up">🎯 Who Can Participate?</h2>
          <h3 className="text-xl md:text-2xl text-blue-600 font-bold text-center mb-12 animate-fade-in-up delay-150">
            Students from Class III to Class X who are:
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl active:border-yellow-500 border-2 border-transparent animate-fade-in-up delay-200 cursor-pointer group">
              <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden">
                <img src="/sec4.jpg" alt="Learning" className="rounded-xl object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 animate-fade-in-up delay-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">Curious and eager to learn by doing Experiment</h3>
              <p className="text-gray-600">
                Start your day with hands-on exploration and real-world learning. Build, experiment, and solve problems as a team—discover new interests, develop practical skills, and grow in confidence in a fun, energetic environment.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl active:border-blue-400 border-2 border-transparent animate-fade-in-up delay-300 cursor-pointer group">
              <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden">
                <img src="/sec41.jpg" alt="Technology" className="rounded-xl object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 animate-fade-in-up delay-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Interested in robotics, drones, coding, or design</h3>
              <p className="text-gray-600">
                Our sessions light up with creativity! Dive into tech tinkering, digital design labs, and interactive workshops. Collaborate, solve challenges, and bring your ideas to life in a supportive, innovative environment.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl active:border-green-400 border-2 border-transparent animate-fade-in-up delay-400 cursor-pointer group">
              <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden">
                <img src="/sec42.jpg" alt="Innovation" className="rounded-xl object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 animate-fade-in-up delay-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excited to build, create, explore, and innovate</h3>
              <p className="text-gray-600">
                Live in a vibrant, inspiring environment where innovation thrives. Our nurturing space supports young minds eager to invent, explore, and bring their ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights of the Camp */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-lg mb-12 mx-auto w-fit border-b-4 border-yellow-300 pb-2 animate-fade-in-up">Highlights of the Camp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
              <img src="/sec51.jpg" alt="IIT/NIT Experts" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">🧠 Curated by IIT/NIT Experts</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-100">
              <img src="/sec52.jpg" alt="Mentor Support" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">👨‍🏫 Mentor Support Throughout</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-200">
              <img src="/sec53.jpg" alt="Project Kits" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">📦 Custom Project Kits Provided</h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-300">
              <img src="/sec54.jpg" alt="Study Materials" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">📚 Printable Study Materials</h3>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-400">
              <img src="/sec56.jpg" alt="Competitions" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">🏆 Competitions & Presentations</h3>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-500">
              <img src="/sec566.jpg" alt="Certificate" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">🎓 Certificate from CoGrad & IIIT Delhi</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold flex items-center gap-3 mb-8 bg-gradient-to-r from-blue-600 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg">
              <span role="img" aria-label="registration" className="text-4xl animate-bounce">📝</span> 
              Registration Links
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              {/* Students Registration */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span role="img" aria-label="pointing" className="text-2xl">👉</span>
                  Students – Enroll Now
                </h3>
                <Link 
                  to="/student-registration"
                  className="inline-flex items-center text-lg text-blue-600 hover:text-blue-800 font-semibold transition-all group"
                >
                  Click here to fill the Student Registration Form
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Fee & Offers */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-500">
        <div className="container-custom relative z-10">
          <h2 className="text-4xl font-playfair font-bold text-white text-center mb-12">Camp Fee & Offers</h2>
          <div className="max-w-3xl mx-auto text-center text-white space-y-4">
            <p className="text-2xl font-bold">Standard Fee: <span className="text-yellow-300">₹9999/-</span> (inclusive of kits & materials)</p>
            <p className="text-2xl font-bold">Early Bird Discount: <span className="text-yellow-300">₹1500 off</span> (Till 15th May 2025)</p>
            <p className="text-xl mt-8 font-bold">Batch Options:</p>
            <p className="text-lg">Batch 1: 25 May – 5 June 2025</p>
            <p className="text-lg">Batch 2: 15 June – 25 June 2025</p>
            <p className="text-lg italic text-yellow-200 mt-6">Limited seats per batch. First come, first served basis.</p>
          </div>
        </div>
      </section>

      {/* Glimpses from Previous Camps */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">Glimpses from Previous Camps</span>
          </h2>
          <p className="text-lg text-center text-gray-700 mb-10 font-medium">Explore photos and testimonials from our 100+ schools across India.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img src="/sec3.jpg" alt="Camp Glimpse 1" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-300" />
            <img src="/G2.jpg" alt="Camp Glimpse 2" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-300" />
            <img src="/G3.jpg" alt="Camp Glimpse 3" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-300" />
            <img src="/G4.jpg" alt="Camp Glimpse 4" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-300" />
            <img src="/G5.jpg" alt="Camp Glimpse 5" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-300" />
            <img src="/G6.jpg" alt="Camp Glimpse 6" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* Camp Coordinators Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-yellow-600 to-orange-500 text-transparent bg-clip-text drop-shadow-lg animate-fade-in-up flex items-center justify-center gap-3">
            <span className="text-3xl">🎓</span> Camp Coordinators
          </h2>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in-up delay-150">For any queries, feel free to reach out to:</p>
          <div className="bg-white/90 border-2 border-yellow-200 rounded-3xl shadow-2xl p-10 mb-6 mx-auto max-w-xl animate-fade-in-up delay-300 flex flex-col items-center gap-2">
            <div className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-yellow-500">👩‍💼</span> Manvi
            </div>
            <div className="text-lg text-gray-800 mb-1 flex items-center gap-2"><span className="text-blue-500">📞</span> Phone: <span className="font-semibold">[Number]</span></div>
            <div className="text-lg text-gray-800 mb-4 flex items-center gap-2"><span className="text-pink-500">✉️</span> Email: <a href="mailto:[Mail]" className="text-blue-600 hover:underline">[Mail]</a></div>
            <div className="text-lg text-gray-800 mb-1 flex items-center gap-2"><span className="text-green-600">🏢</span> IIIT Delhi Innovation & Incubation Center</div>
            <div className="text-lg text-gray-800 mb-1 flex items-center gap-2"><span className="text-pink-500">📍</span> IIIT Delhi Campus, New Delhi</div>
            <div className="text-lg text-gray-800 flex items-center gap-2"><span className="text-blue-500">🌐</span> <a href="https://www.dream.cograd.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.dream.cograd.in</a></div>
          </div>
        </div>
      </section>

      {/* Why Choose Dream Advance Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-100 to-orange-50">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600 font-playfair flex items-center justify-center gap-3">
            <span role="img" aria-label="trophy">🏆</span> Why Choose Dream Advance?
          </h2>
          <div className="text-xl text-gray-800 mb-8 font-semibold">Featured on Shark Tank India Season 4</div>
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

      {/* Social Media and Copyright Section */}
      <section className="py-6 bg-gradient-to-r from-purple-600 via-teal-500 to-green-500">
        <div className="container-custom">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-orange-300 transition-colors transform hover:scale-110" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors transform hover:scale-110" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors transform hover:scale-110" aria-label="YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>

            {/* Terms and Privacy Links */}
            <div className="flex space-x-4 text-sm">
              <Link to="/terms" className="text-white hover:text-orange-300 transition-colors">Terms & Conditions</Link>
              <span className="text-white">|</span>
              <Link to="/privacy" className="text-white hover:text-orange-300 transition-colors">Privacy Policy</Link>
            </div>

            {/* Copyright */}
            <div className="text-sm text-white">
              Copyright © {new Date().getFullYear()} Summer Camp. All Rights Reserved.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
