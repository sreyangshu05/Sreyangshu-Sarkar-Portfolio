import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap } from 'lucide-react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science (Honours)',
    institution: 'University of Calcutta',
    period: 'Sep. 2021 – Aug. 2024',
    location: 'Kolkata, West Bengal',
    focus: 'Computer Science & Software Engineering',
    highlights: [
      'CGPA: 6.8',
      'Relevant Coursework: Data Structures, Operating System, Networking, Computational Mathematics',
      'Algorithms, Database Management System, Digital Image Processing, Software Engineering',
      'Strong foundation in computer science fundamentals and modern software development practices'
    ],
    icon: GraduationCap
  },
  {
    degree: 'Higher Secondary (Class XII)',
    institution: 'Bidhannagar Municipal School',
    period: '2019 – 2021',
    location: 'Kolkata, West Bengal',
    focus: 'Science Stream',
    highlights: [
      'Percentage: 78.4%',
      'Completed higher secondary education with focus on science and mathematics'
    ],
    icon: BookOpen
  },
  {
    degree: 'Secondary (Class X)',
    institution: 'Bidhannagar Municipal School',
    period: '2017 – 2019',
    location: 'Kolkata, West Bengal',
    focus: 'General Studies',
    highlights: [
      'Percentage: 80.2%',
      'Completed secondary education with strong academic performance'
    ],
    icon: BookOpen
  }
];

const certifications: string[] = [];

export function Education() {
  return (
    <Section id="education" className="bg-gradient-to-b from-slate-800/50 to-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mb-16" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {education.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-200 mb-2">{edu.degree}</h3>
                    <p className="text-cyan-400 font-semibold text-lg">{edu.institution}</p>
                    <p className="text-slate-400 text-sm mt-1">
                      {edu.period} • {edu.location}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full text-sm font-medium">
                    {edu.focus}
                  </span>
                </div>

                <ul className="space-y-2 text-slate-300">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {certifications.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-200">Certifications</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-emerald-500/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span className="text-slate-300">{cert}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      )}
    </Section>
  );
}
