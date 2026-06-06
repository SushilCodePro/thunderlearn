export const courses = [
  {
    id: 'js-basics',
    title: 'JavaScript Foundations',
    description: 'Why JavaScript exists — from browser wars to your first Hello World.',
    emoji: '🧱',
    color: 'indigo',
    totalLessons: 19,
    completedLessons: 0,
    xpReward: 500,
    modules: [
      {
        id: 'm1', title: 'Lecture 01 — Introduction to JavaScript', completed: false,
        lessons: [
          { id: 'l1', title: 'Why JavaScript Exists', duration: '8 min', completed: false },
          { id: 'l2', title: 'Java, Netscape & the Microsoft War', duration: '10 min', completed: false },
          { id: 'l3', title: 'Heavy Lifting vs Glue Code', duration: '8 min', completed: false },
          { id: 'l4', title: 'Built in Ten Days', duration: '7 min', completed: false },
          { id: 'l5', title: 'Java vs JavaScript', duration: '8 min', completed: false },
          { id: 'l6', title: 'How JavaScript Won the Browser', duration: '10 min', completed: false },
          { id: 'l7', title: 'WebAssembly: History Repeats', duration: '8 min', completed: false },
          { id: 'l8', title: 'Why Not C++ in the Browser?', duration: '10 min', completed: false },
          { id: 'l9', title: 'Why JS Fit 1995 Hardware', duration: '8 min', completed: false },
          { id: 'l10', title: 'Hello World: Your First JavaScript', duration: '6 min', completed: false },
        ]
      },
      {
        id: 'm2', title: 'Lecture 02 — Functions & Scope', completed: false,
        lessons: [
          { id: 'l11', title: 'Function Declarations', duration: '6 min', completed: false },
          { id: 'l12', title: 'Arrow Functions', duration: '5 min', completed: false },
          { id: 'l13', title: 'Scope & Closures', duration: '10 min', completed: false },
        ]
      },
      {
        id: 'm3', title: 'Lecture 03 — DOM & Events', completed: false,
        lessons: [
          { id: 'l14', title: 'Selecting DOM Elements', duration: '7 min', completed: false },
          { id: 'l15', title: 'DOM Manipulation', duration: '8 min', completed: false },
          { id: 'l16', title: 'Event Listeners', duration: '9 min', completed: false },
        ]
      },
      {
        id: 'm4', title: 'Lecture 04 — Modern JS', completed: false,
        lessons: [
          { id: 'l17', title: 'ES6+ Features', duration: '10 min', completed: false },
          { id: 'l18', title: 'Promises & Async/Await', duration: '12 min', completed: false },
          { id: 'l19', title: 'Fetch API — Build a Mini App', duration: '15 min', completed: false },
        ]
      }
    ]
  },
  {
    id: 'dom-events',
    title: 'DOM & Events Deep Dive',
    description: 'Master the browser, events, and dynamic UI manipulation.',
    emoji: '🌐',
    color: 'emerald',
    totalLessons: 8,
    completedLessons: 0,
    xpReward: 400,
    modules: [
      {
        id: 'dm1', title: 'DOM Fundamentals', completed: false,
        lessons: [
          { id: 'dl1', title: 'The DOM Tree', duration: '6 min', completed: false },
          { id: 'dl2', title: 'querySelector Deep Dive', duration: '8 min', completed: false },
          { id: 'dl3', title: 'Creating Elements', duration: '7 min', completed: false },
          { id: 'dl4', title: 'Removing & Replacing Nodes', duration: '6 min', completed: false },
        ]
      },
      {
        id: 'dm2', title: 'Events Mastery', completed: false,
        lessons: [
          { id: 'dl5', title: 'Event Bubbling & Capturing', duration: '9 min', completed: false },
          { id: 'dl6', title: 'Delegation Pattern', duration: '8 min', completed: false },
          { id: 'dl7', title: 'Form Events', duration: '7 min', completed: false },
          { id: 'dl8', title: 'Build a Todo App', duration: '15 min', completed: false },
        ]
      }
    ]
  },
  {
    id: 'async-js',
    title: 'Async JavaScript',
    description: 'Promises, async/await, and building with real APIs.',
    emoji: '⚡',
    color: 'violet',
    totalLessons: 10,
    completedLessons: 0,
    xpReward: 600,
    modules: [
      {
        id: 'am1', title: 'Async Foundations', completed: false,
        lessons: [
          { id: 'al1', title: 'Callbacks & Callback Hell', duration: '8 min', completed: false },
          { id: 'al2', title: 'Introduction to Promises', duration: '10 min', completed: false },
          { id: 'al3', title: 'Promise Chaining', duration: '9 min', completed: false },
          { id: 'al4', title: 'Error Handling with catch', duration: '7 min', completed: false },
        ]
      },
      {
        id: 'am2', title: 'Modern Async', completed: false,
        lessons: [
          { id: 'al5', title: 'async/await Syntax', duration: '10 min', completed: false },
          { id: 'al6', title: 'Parallel Requests', duration: '8 min', completed: false },
          { id: 'al7', title: 'Fetch API Patterns', duration: '12 min', completed: false },
          { id: 'al8', title: 'JSON & REST APIs', duration: '9 min', completed: false },
          { id: 'al9', title: 'Error Boundaries in Async', duration: '8 min', completed: false },
          { id: 'al10', title: 'Build a Weather App', duration: '20 min', completed: false },
        ]
      }
    ]
  }
]

