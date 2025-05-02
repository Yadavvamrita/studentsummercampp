import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#fff4d9] py-2 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center px-2 sm:px-4 gap-0">
        <div className="flex-shrink-0 flex items-center font-bold m-0 p-0">
          <img src="/logo.png" alt="Dream Advance Logo" className="h-10 w-auto sm:h-16 md:h-20 bg-white p-0 sm:p-2 rounded-xl shadow border-2 border-[#ffa502]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-base sm:text-xl md:text-3xl font-bold whitespace-nowrap select-none">
            <span className="font-playfair italic text-black">Dream Advance</span>
            <span className="ml-1 sm:ml-2 text-lg sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg animate-gradient-move">Summer Camp</span>
          </div>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-2 sm:gap-4">
          <Link
            to="/register"
            className="bg-[#4169e1] text-white px-4 sm:px-8 py-2 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-[#3154b3] transition-colors text-left leading-tight shadow-md hover:scale-105 duration-200"
          >
            Student Form
          </Link>
          <Link
            to="/host-camp"
            className="bg-[#ffa502] text-white px-4 sm:px-8 py-2 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-[#e69500] transition-colors text-left leading-tight shadow-md hover:scale-105 duration-200"
          >
            School/Society Form
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center ml-1">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl focus:outline-none px-2 py-1 rounded hover:bg-yellow-200"
            aria-label="Toggle menu"
          >
            <span>{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fff4d9] shadow-lg px-2 pb-2 pt-1 flex flex-col gap-2">
          <Link
            to="/register"
            className="bg-[#4169e1] text-white px-2 py-1 rounded-full text-sm font-bold hover:bg-[#3154b3] transition-colors text-left leading-tight shadow-md hover:scale-105 duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Student Form
          </Link>
          <Link
            to="/host-camp"
            className="bg-[#ffa502] text-white px-2 py-1 rounded-full text-sm font-bold hover:bg-[#e69500] transition-colors text-left leading-tight shadow-md hover:scale-105 duration-200"
            onClick={() => setMenuOpen(false)}
          >
            School/Society Form
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 