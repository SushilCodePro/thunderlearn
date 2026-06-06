import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Flame, Target } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import ProgressRing from '../components/ui/ProgressRing'
import XPBar from '../components/ui/XPBar'
import Badge from '../components/ui/Badge'
import { courses, getCurrentLesson, countCourseProgress } from '../data/mockCourses'
import { mockUser } from '../data/mockUser'
import { useProgress } from '../hooks/useProgress'

const colorMap = {
  indigo: 'from-indigo-500/20 to-indigo-600/5 border-indigo-500/30',
  emerald: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/30',
  violet: 'from-violet-500/20 to-violet-600/5 border-violet-500/30',
}

export default function Dashboard() {
  const { progress, userStats, earnedBadges } = useProgress()
  const current = getCurrentLesson(progress.completedLessons)
  const course = courses[0]
  const { pct: progressPct } = countCourseProgress(course, progress.completedLessons)
  const goalsDone = Object.values(progress.dailyGoals).filter(Boolean).length
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl sm:text-3xl font-bold">{greeting}, {mockUser.name}! 🌤️</h1>
        <p className="text-sm opacity-60 mt-1">{today}</p>
      </motion.div>

      {userStats.streak > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="flex items-center gap-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/20">
            <Flame className="text-amber-400" size={28} />
            <div>
              <p className="font-bold">🔥 {userStats.streak}-Day Streak</p>
              <p className="text-sm opacity-60">Don&apos;t break the chain!</p>
            </div>
          </Card>
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
        <Card className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border-indigo-500/20">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <ProgressRing percent={progressPct} size={100} color="#6366F1" />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm opacity-60">Continue Learning</p>
              <h2 className="text-xl font-bold mt-1">{course.emoji} {course.title}</h2>
              <p className="text-sm opacity-70 mt-1">Next: {current?.title}</p>
              <Link to={`/lesson/${current?.id}`} className="inline-block mt-4">
                <Button glow>Continue: {current?.title} →</Button>
              </Link>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <span className="badge badge-primary badge-lg">Level {userStats.level}</span>
            </div>
            <XPBar current={userStats.xp} max={mockUser.xpToNextLevel} label="XP Progress" />
            <p className="text-sm opacity-60 mt-3">{mockUser.xpToNextLevel - userStats.xp} XP to Level {userStats.level + 1}</p>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Target size={20} className="text-indigo-400" />
              <h3 className="font-bold">Daily Goals</h3>
            </div>
            <ul className="space-y-3">
              <li className={`flex items-center gap-2 text-sm ${progress.dailyGoals.lesson ? '' : 'opacity-60'}`}>
                <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" checked={progress.dailyGoals.lesson} disabled readOnly />
                Complete 1 lesson today
              </li>
              <li className={`flex items-center gap-2 text-sm ${progress.dailyGoals.streak ? '' : 'opacity-60'}`}>
                <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" checked={progress.dailyGoals.streak} disabled readOnly />
                Maintain streak
              </li>
              <li className={`flex items-center gap-2 text-sm ${progress.dailyGoals.concept ? '' : 'opacity-60'}`}>
                <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" checked={progress.dailyGoals.concept} disabled readOnly />
                Review 1 concept
              </li>
            </ul>
            <p className="text-sm mt-4 text-amber-400 font-medium">
              {goalsDone}/3 goals{goalsDone > 0 ? ' — Keep going!' : ' — Start your first lesson!'}
            </p>
          </Card>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <h2 className="text-xl font-bold mb-4">My Courses</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c) => {
            const { completed, total, pct } = countCourseProgress(c, progress.completedLessons)
            return (
              <Link key={c.id} to={`/course/${c.id}`}>
                <Card className={`bg-gradient-to-br ${colorMap[c.color] ?? colorMap.indigo} h-full`}>
                  <span className="text-3xl">{c.emoji}</span>
                  <h3 className="font-bold mt-2">{c.title}</h3>
                  <p className="text-xs opacity-60 mt-1">{completed} of {total} lessons</p>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
        <h2 className="text-xl font-bold mb-4">Badges</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {earnedBadges.map((b) => (
            <Badge
              key={b.id}
              emoji={b.emoji}
              name={b.name}
              earned={b.earned}
              tooltip={b.earned ? b.name : 'Complete more lessons to unlock'}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
