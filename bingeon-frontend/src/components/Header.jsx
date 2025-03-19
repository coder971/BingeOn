import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary-dark text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Branding */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="/logo.png"
            alt="BingeOn Logo"
            className="h-20 w-auto" // Increased height to 2x (from 10 to 20)
          />
          <h1 className="text-3xl font-bold tracking-wide group-hover:text-primary transition duration-300">
            Binge<span className="text-red-500">On</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-lg font-medium hover:text-red-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/explore"
            className="text-lg font-medium hover:text-red-500 transition duration-300"
          >
            Explore
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium hover:text-red-500 transition duration-300"
          >
            About Us
          </Link>
        </nav>

        {/* Mobile Menu Button (Optional) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => alert('Mobile menu coming soon!')}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M4 5h16M4 12h16m-7 7h7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;