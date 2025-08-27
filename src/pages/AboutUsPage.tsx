import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  Eye, 
  Award, 
  Users, 
  Lightbulb, 
  Rocket, 
  Building, 
  Globe, 
  Zap, 
  Heart,
  CheckCircle,
  Star,
  Briefcase,
  GraduationCap,
  Settings,
  BookOpen
} from 'lucide-react';
import { IMAGES } from '../config/images';

const AboutUsPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      title: "Innovation Through Learning by Doing",
      description: "Transforming STEM education with hands-on innovation and prototype development",
      image: IMAGES.CAROUSEL_1,
    },
    {
      title: "State-of-the-Art IDEA Lab",
      description: "₹55 lakh facility with 50+ advanced tools including 3D printers and laser cutters",
      image: IMAGES.CAROUSEL_2,
    },
    {
      title: "Industry-Academia Collaboration",
      description: "Active partnerships with 15+ companies for real-world project solutions",
      image: IMAGES.CAROUSEL_3,
    },
  ];

  const highlights = [
    { icon: Building, title: "3000+ sq. ft.", description: "State-of-the-art innovation facility" },
    { icon: Award, title: "₹55 Lakh", description: "AICTE NIDHI initiative funding" },
    { icon: Users, title: "15+ Partners", description: "Active industry collaborations" },
    { icon: Rocket, title: "24x7 Access", description: "Security-controlled lab operations" },
  ];

  const objectives = [
    "Encourage interdisciplinary projects with social impact",
    "Foster industry-academia collaboration on real-world challenges",
    "Support development of low-cost, scalable prototypes",
    "Provide structured mentoring through faculty bootcamps",
    "Organize 200+ annual activities including workshops, hackathons, and internships",
    "Promote innovation in critical sectors like healthcare, agriculture, and sustainability"
  ];

  const missionPoints = [
    "To create a culture of design and innovation through hands-on experimentation",
    "To bridge industry-academia gaps by providing cutting-edge prototyping facilities",
    "To develop 21st-century skills through project-based learning",
    "To serve as a catalyst for interdisciplinary collaboration",
    "To support national initiatives like \"Make in India\" and \"Aatma Nirbhar Bharat\""
  ];

  const keyHighlights = [
    "Established under AICTE's NIDHI initiative with ₹55 lakh funding",
    "3000+ sq. ft. facility equipped with 50+ advanced tools including 3D printers, laser cutters, and CNC machines",
    "Active industry partnerships with 15+ companies for live projects",
    "24x7 operational lab with security-controlled access",
    "Part of national IDEA Labs Network (IDEALNET)",
    "Recipient of National Innovation Award 2024"
  ];

  const visionPoints = [
    "Cross-disciplinary project teams",
    "Industry mentorship programs",
    "Access to ₹1.1 crore worth of prototyping equipment",
    "Incubation support for startups",
    "Integration with Atal Tinkering Labs"
  ];

  const studentBenefits = [
    "End-to-end prototyping facilities with 50+ tools and components",
    "Industry-aligned skill development in IoT, AI, robotics, and 3D printing",
    "Financial support for competition participation and conferences",
    "Internship opportunities with partner companies",
    "Cross-disciplinary collaboration spaces",
    "Patent filing support for innovations"
  ];

  const staffBenefits = [
    "Faculty development programs on emerging technologies",
    "Industry consultancy opportunities",
    "Research grant access for interdisciplinary projects",
    "Modern teaching resources including smart boards and VR tools",
    "Publication support for innovative research",
    "Professional networking through IDEALNET"
  ];

  const leadership = [
    { name: "Prof. (Dr.) Amit Soni", role: "Chief Mentor" },
    { name: "Prof. (Dr.) Ashima Bagaria", role: "Faculty Coordinator (Electronics)" },
    { name: "Dr. Preeti Narooka", role: "Faculty Co-Coordinator (AIML)" }
  ];

  const teamMembers = [
    "Dr. Ashima Bagaria",
    "Dr. Preeti Narooka",
    "Dr. Manoj K. Saini",
    "Dr. Saurabh Dewangan",
    "Dr. Anurag Joshi",
    "Dr. Himanshu Chaudhary",
    "Mr. Ashish Vijay",
    "Dr. Vinay Gupta",
    "Dr. Himanshu Priyadarshi"
  ];

  const studentTeam = [
    { name: "Amritesh Kumar", role: "AICTE Lab Website" },
    { name: "Mannya Aggarwal", role: "AICTE Lab Website" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="space-y-16">
      {/* Hero Carousel */}
      <section className="relative h-96 md:h-[500px] overflow-hidden rounded-b-3xl">
        <div className="relative h-full">
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80" />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-4xl px-4"
                  >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{item.title}</h1>
                    <p className="text-lg md:text-xl text-gray-200">{item.description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-16">
        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About AICTE IDEA Lab
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Manipal University Jaipur has established a state-of-the-art IDEA Lab under AICTE's prestigious 
            IDEA (Idea Development, Evaluation & Application) Lab Scheme. This initiative transforms STEM education 
            by providing a dedicated space for hands-on innovation, prototype development, and practical application 
            of engineering principles. Our lab serves as a common facility where students and faculty engage in 
            creative problem-solving while developing critical 21st-century skills like design thinking, 
            collaboration, and lifelong learning.
          </p>
        </motion.section>

        {/* Key Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {keyHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl"
          >
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              To establish a self-sustaining innovation ecosystem that transforms engineering education through 
              "learning by doing." We aim to nurture imaginative and creative graduates who can convert ideas 
              into impactful solutions, positioning our IDEA Lab as a leading innovation hub that addresses 
              rural community needs while advancing skill-based learning across all levels.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Innovation Hub Features:</h4>
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-700 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-teal-50 to-orange-50 p-8 rounded-2xl"
          >
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-teal-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <div className="space-y-4">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Objectives */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
        >
          <div className="flex items-center justify-center mb-8">
            <Lightbulb className="h-8 w-8 text-orange-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Our Objectives</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg"
              >
                <Rocket className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{objective}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Benefits to Students and Staff</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-green-600 mr-3" />
                <h4 className="text-2xl font-bold text-gray-900">Students</h4>
              </div>
              <div className="space-y-3">
                {studentBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-purple-600 mr-3" />
                <h4 className="text-2xl font-bold text-gray-900">Staff</h4>
              </div>
              <div className="space-y-3">
                {staffBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Leadership Message */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Leadership Message</h3>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src={IMAGES.AMIT_SONI}
                alt="Prof. (Dr.) Amit Soni"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="text-center lg:text-left">
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-4 italic">
                "Innovation is not optional - it's essential for India's growth. Our IDEA Lab transforms students 
                into problem-solvers who will lead technological advancement. Through this platform, we're creating 
                industry-ready graduates who can convert classroom knowledge into real-world solutions. I invite 
                all stakeholders to join us in building a culture of innovation."
              </blockquote>
              <cite className="text-blue-600 font-semibold">
                – Prof. (Dr.) Amit Soni<br />
                <span className="text-gray-600 text-sm">Chief Mentor, IDEA Lab</span>
              </cite>
            </div>
          </div>
        </motion.section>

        {/* Leadership & Team */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Leadership & Team</h3>
          
          {/* Leadership */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Leadership</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">{leader.name}</h5>
                  <p className="text-blue-600 text-sm">{leader.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AICTE IDEA Lab Team */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="h-6 w-6 text-blue-600 mr-2" />
                AICTE IDEA Lab Team
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{member.split(' ')[1]?.[0] || member[0]}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{member}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 text-green-600 mr-2" />
                Student Team Members
              </h4>
              <div className="space-y-4">
                {studentTeam.map((student, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{student.name.split(' ')[0][0]}{student.name.split(' ')[1]?.[0]}</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">{student.name}</h5>
                      <p className="text-green-600 text-sm">{student.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Vision for Future */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Globe className="h-8 w-8 mr-3" />
            <h3 className="text-3xl font-bold">Vision for the Future</h3>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
            We focus on sustainable technologies that address rural challenges while aligning with UN Sustainable 
            Development Goals. The lab will evolve into a regional innovation center supporting 500+ users annually 
            through academic programs and industry collaborations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Heart className="h-8 w-8 text-pink-300 mb-3" />
              <h4 className="font-bold mb-2">Social Impact</h4>
              <p className="text-blue-100 text-sm">Addressing rural community needs through innovative solutions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Zap className="h-8 w-8 text-yellow-300 mb-3" />
              <h4 className="font-bold mb-2">Sustainability</h4>
              <p className="text-blue-100 text-sm">Eco-friendly technologies and sustainable practices</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Globe className="h-8 w-8 text-green-300 mb-3" />
              <h4 className="font-bold mb-2">Global Goals</h4>
              <p className="text-blue-100 text-sm">Aligned with UN Sustainable Development Goals</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUsPage;