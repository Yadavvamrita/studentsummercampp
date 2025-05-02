import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationLinks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Registration Links
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Student Registration Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">👋</span>
              <h3 className="text-2xl font-bold">Students – Enroll Now</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Join our cutting-edge STEM summer camps and explore exciting technologies!
            </p>
            <Link
              to="/register"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Click here to fill the Student Registration Form →
            </Link>
          </div>

          {/* Host Camp Registration Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🏫</span>
              <h3 className="text-2xl font-bold">Schools & Societies – Host a Camp</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Bring DreamAdvance STEM workshops to your location!
            </p>
            <Link
              to="/host-camp"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
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