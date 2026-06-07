import { Link, useLocation } from 'react-router'
import { LayoutDashboard, BookOpen, Puzzle, Zap, User, Flame, Rocket } from 'lucide-react'
import { mockUser } from '../../data/mockUser'
import XPBar from '../ui/XPBar'
import { useProgress } from '../../hooks/useProgress'

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/course/js-basics', label: 'My Courses', icon: BookOpen },
  { to: '/project', label: 'Final Project', icon: Rocket, featured: true },
  { to: '/dashboard#concepts', label: 'Concepts', icon: Puzzle },
  { to: '/quiz/js-basics', label: 'Quiz', icon: Zap },
  { to: '/profile', label: 'Profile', icon: User },
]

export default function Sidebar() {
  const location = useLocation()
  const { userStats } = useProgress()

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen glass-card rounded-none border-r border-white/10 p-5 sticky top-0 h-screen">
      <Link to="/" className="text-lg font-bold gradient-text mb-6">⚡ ThunderLearn</Link>

      <div className="flex items-center gap-3 mb-4">
        <img src={mockUser.avatar} alt={mockUser.name} className="w-10 h-10 rounded-full bg-indigo-500/20" />
        <div>
          <p className="font-semibold text-sm">{mockUser.name}</p>
          <span className="badge badge-primary badge-sm">Level {userStats.level}</span>
        </div>
      </div>

      <XPBar current={userStats.xp} max={mockUser.xpToNextLevel} className="mb-6" />

      <nav className="flex-1 space-y-1">
        {links.map(({ to, label, icon: Icon, featured }) => {
          const active = location.pathname === to || location.pathname.startsWith(to.split('#')[0])
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                featured
                  ? active
                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold shadow-lg shadow-indigo-500/20'
                    : 'bg-gradient-to-r from-indigo-500/20 to-cyan-500/15 border border-indigo-500/30 text-indigo-200 font-bold hover:from-indigo-500/30 hover:to-cyan-500/25'
                  : active
                    ? 'bg-indigo-500/20 text-indigo-300 font-medium'
                    : 'opacity-70 hover:bg-white/5 hover:opacity-100'
              }`}
            >
              <Icon size={18} />
              <span className="flex-1">{label}</span>
              {/* {featured && <span className="badge badge-xs badge-primary">Judge</span>} */}
            </Link>
          )
        })}
      </nav>

      {userStats.streak > 0 && (
        <div className="mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-sm">
            <Flame className="text-amber-400" size={18} />
            <span className="font-semibold">{userStats.streak}-day streak</span>
          </div>
        </div>
      )}
    </aside>
  )
}
