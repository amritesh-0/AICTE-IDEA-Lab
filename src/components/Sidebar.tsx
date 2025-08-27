import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Users, Building, Mail, Phone, MapPin } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navItems = [
    { path: '/about', label: 'About Us', icon: Home },
    { path: '/students-faculties', label: 'Students & Faculties', icon: Users },
    { path: '/facilities', label: 'Facilities', icon: Building },
  ];

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebarVariants}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Navigation</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={onClose}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    location.pathname === path
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Manipal University Jaipur, Dehmi-Kalan, Jaipur</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+91-141-999-4000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>idealab@jaipur.manipal.edu</span>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;