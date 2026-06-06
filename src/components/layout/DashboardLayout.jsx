import { Outlet, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import Sidebar from './Sidebar'
import MobileBottomNav from './MobileBottomNav'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useProgress'

export default function DashboardLayout() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen pb-20 lg:pb-0">
        <header className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-white/10 backdrop-blur-xl bg-base-100/80 sticky top-0 z-40">
          <span className="font-bold gradient-text">⚡ ThunderLearn</span>
          <button onClick={toggleTheme} className="btn btn-ghost btn-circle btn-sm" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <MobileBottomNav />
    </div>
  )
}
