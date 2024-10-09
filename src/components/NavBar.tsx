import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#477be4] shadow-md p-4 relative"> {/* Added relative position to the navbar */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300">
          Expert Platform
        </Link>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex space-x-4">
          <Link to="/categories" className="text-lg text-white hover:text-gray-200 transition-colors duration-300">Categories</Link>
          <Link to="/about" className="text-lg text-white hover:text-gray-200 transition-colors duration-300">About</Link>
          <Link to="/contact" className="text-lg text-white hover:text-gray-200 transition-colors duration-300">Contact</Link>
          <Link to="/signup" className="text-lg text-white hover:text-gray-200 transition-colors duration-300">Sign Up</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute right-0 top-full bg-white rounded-lg shadow-lg p-6 z-50 w-1/2"> {/* Positioning to the right and taking 30% width */}
          <div className="flex flex-col items-center space-y-4">
            <Link to="/categories" onClick={toggleMenu} className="text-lg text-blue-600 hover:text-blue-800 transition-colors duration-300">Categories</Link>
            <Link to="/about" onClick={toggleMenu} className="text-lg text-blue-600 hover:text-blue-800 transition-colors duration-300">About</Link>
            <Link to="/contact" onClick={toggleMenu} className="text-lg text-blue-600 hover:text-blue-800 transition-colors duration-300">Contact</Link>
            <Link to="/signup" onClick={toggleMenu} className="text-lg text-blue-600 hover:text-blue-800 transition-colors duration-300">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
