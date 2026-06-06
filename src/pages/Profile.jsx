import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { RotateCcw } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import XPBar from '../components/ui/XPBar'
import Badge from '../components/ui/Badge'
import ProgressRing from '../components/ui/ProgressRing'
import { mockUser } from '../data/mockUser'
import { courses, countCourseProgress } from '../data/mockCourses'
import { useProgress } from '../hooks/useProgress'

export default function Profile() {
  const { progress, userStats, earnedBadges, resetAllProgress } = useProgress()
  const [resetting, setResetting] = useState(false)

  const handleReset = () => {
    const confirmed = window.confirm(
      'Reset all progress? This clears completed lessons, XP, streak, badges, and quiz scores. This cannot be undone.',
    )
    if (!confirmed) return
    setResetting(true)
    resetAllProgress()
    setResetting(false)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="flex flex-col sm:flex-row items-center gap-6">
          <img src={mockUser.avatar} alt={mockUser.name} className="w-24 h-24 rounded-full bg-indigo-500/20" />
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-2xl font-black">{mockUser.name}</h1>
            <p className="opacity-60">{mockUser.username}</p>
            <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
              <span className="badge badge-primary">Level {userStats.level}</span>
              <span className="badge badge-ghost">Joined {mockUser.joinDate}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">{progress.completedLessons.length}</p>
              <p className="text-xs opacity-60">Lessons</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{userStats.streak}</p>
              <p className="text-xs opacity-60">Streak</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{userStats.xp}</p>
              <p className="text-xs opacity-60">XP</p>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card>
          <h2 className="font-bold mb-4">Level Progress</h2>
          <XPBar current={userStats.xp} max={mockUser.xpToNextLevel} label={`Level ${userStats.level} → ${userStats.level + 1}`} />
          <p className="text-sm opacity-60 mt-2">{mockUser.xpToNextLevel - userStats.xp} XP to next level</p>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
        <h2 className="text-xl font-bold mb-4">Badges</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {earnedBadges.map((b) => (
            <Badge
              key={b.id}
              emoji={b.emoji}
              name={b.name}
              earned={b.earned}
              tooltip={b.earned ? b.name : 'Complete more lessons to unlock'}
              className="p-4"
            />
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h2 className="text-xl font-bold mb-4">Course Progress</h2>
        <div className="space-y-4">
          {courses.map((c) => {
            const { completed, total, pct } = countCourseProgress(c, progress.completedLessons)
            const done = pct === 100
            return (
              <Link key={c.id} to={`/course/${c.id}`}>
                <Card className="flex items-center gap-4">
                  <ProgressRing percent={pct} size={64} strokeWidth={5} />
                  <div className="flex-1">
                    <p className="font-bold">{c.emoji} {c.title}</p>
                    <p className="text-sm opacity-60">{completed}/{total} lessons</p>
                  </div>
                  {done
                    ? <span className="badge badge-success">Complete</span>
                    : <span className="badge badge-outline">{pct}%</span>
                  }
                </Card>
              </Link>
            )
          })}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
        <Card className="border-error/20">
          <h2 className="font-bold mb-2">Reset Progress</h2>
          <p className="text-sm opacity-60 mb-4">
            Clear all saved progress and start fresh. Your theme preference will be kept.
          </p>
          <Button variant="outline" onClick={handleReset} disabled={resetting}>
            <RotateCcw size={16} />
            Reset All Progress
          </Button>
        </Card>
      </motion.div>

      {userStats.longestStreak > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-center text-sm opacity-50">
          <p>Longest streak: {userStats.longestStreak} days 🔥</p>
        </motion.div>
      )}
    </div>
  )
}
