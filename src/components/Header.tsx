import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Beaker, Home, Users, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { IMAGES } from '../config/images';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/about', label: 'About Us', icon: Home },
    { path: '/faculties', label: 'Faculties', icon: Users },
    { path: '/students', label: 'Students', icon: Users },
    { path: '/facilities', label: 'Facilities', icon: Building },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg backdrop-blur-sm' : 'bg-white/95'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-2">
              <img 
                src={IMAGES.AICTE_LOGO} 
                alt="AICTE Logo" 
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AICTE IDEA Lab</h1>
              <div className="flex items-center space-x-2">
                <img 
                  src={IMAGES.MUJ_LOGO} 
                  alt="MUJ Logo" 
                  className="h-8 w-100 object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === path
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;