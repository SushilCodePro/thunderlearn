import { Link } from 'react-router'
import { motion } from 'motion/react'
import { BookOpen, CheckCircle2, Code2, Lightbulb, MousePointerClick, Sparkles, Trophy } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const highlights = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'A story-first JavaScript course that explains why the language exists before teaching syntax.',
  },
  {
    icon: MousePointerClick,
    title: 'Functionality',
    text: 'Lessons, collapsible deep dives, runnable examples, progress, quiz scoring, badges, and theme support.',
  },
  {
    icon: Sparkles,
    title: 'User Experience',
    text: 'Short lesson flow for beginners, with optional deeper panels when learners want full lecture knowledge.',
  },
  {
    icon: Trophy,
    title: 'Impact',
    text: 'Learners connect browser history, data types, operators, loops, numbers, and strings into one mental model.',
  },
]

const demoFlow = [
  'Start with a dead HTML page and understand the problem.',
  'Add CSS and see why a beautiful page can still be non-functional.',
  'Use JavaScript to make clicks, forms, API data, and theme changes work.',
  'Apply the same ideas through data types, operators, loops, numbers, and strings.',
]

export default function Project() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 mb-3">
          {/* <span className="badge badge-primary">Judge View</span> */}
          {/* <span className="badge badge-outline">Final Project</span> */}
          <Link to="/project"><Button className="badge badge-outline" variant="outline">Final Project</Button></Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black">ThunderLearn JavaScript Foundations</h1>
        <p className="mt-3 max-w-2xl opacity-70 leading-relaxed">
          An interactive learning product that turns four JavaScript lectures into a connected beginner journey:
          story, concept, code, practice, progress, and quiz.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link to="/lesson/l1"><Button glow>Start Demo Lesson</Button></Link>
          <Link to="/quiz/js-basics"><Button variant="outline">Open Quiz</Button></Link>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map(({ icon: Icon, title, text }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
            <Card className="h-full" hover={false}>
              <Icon className="text-indigo-400" size={24} />
              <h2 className="font-bold mt-3">{title}</h2>
              <p className="text-sm opacity-70 mt-2 leading-relaxed">{text}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <Card hover={false}>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-cyan-400" size={22} />
            <h2 className="text-xl font-bold">What Judges Should Notice</h2>
          </div>
          <div className="space-y-3">
            {demoFlow.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-relaxed">
                <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={18} />
                <span className="opacity-75">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card hover={false} className="bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border-indigo-500/20">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="text-indigo-400" size={22} />
            <h2 className="text-xl font-bold">Project Output</h2>
          </div>
          <p className="text-sm opacity-75 leading-relaxed">
            The project is not only a content site. It is a functional learning app with course navigation,
            progress tracking, lesson completion, quiz feedback, light/dark mode, and lecture-connected code examples.
          </p>
          <div className="mt-5 rounded-xl bg-[#0d1117] border border-white/10 p-4 font-mono text-sm text-emerald-300">
            console.log(&quot;Learner understands why JS exists, then writes it.&quot;);
          </div>
        </Card>
      </div>
    </div>
  )
}
