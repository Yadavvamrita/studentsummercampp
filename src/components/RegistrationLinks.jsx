import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationLinks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-transparent bg-clip-text mb-12 drop-shadow-lg transition-all duration-700">
          Registration Links
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Student Registration Card */}
          <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center hover:shadow-2xl border-2 border-transparent hover:border-yellow-400 transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <span className="text-5xl mb-2">👋</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center">Students – Enroll Now</h3>
            </div>
            <p className="text-gray-600 mb-6 text-center text-lg font-medium">
              Join our cutting-edge STEM summer camps and explore exciting technologies!
            </p>
            <Link
              to="/register"
              className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-md hover:from-orange-400 hover:to-yellow-400 hover:scale-105 transition-all duration-300"
            >
              Click here to fill the Student Registration Form →
            </Link>
          </div>

          {/* Host Camp Registration Card */}
          <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center hover:shadow-2xl border-2 border-transparent hover:border-yellow-400 transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <span className="text-5xl mb-2">🏫</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center">Schools & Societies – Host a Camp</h3>
            </div>
            <p className="text-gray-600 mb-6 text-center text-lg font-medium">
              Bring DreamAdvance STEM workshops to your location!
            </p>
            <Link
              to="/host-camp"
              className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-md hover:from-orange-400 hover:to-yellow-400 hover:scale-105 transition-all duration-300"
            >
              Click here to fill the Host Camp Request Form →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationLinks; 