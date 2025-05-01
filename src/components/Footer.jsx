import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl" role="img" aria-label="sun">🌞</span>
                <div className="flex items-center gap-2 text-2xl font-black">
                  <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-transparent bg-clip-text">Dream Advance</span>
                  <span className="text-gray-200">Summer Camp</span>
                  <span className="text-secondary">2K25</span>
                </div>
              </div>
              <p className="text-gray-300">
                Empowering young minds through innovative learning experiences in collaboration with IIIT Delhi.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Home
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Register
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Login
                  </Link>
                </li>
                <li>
                  <a href="#program-structure" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Program Structure
                  </a>
                </li>
                <li>
                  <a href="#camp-fee" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Camp Fee & Offers
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 group">
                  <svg className="w-5 h-5 mt-1 text-yellow-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300 group-hover:text-yellow-400 transition-colors">IIIT Delhi Campus, New Delhi</span>
                </li>
                <li className="flex items-start space-x-3 group">
                  <svg className="w-5 h-5 mt-1 text-yellow-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300 group-hover:text-yellow-400 transition-colors">info@dreamadvance.com</span>
                </li>
                <li className="flex items-start space-x-3 group">
                  <svg className="w-5 h-5 mt-1 text-yellow-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300 group-hover:text-yellow-400 transition-colors">+91 1234567890</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to our newsletter for camp updates, offers, and announcements.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-blue-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-blue-700"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Gradient */}
      <div className="bg-gradient-to-r from-purple-600 via-teal-500 to-green-500 text-white py-6">
        <div className="container-custom">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-orange-300 transition-colors transform hover:scale-110" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
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
      </div>
    </footer>
  );
};

export default Footer; 