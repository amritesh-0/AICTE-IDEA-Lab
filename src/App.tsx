import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AboutUsPage from './pages/AboutUsPage';
import StudentsAndFacultiesPage from './pages/StudentsAndFacultiesPage';
import StudentsPage from './pages/StudentsPage';
import FacultiesPage from './pages/FacultiesPage';
import FacilitiesPage from './pages/FacilitiesPage';
import SchemePage from './pages/SchemePage';
import Footer from './components/Footer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(true);
  const nsdEventPdf = encodeURI('/Events/NSD 2026 Standee Idea Lab.pdf');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-secondary">
        <div className="fixed inset-x-0 top-0 z-50">
          <AnimatePresence>
            {alertVisible && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="relative overflow-hidden border-b border-blue-900/20 bg-[#e8d287] py-3"
              >
                <button
                  onClick={() => window.open(nsdEventPdf, '_blank')}
                  className="block w-full text-left pr-12"
                  aria-label="Open National Science Day 2026 event standee"
                >
                  <motion.div
                    className="whitespace-nowrap text-blue-900 font-extrabold tracking-wide text-sm md:text-base"
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
                  >
                    AICTE IDEA LAB CELEBRATES NATIONAL SCIENCE DAY | FEBRUARY 28, 2026
                  </motion.div>
                </button>
                <button
                  onClick={() => setAlertVisible(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-blue-900/10"
                >
                  <X size={16} className="text-blue-900" />
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
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/members" element={<FacultiesPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/scheme" element={<SchemePage />} />
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
