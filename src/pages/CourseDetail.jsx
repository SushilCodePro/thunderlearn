import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, CheckCircle2, Circle } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import ProgressRing from '../components/ui/ProgressRing'
import { getCourseById, countCourseProgress } from '../data/mockCourses'
import { useProgress } from '../hooks/useProgress'

export default function CourseDetail() {
  const { id } = useParams()
  const course = getCourseById(id)
  const { progress, isLessonComplete } = useProgress()
  const [openModules, setOpenModules] = useState(course?.modules?.map((m) => m.id) ?? [])

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Course not found</h2>
        <Link to="/dashboard" className="btn btn-primary mt-4">Back to Dashboard</Link>
      </div>
    )
  }

  const { pct: progressPct } = countCourseProgress(course, progress.completedLessons)
  const nextLesson = course.modules?.flatMap((m) => m.lessons ?? []).find((l) => !isLessonComplete(l.id))

  const toggleModule = (moduleId) => {
    setOpenModules((prev) =>
      prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <span className="text-5xl">{course.emoji}</span>
        <h1 className="text-3xl font-black mt-4">{course.title}</h1>
        <p className="opacity-70 mt-2 max-w-lg mx-auto">{course.description}</p>

        <div className="flex justify-center my-6">
          <ProgressRing percent={progressPct} size={140} />
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm opacity-60">
          <span>{course.totalLessons} lessons</span>
          <span>·</span>
          <span>{course.modules?.length ?? 0} modules</span>
          <span>·</span>
          <span>{course.xpReward} XP reward</span>
        </div>

        {nextLesson && (
          <Link to={`/lesson/${nextLesson.id}`} className="inline-block mt-6">
            <Button glow>Continue Learning →</Button>
          </Link>
        )}
      </motion.div>

      <div className="space-y-3">
        {course.modules?.map((module, mi) => {
          const completed = module.lessons?.filter((l) => isLessonComplete(l.id)).length ?? 0
          const total = module.lessons?.length ?? 0
          const modProgress = total ? Math.round((completed / total) * 100) : 0
          const isOpen = openModules.includes(module.id)

          return (
            <Card key={module.id} hover={false} className="!p-0 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => toggleModule(module.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-sm badge-outline">Module {mi + 1}</span>
                    <h3 className="font-bold">{module.title}</h3>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs opacity-60">{completed}/{total} lessons</span>
                    <div className="flex-1 max-w-32 h-1.5 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-emerald-500" style={{ width: `${modProgress}%` }} />
                    </div>
                  </div>
                </div>
                <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={20} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/10"
                  >
                    {module.lessons?.map((lesson) => {
                      const done = isLessonComplete(lesson.id)
                      return (
                        <Link
                          key={lesson.id}
                          to={`/lesson/${lesson.id}`}
                          className="flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                        >
                          {done
                            ? <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                            : <Circle size={18} className="opacity-30 shrink-0" />
                          }
                          <span className={`flex-1 text-sm ${done ? 'opacity-60' : 'font-medium'}`}>
                            {lesson.title}
                          </span>
                          <span className="badge badge-ghost badge-sm">{lesson.duration}</span>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          )
        })}
      </div>

      <div className="text-center">
        <Link to={`/quiz/${course.id}`}>
          <Button variant="outline">Take Quiz →</Button>
        </Link>
      </div>
    </div>
  )
}
