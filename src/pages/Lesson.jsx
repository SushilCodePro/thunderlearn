import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { motion } from 'motion/react'
import confetti from 'canvas-confetti'
import Button from '../components/ui/Button'
import CodeBlock from '../components/ui/CodeBlock'
import { StoryFlow, LessonQuote, LessonVisual, LessonDeepDive } from '../components/lesson/LessonStory'
import { getLessonById } from '../data/mockCourses'
import { getLessonContent } from '../data/lessonContent'
import { useProgress } from '../hooks/useProgress'

export default function Lesson() {
  const { id } = useParams()
  const lesson = getLessonById(id)
  const content = getLessonContent(id)
  const { markLessonComplete, isLessonComplete } = useProgress()
  const [completed, setCompleted] = useState(isLessonComplete(id))
  const [activeTab, setActiveTab] = useState('index.js')
  const [output, setOutput] = useState('')
  const [running, setRunning] = useState(false)

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Lesson not found</h2>
        <Link to="/dashboard" className="btn btn-primary mt-4">Back to Dashboard</Link>
      </div>
    )
  }

  const handleComplete = () => {
    if (completed) return
    setCompleted(true)
    markLessonComplete(id)
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.7 } })
  }

  const handleRun = () => {
    setRunning(true)
    setActiveTab('output')
    setTimeout(() => {
      setOutput(content.output)
      setRunning(false)
    }, 600)
  }

  const lessonPct = Math.round((lesson.lessonNumber / lesson.totalLessons) * 100)
  const hasPlayground = Boolean(content.playground)
  const hasStory = Boolean(content.story?.length)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-sm opacity-60 mb-4">
        <Link to={`/course/${lesson.courseId}`} className="hover:text-indigo-400">{lesson.courseTitle}</Link>
        {' > '}
        <span>{lesson.moduleTitle}</span>
        {' > '}
        <span className="text-indigo-400">{lesson.title}</span>
      </div>

      <div className="h-2 rounded-full bg-white/10 mb-6">
        <motion.div
          className="h-full rounded-full bg-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${lessonPct}%` }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <p className="text-xs opacity-50 mb-6">Lesson {lesson.lessonNumber} of {lesson.totalLessons}</p>

      <div className={`grid gap-8 ${hasPlayground ? 'lg:grid-cols-2' : ''}`}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl sm:text-3xl font-black mb-2">{content.title}</h1>
          {content.subtitle && <p className="text-indigo-300/80 font-medium mb-6">{content.subtitle}</p>}

          {hasStory ? (
            <>
              <LessonVisual type={content.visual} />
              <StoryFlow steps={content.story} />
            </>
          ) : (
            content.paragraphs?.map((p, i) => (
              <p key={i} className="opacity-80 leading-relaxed mb-4">{p}</p>
            ))
          )}

          <LessonDeepDive sections={content.deepDive} />

          <LessonQuote text={content.quote} label={content.quoteLabel} />

          {content.code && <CodeBlock code={content.code} className="my-6" />}

          {content.tip && (
            <div className="border-l-4 border-indigo-500 pl-4 py-2 my-6 bg-indigo-500/5 rounded-r-xl">
              <p className="text-sm font-semibold text-indigo-300">💡 Pro Tip</p>
              <p className="text-sm opacity-70 mt-1">{content.tip}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-3 mt-8">
            {lesson.prevLessonId && (
              <Link to={`/lesson/${lesson.prevLessonId}`}>
                <Button variant="ghost">← Previous</Button>
              </Link>
            )}
            {lesson.nextLessonId ? (
              <Link to={`/lesson/${lesson.nextLessonId}`}>
                <Button>Next Lesson →</Button>
              </Link>
            ) : (
              <Link to={`/quiz/${lesson.courseId}`}>
                <Button>Take Quiz →</Button>
              </Link>
            )}
            <Button
              variant={completed ? 'success' : 'primary'}
              onClick={handleComplete}
              disabled={completed}
              glow={!completed}
            >
              {completed ? 'Completed ✓' : 'Mark Complete ✓'}
            </Button>
          </div>
        </motion.div>

        {hasPlayground && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:sticky lg:top-8 h-fit">
            <div className="rounded-2xl bg-[#0d1117] border border-white/10 overflow-hidden">
              <div className="flex border-b border-white/10">
                {['index.js', 'output'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 text-sm font-mono ${activeTab === tab ? 'bg-white/10 text-indigo-300' : 'opacity-50'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'index.js' ? (
                <pre className="p-4 text-sm font-mono leading-relaxed min-h-[200px] whitespace-pre-wrap">{content.playground}</pre>
              ) : (
                <pre className="p-4 text-sm font-mono text-emerald-400 min-h-[200px] whitespace-pre-wrap">
                  {running ? 'Running...' : output || '// Click Run Code to see output'}
                </pre>
              )}

              <div className="p-4 border-t border-white/10">
                <Button onClick={handleRun} disabled={running} className="w-full" glow>
                  ▶ Run Code
                </Button>
                <p className="text-xs opacity-40 mt-2 text-center">
                  Paste in browser console (F12) for real execution
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
