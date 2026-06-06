import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '../../hooks/useProgress'
import Button from '../ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Why JS', href: '#why-js' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-base-100/80 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold gradient-text flex items-center gap-1">
            ⚡ ThunderLearn
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm opacity-80 hover:opacity-100 hover:text-indigo-400 transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle btn-sm"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/dashboard" className="hidden sm:inline-flex">
              <Button variant="ghost" className="btn-sm">Login</Button>
            </Link>
            <Link to="/dashboard" className="hidden sm:inline-flex">
              <Button className="btn-sm" glow>Start Free →</Button>
            </Link>
            <button
              className="btn btn-ghost btn-circle md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <motion.div
            className="md:hidden pb-4 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 px-4 rounded-lg hover:bg-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link to="/dashboard" className="block py-2 px-4" onClick={() => setMenuOpen(false)}>
              <Button className="w-full" glow>Start Free →</Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
