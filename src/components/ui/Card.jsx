import { motion } from 'motion/react'

export default function Card({ children, className = '', hover = true, onClick }) {
  const Component = onClick ? motion.button : motion.div
  return (
    <Component
      className={`glass-card p-6 ${hover ? 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300' : ''} ${onClick ? 'text-left w-full cursor-pointer' : ''} ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}
