import { motion } from 'framer-motion';
import { Code2, Lightbulb, Rocket, Target } from 'lucide-react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

const principles = [
  {
    icon: Target,
    title: 'Impact-Driven',
    description: 'Every line of code should solve a real problem and create measurable value.'
  },
  {
    icon: Rocket,
    title: 'Performance First',
    description: 'Build systems that scale effortlessly and deliver lightning-fast experiences.'
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Elegant, maintainable code that stands the test of time and team growth.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Minded',
    description: 'Constantly exploring new technologies and patterns to stay ahead of the curve.'
  }
];

export function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-slate-900 to-slate-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mb-16" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-slate-200 mb-6">
            Hi, I'm Sreyangshu — a software developer passionate about building innovative solutions.
          </h3>
          <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
            <p>
              I'm a Computer Science graduate from the University of Calcutta with a strong foundation
              in software development, AI/ML, and modern web technologies. Through internships at Zi Cloud
              and CodSoft, I've gained hands-on experience building automation tools, dynamic interfaces,
              and scalable applications.
            </p>
            <p>
              I specialize in software development with expertise in React, Node.js, Python, and AI/ML
              technologies. My projects demonstrate a focus on real-world problem-solving, from face detection
              systems with 95%+ accuracy to AI-powered tutoring platforms that improve learning experiences.
            </p>
            <p>
              I'm passionate about creating impactful software that solves real problems. Whether it's
              optimizing performance, implementing AI features, or building responsive user interfaces,
              I approach every project with attention to detail and a commitment to excellence.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-200 mb-2">{principle.title}</h4>
                  <p className="text-slate-400">{principle.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">My Philosophy</h3>
        <p className="text-lg text-slate-300 leading-relaxed">
          "I believe in writing clean, efficient code that solves real problems. Technology is a powerful
          tool, but the real value comes from understanding user needs, designing intuitive solutions, and
          continuously learning to stay at the forefront of innovation. Every project is an opportunity
          to create something meaningful."
        </p>
      </motion.div>
    </Section>
  );
}
