export const lessonContent = {
  l1: {
    title: 'Why JavaScript Exists',
    subtitle: 'Start with the problem — then the story writes itself.',
    visual: 'static-web',
    story: [
      {
        phase: 'problem',
        title: 'The web was born dead',
        body: 'In the early 1990s, a web page was a static document. Text and images — nothing more. Fill in a form wrong? The page couldn\'t tell you. It shipped your data to a distant server and waited for a reply.',
      },
      {
        phase: 'context',
        title: 'Powerful languages already existed',
        body: 'C++, Java, and Python were proven and mature. So why invent another language? Because none of them lived inside the browser tab where users actually interacted.',
      },
      {
        phase: 'insight',
        title: 'Netscape saw the gap',
        body: 'The dominant browser maker realised the web needed to come alive — respond instantly, right there in the page, without a server round-trip for every small check.',
      },
      {
        phase: 'outcome',
        title: 'A new language was inevitable',
        body: 'That need — instant interactivity woven into the page — is the seed of JavaScript. Try the demo above: feel the difference between a dead HTML form and one with JS.',
      },
    ],
    quote: 'Those other languages own the computer. JavaScript owns the browser tab — and the browser turned out to be a very big room.',
    tip: 'Every time a page reacts without reloading, you\'re seeing why JavaScript was invented.',
  },
  l2: {
    title: 'Java, Netscape & the Microsoft War',
    subtitle: 'Two giants allied. One enemy united them.',
    visual: 'alliance-war',
    story: [
      {
        phase: 'context',
        title: 'Java\'s bold promise',
        body: 'Sun Microsystems created Java: "write once, run anywhere." One program runs on Windows, Mac, or Linux inside the Java Virtual Machine — perfect for a web of different computers.',
      },
      {
        phase: 'insight',
        title: 'Sun + Netscape join forces (1995)',
        body: 'The biggest browser and the biggest server company partnered. Java would go inside Netscape — software running everywhere, not locked to one OS.',
      },
      {
        phase: 'problem',
        title: 'Microsoft owned the ground',
        body: 'In the 1990s, everyone needed Windows to run software. Microsoft\'s power came from owning the operating system every program stood on.',
      },
      {
        phase: 'outcome',
        title: 'The browser as new territory',
        body: 'If all software lived in the browser, Windows became optional — little more than an expensive way to switch the computer on. Microsoft feared this. Sun and Netscape bet on it.',
      },
    ],
    tip: 'Microsoft feared the right outcome — but got the threat\'s name wrong.',
  },
  l3: {
    title: 'Heavy Lifting vs Glue Code',
    subtitle: 'Java was coming. So why invent JavaScript?',
    visual: 'heavy-glue',
    story: [
      {
        phase: 'problem',
        title: 'One language, two very different jobs',
        body: 'Netscape needed big programs in a box (charts, games) AND small page interactions (clicks, form checks). Java could only do the first job well.',
      },
      {
        phase: 'context',
        title: 'Java\'s three weaknesses for glue',
        body: 'It ran in a sealed box — couldn\'t touch the page around it. It was heavyweight — like starting a truck to open a garage door. It was too hard for web designers who should write the glue.',
      },
      {
        phase: 'insight',
        title: 'The split decision',
        body: 'Java = powerful "component language" for pros. A new light "glue language" for everyone else — woven into the page, simple, instant.',
      },
      {
        phase: 'outcome',
        title: 'JavaScript is the glue',
        body: 'That glue language is JavaScript. When you validate a form or toggle a menu today, you\'re doing exactly what it was invented for. Tap the cards above to compare.',
      },
    ],
    quote: 'The word "glue" described JavaScript in 1995 — and still describes it next to WebAssembly today.',
    tip: 'Glue code is the majority of frontend work. That\'s why JS won.',
  },
  l4: {
    title: 'Built in Ten Days',
    subtitle: 'Marketing chaos. A famous misleading name.',
    visual: 'ten-days',
    story: [
      {
        phase: 'context',
        title: 'Brendan Eich gets a different assignment',
        body: 'Netscape hired him to put Scheme in the browser. Instead, he was asked to build the glue language — with a prototype due in roughly ten days, May 1995.',
      },
      {
        phase: 'problem',
        title: 'Marketing overruled engineering',
        body: 'The Sun partnership demanded the new language look like Java to ride its fame. Eich was told to make Java\'s "silly little brother." Python and Perl were ruled out — not because they were worse, but because of marketing.',
      },
      {
        phase: 'insight',
        title: 'The name was pure branding',
        body: 'JavaScript was named to borrow Java\'s fame. The two languages are largely unrelated — as related as "car" and "carpet."',
      },
      {
        phase: 'outcome',
        title: 'Syntax looks like Java. Design is different.',
        body: 'Similar surface syntax, completely different language underneath. The ten-day prototype became the foundation of the modern web.',
      },
    ],
    code: `// Surface looks similar — different language underneath\nfunction greet(name) {\n  return "Hello, " + name;\n}\nconsole.log(greet("ThunderLearn"));`,
    tip: 'JavaScript\'s Java-like syntax is a marketing scar, not a family tree.',
  },
  l5: {
    title: 'Java vs JavaScript',
    subtitle: 'Two languages. One browser. Very different fates.',
    visual: 'java-vs-js',
    story: [
      {
        phase: 'context',
        title: 'They coexisted for years',
        body: 'Java handled heavy components. JavaScript handled glue. Each had a clear role — until one role became the entire web.',
      },
      {
        phase: 'problem',
        title: 'Java couldn\'t touch the page',
        body: 'Applets ran in a sealed box. JavaScript was woven into every button, form, and element. As pages became fluid and integrated, only one shape fit.',
      },
      {
        phase: 'insight',
        title: 'Compare them side by side',
        body: 'Scroll through the animated comparison — notice plugin vs built-in, sealed box vs woven in, removed vs everywhere.',
      },
      {
        phase: 'outcome',
        title: 'Only JavaScript survived',
        body: 'Java applets are gone. JavaScript is the only language every browser ships for page interactivity.',
      },
    ],
    tip: 'When someone confuses Java and JavaScript — you now know the full story.',
  },
  l6: {
    title: 'How JavaScript Won the Browser',
    subtitle: 'Not by being better — by being in the right place.',
    visual: 'js-wins',
    story: [
      {
        phase: 'problem',
        title: 'Java was more powerful',
        body: 'So how did the "silly little brother" take over the entire frontend? Not by winning on specs — by winning on placement.',
      },
      {
        phase: 'insight',
        title: 'Four decisive advantages',
        body: 'No plugin needed. Better security story. V8 and modern engines erased the speed gap. And it lived inside the document — not in a box beside it.',
      },
      {
        phase: 'context',
        title: 'Browsers dropped Java (~2015–2017)',
        body: 'Security holes, slow startup, and locked-down plugins. The powerful component language was evicted.',
      },
      {
        phase: 'outcome',
        title: 'The glue became the foundation',
        body: 'The language nobody took seriously became the foundation of React, Node.js, and every modern web app.',
      },
    ],
    quote: 'It didn\'t win by being the most powerful. It won by being woven into the page, already there, ready to run.',
    tip: 'When someone asks "why JavaScript?" — answer: history, placement, and shape.',
  },
  l7: {
    title: 'WebAssembly: History Repeats',
    subtitle: 'The heavyweight changes. The glue never does.',
    visual: 'wasm-glue',
    story: [
      {
        phase: 'context',
        title: 'WebAssembly sounds familiar',
        body: 'C++ and Rust now run in the browser at near-native speed. Sounds like Java all over again — a powerful heavyweight in the tab.',
      },
      {
        phase: 'problem',
        title: 'WASM cannot touch the page',
        body: 'For all its power, WebAssembly can\'t change a button or react to a click on its own. It must call out to JavaScript.',
      },
      {
        phase: 'insight',
        title: 'Same pattern, thirty years later',
        body: '1995: Java (heavy) + JavaScript (glue). 2020s: WebAssembly (heavy) + JavaScript (glue). The heavyweight keeps changing. The glue never does.',
      },
      {
        phase: 'outcome',
        title: 'You\'re learning the coordinator',
        body: 'Learning JavaScript means learning the language that coordinates everything else in the browser tab.',
      },
    ],
    quote: 'WebAssembly is the new heavyweight. JavaScript is still the glue.',
    tip: 'Even the fastest native code in the browser still needs JS for the UI.',
  },
  l8: {
    title: 'Why Not C++ in the Browser?',
    subtitle: 'If HTML authors write the web, the language must be safe.',
    visual: 'cpp-sandbox',
    story: [
      {
        phase: 'problem',
        title: 'Why not the most powerful language?',
        body: 'Developers know HTML and CSS. Users are web authors — not kernel developers. The browser needs something lightweight, forgiving, and safe.',
      },
      {
        phase: 'context',
        title: 'C++ is unrestricted',
        body: 'File system access. System commands. Raw memory pointers. Arbitrary network sockets. A random website running C++ could read your files, install malware, or wipe your drive.',
      },
      {
        phase: 'insight',
        title: 'Sandboxing C++ = rewrite everything',
        body: 'You\'d need to intercept every file I/O call, trap system(), block raw pointers, and allow only browser-controlled HTTP. That\'s building a new operating system inside the browser.',
      },
      {
        phase: 'outcome',
        title: 'JavaScript was born in a sandbox',
        body: 'No file system. No system(). No raw memory. Safe by design — not as a limitation, but as the reason browsers could trust it.',
      },
    ],
    code: `// JavaScript — safe in every tab\nconsole.log("Hello World");\n// No file access. No system(). No pointers.`,
    playground: `console.log("Hello World");\nconsole.log("Sandboxed. Safe. Everywhere.");`,
    output: 'Hello World\nSandboxed. Safe. Everywhere.',
    tip: 'JS\'s sandbox is why random websites can\'t wipe your hard drive.',
  },
  l9: {
    title: 'Why JavaScript Fit 1995 Hardware',
    subtitle: '4 MB RAM. 200 MB disk. No room for a truck engine.',
    visual: 'specs-1995',
    story: [
      {
        phase: 'problem',
        title: 'Computers were tiny',
        body: 'Typical 1995 PC: 4–8 MB RAM, 200–500 MB disk, Pentium 75–133 MHz. Today: 16 GB RAM, 1 TB SSD. The browser shared that 8 MB with Windows 95 and everything else.',
      },
      {
        phase: 'context',
        title: 'C++ runtime was impossible',
        body: 'A sandboxed C++ environment would eat RAM and CPU there wasn\'t. Large runtimes wouldn\'t fit on small, slow hard disks. Browsers had to stay lightweight or nobody would use them.',
      },
      {
        phase: 'insight',
        title: 'Garbage collection mattered',
        body: 'C++ developers manually allocate and free memory — one mistake leaks or crashes. On 4 MB total, that\'s catastrophic. JavaScript cleans up automatically.',
      },
      {
        phase: 'outcome',
        title: 'Lightweight wasn\'t optional — it was survival',
        body: 'JavaScript wasn\'t just safer than C++. On 1995 hardware, it was the only practical choice.',
      },
    ],
    tip: 'Speed and safety mattered — but fitting in 8 MB mattered more.',
  },
  l10: {
    title: 'Hello World: Your First JavaScript',
    subtitle: 'You know the story. Now write the code.',
    visual: 'hello-world',
    story: [
      {
        phase: 'context',
        title: 'You\'ve traced the full arc',
        body: 'Dead static pages → browser wars → glue language → ten days → victory over Java → WASM repeats the pattern → C++ too dangerous → 1995 hardware too small.',
      },
      {
        phase: 'insight',
        title: 'One line beats a C++ program',
        body: 'C++ needs #include, namespaces, compilation. JavaScript needs console.log("Hello World"). Open DevTools (F12) → Console and run it.',
      },
      {
        phase: 'outcome',
        title: 'You\'re writing the glue language',
        body: 'Watch the animation type your first line. Then run it in the playground. You\'re not learning a random syntax — you\'re learning the language that owns the browser tab.',
      },
    ],
    code: `// hello_world.js\nconsole.log("Hello World");\n\n// F12 → Console, or: node hello_world.js`,
    playground: `console.log("Hello World");\nconsole.log("You're learning the glue language of the web 🚀");`,
    output: 'Hello World\nYou\'re learning the glue language of the web 🚀',
    quote: 'It didn\'t win by being the most powerful. It won by being woven into the page, already there, ready to run. And that is the language you start learning today.',
    quoteLabel: 'The one-sentence takeaway',
    tip: 'Paste the playground code in your browser console right now.',
  },
  l11: {
    title: 'Function Declarations',
    paragraphs: [
      'Functions are reusable blocks of code. You declare them with the function keyword and call them by name.',
      'Functions can take parameters and return values.',
    ],
    code: `function addXP(amount) {\n  return amount * 2;\n}\n\nconst result = addXP(50);\nconsole.log(result); // 100`,
    playground: `function greet(name) {\n  return "Hello, " + name + "!";\n}\nconsole.log(greet("Dev"));`,
    output: 'Hello, Dev!',
    tip: 'Function declarations are hoisted — you can call them before they appear in your code.',
  },
  l12: {
    title: 'Arrow Functions',
    paragraphs: [
      'Arrow functions are a concise syntax introduced in ES6. They are perfect for callbacks and short operations.',
      'Implicit return: if the body is a single expression, you can omit the curly braces and return keyword.',
    ],
    code: `const double = (n) => n * 2;\nconst greet = (name) => \`Hi, \${name}!\`;\n\nconsole.log(double(5)); // 10`,
    playground: `const skills = ["JS", "React", "DOM"];\nskills.forEach(s => console.log("Learning:", s));`,
    output: 'Learning: JS\nLearning: React\nLearning: DOM',
    tip: 'Arrow functions don\'t have their own "this" — great for event handlers and array methods.',
  },
  l13: {
    title: 'Scope & Closures',
    paragraphs: [
      'Scope determines where variables are accessible. let and const are block-scoped — they only exist inside { } blocks.',
      'A closure is when a function remembers variables from its outer scope even after that scope has finished executing.',
    ],
    code: `function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2`,
    playground: `function outer(x) {\n  return function inner(y) {\n    return x + y;\n  };\n}\nconst add5 = outer(5);\nconsole.log(add5(3));`,
    output: '8',
    tip: 'Closures power React hooks, debounce functions, and module patterns.',
  },
  l14: {
    title: 'Selecting DOM Elements',
    paragraphs: [
      'The DOM (Document Object Model) is the live representation of your HTML. JavaScript can query and modify it.',
      'querySelector returns the first matching element. querySelectorAll returns all matches as a NodeList.',
    ],
    code: `const title = document.querySelector('h1');\nconst buttons = document.querySelectorAll('.btn');\n\nconsole.log(title?.textContent);`,
    playground: `const el = document.querySelector('body');\nconsole.log(el?.tagName ?? 'Open in browser DevTools');`,
    output: 'BODY',
    tip: 'Use specific selectors: #id for IDs, .class for classes.',
  },
  l15: {
    title: 'DOM Manipulation',
    paragraphs: [
      'Once you have an element, you can change its text, HTML, classes, and styles.',
      'createElement lets you build new nodes and appendChild adds them to the page.',
    ],
    code: `const card = document.createElement('div');\ncard.classList.add('glass-card');\ncard.textContent = 'New card!';\ndocument.body.appendChild(card);`,
    playground: `const div = document.createElement('div');\ndiv.textContent = 'ThunderLearn';\nconsole.log(div.outerHTML);`,
    output: '<div>ThunderLearn</div>',
    tip: 'Use textContent for plain text (safer). Use innerHTML only with trusted content.',
  },
  l16: {
    title: 'Event Listeners',
    paragraphs: [
      'Events let your code react to user actions — clicks, keyboard input, form submissions, and more.',
      'addEventListener is the modern way to attach handlers.',
    ],
    code: `const btn = document.querySelector('#start');\nbtn?.addEventListener('click', () => {\n  console.log('Lesson started!');\n});`,
    playground: `const handler = (e) => console.log("Event:", e.type);\nhandler({ type: "click" });`,
    output: 'Event: click',
    tip: 'Use event delegation on parent elements for dynamically added children.',
  },
  l17: {
    title: 'ES6+ Features',
    paragraphs: [
      'ES6 brought destructuring, spread/rest operators, template literals, and modules.',
      'Template literals use backticks and ${} for embedded expressions.',
    ],
    code: `const user = { name: 'Arjun', xp: 2340 };\nconst { name, xp } = user;\nconst greeting = \`Welcome, \${name}!\`;`,
    playground: `const [a, b] = [10, 20];\nconst merged = { ...{x: 1}, y: 2 };\nconsole.log(a, b, merged);`,
    output: '10 20 { x: 1, y: 2 }',
    tip: 'Destructuring works in function parameters too: function show({ name }) { ... }',
  },
  l18: {
    title: 'Promises & Async/Await',
    paragraphs: [
      'Promises represent a value that will be available in the future — perfect for API calls and timers.',
      'async/await is syntactic sugar over Promises.',
    ],
    code: `const fetchXP = () => new Promise(resolve => {\n  setTimeout(() => resolve(50), 1000);\n});\n\nconst earnXP = async () => {\n  const xp = await fetchXP();\n  console.log(\`+\${xp} XP!\`);\n};`,
    playground: `const wait = (ms) => new Promise(r => setTimeout(r, ms));\nconst run = async () => {\n  await wait(100);\n  return "Done!";\n};\nrun().then(console.log);`,
    output: 'Done!',
    tip: 'Always use try/catch with async/await to handle errors gracefully.',
  },
  l19: {
    title: 'Fetch API — Build a Mini App',
    paragraphs: [
      'fetch() is the browser-native way to make HTTP requests.',
      'Combine fetch with async/await to build apps that display real data from public APIs.',
    ],
    code: `const getUsers = async () => {\n  const res = await fetch('https://jsonplaceholder.typicode.com/users');\n  const users = await res.json();\n  return users;\n};`,
    playground: `const mockData = { users: 10, status: "ok" };\nconsole.log(JSON.stringify(mockData, null, 2));`,
    output: '{\n  "users": 10,\n  "status": "ok"\n}',
    tip: 'Always check res.ok before parsing JSON.',
  },
}

export const getLessonContent = (lessonId) =>
  lessonContent[lessonId] ?? {
    title: 'Lesson',
    paragraphs: ['Content coming soon.'],
    code: '// Stay tuned!',
    playground: 'console.log("Coming soon!");',
    output: 'Coming soon!',
    tip: 'Keep learning!',
  }
