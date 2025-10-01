import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, ExternalLink } from 'lucide-react';
import { IMAGES } from '../config/images';

const StudentsPage: React.FC = () => {
  const students = [
    {
      id: 1,
      name: "Amritesh Kumar",
      year: "Third Year B.Tech CSE (AI & ML)",
      project: "AICTE Lab Website Development",
      achievements: <>Full Stack & ML developer, <a href="https://www.localyse.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Localyse.in</a></>,
      image: IMAGES.STUDENT_1
    },
    {
      id: 2,
      name: "Mannya Agarwal",
      year: "Third Year B.Tech CSE (AI & ML)",
      project: "AICTE Lab Website Development",
      achievements: "UI/UX Design Excellence",
      image: IMAGES.STUDENT_2
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Students</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet the exceptional students driving innovation at IDEA Lab - passionate learners
              creating tomorrow's solutions through hands-on projects and collaborative research.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-16">
        {/* Students Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Student Contributors</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {students.map((student, index) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-32 h-32 rounded-full object-cover shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{student.name}</h3>
                      <p className="text-primary font-medium mb-2">{student.year}</p>
                      <h4 className="font-semibold text-gray-900 mb-2">Current Project</h4>
                      <p className="text-gray-600 text-sm mb-4">{student.project}</p>
                      <div className="flex items-center space-x-2 text-sm">
                        <Award size={14} className="text-yellow-500" />
                        <span className="text-gray-600">{student.achievements}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

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

export default StudentsPage;
