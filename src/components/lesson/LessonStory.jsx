import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const phaseStyles = {
  problem: { label: 'The Problem', color: 'text-red-300', bg: 'bg-red-500/15', border: 'border-red-500/30', dot: 'bg-red-400' },
  context: { label: 'The Context', color: 'text-amber-300', bg: 'bg-amber-500/15', border: 'border-amber-500/30', dot: 'bg-amber-400' },
  insight: { label: 'The Insight', color: 'text-cyan-300', bg: 'bg-cyan-500/15', border: 'border-cyan-500/30', dot: 'bg-cyan-400' },
  outcome: { label: 'The Outcome', color: 'text-emerald-300', bg: 'bg-emerald-500/15', border: 'border-emerald-500/30', dot: 'bg-emerald-400' },
}

export function StoryFlow({ steps }) {
  if (!steps?.length) return null

  return (
    <div className="my-8 space-y-0">
      {steps.map((step, i) => {
        const style = phaseStyles[step.phase] ?? phaseStyles.context
        return (
          <motion.div
            key={step.title}
            className="relative pl-8 pb-8 last:pb-0"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.12, duration: 0.45 }}
          >
            {i < steps.length - 1 && (
              <div className="absolute left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent" />
            )}
            <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 ${style.border} ${style.bg} flex items-center justify-center`}>
              <span className={`w-2 h-2 rounded-full ${style.dot}`} />
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${style.color}`}>{style.label}</span>
            <h3 className="font-bold text-lg mt-1">{step.title}</h3>
            <p className="text-sm opacity-75 leading-relaxed mt-2">{step.body}</p>
          </motion.div>
        )
      })}
    </div>
  )
}

