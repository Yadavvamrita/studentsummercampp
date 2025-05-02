import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#fff4d9] py-4 sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex-1"></div> {/* Left spacer */}
        <div className="flex items-center gap-3 flex-1 justify-center">
          <div className="text-3xl">
            <span className="text-[#ffa502]">🌞</span>
          </div>
          <div className="text-3xl font-bold whitespace-nowrap">
            <span className="text-[#4169e1]">Dream Advance</span>
            <span className="text-black"> Summer Camp</span>
            <span className="text-[#2ecc71]">2K25</span>
          </div>
        </div>
        <div className="flex-1 flex justify-end"> {/* Right section with login button */}
          <Link
            to="/login"
            className="bg-[#4169e1] text-white px-8 py-2 rounded-full text-lg font-bold hover:bg-[#3154b3] transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 