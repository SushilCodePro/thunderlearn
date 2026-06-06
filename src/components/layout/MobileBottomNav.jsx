import { Link, useLocation } from 'react-router'
import { Home, BookOpen, Puzzle, Zap, User } from 'lucide-react'

const tabs = [
  { to: '/dashboard', label: 'Home', icon: Home },
  { to: '/course/js-basics', label: 'Courses', icon: BookOpen },
  { to: '/dashboard', label: 'Concepts', icon: Puzzle },
  { to: '/quiz/js-basics', label: 'Quiz', icon: Zap },
  { to: '/profile', label: 'Profile', icon: User },
]

export default function MobileBottomNav() {
  const location = useLocation()

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-base-100/90 border-t border-white/10 safe-area-pb">
      <div className="flex justify-around items-center h-16 px-2">
        {tabs.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to ||
            (to.includes('course') && location.pathname.startsWith('/course')) ||
            (to.includes('quiz') && location.pathname.startsWith('/quiz'))
          return (
            <Link
              key={label}
              to={to}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors relative ${
                active ? 'text-indigo-400' : 'opacity-50'
              }`}
              aria-label={label}
            >
              {active && <span className="absolute -top-1 w-1 h-1 rounded-full bg-indigo-400" />}
              <Icon size={20} />
              <span className="text-[10px]">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