export const concepts = [
  { id: 1, title: 'Why JS Exists', icon: '📖',
    explanation: 'JavaScript was born from browser wars — a lightweight glue language built in ~10 days to make pages interactive.',
    code: `// The web needed instant feedback\n// JS was woven into the page — not boxed like Java` },
  { id: 2, title: 'Heavy vs Glue', icon: '🧷',
    explanation: 'Java did heavy lifting in a sealed box. JavaScript did glue — clicks, forms, and small page interactions.',
    code: `btn.addEventListener('click', () => {\n  btn.textContent = 'Clicked!';\n});` },
  { id: 3, title: 'Java vs JavaScript', icon: '☕',
    explanation: 'Named to sound like Java for marketing. As related as "car" and "carpet." Only JS survived in the browser.',
    code: `// Java applet — removed ~2015\n// JavaScript — built into every browser` },
  { id: 4, title: 'Browser Sandbox', icon: '🔒',
    explanation: 'JS cannot access your file system or run OS commands. That safety is why C++ never replaced it in browsers.',
    code: `console.log("Hello World");\n// Safe — no file system access` },
  { id: 5, title: '1995 Hardware', icon: '💾',
    explanation: 'PCs had 4–8 MB RAM. Browsers needed lightweight languages with garbage collection — not heavy C++ runtimes.',
    code: `// 4 MB RAM total\n// Windows 95 + browser + your code\n// JS had to be tiny` },
  { id: 6, title: 'WebAssembly Glue', icon: '⚡',
    explanation: 'WebAssembly runs fast native code but still calls JavaScript to touch the page. JS remains the glue.',
    code: `// WASM: near-native speed\n// JS: still handles the DOM` },
  { id: 7, title: 'Hello World', icon: '👋',
    explanation: 'Your first line of JavaScript. One console.log beats a full C++ program for browser interactivity.',
    code: `console.log("Hello World");` },
  { id: 8, title: 'The Takeaway', icon: '🏆',
    explanation: 'JS didn\'t win by being most powerful. It won by being in the page, already there, ready to run.',
    code: `console.log("You're learning the glue language 🚀");` },
]

export const curriculumDays = [
  {
    day: 1, emoji: '🧱', title: 'Why JavaScript Exists', color: 'indigo',
    topics: ['Browser wars', 'Java vs JS', 'Glue code', 'C++ security', 'Hello World'],
    completed: false,
  },
  {
    day: 2, emoji: '⚙️', title: 'Functions & Scope', color: 'violet',
    topics: ['Declarations', 'Arrow Functions', 'Scope', 'Closures'],
    completed: false,
  },
  {
    day: 3, emoji: '🌐', title: 'DOM & Events', color: 'emerald',
    topics: ['querySelector', 'DOM Manipulation', 'Event Listeners', 'Forms'],
    completed: false,
  },
  {
    day: 4, emoji: '⚡', title: 'Modern JavaScript', color: 'amber',
    topics: ['ES6+', 'Fetch API', 'Promises', 'Async/Await', 'Mini Project'],
    completed: false,
  },
]

export const getCourseById = (id) => courses.find((c) => c.id === id)

export const getAllLessons = () => {
  const lessons = []
  courses.forEach((course) => {
    course.modules?.forEach((module) => {
      module.lessons?.forEach((lesson) => {
        lessons.push({ ...lesson, courseId: course.id, courseTitle: course.title, moduleId: module.id, moduleTitle: module.title })
      })
    })
  })
  return lessons
}

export const getLessonById = (lessonId) => {
  for (const course of courses) {
    for (const module of course.modules ?? []) {
      const lesson = module.lessons?.find((l) => l.id === lessonId)
      if (lesson) {
        const allLessons = getAllLessons()
        const index = allLessons.findIndex((l) => l.id === lessonId)
        return {
          ...lesson,
          courseId: course.id,
          courseTitle: course.title,
          courseEmoji: course.emoji,
          moduleId: module.id,
          moduleTitle: module.title,
          lessonNumber: index + 1,
          totalLessons: allLessons.length,
          prevLessonId: allLessons[index - 1]?.id ?? null,
          nextLessonId: allLessons[index + 1]?.id ?? null,
        }
      }
    }
  }
  return null
}

export const getCurrentLesson = (completedLessons = []) => {
  const all = getAllLessons()
  return all.find((l) => !completedLessons.includes(l.id)) ?? all[0]
}

export const countCourseProgress = (course, completedLessons) => {
  const lessonIds = course.modules?.flatMap((m) => m.lessons?.map((l) => l.id) ?? []) ?? []
  const completed = lessonIds.filter((id) => completedLessons.includes(id)).length
  const total = course.totalLessons
  const pct = total ? Math.round((completed / total) * 100) : 0
  return { completed, total, pct }
}
