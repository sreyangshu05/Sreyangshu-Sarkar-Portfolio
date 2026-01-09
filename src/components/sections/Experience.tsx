import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Section } from '../ui/Section';

const experiences = [
  {
    title: 'Full-Stack Developer Intern',
    company: 'Zi Cloud',
    period: 'Sept 2024 – Nov 2024',
    location: 'Remote',
    achievements: [
      'Engineered 2 automation tools using Node.js for task management, boosting operational efficiency by 40%',
      'Structured dynamic guide and homepage interfaces using WordPress, improving overall user navigation flow by 35%',
      'Developed a responsive calendar UI and bar chart visualization with ReactJS, enhancing data accessibility and interactivity by 45%'
    ],
    technologies: ['Node.js', 'React', 'WordPress', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Python Developer Intern',
    company: 'CodSoft',
    period: 'July 2024 – Aug 2024',
    location: 'Remote',
    achievements: [
      'Created multiple Python applications including Calculator, Password Generator, and To-Do List, demonstrating algorithmic problem-solving capabilities',
      'Collaborated with senior developers to establish efficient coding standards, improving code quality and delivery timelines by 30%',
      'Managed software debugging and version control using Git, ensuring stable releases with 0 major post-deployment bugs'
    ],
    technologies: ['Python', 'Git', 'GitHub', 'Problem Solving', 'Algorithms']
  }
];

export function Experience() {
  return (
    <Section id="experience" className="bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mb-16" />
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-emerald-500" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative mb-16 md:mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <motion.div
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.15)' }}
                >
                  <div className="flex items-center gap-3 mb-4 justify-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Briefcase className="text-white" size={20} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-slate-200">{exp.title}</h3>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4 text-sm text-slate-400">
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-3 mb-6 text-slate-300 text-left">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 justify-start">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="tech">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full border-4 border-slate-900 -translate-x-[11px] md:-translate-x-3" />

              <div className="w-full md:w-5/12" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
