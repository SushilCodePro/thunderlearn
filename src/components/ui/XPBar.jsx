import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export default function XPBar({ current = 0, max = 100, label, showShimmer = true }) {
  const [width, setWidth] = useState(0)
  const percent = Math.min((current / max) * 100, 100)

  useEffect(() => {
    const t = setTimeout(() => setWidth(percent), 150)
    return () => clearTimeout(t)
  }, [percent])

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-sm mb-1.5 opacity-80">
          <span>{label}</span>
          <span>{current} / {max} XP</span>
        </div>
      )}
      <div className="h-3 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 relative ${showShimmer ? 'animate-shimmer' : ''}`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
