import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CodeBlock from '../components/ui/CodeBlock'
import { concepts, curriculumDays } from '../data/mockCourses'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const stats = [
  { value: 4, suffix: '', label: 'Days of Learning' },
  { value: 20, suffix: '+', label: 'Concepts Covered' },
  { value: 5, suffix: '+', label: 'Real Projects' },
  { value: 100, suffix: '%', label: 'Hands-On' },
]

const whyJS = [
  { emoji: '🌐', title: 'Runs Everywhere', desc: 'Browser, Node.js, mobile, IoT' },
  { emoji: '🔥', title: '#1 Most Used Language', desc: '12 years on Stack Overflow survey' },
  { emoji: '💼', title: 'Most In-Demand Skill', desc: 'Top requirement in web dev job listings' },
  { emoji: '⚡', title: 'Fast to Learn', desc: 'Write real code on your first day' },
  { emoji: '🛠️', title: 'Build Anything', desc: 'Web apps, APIs, CLIs, AI interfaces' },
  { emoji: '🤖', title: 'Powers AI UIs', desc: 'Every ChatGPT-style interface runs on JS' },
]

const testimonials = [
  { name: 'Rohit Negi', role: 'Tech lead', seed: 'rohit', quote: 'ThunderLearn made JS click for me. The streak system kept me coming back every day!' },
  { name: 'Aditya Tandan.', role: 'Tech lead', seed: 'adi', quote: 'Better than any YouTube tutorial. The lessons are short, focused, and actually build on each other.' },
  { name: 'Jit G.', role: 'Career Switcher', seed: 'jit', quote: 'I went from zero to building a fetch API mini app in 4 days. This platform is incredible.' },
]

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    let frame
    const duration = 1500
    const start = performance.now()
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [started, target])

  return (
    <motion.span
      className="text-4xl font-black text-indigo-400"
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.span>
  )
}

