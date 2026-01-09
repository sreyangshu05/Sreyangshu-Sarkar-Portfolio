import { motion } from 'framer-motion';
import { Brain, Database, Globe, Server, Settings, Zap } from 'lucide-react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

const skillCategories = [
  {
    icon: Globe,
    title: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    skills: ['HTML', 'CSS', 'React', 'Next.js', 'Bootstrap', 'TailwindCSS', 'WordPress', 'TypeScript']
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'from-blue-500 to-indigo-500',
    skills: ['Node.js', 'Django', 'Flask', 'Express.js', 'RESTful APIs', 'GraphQL', 'Redis', 'PrismaORM', 'Playwright', 'Supabase']
  },
  {
    icon: Database,
    title: 'Databases',
    color: 'from-emerald-500 to-teal-500',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Vector DB']
  },
  {
    icon: Settings,
    title: 'DevOps & Tools',
    color: 'from-orange-500 to-red-500',
    skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'CI/CD', 'PyCharm', 'VS Code', 'Dev C++', 'pgAdmin', 'MongoDB Compass', 'Postman', 'Thunder Client']
  },
  {
    icon: Brain,
    title: 'AI / ML',
    color: 'from-pink-500 to-rose-500',
    skills: ['TensorFlow', 'Scikit-learn', 'Keras', 'OpenCV', 'NumPy', 'Pandas', 'joblib', 'OpenAI API', 'LangChain', 'FAISS', 'Sentence Transformers']
  },
  {
    icon: Zap,
    title: 'Languages',
    color: 'from-yellow-500 to-orange-500',
    skills: ['Python', 'JavaScript', 'C++', 'C', 'TypeScript']
  }
];

export function Skills() {
  return (
    <Section id="skills" className="bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mb-16" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-200">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-medium border border-slate-600/50 hover:border-cyan-500/50 hover:bg-slate-700 transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="mt-16 grid md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {[
          { label: 'Projects Completed', value: '7+' },
          { label: 'Technologies Mastered', value: '40+' },
          { label: 'GitHub Repositories', value: '10+' }
        ].map((stat, index) => (
          <Card key={stat.label} className="text-center" hover={false}>
            <motion.div
              className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.8 + index * 0.1 }}
            >
              {stat.value}
            </motion.div>
            <div className="text-slate-400 font-medium">{stat.label}</div>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
}
