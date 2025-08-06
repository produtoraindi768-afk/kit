import React from 'react';
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-300 border-t-2 border-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <img 
                src="https://images.pexels.com/photos/9072316/pexels-photo-9072316.png?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1" 
                alt="Knight Gaming" 
                className="h-12 w-auto object-contain mb-4"
              />
              <p className="text-gray-400 leading-relaxed">
                Elite gaming organization dedicated to competitive excellence and 
                building the future of esports.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="social-icon bg-dark-200 hover:bg-secondary">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon bg-dark-200 hover:bg-secondary">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7.5 5.93h1.43v4.28H7.5m8.93 3.57v1.43H7.5v-1.43m1.43 2.86H10v1.43H8.93m7.14 0H17v1.43h-1.43m-5.71 1.43h1.43V17H10m5.71 0h1.43V17h-1.43"/>
                </svg>
              </a>
              <a href="#" className="social-icon bg-dark-200 hover:bg-secondary">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon bg-dark-200 hover:bg-secondary">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-primary mb-6">Quick Links</h5>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-secondary transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-secondary transition-colors duration-300">About Us</a></li>
              <li><a href="#games" className="text-gray-400 hover:text-secondary transition-colors duration-300">Our Games</a></li>
              <li><a href="#players" className="text-gray-400 hover:text-secondary transition-colors duration-300">Players</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-secondary transition-colors duration-300">Events</a></li>
              <li><a href="#sponsors" className="text-gray-400 hover:text-secondary transition-colors duration-300">Sponsors</a></li>
            </ul>
          </div>

          {/* Gaming Categories */}
          <div>
            <h5 className="text-primary mb-6">Gaming Categories</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Counter-Strike 2</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Valorant</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">League of Legends</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Rocket League</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Tournaments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Training</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-primary mb-6">Contact Info</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-secondary flex-shrink-0 mt-1" size={18} />
                <div className="text-gray-400">
                  <p>123 Gaming Street</p>
                  <p>Los Angeles, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-secondary flex-shrink-0" size={18} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-secondary flex-shrink-0" size={18} />
                <a href="mailto:info@knightgaming.com" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                  info@knightgaming.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Knight Gaming. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;