export function LessonDeepDive({ sections }) {
  if (!sections?.length) return null

  return (
    <div className="my-8">
      <div className="mb-3">
        <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">Deep knowledge</p>
        <p className="text-sm opacity-60 mt-1">Open the parts you want to study in more detail.</p>
      </div>
      <div className="space-y-3">
        {sections.map((section, i) => (
          <motion.details
            key={section.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
          >
            <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-xs font-black text-cyan-300">
                {i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold">{section.title}</span>
                {section.summary && <span className="block text-xs opacity-55 mt-0.5">{section.summary}</span>}
              </span>
              <span className="text-lg text-cyan-300 transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="border-t border-white/10 px-4 pb-4 pt-3">
              {Boolean(section.points?.length) && (
                <ul className="space-y-2">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed opacity-75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.code && (
                <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-[#0d1117] p-3 text-xs leading-relaxed">
                  <code>{section.code}</code>
                </pre>
              )}
              {section.resource && (
                <a
                  href={section.resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-xs mt-4"
                >
                  Open {section.resource.label}
                </a>
              )}
            </div>
          </motion.details>
        ))}
      </div>
    </div>
  )
}

export function LessonQuote({ text, label = 'Key takeaway' }) {
  if (!text) return null
  return (
    <motion.blockquote
      className="my-8 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/5 px-5 py-4"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">{label}</p>
      <p className="mt-2 text-base font-medium leading-relaxed">{text}</p>
    </motion.blockquote>
  )
}

function VisualFrame({ title, children, className = '' }) {
  return (
    <div className={`my-8 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5 overflow-hidden ${className}`}>
      {title && (
        <div className="px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">{title}</p>
        </div>
      )}
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}

export function StaticWebDemo() {
  const [mode, setMode] = useState('static')
  const [email, setEmail] = useState('bad-email')
  const [status, setStatus] = useState('')

  const validate = () => {
    if (mode === 'static') {
      setStatus('⏳ Sending to server… waiting 3 seconds…')
      setTimeout(() => setStatus('❌ Server says: invalid email. Page never checked locally.'), 1800)
    } else {
      const ok = email.includes('@')
      setStatus(ok ? '✅ Fixed instantly — no server round-trip!' : '❌ Missing @ — caught in 0ms by JavaScript')
    }
  }

  return (
    <VisualFrame title="Try it — static page vs JavaScript">
      <div className="flex gap-2 mb-4">
        {['static', 'js'].map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setStatus('') }}
            className={`btn btn-sm ${mode === m ? 'btn-primary' : 'btn-ghost'}`}
          >
            {m === 'static' ? '📄 1993 HTML' : '⚡ With JS'}
          </button>
        ))}
      </div>
      <div className="rounded-xl bg-[#0d1117] border border-white/10 p-4">
        <p className="text-xs opacity-50 mb-3 font-mono">{mode === 'static' ? '<form action="/server">' : '<form onsubmit="validate()">'}</p>
        <input
          className="input input-bordered input-sm w-full font-mono"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
        />
        <button className="btn btn-sm btn-primary mt-3 w-full" onClick={validate}>Submit</button>
        <AnimatePresence mode="wait">
          {status && (
            <motion.p
              key={status}
              className="text-sm mt-3 font-mono text-emerald-400"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {status}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </VisualFrame>
  )
}

export function AllianceWarVisual() {
  const [step, setStep] = useState(0)
  const steps = [
    { year: '1995', left: '☀️ Sun', right: '🌐 Netscape', action: 'Partner — Java enters the browser' },
    { year: '1995', left: '☕ Java', right: '🌍 Browser', action: '"Write once, run anywhere"' },
    { year: '1995', left: '☀️ + 🌐', right: '🪟 Microsoft', action: 'Common enemy: Windows lock-in' },
    { year: 'Dream', left: '🌐 Browser', right: '🪟 Windows', action: 'OS becomes irrelevant' },
  ]

  return (
    <VisualFrame title="The alliance — step through the story">
      <div className="flex justify-center gap-2 mb-5">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === step ? 'bg-indigo-400 w-6' : 'bg-white/20'}`}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="text-center"
        >
          <span className="badge badge-outline badge-sm mb-4">{steps[step].year}</span>
          <div className="flex items-center justify-center gap-4">
            <motion.span className="text-3xl px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20" animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
              {steps[step].left}
            </motion.span>
            <span className="text-2xl opacity-40">→</span>
            <motion.span className="text-3xl px-4 py-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
              {steps[step].right}
            </motion.span>
          </div>
          <p className="text-sm font-medium mt-4 opacity-80">{steps[step].action}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between mt-5">
        <button className="btn btn-ghost btn-xs" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>← Back</button>
        <button className="btn btn-primary btn-xs" disabled={step === steps.length - 1} onClick={() => setStep((s) => s + 1)}>Next →</button>
      </div>
    </VisualFrame>
  )
}

export function HeavyGlueVisual() {
  const [active, setActive] = useState('glue')

  return (
    <VisualFrame title="Two jobs on one web page">
      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        {[
          { id: 'heavy', emoji: '🏋️', title: 'Heavy lifting', lang: 'Java', desc: 'Chart tools, games — big programs in a sealed box', size: 'Truck engine', color: 'from-orange-500/20 to-red-500/10 border-orange-500/30' },
          { id: 'glue', emoji: '🧷', title: 'Glue code', lang: 'JavaScript', desc: 'Clicks, form checks, text updates — woven into the page', size: 'Garage door opener', color: 'from-indigo-500/20 to-violet-500/10 border-indigo-500/30' },
        ].map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`text-left rounded-xl border p-4 transition-all bg-gradient-to-br ${item.color} ${active === item.id ? 'ring-2 ring-indigo-400' : 'opacity-70'}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-2xl">{item.emoji}</span>
            <p className="font-bold mt-2">{item.title}</p>
            <p className="text-xs opacity-60 mt-1">{item.lang}</p>
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl bg-white/5 p-4 text-sm"
        >
          {active === 'heavy' ? (
            <>
              <p className="opacity-80">Need a stock chart on your page? Spin up the full Java engine, load a plugin, wait…</p>
              <p className="text-amber-400 mt-2 font-mono text-xs">🚛 Like starting a truck to open a garage door</p>
            </>
          ) : (
            <>
              <p className="opacity-80">Need to check if an email has @? One line of JS, instant, no plugin.</p>
              <p className="text-emerald-400 mt-2 font-mono text-xs">if (!email.includes('@')) showError()</p>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </VisualFrame>
  )
}

export function TenDaysVisual() {
  const events = [
    { day: 1, text: 'Netscape hires Brendan Eich for Scheme in the browser' },
    { day: 3, text: 'Pivot: build a new glue language instead' },
    { day: 7, text: 'Marketing: "make it look like Java"' },
    { day: 10, text: 'Prototype done — JavaScript is born' },
  ]

  return (
    <VisualFrame title="10 days in May 1995">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-500/30" />
        {events.map((e, i) => (
          <motion.div
            key={e.day}
            className="relative pl-10 pb-5 last:pb-0"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="absolute left-2.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-300" />
            <span className="text-xs font-bold text-indigo-400">Day {e.day}</span>
            <p className="text-sm opacity-80 mt-0.5">{e.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <p className="text-sm font-medium">Java ☕ and JavaScript 📜 — as related as <span className="text-amber-300">car</span> and <span className="text-amber-300">carpet</span></p>
      </motion.div>
    </VisualFrame>
  )
}

export function JavaVsJsVisual() {
  const rows = [
    { java: 'Powerful, full-featured', js: 'Light, simple, forgiving', icon: '⚡' },
    { java: 'Pro programmers', js: 'Web designers', icon: '👥' },
    { java: 'Sealed box (applet)', js: 'Woven into the page', icon: '📦' },
    { java: 'Cannot touch the DOM', js: 'Touches every element', icon: '🎯' },
    { java: 'Plugin + slow boot', js: 'Built in, instant', icon: '🚀' },
    { java: 'Removed ~2017', js: 'Language of the web', icon: '🏆' },
  ]

  return (
    <VisualFrame title="Java vs JavaScript — animated comparison">
      <div className="grid grid-cols-2 gap-2 mb-3 text-center text-xs font-bold uppercase tracking-wider opacity-60">
        <span className="text-orange-300">☕ Java</span>
        <span className="text-yellow-300">📜 JavaScript</span>
      </div>
      {rows.map((row, i) => (
        <motion.div
          key={row.icon}
          className="grid grid-cols-2 gap-2 mb-2"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <div className="rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-2 text-xs opacity-80">{row.java}</div>
          <div className="rounded-lg bg-yellow-500/10 border border-yellow-500/20 px-3 py-2 text-xs opacity-80">{row.js}</div>
        </motion.div>
      ))}
    </VisualFrame>
  )
}

export function JsWinsVisual() {
  const factors = [
    { icon: '🔌', title: 'No plugin', desc: 'Already inside every browser' },
    { icon: '🔒', title: 'Security', desc: 'Java applets became malware vectors' },
    { icon: '⚡', title: 'V8 engine', desc: 'JS caught up on speed (~2011)' },
    { icon: '🧵', title: 'In the page', desc: 'Woven into the DOM, not boxed away' },
  ]

  return (
    <VisualFrame title="Why the little brother won">
      <div className="space-y-3">
        {factors.map((f, i) => (
          <motion.div
            key={f.title}
            className="flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 px-4 py-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <motion.span
              className="text-2xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ delay: i * 0.5, duration: 0.5 }}
            >
              {f.icon}
            </motion.span>
            <div>
              <p className="font-bold text-sm">{f.title}</p>
              <p className="text-xs opacity-60">{f.desc}</p>
            </div>
            <motion.span
              className="ml-auto text-emerald-400 text-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3, type: 'spring' }}
            >
              ✓
            </motion.span>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="text-center text-sm font-medium text-indigo-300 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Java applets evicted 2015–2017 → JS became the foundation
      </motion.p>
    </VisualFrame>
  )
}

export function WasmGlueVisual() {
  return (
    <VisualFrame title="History repeats — but glue stays">
      <div className="flex flex-col items-center gap-2">
        <motion.div
          className="w-full max-w-xs rounded-xl bg-violet-500/15 border border-violet-500/30 px-4 py-3 text-center"
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <p className="text-xs font-bold text-violet-300">HEAVYWEIGHT (changes every decade)</p>
          <p className="text-sm mt-1">1995: Java → 2020s: WebAssembly (C++, Rust)</p>
        </motion.div>
        <motion.div className="text-2xl opacity-40" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }}>↓ must call ↓</motion.div>
        <div className="w-full max-w-xs rounded-xl bg-yellow-500/15 border-2 border-yellow-500/40 px-4 py-4 text-center">
          <p className="text-xs font-bold text-yellow-300">GLUE (never changes)</p>
          <p className="text-lg font-black mt-1">JavaScript</p>
          <p className="text-xs opacity-70 mt-1">Clicks · DOM · Forms · UI events</p>
        </div>
        <motion.div className="text-2xl opacity-40" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}>↓ touches ↓</motion.div>
        <div className="w-full max-w-xs rounded-xl bg-emerald-500/15 border border-emerald-500/30 px-4 py-3 text-center">
          <p className="text-sm font-medium">🌐 The Page (buttons, text, elements)</p>
        </div>
      </div>
    </VisualFrame>
  )
}

export function CppSandboxVisual() {
  const threats = [
    { icon: '📁', label: 'File system', cpp: 'Write secrets.txt', js: 'Blocked ✓' },
    { icon: '💻', label: 'System calls', cpp: 'system("rm -rf /")', js: 'Blocked ✓' },
    { icon: '🧠', label: 'Memory', cpp: 'Raw pointer access', js: 'Sandboxed ✓' },
    { icon: '🌐', label: 'Network', cpp: 'Raw sockets', js: 'HTTP only ✓' },
  ]

  return (
    <VisualFrame title="Why C++ can't run in your browser tab">
      <div className="space-y-2">
        {threats.map((t, i) => (
          <motion.div
            key={t.label}
            className="grid grid-cols-[auto_1fr_1fr] gap-2 items-center text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="text-lg">{t.icon}</span>
            <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-2 py-2 font-mono opacity-70 line-through">{t.cpp}</div>
            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-2 py-2 font-mono text-emerald-400">{t.js}</div>
          </motion.div>
        ))}
      </div>
      <p className="text-xs opacity-50 mt-4 text-center">Sandboxing C++ = rewriting the entire runtime. JS was born safe.</p>
    </VisualFrame>
  )
}

export function Specs1995Visual() {
  const specs = [
    { label: 'RAM', y1995: 8, today: 16384, unit: 'MB' },
    { label: 'Disk', y1995: 400, today: 1048576, unit: 'MB' },
  ]

  return (
    <VisualFrame title="1995 hardware vs today">
      {specs.map((s) => (
        <div key={s.label} className="mb-5 last:mb-0">
          <p className="text-sm font-bold mb-2">{s.label}</p>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs opacity-60 mb-1">
                <span>1995</span>
                <span>{s.label === 'RAM' ? '4–8 MB' : '200–500 MB'}</span>
              </div>
              <div className="h-3 rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-amber-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.max((s.y1995 / s.today) * 100, 2)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs opacity-60 mb-1">
                <span>Today</span>
                <span>{s.label === 'RAM' ? '16 GB' : '1 TB'}</span>
              </div>
              <div className="h-3 rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-indigo-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <motion.div
        className="mt-4 flex items-center gap-3 rounded-xl bg-white/5 p-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-2xl">🗑️</span>
        <p className="text-xs opacity-75"><strong className="text-indigo-300">Garbage collection</strong> — JS cleans memory automatically. On 4 MB RAM, that mattered.</p>
      </motion.div>
    </VisualFrame>
  )
}

export function HelloWorldVisual() {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)
  const started = useRef(false)
  const line = 'console.log("Hello World");'

  useEffect(() => {
    if (started.current) return
    started.current = true
    let i = 0
    const id = setInterval(() => {
      if (i <= line.length) {
        setTyped(line.slice(0, i))
        i++
      } else {
        setDone(true)
        clearInterval(id)
      }
    }, 60)
    return () => clearInterval(id)
  }, [line])

  return (
    <VisualFrame title="Your first line — watch it type">
      <div className="rounded-xl bg-[#0d1117] border border-white/10 p-4 font-mono text-sm">
        <span className="text-indigo-300">
          {typed}
          {!done && <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</motion.span>}
        </span>
        <AnimatePresence>
          {done && (
            <motion.p
              className="text-emerald-400 mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              → Hello World
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <p className="text-xs opacity-50 mt-3 text-center">C++ needs #include, namespaces, compile. JS needs one line.</p>
    </VisualFrame>
  )
}

const visuals = {
  'static-web': StaticWebDemo,
  'alliance-war': AllianceWarVisual,
  'heavy-glue': HeavyGlueVisual,
  'ten-days': TenDaysVisual,
  'java-vs-js': JavaVsJsVisual,
  'js-wins': JsWinsVisual,
  'wasm-glue': WasmGlueVisual,
  'cpp-sandbox': CppSandboxVisual,
  'specs-1995': Specs1995Visual,
  'hello-world': HelloWorldVisual,
}

export function LessonVisual({ type }) {
  const Component = visuals[type]
  if (!Component) return null
  return <Component />
}
