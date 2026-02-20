import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Target, Lightbulb, Wrench, Rocket, CheckCircle } from 'lucide-react';

const SchemePage: React.FC = () => {
  const schemePdfPath = encodeURI('/IDEA Lab scheme_doc.pdf');

  const objectives = [
    'Promote hands-on, project-based learning with multidisciplinary collaboration.',
    'Enable rapid idea-to-prototype development using modern fabrication tools.',
    'Strengthen innovation culture among students, researchers, and faculty.',
    'Support socially relevant and industry-aligned problem solving.',
  ];

  const keyFeatures = [
    'Common innovation infrastructure for design, prototyping, and testing.',
    'Mentoring support for student teams, hackathons, and challenge projects.',
    'Integration with entrepreneurship, incubation, and startup ecosystems.',
    'Capacity building through workshops, bootcamps, and expert sessions.',
  ];

  const implementationFlow = [
    'Idea identification and challenge mapping.',
    'Design thinking, feasibility, and concept validation.',
    'Prototype development, testing, and iteration.',
    'Showcase, deployment, and scale-up pathways.',
  ];

  const outcomes = [
    'Stronger innovation mindset and practical engineering skills.',
    'Higher quality student projects and interdisciplinary collaboration.',
    'Increased patent, publication, and startup opportunities.',
    'Improved industry engagement and real-world impact.',
  ];

  return (
    <div className="space-y-16">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20 rounded-b-3xl">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1 text-xs md:text-sm tracking-[0.15em] uppercase mb-6">
              <FileText size={14} />
              Official Framework
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight text-black">
              AICTE-IDEA Lab Scheme
            </h1>
            <p className="mt-4 text-lg md:text-2xl font-semibold text-blue-100">
              Idea Development, Evaluation & Application
            </p>
            <p className="mt-6 text-base md:text-lg text-blue-100 max-w-3xl mx-auto">
              Explore the scheme structure, focus areas, and implementation model for establishing a
              robust innovation ecosystem.
            </p>
            <button
              onClick={() => window.open(schemePdfPath, '_blank')}
              className="mt-8 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Open Official Scheme PDF
            </button>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <Target className="h-7 w-7 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Scheme Objectives</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {objectives.map((point, index) => (
              <div key={index} className="flex items-start gap-3 bg-blue-50 rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <Lightbulb className="h-7 w-7 text-blue-700" />
              <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
            </div>
            <ul className="space-y-3">
              {keyFeatures.map((item, index) => (
                <li key={index} className="text-gray-700 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <Wrench className="h-7 w-7 text-amber-700" />
              <h3 className="text-2xl font-bold text-gray-900">Implementation Flow</h3>
            </div>
            <ol className="space-y-3">
              {implementationFlow.map((step, index) => (
                <li key={index} className="text-gray-700 flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-200 text-amber-900 text-sm font-bold shrink-0">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 lg:p-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <Rocket className="h-7 w-7" />
            <h3 className="text-2xl md:text-3xl font-bold text-black">Expected Outcomes</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {outcomes.map((item, index) => (
              <div key={index} className="bg-white/15 rounded-lg p-4 text-blue-100">
                {item}
              </div>
            ))}
          </div>
          <button
            onClick={() => window.open(schemePdfPath, '_blank')}
            className="mt-8 bg-white text-primary px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Full Scheme Document
          </button>
        </motion.section>
      </div>
    </div>
  );
};

export default SchemePage;
