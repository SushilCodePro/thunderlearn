import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import confetti from 'canvas-confetti'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { getCourseById } from '../data/mockCourses'
import { getQuizQuestions } from '../data/quizQuestions'
import { showXPToast, useProgress } from '../hooks/useProgress'

const labels = ['A', 'B', 'C', 'D']

export default function Quiz() {
  const { courseId } = useParams()
  const course = getCourseById(courseId)
  const { saveQuizScore } = useProgress()
  const quizQuestions = getQuizQuestions(courseId)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [wrongAnswers, setWrongAnswers] = useState([])

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Quiz not found</h2>
        <Link to="/dashboard" className="btn btn-primary mt-4">Back to Dashboard</Link>
      </div>
    )
  }

  if (quizQuestions.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Quiz coming soon</h2>
        <p className="opacity-60 mt-2">Complete the lectures first — quiz will be added with the next module.</p>
        <Link to={`/course/${courseId}`} className="btn btn-primary mt-4">Back to Course</Link>
      </div>
    )
  }

  const question = quizQuestions[current]
  const progress = ((current + (answered ? 1 : 0)) / quizQuestions.length) * 100

  const handleAnswer = (index) => {
    if (answered) return
    setSelected(index)
    setAnswered(true)
    const correct = index === question.correct
    if (correct) {
      setScore((s) => s + 1)
      showXPToast(10)
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } })
    } else {
      setWrongAnswers((prev) => [...prev, current])
    }
  }

  const handleNext = () => {
    if (current < quizQuestions.length - 1) {
      setCurrent((c) => c + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setFinished(true)
      saveQuizScore(courseId, score, quizQuestions.length)
      if (score >= quizQuestions.length / 2) {
        confetti({ particleCount: 150, spread: 100 })
      }
    }
  }

  if (finished) {
    const xpEarned = score * 10
    const tweetUrl = `https://twitter.com/intent/tweet?text=Scored%20${score}%2F${quizQuestions.length}%20on%20ThunderLearn%20quiz!%20%F0%9F%9A%80%20%23JavaScript%20%23ThunderCourse`

    return (
      <motion.div className="max-w-lg mx-auto text-center space-y-6" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Card className="py-12">
          <span className="text-5xl">🎉</span>
          <h2 className="text-3xl font-black mt-4">{score}/{quizQuestions.length} — Great job!</h2>
          <motion.p
            className="text-2xl font-bold text-amber-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            +{xpEarned} XP earned
          </motion.p>
          <div className="mt-6 space-y-2 text-sm opacity-70">
            <p>✓ Correct: {score}</p>
            <p>✗ Wrong: {quizQuestions.length - score}</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Button onClick={() => { setCurrent(0); setScore(0); setFinished(false); setSelected(null); setAnswered(false); setWrongAnswers([]) }}>
              Retry Quiz
            </Button>
            <Link to={`/course/${courseId}`}><Button variant="outline">Back to Course</Button></Link>
            <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost">Share on X 🐦</Button>
            </a>
          </div>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-black">{course.title} Quiz</h1>
        <p className="text-sm opacity-60">{course.emoji} {course.title} · {quizQuestions.length} questions</p>
      </div>

      <div className="h-2 rounded-full bg-white/10">
        <motion.div className="h-full rounded-full bg-indigo-500" animate={{ width: `${progress}%` }} />
      </div>
      <p className="text-sm opacity-50">Question {current + 1} of {quizQuestions.length}</p>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
        >
          <Card>
            <h2 className="text-xl font-bold mb-6 whitespace-pre-line">{question.question}</h2>
            <div className="space-y-3">
              {question.options.map((opt, i) => {
                let cls = 'btn w-full justify-start text-left h-auto py-3 border-white/10'
                if (answered) {
                  if (i === question.correct) cls += ' btn-success text-white'
                  else if (i === selected) cls += ' btn-error text-white'
                  else cls += ' btn-ghost opacity-40'
                }
                return (
                  <motion.button
                    key={i}
                    className={cls}
                    onClick={() => handleAnswer(i)}
                    whileHover={!answered ? { scale: 1.02 } : undefined}
                    disabled={answered}
                  >
                    <span className="font-bold mr-3">{labels[i]}.</span> {opt}
                    {answered && i === question.correct && ' ✓'}
                    {answered && i === selected && i !== question.correct && ' ✗'}
                  </motion.button>
                )
              })}
            </div>

            {answered && (
              <motion.div
                className="mt-4 p-4 rounded-xl bg-white/5 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {selected === question.correct ? (
                  <p className="text-emerald-400 font-medium">Correct! +10 XP</p>
                ) : (
                  <p className="text-red-400 font-medium">Not quite!</p>
                )}
                <p className="opacity-70 mt-1">{question.explanation}</p>
              </motion.div>
            )}

            {answered && (
              <div className="mt-6 text-right">
                <Button onClick={handleNext} glow>
                  {current < quizQuestions.length - 1 ? 'Next Question →' : 'See Results →'}
                </Button>
              </div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
