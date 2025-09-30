import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Send,
  Upload,
  X,
  Home,
  Users,
  Building,
  Beaker
} from 'lucide-react';
import { IMAGES } from '../config/images';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'contact' | 'upload'>('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    file: null as File | null
  });

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-500' }
  ];

  const quickLinks = [
    { icon: Home, label: 'About Us', href: '/about' },
    { icon: Users, label: 'Members', href: '/members' },
    { icon: Users, label: 'Students', href: '/students' },
    { icon: Building, label: 'Facilities', href: '/facilities' }
  ];

  const openModal = (type: 'contact' | 'upload') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', email: '', subject: '', message: '', file: null });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    closeModal();
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-2">
                  <img 
                    src={IMAGES.AICTE_LOGO} 
                    alt="AICTE Logo" 
                    className="h-10 w-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AICTE IDEA Lab</h3>
                <div className="flex items-center space-x-2">
                  <img 
                    src={IMAGES.MUJ_LOGO} 
                    alt="MUJ Logo" 
                    className="h-8 w-100 object-contain"
                  />
                </div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Fostering innovation and entrepreneurship through cutting-edge research, 
                collaborative learning, and state-of-the-art facilities. Join us in shaping 
                the future of STEM education and technology.
              </p>
              
              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => openModal('contact')}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2"
                >
                  <Mail size={18} />
                  <span>Contact Us</span>
                </button>
                <button
                  onClick={() => openModal('upload')}
                  className="border border-gray-600 hover:border-gray-500 hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2"
                >
                  <Upload size={18} />
                  <span>Upload Request</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map(({ icon: Icon, label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <Icon size={16} className="group-hover:text-blue-400 transition-colors" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Information</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">
                      Manipal University Jaipur<br />
                      Dehmi-Kalan, Off Jaipur-Ajmer Expressway<br />
                      Jaipur, Rajasthan 303007
                    </p>
                  </div>
                </li>
                {/* <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-400" />
                  <a href="tel:+911419994000" className="text-gray-400 hover:text-white transition-colors">
                    +91-141-999-4000
                  </a>
                </li> */}
                {/* <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-400" />
                  <a href="mailto:idealab@jaipur.manipal.edu" className="text-gray-400 hover:text-white transition-colors">
                    idealab@jaipur.manipal.edu
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Social Media & Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <span className="text-gray-400">Follow us:</span>
                {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    className={`text-gray-400 ${color} transition-colors p-2 rounded-full hover:bg-gray-800`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} AICTE IDEA Lab, Manipal University Jaipur. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Empowering Innovation • Fostering Excellence • Building Tomorrow
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {modalType === 'contact' ? 'Contact Us' : 'Upload Request'}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {modalType === 'upload' && (
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                      File Upload
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>
                    {modalType === 'contact' ? 'Send Message' : 'Submit Request'}
                  </span>
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;