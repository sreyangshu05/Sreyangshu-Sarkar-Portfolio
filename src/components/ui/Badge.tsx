import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'tech' | 'category';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    tech: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    category: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
  };

  return (
    <motion.span
      className={`px-4 py-2 rounded-full text-sm font-medium border ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.span>
  );
}
