import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AboutUsPage from './pages/AboutUsPage';
import StudentsAndFacultiesPage from './pages/StudentsAndFacultiesPage';
import FacilitiesPage from './pages/FacilitiesPage';
import Footer from './components/Footer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="fixed inset-x-0 top-0 z-50">
          <AnimatePresence>
            {alertVisible && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-4 text-center relative"
              >
                <p className="text-sm font-medium">
                  🚀 New STEM Innovation Workshop Series Starting Soon! Register Now
                </p>
                <button
                  onClick={() => setAlertVisible(false)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white/20 rounded-full p-1"
                >
                  <X size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <Header toggleSidebar={toggleSidebar} />
        </div>

        {/* Sidebar Overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={closeSidebar}
            />
          )}
        </AnimatePresence>

        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

        <main className={`flex-grow ${alertVisible ? 'pt-32' : 'pt-20'} transition-all duration-300 pb-16`}>
          <Routes>
            <Route path="/" element={<AboutUsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/students-faculties" element={<StudentsAndFacultiesPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
          </Routes>
        </main>

        <footer className="mt-auto">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;