export default function Landing() {
  const [flipped, setFlipped] = useState(null)
  const [typed, setTyped] = useState('')
  const terminalCode = `const skills = ['Variables', 'DOM', 'APIs'];\nskills.forEach(s => learn(s));\nconsole.log("You're a developer 🚀");`

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= terminalCode.length) {
        setTyped(terminalCode.slice(0, i))
        i++
      } else clearInterval(interval)
    }, 40)
    return () => clearInterval(interval)
  }, [])

  const pills = ['JavaScript', 'ES6+', 'Async/Await', 'DOM', 'Fetch API']

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
        <div className="mesh-blob w-96 h-96 bg-indigo-600 top-20 -left-20 animate-float" />
        <div className="mesh-blob w-80 h-80 bg-violet-600 bottom-20 right-10 animate-float-slow" />
        <div className="mesh-blob w-64 h-64 bg-cyan-500 top-1/2 left-1/2 animate-float-delay" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div {...fadeUp}>
            <span className="badge badge-outline border-indigo-500/50 text-indigo-300 mb-4">🏆 Thunder Hackathon 2026</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              Learn JavaScript.<br />
              Build Real Things.<br />
              <span className="gradient-text">Actually Ship.</span>
            </h1>
            <p className="text-lg opacity-70 mb-8 max-w-lg leading-relaxed">
              A 4-day intensive JS course with hands-on lessons, real projects, and a learning streak that keeps you going.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link to="/dashboard"><Button glow className="btn-lg">Start Learning Free →</Button></Link>
              <a href="#curriculum"><Button variant="outline" className="btn-lg">View Curriculum</Button></a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm opacity-60">
              <span>✅ Free</span><span>·</span><span>✅ No signup needed</span><span>·</span><span>✅ Beginner-friendly</span>
            </div>
          </motion.div>

          <motion.div className="relative" {...fadeUp} transition={{ delay: 0.2 }}>
            <CodeBlock code={typed + (typed.length < terminalCode.length ? '▌' : '')} showPrompt className="shadow-2xl" />
            <div className="mt-2 text-sm font-mono text-emerald-400 pl-4">✓ Output: "You're a developer 🚀"</div>
            {pills.map((pill, i) => (
              <motion.span
                key={pill}
                className="absolute px-3 py-1 rounded-full text-xs font-medium glass-card"
                style={{
                  top: `${10 + i * 18}%`,
                  right: i % 2 === 0 ? '-10%' : '85%',
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-center">
          {stats.map((s) => (
            <motion.div key={s.label} {...fadeUp}>
              <CountUp target={s.value} suffix={s.suffix} />
              <p className="text-sm opacity-60 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">What You&apos;ll Learn</span>
          <h2 className="text-4xl font-black mt-2">4 Days. Real Skills. Zero Fluff.</h2>
        </motion.div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {curriculumDays.map((day, i) => (
            <motion.div key={day.day} {...fadeUp} transition={{ delay: i * 0.1 }}>
              <Card className="relative h-full">
                <span className="absolute top-4 left-4 badge badge-primary">Day {day.day}</span>
                <div className="mt-8">
                  <span className="text-3xl">{day.emoji}</span>
                  <h3 className="text-xl font-bold mt-2">{day.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {day.topics.map((t) => (
                      <li key={t} className="text-sm opacity-70 flex items-center gap-2">
                        <span className="text-emerald-400">✓</span> {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: day.completed ? '100%' : '75%' }} />
                  </div>
                  {day.completed && <span className="badge badge-success mt-3">Completed ✓</span>}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Concepts */}
      <section id="concepts" className="py-24 px-4 bg-white/[0.02]">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h2 className="text-4xl font-black">Core Concepts, Simplified</h2>
        </motion.div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {concepts.map((c) => (
            <motion.div key={c.id} {...fadeUp}>
              <div
                className={`flip-card h-48 cursor-pointer ${flipped === c.id ? 'flipped' : ''}`}
                onClick={() => setFlipped(flipped === c.id ? null : c.id)}
              >
                <div className="flip-card-inner relative w-full h-full">
                  <Card className="flip-card-front absolute inset-0 flex flex-col items-center justify-center" hover={false}>
                    <span className="text-4xl mb-2">{c.icon}</span>
                    <span className="font-semibold text-center">{c.title}</span>
                  </Card>
                  <Card className="flip-card-back absolute inset-0 flex flex-col justify-center gap-2 p-3" hover={false}>
                    <p className="text-xs opacity-80">{c.explanation}</p>
                    <pre className="text-[10px] font-mono bg-[#0d1117] p-2 rounded-lg overflow-hidden whitespace-pre-wrap">{c.code}</pre>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section id="features" className="py-24 px-4">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h2 className="text-4xl font-black">Your 4-Day Journey</h2>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <div className="hidden md:flex items-start justify-between relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/10">
              <motion.div
                className="h-full bg-indigo-500"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
            </div>
            {curriculumDays.map((day, i) => (
              <motion.div key={day.day} className="flex flex-col items-center z-10 w-1/4" {...fadeUp} transition={{ delay: i * 0.2 }}>
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center font-bold shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                  {day.day}
                </div>
                <p className="font-semibold mt-3 text-sm text-center">{day.title}</p>
                <p className="text-xs opacity-50 mt-1 text-center">{day.topics.slice(0, 2).join(' · ')}</p>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden space-y-6">
            {curriculumDays.map((day) => (
              <motion.div key={day.day} className="flex gap-4 items-start" {...fadeUp}>
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold shrink-0">{day.day}</div>
                <div>
                  <p className="font-semibold">{day.title}</p>
                  <p className="text-sm opacity-60">{day.topics.join(' · ')}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why JS */}
      <section id="why-js" className="py-24 px-4 bg-white/[0.02]">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h2 className="text-4xl font-black">Why JavaScript in 2026?</h2>
        </motion.div>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyJS.map((item, i) => (
            <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.05 }}>
              <Card>
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="font-bold mt-3">{item.title}</h3>
                <p className="text-sm opacity-60 mt-1">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <motion.div className="text-center mb-12" {...fadeUp}>
          <h2 className="text-4xl font-black">From Learners Like You</h2>
        </motion.div>
        <div className="flex gap-6 overflow-x-auto pb-4 px-4 max-w-6xl mx-auto snap-x">
          {testimonials.map((t) => (
            <motion.div key={t.seed} className="snap-center shrink-0 w-80" {...fadeUp}>
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${t.seed}`} alt={t.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs opacity-60">{t.role}</p>
                  </div>
                </div>
                <div className="text-amber-400 mb-2">★★★★★</div>
                <p className="text-sm opacity-80 italic">&ldquo;{t.quote}&rdquo;</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center rounded-3xl p-12 bg-gradient-to-br from-indigo-600 to-violet-700"
          {...fadeUp}
        >
          <h2 className="text-3xl font-black mb-4">Ready to Write Your First Line of Code?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="input input-bordered flex-1 bg-white/10 border-white/20" />
            <Button className="bg-gray-400 border-none ">Join Free →</Button>
          </div>
          <p className="text-sm opacity-80 mt-4">Free forever · No credit card · Start in 5 minutes</p>
          <a
            href="https://twitter.com/intent/tweet?text=Just%20finished%20the%20Thunder%20Course%204-day%20JS%20bootcamp!%20%F0%9F%9A%80%20Built%20with%20%40React%2C%20Tailwind%20%2B%20real%20projects.%20Check%20it%20out%3A%20%23JavaScript%20%23ThunderCourse%20%23100DaysOfCode"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm mt-4 text-white/80"
          >
            📢 Share on X
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
