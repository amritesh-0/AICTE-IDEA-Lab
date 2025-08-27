import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, 
  Cpu, 
  Wifi, 
  Camera, 
  Microscope, 
  Settings, 
  Users, 
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Shield,
  Zap,
  Layers
} from 'lucide-react';
import { IMAGES } from '../config/images';

const FacilitiesPage: React.FC = () => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const facilities = [
    {
      icon: Monitor,
      title: "Advanced Computing Lab",
      description: "High-performance workstations with latest processors and GPUs for AI/ML research",
      specifications: ["Intel Core i9 processors", "NVIDIA RTX 4090 GPUs", "64GB RAM", "2TB NVMe SSD"],
      capacity: "50 workstations",
      availability: "24/7 with card access"
    },
    {
      icon: Cpu,
      title: "IoT & Embedded Systems Lab",
      description: "Complete setup for developing IoT solutions and embedded system prototypes",
      specifications: ["Arduino & Raspberry Pi kits", "Sensor modules", "3D printers", "PCB fabrication"],
      capacity: "30 development kits",
      availability: "Mon-Fri: 9 AM - 8 PM"
    },
    {
      icon: Microscope,
      title: "Research & Analysis Lab",
      description: "State-of-the-art equipment for material analysis and quality testing",
      specifications: ["Digital microscopes", "Spectrophotometers", "Environmental chambers", "Testing equipment"],
      capacity: "15 research stations",
      availability: "By appointment"
    },
    {
      icon: Camera,
      title: "Digital Fabrication Lab",
      description: "Complete digital manufacturing setup with modern fabrication tools",
      specifications: ["Laser cutters", "CNC machines", "3D printing farm", "Electronics assembly"],
      capacity: "20 concurrent projects",
      availability: "Mon-Sat: 10 AM - 6 PM"
    },
    {
      icon: Settings,
      title: "Robotics & Automation Lab",
      description: "Advanced robotics platform for developing autonomous systems and AI applications",
      specifications: ["Industrial robot arms", "AGV platforms", "Vision systems", "Control interfaces"],
      capacity: "12 robot platforms",
      availability: "Scheduled sessions"
    },
    {
      icon: Wifi,
      title: "Collaborative Workspace",
      description: "Open innovation space with smart boards and video conferencing facilities",
      specifications: ["Interactive displays", "Wireless presentation", "Video conferencing", "Flexible seating"],
      capacity: "100 people",
      availability: "24/7 booking system"
    }
  ];

  const galleryImages = [
    {
      url: IMAGES.FACILITY_1,
      title: "Advanced Computing Lab",
      description: "High-performance workstations for AI/ML research"
    },
    {
      url: IMAGES.FACILITY_2,
      title: "Collaborative Learning Space",
      description: "Open workspace for team projects and innovation"
    },
    {
      url: IMAGES.FACILITY_3,
      title: "Research Laboratory",
      description: "State-of-the-art equipment for scientific research"
    },
    {
      url: IMAGES.FACILITY_1,
      title: "Digital Fabrication",
      description: "3D printers and digital manufacturing tools"
    },
    {
      url: IMAGES.FACILITY_2,
      title: "Robotics Workshop",
      description: "Advanced robotics and automation systems"
    },
    {
      url: IMAGES.FACILITY_3,
      title: "Innovation Hub",
      description: "Creative space for brainstorming and ideation"
    }
  ];

  const usageGuidelines = [
    {
      icon: Calendar,
      title: "Booking System",
      description: "Reserve equipment and spaces through our online portal 24-48 hours in advance"
    },
    {
      icon: Shield,
      title: "Safety Protocols",
      description: "Complete safety training required before accessing specialized equipment"
    },
    {
      icon: Users,
      title: "Supervision",
      description: "Faculty or lab assistant supervision required for certain equipment"
    },
    {
      icon: Clock,
      title: "Usage Limits",
      description: "Maximum 4-hour slots to ensure fair access for all users"
    }
  ];

  const specs = [
    { icon: Zap, label: "Power Backup", value: "24/7 UPS Systems" },
    { icon: Wifi, label: "Internet", value: "1 Gbps Fiber" },
    { icon: Shield, label: "Security", value: "CCTV & Access Control" },
    { icon: Layers, label: "Floors", value: "3 Levels, 5000 sq ft" }
  ];

  const openGallery = (imageUrl: string, index: number) => {
    setSelectedGalleryImage(imageUrl);
    setCurrentGalleryIndex(index);
  };

  const closeGallery = () => {
    setSelectedGalleryImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentGalleryIndex + 1) % galleryImages.length;
    setCurrentGalleryIndex(nextIndex);
    setSelectedGalleryImage(galleryImages[nextIndex].url);
  };

  const prevImage = () => {
    const prevIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentGalleryIndex(prevIndex);
    setSelectedGalleryImage(galleryImages[prevIndex].url);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20 rounded-b-3xl">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">World-Class Facilities</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience innovation with our cutting-edge infrastructure, advanced equipment, 
              and collaborative spaces designed to bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-16">
        {/* Infrastructure Overview */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Infrastructure Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specs.map(({ icon: Icon, label, value }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{label}</h3>
                <p className="text-gray-600">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Facilities Grid */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Facilities</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <facility.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                      <p className="text-gray-600">{facility.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Specifications</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {facility.specifications.map((spec, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users size={16} />
                        <span>{facility.capacity}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock size={16} />
                        <span>{facility.availability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Visual Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Visual Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => openGallery(image.url, index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Usage Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Usage Guidelines & Access</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usageGuidelines.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact for Access */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-12"
        >
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 mr-3" />
            <h2 className="text-3xl font-bold">Visit Our Facility</h2>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to experience innovation firsthand? Schedule a tour or book equipment access to start your next project.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Tour
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Book Equipment
            </button>
          </div>
        </motion.section>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedGalleryImage}
                alt="Gallery"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                <h3 className="font-bold">{galleryImages[currentGalleryIndex].title}</h3>
                <p className="text-sm text-gray-300">{galleryImages[currentGalleryIndex].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FacilitiesPage;