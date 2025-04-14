import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xl font-bold">ChronoTrack</span>
          </Link>
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className={`hover:text-blue-200 transition-colors ${location.pathname === '/' ? 'font-bold border-b-2 border-white pb-1' : ''}`}>
              Accueil
            </Link>
            <Link to="/badgeuse" className={`hover:text-blue-200 transition-colors ${location.pathname === '/badgeuse' ? 'font-bold border-b-2 border-white pb-1' : ''}`}>
              Badgeuse
            </Link>
            <Link to="/dashboard" className={`hover:text-blue-200 transition-colors ${location.pathname === '/dashboard' ? 'font-bold border-b-2 border-white pb-1' : ''}`}>
              Tableau de bord
            </Link>
            <div className="relative ml-4">
              <button className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full py-1 px-3 hover:bg-opacity-30 transition-all">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profil" className="w-8 h-8 rounded-full border-2 border-white" />
                <span>Thomas D.</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-3">
            <Link to="/" className="block py-2 hover:bg-blue-600 px-3 rounded">
              Accueil
            </Link>
            <Link to="/badgeuse" className="block py-2 hover:bg-blue-600 px-3 rounded">
              Badgeuse
            </Link>
            <Link to="/dashboard" className="block py-2 hover:bg-blue-600 px-3 rounded">
              Tableau de bord
            </Link>
            <div className="pt-2 border-t border-blue-500">
              <div className="flex items-center space-x-2 px-3 py-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profil" className="w-8 h-8 rounded-full border-2 border-white" />
                <span>Thomas Dubois</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
