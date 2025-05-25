import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#192B59] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-gray-300">
              Specializing in permanent, temporary, and contract staffing with a focus on results.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Our Services</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/permanent" className="text-gray-300 hover:text-white transition-colors duration-200">Permanent Staffing</Link>
              </li>
              <li>
                <Link to="/services/temporary" className="text-gray-300 hover:text-white transition-colors duration-200">Temporary Staffing</Link>
              </li>
              <li>
                <Link to="/services/contract" className="text-gray-300 hover:text-white transition-colors duration-200">Contract Staffing</Link>
              </li>
              <li>
                <Link to="/services/executive" className="text-gray-300 hover:text-white transition-colors duration-200">Executive Search</Link>
              </li>
              <li>
                <Link to="/services/recruitment" className="text-gray-300 hover:text-white transition-colors duration-200">Recruitment Process Outsourcing</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-300">123 Recruiting Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">info@siliconrecruit.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Silicon Recruit. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;