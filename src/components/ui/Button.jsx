import { motion } from 'motion/react'

const variants = {
  primary: 'btn bg-indigo-500 hover:bg-indigo-600 text-white border-none glow-btn',
  ghost: 'btn btn-ghost',
  success: 'btn bg-emerald-500 hover:bg-emerald-600 text-white border-none',
  outline: 'btn btn-outline border-indigo-500/50 hover:bg-indigo-500/10',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  glow = false,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  return (
    <motion.button
      type={type}
      className={`${variants[variant] ?? variants.primary} ${glow ? 'glow-btn' : ''} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  )
}
