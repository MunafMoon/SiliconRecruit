import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Ensure the click is outside the services dropdown button and its content
      if (!target.closest('.services-dropdown') && !target.closest('.services-button')) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav
      style={{ backgroundColor: '#ffffff' }} // This inline style is problematic, see notes below
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-[#192B59] shadow-md py-2' : 'bg-[#192B59] py-4'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12"> {/* <--- ADD h-20 HERE */}
          <div className="flex-shrink-0">
            <Link to="/SiliconRecruit" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* ... (rest of your desktop nav) */}
          <div className="hidden md:flex items-center space-x-8">
            {/* ... your desktop nav items */}
            <Link to="/SiliconRecruit" className="text-[#254389] hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="text-[#254389] hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors duration-200">
              About
            </Link>
            <div className="relative services-dropdown">
              <button
                className="services-button text-[#254389] hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center" // Added services-button class
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServicesOpen(!isServicesOpen);
                }}
              >
                Our Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <Link
                      to="/services/permanent"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleServiceClick}
                    >
                      Permanent Staffing
                    </Link>
                    <Link
                      to="/services/temporary"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleServiceClick}
                    >
                      Temporary Staffing
                    </Link>
                    <Link
                      to="/services/contract"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleServiceClick}
                    >
                      Contract Staffing
                    </Link>
                    {/* <Link
                      to="/services/executive"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleServiceClick}
                    >
                      Executive Search
                    </Link> */}
                  </div>
                </div>
              )}
            </div>
            {/* <Link to="/blog" className="text-[#254389] hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Blog
            </Link> */}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#192B59] bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
              Login
            </Link>
            <Link to="/get-started" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
              Get Started
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button style={{ color: "black" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#192B59] border-t border-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* ... Mobile nav items */}
            <Link
              to="/SiliconRecruit"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Our Services
            </button>
            {isServicesOpen && (
              <div className="pl-4 space-y-1">
                <Link
                  to="/services/permanent"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-blue-200 hover:bg-blue-800"
                  onClick={handleServiceClick}
                >
                  Permanent Staffing
                </Link>
                <Link
                  to="/services/temporary"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-blue-200 hover:bg-blue-800"
                  onClick={handleServiceClick}
                >
                  Temporary Staffing
                </Link>
                <Link
                  to="/services/contract"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-blue-200 hover:bg-blue-800"
                  onClick={handleServiceClick}
                >
                  Contract Staffing
                </Link>
                <Link
                  to="/services/executive"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-blue-200 hover:bg-blue-800"
                  onClick={handleServiceClick}
                >
                  Executive Search
                </Link>
              </div>
            )}
            {/* <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link> */}
            <div className="pt-4 flex flex-col space-y-2">
              <Link
                to="/login"
                className="w-full inline-flex justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-[#192B59] bg-white hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/get-started"
                className="w-full inline-flex justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;