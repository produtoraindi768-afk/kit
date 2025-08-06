import React, { useState } from 'react';
import { Search, Menu, X, Facebook, Twitter, Youtube } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      <header className="relative bg-navbar-pattern bg-cover bg-center bg-no-repeat border-b-2 border-secondary">
        <div className="absolute inset-0 bg-dark-100/80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0 w-1/4 lg:w-auto">
              <img 
                src="https://images.pexels.com/photos/9072316/pexels-photo-9072316.png?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1" 
                alt="Knight Gaming" 
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#games" className="nav-link">Games</a>
              <a href="#players" className="nav-link">Players</a>
              <a href="#events" className="nav-link">Events</a>
              <a href="#sponsors" className="nav-link">Sponsors</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>

            {/* Social Icons & Search - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <a href="#" className="social-icon">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-icon">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7.5 5.93h1.43v4.28H7.5m8.93 3.57v1.43H7.5v-1.43m1.43 2.86H10v1.43H8.93m7.14 0H17v1.43h-1.43m-5.71 1.43h1.43V17H10m5.71 0h1.43V17h-1.43"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Youtube size={20} />
                </a>
              </div>
              <button 
                onClick={toggleSearch}
                className="bg-secondary text-primary p-2 hover:bg-red-700 transition-colors duration-300"
              >
                <Search size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden text-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="nav-link text-center py-2">Home</a>
                <a href="#about" className="nav-link text-center py-2">About</a>
                <a href="#games" className="nav-link text-center py-2">Games</a>
                <a href="#players" className="nav-link text-center py-2">Players</a>
                <a href="#events" className="nav-link text-center py-2">Events</a>
                <a href="#sponsors" className="nav-link text-center py-2">Sponsors</a>
                <a href="#contact" className="nav-link text-center py-2">Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Full Screen Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-dark-100/95 z-50 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent border-b-2 border-secondary text-primary text-4xl py-4 px-0 focus:outline-none focus:border-accent"
                  autoFocus
                />
                <button
                  onClick={toggleSearch}
                  className="absolute top-0 right-0 text-primary hover:text-secondary transition-colors duration-300"
                >
                  <X size={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;