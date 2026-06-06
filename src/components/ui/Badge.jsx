import { motion } from 'motion/react'

export default function Badge({ emoji, name, earned = false, className = '', tooltip }) {
  return (
    <motion.div
      className={`relative flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300 ${
        earned
          ? 'bg-indigo-500/20 border border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.3)]'
          : 'bg-white/5 border border-white/10 opacity-40 grayscale'
      } ${className}`}
      whileHover={{ scale: 1.05 }}
      title={tooltip ?? name}
    >
      <span className="text-2xl">{earned ? emoji : '🔒'}</span>
      <span className="text-xs font-medium text-center leading-tight">{name}</span>
    </motion.div>
  )
}
