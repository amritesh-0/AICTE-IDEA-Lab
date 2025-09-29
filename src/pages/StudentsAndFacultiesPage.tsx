import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Award, BookOpen, Users, Star, ChevronDown, ExternalLink } from 'lucide-react';
import { IMAGES } from '../config/images';

const StudentsAndFacultiesPage: React.FC = () => {
  const [expandedFaculty, setExpandedFaculty] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'faculty' | 'students'>('all');

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Ashima Bagaria",
      designation: "Associate Dean",
      specialization: "School of Physical and Biological Sciences",
      email: "ashima.bagaria@jaipur.manipal.edu",
      // phone: "+91-141-999-4001",
      image: IMAGES.ASHIMA_BAGARIA,
      achievements: ["Published 20+ research papers", "Expert in IoT and Embedded Systems", "Industry Collaboration Lead"],
      projects: ["Smart Campus IoT Solutions", "Embedded Systems Development", "Wireless Communication"]
    },
    {
      id: 2,
      name: "Dr. Preeti Narooka",
      designation: "Assistant Professor (Selection grade)",
      specialization: "Artificial Intelligence & Machine Learning",
      email: "preeti.narooka@jaipur.manipal.edu",
      // phone: "+91-141-999-4002",
      image: IMAGES.PREETI_NAROOKA,
      achievements: ["AI Research Publications", "Machine Learning Expert", "Data Science Mentor"],
      projects: ["AI-Driven Healthcare", "Predictive Analytics", "Computer Vision Applications"]
    },
    {
      id: 3,
      name: "Dr. Manoj K. Saini",
      designation: "Assistant Professor (Selection grade)",
      specialization: "Department of Physics",
      email: "manoj.saini@jaipur.manipal.edu",
      // phone: "+91-141-999-4003",
      image: IMAGES.MANOJ_SAINI,
      achievements: ["Software Engineering Expert", "15+ Years Teaching Experience", "Industry Consultant"],
      projects: ["Software Development", "Database Systems", "Web Technologies"]
    },
    {
      id: 4,
      name: "Dr. Saurabh Dewangan",
      designation: "Assistant Professor",
      specialization: " Department of Mechanical Engineering",
      email: "saurabh.dewangan@jaipur.manipal.edu",
      // phone: "+91-141-999-4004",
      image: IMAGES.SAURABH_DEWANGAN,
      achievements: ["Mechanical Design Expert", "CAD/CAM Specialist", "Product Development"],
      projects: ["3D Modeling", "Prototype Development", "Manufacturing Processes"]
    }
  ];

  const students = [
    {
      id: 1,
      name: "Amritesh Kumar",
      year: "Third Year B.Tech CSE",
      project: "AICTE Lab Website Development",
      achievements: <>Founder, <a href="https://www.localyse.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Localyse.in</a></>,
      image: IMAGES.STUDENT_1
    },
    {
      id: 2,
      name: "Mannya Agarwal",
      year: "Third Year B.Tech ECE",
      project: "AICTE Lab Website Development",
      achievements: "UI/UX Design Excellence",
      image: IMAGES.STUDENT_2
    },
    {
      id: 3,
      name: "Ananya Khandelwal",
      year: "Third Year B.Tech CSE",
      project: "AICTE Lab Website Development",
      achievements: "Front-End Development Lead",
      image: IMAGES.STUDENT_3
    }
  ];

  const mentorshipPrograms = [
    {
      title: "Faculty-Student Collaboration",
      description: "Direct mentorship program pairing students with faculty for research projects",
      participants: "120+ active pairs"
    },
    {
      title: "Industry Connect Program",
      description: "Partnership with industry experts for real-world project guidance",
      participants: "80+ students enrolled"
    },
    {
      title: "Peer Learning Circles",
      description: "Student-led study groups focusing on emerging technologies",
      participants: "200+ student members"
    }
  ];

  const toggleFacultyExpansion = (id: number) => {
    setExpandedFaculty(expandedFaculty === id ? null : id);
  };

  const filteredContent = () => {
    switch (selectedCategory) {
      case 'faculty':
        return { faculty: facultyMembers, students: [] };
      case 'students':
        return { faculty: [], students };
      default:
        return { faculty: facultyMembers, students };
    }
  };

  const { faculty, students: filteredStudents } = filteredContent();

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Academic Community</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet the brilliant minds driving innovation at IDEA Lab - from world-class faculty 
              to exceptional students creating tomorrow's solutions today.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-16">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="bg-white rounded-xl shadow-lg p-2 flex space-x-2">
            {[
              { key: 'all', label: 'All Members', icon: Users },
              { key: 'faculty', label: 'Faculty', icon: Award },
              { key: 'students', label: 'Students', icon: BookOpen }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key as any)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === key
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Faculty Section */}
        {faculty.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Faculty</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {faculty.map((member, index) => (
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
                          <div className="flex items-center space-x-1">
                            {/* <Phone size={14} />
                            <span>{member.phone}</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button
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
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Advisory Leadership */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Advisory Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* President */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={IMAGES.PRESIDENT}
                  alt="President of MUJ"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">President of MUJ</h4>
              <p className="text-primary font-medium">Dr. N N Sharma</p>
            </motion.div>

            {/* Pro President */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={IMAGES.PRO_PRESIDENT}
                  alt="Pro President of MUJ"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Pro President of MUJ</h4>
              <p className="text-primary font-medium">Dr. Karunakar A Kotegar</p>
            </motion.div>

            {/* Provost */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={IMAGES.PROVOST}
                  alt="Provost of MUJ"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Provost of MUJ</h4>
              <p className="text-primary font-medium">Dr. Nitu Bhatnagar</p>
            </motion.div>

            {/* Dean FoSTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={IMAGES.FOSTA}
                  alt="Dean FoSTA of MUJ"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Dean FoSTA of MUJ</h4>
              <p className="text-primary font-medium">Dr. Kuldip Singh Sangwan</p>
            </motion.div>
          </div>
        </motion.section>
        {/* Students Section */}
        {filteredStudents.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Student Contributors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudents.map((student, index) => (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">{student.name}</h3>
                      <p className="text-sm text-gray-200">{student.year}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Current Project</h4>
                    <p className="text-gray-600 text-sm mb-4">{student.project}</p>
                    <div className="flex items-center space-x-2 text-sm">
                      <Award size={14} className="text-yellow-500" />
                      <span className="text-gray-600">{student.achievements}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Mentorship Programs */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Mentorship Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mentorshipPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-primary to-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">{program.participants}</span>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-black">Join Our Innovation Community</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of a vibrant ecosystem where ideas flourish and innovations come to life. 
            Connect with mentors, collaborate on projects, and shape the future of technology.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply for Mentorship
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              View Open Projects
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default StudentsAndFacultiesPage;
