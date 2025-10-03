import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Award, Star, ChevronDown } from 'lucide-react';
import { IMAGES } from '../config/images';

const FacultiesPage: React.FC = () => {
  const [expandedFaculty, setExpandedFaculty] = useState<number | null>(null);

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Ashima Bagaria",
      designation: "Associate Dean",
      specialization: "School of Physical and Biological Sciences",
      email: "ashima.bagaria@jaipur.manipal.edu",
      image: IMAGES.ASHIMA_BAGARIA,
      // achievements: ["Published 20+ research papers", "Expert in IoT and Embedded Systems", "Industry Collaboration Lead"],
      // projects: ["Smart Campus IoT Solutions", "Embedded Systems Development", "Wireless Communication"]
    },
    {
      id: 2,
      name: "Dr. Preeti Narooka",
      designation: "Assistant Professor (Selection grade)",
      specialization: "Artificial Intelligence & Machine Learning",
      email: "preeti.narooka@jaipur.manipal.edu",
      image: IMAGES.PREETI_NAROOKA,
      // achievements: ["AI Research Publications", "Machine Learning Expert", "Data Science Mentor"],
      // projects: ["AI-Driven Healthcare", "Predictive Analytics", "Computer Vision Applications"]
    },
    {
      id: 3,
      name: "Dr. Manoj K. Saini",
      designation: "Associate Professor",
      specialization: "Department of Physics",
      email: "manoj.saini@jaipur.manipal.edu",
      image: IMAGES.MANOJ_SAINI,
      // achievements: ["Software Engineering Expert", "15+ Years Teaching Experience", "Industry Consultant"],
      // projects: ["Software Development", "Database Systems", "Web Technologies"]
    },
    {
      id: 4,
      name: "Dr. Saurabh Dewangan",
      designation: "Associate Professor",
      specialization: " Department of Mechanical Engineering",
      email: "saurabh.dewangan@jaipur.manipal.edu",
      image: IMAGES.SAURABH_DEWANGAN,
      // achievements: ["Mechanical Design Expert", "CAD/CAM Specialist", "Product Development"],
      // projects: ["3D Modeling", "Prototype Development", "Manufacturing Processes"]
    },
    {
      id: 5,
      name: "Dr. Anurag Joshi",
      designation: "Assistant Professor (Selection Grade)",
      specialization: "Department of Mechanical Engineering",
      email: "anurag.joshi@jaipur.manipal.edu",
      image: IMAGES.ANURAG_JOSHI,
      // achievements: ["Mechanical Engineering Expert", "Robotics Specialist", "Research Publications"],
      // projects: ["Robotic Systems", "Automation Solutions", "Mechanical Design"]
    },
    {
      id: 6,
      name: "Dr. Himanshu Chaudhary",
      designation: "Associate Professor (Senior Scale)",
      specialization: "Department of Electronics & Communication Engineering",
      email: "himanshu.chaudhary@jaipur.manipal.edu",
      image: IMAGES.HIMANSHU_CHAUDHARY,
      // achievements: ["Electronics Research Expert", "IoT Specialist", "Industry Collaborations"],
      // projects: ["IoT Applications", "Embedded Systems", "Communication Networks"]
    },
    {
      id: 7,
      name: "Mr. Ashish Vijay",
      designation: "Assistant Professor (Senior Scale)",
      specialization: "Department of Electronics & Communication Engineering",
      email: "",
      image: IMAGES.ASHISH_VIJAY,
      // achievements: ["Electronics Engineering Expert", "Signal Processing Specialist", "Teaching Excellence"],
      // projects: ["Signal Processing", "Communication Systems", "Electronic Design"]
    },
    {
      id: 8,
      name: "Dr. Vinay Gupta",
      designation: "Associate Professor",
      specialization: "Department of Electrical Engineering",
      email: "vinay.gupta@jaipur.manipal.edu",
      image: IMAGES.VINAY_GUPTA,
      // achievements: ["Electrical Engineering Expert", "Power Systems Specialist", "Research Publications"],
      // projects: ["Power Systems", "Control Systems", "Electrical Design"]
    },
    {
      id: 9,
      name: "Dr. Himanshu Priyadarshi",
      designation: "Assistant Professor (Senior Scale)",
      specialization: "Department of Electrical Engineering",
      email: "himanshu.priyadarshi@jaipur.manipal.edu",
      image: IMAGES.HIMANSHU_PRIYADARSHI,
      // achievements: ["Electrical Engineering Expert", "Renewable Energy Specialist", "Industry Projects"],
      // projects: ["Renewable Energy", "Electrical Systems", "Smart Grids"]
    }
  ];

  const advisoryLeadership = [
    {
      title: "President of MUJ",
      name: "Dr. N N Sharma",
      image: IMAGES.PRESIDENT
    },
    {
      title: "Pro President of MUJ",
      name: "Dr. Karunakar A Kotegar",
      image: IMAGES.PRO_PRESIDENT
    },
    {
      title: "Provost of MUJ",
      name: "Dr. Nitu Bhatnagar",
      image: IMAGES.PROVOST
    },
    {
        title: "Registrar of MUJ",
        name: "Dr. Amit Soni",
        image: IMAGES.REGISTRAR
    },
    {
      title: "Dean FoSTA of MUJ",
      name: "Dr. Kuldip Singh Sangwan",
      image: IMAGES.FOSTA
    },
  ];

  const toggleFacultyExpansion = (id: number) => {
    setExpandedFaculty(expandedFaculty === id ? null : id);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20 rounded-b-3xl">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">IDEA LAB MEMBERS</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet the brilliant minds driving innovation at IDEA Lab - world-class faculty
              leading research and mentoring the next generation of technology leaders.
            </p>
          </motion.div>
        </div>
      </section>
        {/* Advisory Leadership */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Advisory Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {advisoryLeadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src={leader.image}
                    alt={leader.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{leader.title}</h4>
                <p className="text-primary font-medium">{leader.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      <div className="container mx-auto px-4 space-y-16">
        {/* Faculty Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Faculty</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {facultyMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.designation}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.specialization}</p>
                      <div className="flex space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Mail size={14} />
                          <span>{member.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements and projects can be added here in future if needed */}
                  {/* <button
                    onClick={() => toggleFacultyExpansion(member.id)}
                    className="mt-6 flex items-center space-x-2 text-primary hover:text-accent transition-colors"
                  >
                    <span>View Details</span>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        expandedFaculty === member.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedFaculty === member.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-gray-100"
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                          <ul className="space-y-1">
                            {member.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-gray-600 text-sm flex items-start space-x-2">
                                <Star size={12} className="text-yellow-500 mt-1 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Current Projects</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.projects.map((project, idx) => (
                              <span
                                key={idx}
                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )} */}
                  
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default FacultiesPage;
