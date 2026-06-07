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
    deepDive: [
      {
        title: 'Version 1: HTML builds the skeleton',
        summary: 'From public/Lecture01/v1-html/index.html',
        points: [
          'The page already has a button, calculator inputs, and a GitHub profiles section.',
          'The problem is not missing structure. The problem is missing behavior.',
          'A button in pure HTML is only an element. It cannot count clicks, calculate, or fetch data by itself.',
        ],
        code: `<button>Click Me</button>\n<p>Status: nothing has happened (and nothing will).</p>`,
        resource: { label: 'Lecture 01 PDF', href: '/Lecture01_%20Introduction%20to%20Javascript%20_%20Notion.pdf' },
      },
      {
        title: 'Version 2: CSS creates the trap',
        summary: 'Pretty can still be dead.',
        points: [
          'CSS makes the page look like an app: cards, buttons, fields, hover states, layout.',
          'Hover effects are visual reactions, not real application logic.',
          'This is the key teaching moment: professional-looking UI can still do nothing.',
        ],
        code: `<button class="btn">Sum</button>\n<p class="result">Result: ???</p>`,
      },
      {
        title: 'Version 3: JavaScript adds behavior',
        summary: 'JS finds elements, listens for events, and changes the page.',
        points: [
          'The v3 HTML adds ids so JavaScript can find exact elements.',
          'The script runs after the HTML so every target exists before JS attaches listeners.',
          'Now the same button can update text, calculate input values, fetch GitHub profiles, and toggle theme.',
        ],
        code: `const clickBtn = document.getElementById("clickBtn");\nclickBtn.addEventListener("click", function () {\n  clickStatus.textContent = "The page is alive now.";\n});`,
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
    deepDive: [
      {
        title: 'Why the browser became political',
        summary: 'The browser was no longer just a document viewer.',
        points: [
          'If the browser could run serious software, the operating system became less important.',
          'Sun wanted Java programs to run everywhere through the JVM.',
          'Netscape wanted the browser to become the new software platform.',
          'Microsoft protected Windows because Windows was where its power lived.',
        ],
      },
      {
        title: 'Where JavaScript fits in this fight',
        summary: 'Java was the big platform bet; JavaScript solved the small interaction problem.',
        points: [
          'The alliance needed Java for heavy app-like components.',
          'But web pages also needed tiny reactions inside normal HTML.',
          'That smaller need created space for a new lightweight scripting language.',
        ],
      },
      {
        title: 'Lecture 01 demo connection',
        summary: 'The uploaded Thunder versions make the platform fight practical.',
        points: [
          'HTML/CSS can present an interface.',
          'JavaScript turns that interface into something users can operate.',
          'The browser becomes powerful because code runs right where the user interacts.',
        ],
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
    deepDive: [
      {
        title: 'Heavy lifting in the page',
        summary: 'Big programs need power, memory, and a runtime.',
        points: [
          'Charts, simulations, games, and complex widgets were the kind of work Java applets promised.',
          'They behaved like mini applications embedded inside a page.',
          'That power came with weight: plugins, startup time, isolation, and a more complex developer experience.',
        ],
      },
      {
        title: 'Glue code in the page',
        summary: 'Small actions need to be instant and close to the document.',
        points: [
          'Checking if an email contains @ should not require a server trip.',
          'A click counter should update the nearby text immediately.',
          'A theme toggle should flip a class and let CSS do the rest.',
        ],
        code: `themeToggle.addEventListener("click", function () {\n  document.body.classList.toggle("dark");\n});`,
      },
      {
        title: 'Why web designers needed this',
        summary: 'The language had to fit people already writing HTML and CSS.',
        points: [
          'Netscape needed a language approachable enough for page authors.',
          'It had to be forgiving, embedded directly in the document, and quick to test.',
          'This is why JavaScript became the page coordinator instead of another heavyweight box.',
        ],
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
    deepDive: [
      {
        title: 'The ten-day constraint',
        summary: 'A fast prototype shaped the language forever.',
        points: [
          'Brendan Eich was originally connected with putting Scheme-like ideas into the browser.',
          'The business pressure changed the assignment into a quick glue language.',
          'A short prototype timeline meant pragmatic decisions, compromises, and rough edges.',
        ],
      },
      {
        title: 'Why the name is confusing',
        summary: 'JavaScript was a branding move, not a family tree.',
        points: [
          'Java was famous, so the new language borrowed that energy.',
          'The surface syntax looked Java-like enough for marketing.',
          'Under the hood, JavaScript is a separate language with different runtime behavior.',
        ],
      },
      {
        title: 'The C++ interpreter file',
        summary: 'public/Lecture01/v8.cpp shows a tiny console.log-style interpreter.',
        points: [
          'The sample reads code as text.',
          'It extracts what is inside parentheses.',
          'If the content is a string, it prints the string.',
          'If the content is a numeric operation, it calculates and prints the answer.',
        ],
        code: `// input idea:\nconsole.log("hello Ji")\n\n// interpreter output:\nhello Ji`,
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
    deepDive: [
      {
        title: 'Java applet shape',
        summary: 'Powerful, but boxed away from the document.',
        points: [
          'An applet could run a program inside the browser.',
          'But it was not naturally part of the surrounding HTML.',
          'That made it a poor fit for small UI interactions spread across a page.',
        ],
      },
      {
        title: 'JavaScript shape',
        summary: 'Less grand, more useful for the everyday page.',
        points: [
          'JavaScript can read input values, change text, create elements, and respond to clicks.',
          'It talks directly to the DOM: the browser\'s live representation of HTML.',
          'That close relationship is why JavaScript stayed when applets disappeared.',
        ],
        code: `const total = Number(num1.value) + Number(num2.value);\ncalcResult.textContent = \`Result: \${total}\`;`,
      },
      {
        title: 'Student mental model',
        summary: 'Same browser, different jobs.',
        points: [
          'Java was like inserting a separate machine into the page.',
          'JavaScript was like giving the page itself a brain.',
          'Modern frontend work needs the second shape constantly.',
        ],
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
    deepDive: [
      {
        title: 'Built-in beats installed',
        summary: 'A language already in every browser has a massive advantage.',
        points: [
          'Users did not need to install JavaScript.',
          'Browsers shipped it as part of the page runtime.',
          'No plugin means fewer setup problems and fewer security prompts.',
        ],
      },
      {
        title: 'Speed stopped being the deciding factor',
        summary: 'Modern engines made JavaScript far faster than its early reputation.',
        points: [
          'Early JavaScript was slow enough for people to dismiss it.',
          'Engines like V8 changed that story with aggressive optimization.',
          'Once speed improved, JavaScript\'s placement inside the page became unbeatable.',
        ],
      },
      {
        title: 'The uploaded demo proves the win',
        summary: 'Every v3 feature is exactly where JavaScript is strongest.',
        points: [
          'Click handling updates page text immediately.',
          'Calculator logic converts input text and shows a result.',
          'fetch brings remote data into the page.',
          'DOM creation renders new cards without a reload.',
        ],
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
    deepDive: [
      {
        title: 'WebAssembly repeats the old pattern',
        summary: 'The heavyweight changed; the coordinator stayed JavaScript.',
        points: [
          'In 1995, Java was the heavyweight option beside JavaScript.',
          'Today, WebAssembly lets C++ and Rust run in the browser at high speed.',
          'But WebAssembly still needs JavaScript to interact naturally with the page UI.',
        ],
      },
      {
        title: 'What WebAssembly is good at',
        summary: 'Heavy computation, not ordinary DOM work.',
        points: [
          'Games, video processing, CAD, compression, and scientific computation can benefit.',
          'Those workloads need speed more than direct page manipulation.',
          'The interface still usually relies on JavaScript to connect results to buttons, forms, and views.',
        ],
      },
      {
        title: 'Why this matters for beginners',
        summary: 'You are learning the language that connects everything.',
        points: [
          'JavaScript receives events from the user.',
          'JavaScript calls APIs or heavy modules.',
          'JavaScript updates the DOM with the result.',
        ],
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
    deepDive: [
      {
        title: 'The browser trust problem',
        summary: 'A website is code from someone else\'s computer.',
        points: [
          'When you open a random page, the browser must assume that page is untrusted.',
          'If arbitrary C++ could run freely, it could read files, launch system commands, or corrupt memory.',
          'The browser needs strict boundaries before it can safely execute website code.',
        ],
      },
      {
        title: 'Why sandboxing C++ is expensive',
        summary: 'You would need to intercept dangerous operations everywhere.',
        points: [
          'File I/O would need browser permission checks.',
          'System calls would need to be blocked or virtualized.',
          'Raw pointer access would need memory protection.',
          'That becomes almost like building a tiny operating system inside the browser.',
        ],
      },
      {
        title: 'JavaScript starts with safer defaults',
        summary: 'The limitations are part of why websites can run code at all.',
        points: [
          'No direct file system access from ordinary page JS.',
          'No shell commands like system().',
          'No raw memory pointers.',
          'Network access is mediated through browser APIs like fetch.',
        ],
        code: `console.log("Hello World");\n// Safe browser JS: no direct file access, no system(), no pointers.`,
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
    deepDive: [
      {
        title: '1995 hardware budget',
        summary: 'The browser had to share a tiny machine.',
        points: [
          'A common PC had only a few megabytes of RAM.',
          'Windows, the browser, images, documents, and user programs all competed for that memory.',
          'A large runtime could make the browser feel unusable.',
        ],
      },
      {
        title: 'Why lightweight mattered',
        summary: 'A scripting language had to load quickly and stay small.',
        points: [
          'Users would abandon a browser that felt slow.',
          'Small scripts could add interaction without turning every page into a heavyweight app.',
          'This helped JavaScript fit the web\'s early constraints.',
        ],
      },
      {
        title: 'Garbage collection as a beginner feature',
        summary: 'Automatic cleanup removed a dangerous class of memory mistakes.',
        points: [
          'C++ requires manual memory discipline.',
          'Mistakes can leak memory or crash programs.',
          'JavaScript\'s garbage collector made browser scripting friendlier and safer for page authors.',
        ],
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
    deepDive: [
      {
        title: 'Lecture 01 source files',
        summary: 'Study the uploaded progression from static HTML to live JavaScript.',
        points: [
          'v1-html/index.html shows the skeleton: buttons, inputs, and sections exist but do not react.',
          'v2-css adds presentation so the page looks better, but it is still not alive.',
          'v3-js/script.js wires clicks, calculator logic, GitHub fetching, and theme toggling.',
        ],
        resource: { label: 'Lecture 01 PDF', href: '/Lecture01_%20Introduction%20to%20Javascript%20_%20Notion.pdf' },
      },
      {
        title: 'What JavaScript adds',
        summary: 'The v3 demo is the practical proof of the whole lecture.',
        points: [
          'addEventListener makes a button respond to a click.',
          'Number(input.value) converts form text before adding.',
          'fetch reaches an external API and uses DOM creation to render cards.',
          'classList.toggle changes the page theme without reloading.',
        ],
        code: `clickBtn.addEventListener("click", function () {\n  clickCount++;\n  clickStatus.textContent = \`You clicked me \${clickCount} time(s)!\`;\n});`,
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
    title: 'Variables: let, const & copy',
    subtitle: 'Lecture 02 starts with how JavaScript stores names and values.',
    paragraphs: [
      'A variable is a label that points to a value. With let you can point the label to a new value later. With const the label cannot be reassigned.',
      'For primitive values, copying is simple: the value itself is copied. If b changes later, a does not change.',
    ],
    deepDive: [
      {
        title: 'The original problem: bytes need meaning',
        summary: 'Data types exist because the same bits can mean different things.',
        points: [
          'Computer memory is only bytes: 0s and 1s.',
          'The bit pattern 01001000 could mean the number 72, the character H, a memory address, or part of another value.',
          'A data type tells the computer how many bytes to read and what operations make sense.',
          'This connects directly to JavaScript: JS decides the type at runtime instead of forcing you to write it before the variable.',
        ],
        code: `// Same-looking memory can have different meanings\n// 01001000 -> number 72\n// 01001000 -> character "H"\n// Type gives the bits meaning.`,
      },
      {
        title: 'let can be reassigned',
        summary: 'Use let when the same variable name must receive a new value.',
        points: [
          'let a = 10 creates a variable named a.',
          'a = 20 changes what a stores.',
          'This is useful for counters, loop indexes, and values that genuinely change over time.',
        ],
        code: `let a = 10;\na = 20;\nconsole.log(a); // 20`,
      },
      {
        title: 'const blocks reassignment',
        summary: 'The binding is fixed, not always the inside of the value.',
        points: [
          'const a = 10 means the name a cannot point somewhere else.',
          'Trying a = 7 throws an error.',
          'Use const by default when a variable should not be reassigned.',
        ],
        code: `const score = 10;\n// score = 7; // TypeError`,
      },
      {
        title: 'var: the old variable style',
        summary: 'Know it because older code uses it; avoid it in modern beginner code.',
        points: [
          'var is function-scoped, not block-scoped, so it can leak outside if blocks.',
          'var can be redeclared in the same scope, which makes bugs easier to hide.',
          'var is hoisted and initialized as undefined, so reading it before the line appears does not throw.',
          'Modern practice: use const by default, use let when reassignment is needed, avoid var.',
        ],
        code: `if (true) {\n  var leak = "visible outside";\n}\nconsole.log(leak); // visible outside\n\nvar x = 10;\nvar x = 20; // allowed`,
      },
      {
        title: 'var vs let vs const: the decision table',
        summary: 'This is the lecture summary learners should remember.',
        points: [
          'Scope: var is function-scoped; let and const are block-scoped.',
          'Reassignment: var and let allow it; const does not.',
          'Redeclaration: var allows it; let and const do not in the same scope.',
          'Hoisting: var becomes undefined early; let and const stay in the Temporal Dead Zone until declared.',
          'Default habit: const first, let second, var only when reading old code.',
        ],
        code: `// Best habit\nconst course = "JavaScript";\nlet score = 0;\nscore += 10;\n\n// Avoid in new code\nvar oldStyle = true;`,
      },
      {
        title: 'Open the uploaded lecture',
        summary: 'Lecture 02 PDF and source file are available in public.',
        points: [
          'The PDF contains the full lecture flow.',
          'The code examples are in public/Lecture02/first.js.',
        ],
        resource: { label: 'Lecture 02 PDF', href: '/Lecture%2002_%20Data%20types%20in%20Javascript%20_%20Notion.pdf' },
      },
    ],
    code: `let a = 30;\nlet b = a;\n\nb = 70;\nconsole.log(a, b); // 30 70`,
    playground: `let first = 30;\nlet second = first;\nsecond = 70;\nconsole.log("first:", first);\nconsole.log("second:", second);`,
    output: 'first: 30\nsecond: 70',
    tip: 'Use const first. Switch to let only when reassignment is part of the logic.',
  },
  l12: {
    title: 'Primitive Data Types',
    subtitle: 'Numbers, strings, booleans, undefined, null, bigint, and symbol.',
    paragraphs: [
      'Primitive values are small, direct values. They are immutable, which means JavaScript does not change the original primitive value in place.',
      'The uploaded lecture walks through each primitive type with console examples so you can see what JavaScript prints.',
    ],
    deepDive: [
      {
        title: 'Primitive values are immutable',
        summary: 'Operations create new values instead of changing the old primitive.',
        points: [
          'A primitive value is stored directly in the variable.',
          'When you appear to change a string or number, JavaScript creates a new primitive value.',
          'That is why copying primitives feels simple: the value is copied, not shared.',
          'This prepares the learner for the next lesson, where objects behave very differently.',
        ],
        code: `let name = "Rohit";\nlet copy = name;\ncopy = "Mohan";\nconsole.log(name); // Rohit`,
      },
      {
        title: 'Number, string and boolean',
        summary: 'The three everyday primitives you will use constantly.',
        points: [
          'number stores integers and decimals in one type.',
          'string stores text with double quotes, single quotes, or template literals.',
          'boolean stores true or false for decisions.',
        ],
        code: `let age = 20;\nlet name = "Rohit Negi";\nlet isLearning = true;\nconsole.log(age, name, isLearning);`,
      },
      {
        title: 'undefined and null',
        summary: 'Both mean empty-ish, but they are not the same idea.',
        points: [
          'undefined usually means JavaScript has no value assigned yet.',
          'null is usually chosen by the programmer to mean intentionally empty.',
          'They behave strangely with loose equality, so use strict checks when possible.',
        ],
        code: `let missing;\nlet selectedUser = null;\nconsole.log(missing, selectedUser);`,
      },
      {
        title: 'bigint and symbol',
        summary: 'Less common, but important to recognize.',
        points: [
          'bigint handles integers bigger than normal Number safety limits.',
          'symbol creates a unique identity even when descriptions match.',
          'Two Symbol("Rohit") values are not equal because each symbol is unique.',
        ],
        code: `let huge = 27343285947319574913n;\nlet a = Symbol("Rohit");\nlet b = Symbol("Rohit");\nconsole.log(a === b); // false`,
      },
      {
        title: 'typeof: checking type at runtime',
        summary: 'JavaScript figures out types while the program runs.',
        points: [
          'typeof returns a string such as "number", "string", "boolean", or "undefined".',
          'typeof [] returns "object" because arrays are specialized objects.',
          'typeof function(){} returns "function", a special case for callable objects.',
          'typeof null returns "object", which is a famous old JavaScript bug.',
        ],
        code: `console.log(typeof "Hello");      // string\nconsole.log(typeof 42);           // number\nconsole.log(typeof [1, 2, 3]);    // object\nconsole.log(typeof function(){}); // function\nconsole.log(typeof null);         // object`,
      },
    ],
    code: `let firstNumber = 20;\nlet secondNumber = 20.7;\nlet firstString = "Rohit Negi";\nlet firstBoolean = true;\nlet empty = null;\n\nconsole.log(typeof firstNumber, typeof firstString, typeof firstBoolean, empty);`,
    playground: `const values = [20, "Rohit", true, undefined, null, 99n, Symbol("id")];\nvalues.forEach((value) => console.log(String(value), typeof value));`,
    output: '20 number\nRohit string\ntrue boolean\nundefined undefined\nnull object\n99 bigint\nSymbol(id) symbol',
    tip: 'typeof null returns "object" because of a very old JavaScript bug. Learn it, then move on.',
  },
  l13: {
    title: 'Objects, Arrays & Reference',
    subtitle: 'Non-primitive values are copied by reference, not by value.',
    paragraphs: [
      'Objects, arrays, and functions are non-primitive values. When you copy them, JavaScript copies a reference to the same underlying value.',
      'That is why changing obj2.name can also appear in obj1 when both variables point at the same object.',
    ],
    deepDive: [
      {
        title: 'Arrays store ordered data',
        summary: 'A list can mix values, though consistent arrays are easier to work with.',
        points: [
          'Array indexes start at 0.',
          'Arrays are objects underneath, so they are non-primitive.',
          'Changing an array through one reference changes the shared array.',
        ],
        code: `let arr = [10, 20, 30, "Rohit", true];\nconsole.log(arr[0]); // 10`,
      },
      {
        title: 'Objects store named data',
        summary: 'Objects group related properties.',
        points: [
          'A person object can hold name, age, city, and more.',
          'const person means the person variable cannot be reassigned.',
          'The properties inside the object can still change unless you freeze it.',
        ],
        code: `const person = {\n  name: "Rohit",\n  age: 30,\n  city: "dwarka",\n};\nperson.age = 31;`,
      },
      {
        title: 'Reference copy',
        summary: 'Two variables can point at the same object.',
        points: [
          'obj2 = obj1 does not create a fresh object.',
          'It creates another label for the same object.',
          'Use spreading or structured cloning when you need a separate copy.',
        ],
        code: `let obj1 = { name: "Rohit", age: 10 };\nlet obj2 = obj1;\nobj2.name = "Mohan";\nconsole.log(obj1.name); // Mohan`,
      },
      {
        title: 'Functions are objects too',
        summary: 'In JavaScript, functions are callable values with object behavior.',
        points: [
          'A function can be stored in a variable.',
          'A function can be passed to another function.',
          'A function can be returned from another function.',
          'This is why JavaScript later becomes powerful for callbacks, events, and React-style code.',
        ],
        code: `const greet = function () {\n  console.log("Hello");\n};\n\nconsole.log(typeof greet); // function`,
      },
      {
        title: 'Other built-in object types',
        summary: 'Object is the broad family; arrays are only one member.',
        points: [
          'Date represents dates and times.',
          'RegExp represents regular expressions for text matching.',
          'Map and Set store collections with different rules than plain objects and arrays.',
          'The important connection: non-primitives are usually reference-based values.',
        ],
        code: `const today = new Date();\nconst uniqueIds = new Set([1, 2, 2, 3]);\nconsole.log(uniqueIds.size); // 3`,
      },
    ],
    code: `let a = {\n  name: "Rohit",\n  age: 20,\n};\n\nconsole.log(typeof a); // object`,
    playground: `const obj1 = { name: "Rohit", age: 20 };\nconst obj2 = obj1;\nobj2.name = "Mohan";\nconsole.log(obj1.name);\nconsole.log(obj1 === obj2);`,
    output: 'Mohan\ntrue',
    tip: 'Primitive comparison checks value. Object comparison checks whether both sides reference the same object.',
  },
  l14: {
    title: 'Arithmetic & Assignment Operators',
    subtitle: 'Lecture 03 moves from data to operations.',
    paragraphs: [
      'Operators are the symbols that calculate, compare, assign, and combine values. Arithmetic operators handle basic math.',
      'Assignment operators update an existing variable using a shorter form like +=, -=, *=, and /=.',
    ],
    deepDive: [
      {
        title: 'Arithmetic operators',
        summary: 'The core math operations in JavaScript.',
        points: [
          '+ adds, - subtracts, * multiplies, / divides.',
          '% gives the remainder after division.',
          '** performs exponentiation.',
        ],
        code: `console.log(3 + 4);\nconsole.log(10 % 4);\nconsole.log(10 ** 4);`,
      },
      {
        title: 'Assignment shortcuts',
        summary: 'Update a value without repeating the variable name twice.',
        points: [
          'a += b is the same as a = a + b.',
          'a /= b is the same as a = a / b.',
          'These are common in counters, totals, and loops.',
        ],
        code: `let a = 10;\nlet b = 20;\na += b;\nconsole.log(a); // 30`,
      },
      {
        title: 'Increment order',
        summary: 'post-increment and pre-increment return values differently.',
        points: [
          'a++ gives the old value first, then increases a.',
          '++a increases a first, then gives the new value.',
          'Prefer clearer code when teaching or debugging.',
        ],
        code: `let a = 10;\nconsole.log(a++); // 10\nconsole.log(a);   // 11\nconsole.log(++a); // 12`,
      },
      {
        title: 'Operator precedence',
        summary: 'JavaScript does multiplication before addition unless you use parentheses.',
        points: [
          '2 + 3 * 5 is 17, not 25, because multiplication has higher precedence.',
          'Parentheses make the intended order explicit.',
          'The lecture advice is simple: do not memorize the full table; use parentheses when there is any doubt.',
        ],
        code: `console.log(2 + 3 * 5);     // 17\nconsole.log((2 + 3) * 5);   // 25\n\nlet clear = ((10 * 2) + 5) * 64 + 78 / 2;`,
      },
      {
        title: 'The connection to real programs',
        summary: 'Operators are not isolated symbols; they drive state changes.',
        points: [
          'Arithmetic computes values.',
          'Assignment stores the new value.',
          'Increment updates counters.',
          'Comparison and logical operators decide which branch runs next.',
        ],
        code: `let xp = 0;\nxp += 10;\nconst leveledUp = xp >= 10;\nconsole.log(leveledUp); // true`,
      },
    ],
    code: `let a = 10;\nlet b = 20;\n\na += b;\nconsole.log(a); // 30`,
    playground: `let a = 10;\nconsole.log("post:", a++);\nconsole.log("after post:", a);\nconsole.log("pre:", ++a);`,
    output: 'post: 10\nafter post: 11\npre: 12',
    tip: 'When increment order feels confusing, split it into two lines. Readable code wins.',
  },
  l15: {
    title: 'Comparison, Equality & Conversion',
    subtitle: 'Loose equality converts types. Strict equality checks type first.',
    paragraphs: [
      'Comparison operators return booleans. They answer questions like greater than, less than, and equal.',
      'The most important habit: prefer === over == so JavaScript does not quietly convert one side before comparing.',
    ],
    deepDive: [
      {
        title: 'Comparison operators',
        summary: 'Greater, less, greater-or-equal, and less-or-equal.',
        points: [
          '10 > 5 returns true.',
          '10 <= 5 returns false.',
          'Comparisons are used heavily in if/else and loops.',
        ],
        code: `console.log(10 > 5);\nconsole.log(10 >= 5);\nconsole.log(10 <= 5);\nconsole.log(10 < 5);`,
      },
      {
        title: '== vs ===',
        summary: 'Strict equality avoids surprise conversions.',
        points: [
          '"10" == 10 is true because JavaScript converts.',
          '"10" === 10 is false because the types differ.',
          'Most production code should use === and !==.',
        ],
        code: `console.log("10" == 10);  // true\nconsole.log("10" === 10); // false`,
      },
      {
        title: 'Manual conversion',
        summary: 'Convert intentionally instead of relying on loose equality.',
        points: [
          'Number("10") turns text into a number.',
          'String(30) turns a number into text.',
          'Form inputs arrive as strings, so calculators must convert before adding.',
        ],
        code: `let first = Number("10");\nlet second = Number("20");\nconsole.log(first + second); // 30`,
        resource: { label: 'Lecture 03 PDF', href: '/Lecture03_%20Operator%20and%20Data%20type%20in%20JS%20_%20Notion.pdf' },
      },
      {
        title: 'null and undefined comparison trap',
        summary: 'Loose equality has special cases that beginners should see once.',
        points: [
          'null == undefined is true, but null is not loosely equal to 0, false, or 1.',
          'Comparison operators like >= convert null differently, so null >= 0 can be true.',
          'This is why strict equality and explicit checks are cleaner for learners.',
        ],
        code: `console.log(null == undefined); // true\nconsole.log(null == 0);         // false\nconsole.log(null >= 0);         // true\nconsole.log(null === undefined);// false`,
      },
      {
        title: 'Ternary operator',
        summary: 'A compact if/else expression for simple decisions.',
        points: [
          'The ternary operator has three parts: condition, value if true, value if false.',
          'Use it for small expressions, not large blocks of logic.',
          'It connects comparison operators to actual messages or values.',
        ],
        code: `let age = 20;\nlet message = age >= 18 ? "You can vote." : "You cannot vote yet.";\nconsole.log(message);`,
      },
    ],
    code: `console.log("10" == 10);  // true\nconsole.log("10" === 10); // false\n\nlet age = Number("10");\nconsole.log(age);`,
    playground: `const formValue = "20";\nconsole.log(formValue + 10);\nconsole.log(Number(formValue) + 10);`,
    output: '2010\n30',
    tip: 'If a value came from an input box, assume it is text until you convert it.',
  },
  l16: {
    title: 'Logical, Bitwise & Precision',
    subtitle: 'Operators also decide, short-circuit, and expose number limits.',
    paragraphs: [
      'Logical operators combine conditions. && needs both sides to be truthy. || only needs one truthy side.',
      'Lecture 03 also shows practical precision advice: do not store money as floating-point rupees or dollars when exact paise/cents are required.',
    ],
    deepDive: [
      {
        title: 'Logical AND and OR',
        summary: 'These operators return based on truthiness.',
        points: [
          'true && "Rohit" returns "Rohit" because both sides pass.',
          'false && "Rohit" stops early and returns false.',
          'false || "fallback" returns "fallback".',
        ],
        code: `console.log(true && "Rohit");\nconsole.log(false && "Rohit");\nconsole.log(false || "fallback");`,
      },
      {
        title: 'Bitwise basics',
        summary: 'Bitwise operators work on binary representation.',
        points: [
          'Right shift moves bits to the right.',
          '8 >> 2 returns 2 because binary 1000 shifted right twice becomes 10.',
          'You will not use bitwise daily at first, but you should recognize it.',
        ],
        code: `console.log(8 >> 2); // 2`,
      },
      {
        title: 'Floating-point precision',
        summary: 'Money should be stored in the smallest unit.',
        points: [
          '0.1 + 0.2 is not exactly 0.3 in JavaScript floating-point math.',
          'For INR, store paise as integers instead of rupees as decimals.',
          'For Bitcoin-like systems, store the smallest unit instead of decimal BTC.',
        ],
        code: `console.log(0.1 + 0.2);\n\nlet first = 12001; // paise\nlet second = 13002; // paise\nconsole.log((first + second) / 100);`,
      },
      {
        title: 'Truthy and falsy values',
        summary: 'Logical operators do not only work with true and false.',
        points: [
          'Falsy values: false, 0, empty string, null, undefined, and NaN.',
          'Everything else is truthy, including "false", [], and {}.',
          'This explains why username || "Guest" can choose a fallback display name.',
        ],
        code: `let username = "";\nlet displayName = username || "Guest";\nconsole.log(displayName); // Guest\n\nconsole.log(Boolean([])); // true\nconsole.log(Boolean({})); // true`,
      },
      {
        title: 'Short-circuiting prevents errors',
        summary: '&& and || can stop before evaluating the right side.',
        points: [
          'With &&, if the left side is falsy, JavaScript does not evaluate the right side.',
          'This lets code safely check an object before reading a property.',
          'With ||, if the left side is truthy, JavaScript does not evaluate the fallback.',
        ],
        code: `let user = null;\n\nif (user && user.name === "Admin") {\n  console.log("Admin");\n}\n\nlet display = user?.name || "Guest";`,
      },
      {
        title: 'Binary storage is why decimals surprise us',
        summary: '0.1 and 0.2 cannot be stored perfectly in base 2.',
        points: [
          'Humans write decimal fractions in base 10.',
          'Computers store JavaScript numbers as binary floating-point values.',
          'Some decimal fractions become repeating binary fractions, so JavaScript stores an approximation.',
          'The result is the famous 0.1 + 0.2 output.',
        ],
        code: `console.log(0.1 + 0.2);        // 0.30000000000000004\nconsole.log(0.1 + 0.2 === 0.3); // false`,
      },
    ],
    code: `console.log(true && "Rohit");\nconsole.log(false || false);\nconsole.log(0.1 + 0.2);`,
    playground: `let cartTotalPaise = 12001 + 13002;\nconsole.log("rupees:", cartTotalPaise / 100);\nconsole.log("binary shift:", 8 >> 2);`,
    output: 'rupees: 250.03\nbinary shift: 2',
    tip: 'For finance, store integers in the smallest unit. Display decimals only at the UI boundary.',
  },
  l17: {
    title: 'Conditions and Loops',
    subtitle: 'Lecture 04 starts with branching and repetition.',
    paragraphs: [
      'Conditions choose which block runs. Loops repeat a block until a stopping condition is reached.',
      'The lecture examples use if/else, else-if chains, for loops, while loops, and do-while loops.',
    ],
    deepDive: [
      {
        title: 'parseInt and parseFloat',
        summary: 'Extract numeric values from text that starts with a number.',
        points: [
          'parseInt("100px") returns 100.',
          'parseFloat("100.01px") returns 100.01.',
          'If parsing fails, JavaScript gives NaN: Not a Number.',
        ],
        code: `console.log(parseInt("100px"));\nconsole.log(parseFloat("100.01px"));`,
      },
      {
        title: 'if, else if, else',
        summary: 'Choose one path from multiple possibilities.',
        points: [
          'Start with the most specific or earliest condition.',
          'Only the first matching branch runs.',
          'Use else as the final fallback.',
        ],
        code: `let age = 70;\n\nif (age < 18) {\n  console.log("You are child");\n} else if (age >= 18 && age < 60) {\n  console.log("You are adult");\n} else {\n  console.log("You are old");\n}`,
      },
      {
        title: 'for, while and do-while',
        summary: 'Three loop shapes for repeated work.',
        points: [
          'for is compact when you know the start, condition, and update.',
          'while is useful when the loop depends on an outside condition.',
          'do-while runs at least once before checking the condition.',
        ],
        code: `for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}\n\nlet i = 1;\nwhile (i <= 10) {\n  console.log(i);\n  i++;\n}`,
        resource: { label: 'Lecture 04 PDF', href: '/Lecture04_%20Loop,%20Number,%20math%20and%20String%20_%20Notion.pdf' },
      },
      {
        title: 'if: one condition, one possible action',
        summary: 'The if block runs only when the condition is true.',
        points: [
          'Use if when there is a single question to ask.',
          'If the answer is false, JavaScript simply skips the block.',
          'This is the starting shape for all branching logic.',
        ],
        code: `let temperature = 30;\n\nif (temperature > 25) {\n  console.log("It's a hot day! Wear shorts.");\n}`,
      },
      {
        title: 'else-if chain: first true branch wins',
        summary: 'Order matters because the rest of the chain is skipped.',
        points: [
          'JavaScript checks conditions from top to bottom.',
          'The first true condition runs.',
          'After that, the remaining else-if and else blocks are ignored.',
          'This is why grading logic must be ordered from highest score to lowest score.',
        ],
        code: `let score = 85;\nlet grade;\n\nif (score >= 90) grade = "A";\nelse if (score >= 80) grade = "B";\nelse if (score >= 70) grade = "C";\nelse grade = "F";\n\nconsole.log(grade); // B`,
      },
      {
        title: 'Infinite loop danger',
        summary: 'A while loop must change something that moves it toward stopping.',
        points: [
          'while loops are useful when you do not know the exact number of repetitions ahead of time.',
          'The update often happens inside the loop body.',
          'If the condition never becomes false, the program gets stuck.',
        ],
        code: `let playerHealth = 10;\n\nwhile (playerHealth > 0) {\n  console.log("Health:", playerHealth);\n  playerHealth -= 3;\n}\nconsole.log("Player defeated");`,
      },
    ],
    code: `for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}`,
    playground: `let output = [];\nfor (let i = 1; i <= 5; i++) {\n  output.push(i);\n}\nconsole.log(output.join(", "));`,
    output: '1, 2, 3, 4, 5',
    tip: 'Every loop needs a path toward stopping. If the condition never becomes false, the loop never ends.',
  },
  l18: {
    title: 'Number and Math Object',
    subtitle: 'Formatting numbers and generating useful random values.',
    paragraphs: [
      'Number methods format numeric output. Math gives you common utilities like abs, floor, ceil, and random.',
      'The uploaded Lecture 04 code includes OTP-style random number generation and range formulas.',
    ],
    deepDive: [
      {
        title: 'One unified number type',
        summary: 'JavaScript uses number for both integers and decimals.',
        points: [
          'There is no separate int and float type in normal JavaScript numbers.',
          'Both whole numbers and decimals report typeof value as "number".',
          'Under the hood, numbers use 64-bit double-precision floating point from the IEEE 754 standard.',
        ],
        code: `let integer = 100;\nlet float = 99.5;\nconsole.log(typeof integer); // number\nconsole.log(typeof float);   // number`,
      },
      {
        title: 'Creating numbers in different forms',
        summary: 'JavaScript supports standard, exponential, hex, binary, and octal notation.',
        points: [
          'Standard literals are the normal numbers you write every day.',
          'Exponential notation is useful for very large or very small numbers.',
          'Hex, binary, and octal literals let you write numbers in other bases.',
        ],
        code: `let billion = 1e9;\nlet tiny = 5e-6;\nlet hex = 0xFF;     // 255\nlet binary = 0b1010; // 10\nlet octal = 0o77;    // 63`,
      },
      {
        title: 'Number formatting',
        summary: 'toFixed and toPrecision control display, not deep math truth.',
        points: [
          'toFixed(2) gives a string with exactly two digits after the decimal.',
          'toPrecision(5) gives a string with five significant digits.',
          'Number("10av") becomes NaN because the full string is not a clean number.',
        ],
        code: `let num = 10.39148342;\nconsole.log(num.toFixed(2));\nconsole.log(num.toPrecision(5));\nconsole.log(Number("10av"));`,
      },
      {
        title: 'Math floor, ceil and abs',
        summary: 'Round down, round up, or remove the sign.',
        points: [
          'Math.floor(2.3) returns 2.',
          'Math.ceil(-5.3) returns -5 because it rounds upward.',
          'Math.abs(-23) returns 23.',
        ],
        code: `console.log(Math.abs(-23));\nconsole.log(Math.floor(2.3));\nconsole.log(Math.ceil(-5.3));`,
      },
      {
        title: 'Random range formula',
        summary: 'Generate values between min and max.',
        points: [
          'Math.random() returns a decimal from 0 up to, but not including, 1.',
          'Use Math.floor(Math.random() * (max - min + 1) + min) for whole numbers in a range.',
          'For a four digit OTP, be careful whether 0000 should be possible or whether 1000-9999 is enough.',
        ],
        code: `const min = 37;\nconst max = 48;\nconsole.log(Math.floor(Math.random() * (max - min + 1) + min));`,
      },
      {
        title: 'Special numeric values',
        summary: 'Infinity, -Infinity, and NaN are all number values.',
        points: [
          '1 / 0 produces Infinity.',
          '-1 / 0 produces -Infinity.',
          'Invalid math such as "hello" / 2 produces NaN.',
          'NaN is the only JavaScript value that is not equal to itself.',
        ],
        code: `console.log(1 / 0);          // Infinity\nconsole.log("hello" / 2);    // NaN\nconsole.log(typeof NaN);     // number\nconsole.log(NaN === NaN);    // false`,
      },
      {
        title: 'Number constants and safe integers',
        summary: 'The Number object exposes the limits of the number type.',
        points: [
          'Number.MAX_VALUE is the largest representable positive number.',
          'Number.MAX_SAFE_INTEGER is the largest integer you can safely represent exactly.',
          'Number.EPSILON helps compare floating-point results that are close enough.',
          'When integer precision beyond the safe limit matters, BigInt becomes relevant.',
        ],
        code: `console.log(Number.MAX_SAFE_INTEGER);\nconsole.log(Number.MIN_SAFE_INTEGER);\n\nconst closeEnough = Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON;\nconsole.log(closeEnough); // true`,
      },
    ],
    code: `let num = 10.39148342;\nconsole.log(num.toPrecision(5));\n\nconsole.log(Math.floor(Math.random() * (9999 - 1000) + 1000));`,
    playground: `const min = 37;\nconst max = 48;\nconst random = Math.floor(Math.random() * (max - min + 1) + min);\nconsole.log(random >= min && random <= max);`,
    output: 'true',
    tip: 'Math.random is fine for learning and simple UI, but not for secure OTPs in real apps.',
  },
  l19: {
    title: 'Strings and Functions',
    subtitle: 'Text processing, string methods, and reusable code.',
    paragraphs: [
      'Strings are sequences of characters. JavaScript gives you many methods to inspect, slice, replace, trim, and split them.',
      'Functions package logic so you can name it, reuse it, pass values in, and return answers.',
    ],
    deepDive: [
      {
        title: 'Template literals and indexing',
        summary: 'Backticks make dynamic strings easier.',
        points: [
          'Use ${value} inside backticks to insert variables.',
          'str[1] reads the character at index 1.',
          'str.length tells you how many characters are in the string.',
        ],
        code: `let day = 19;\nlet str = \`Lecture day \${day}\`;\nconsole.log(str[1]);\nconsole.log(str.length);`,
      },
      {
        title: 'Useful string methods',
        summary: 'Clean, search, cut, and split text.',
        points: [
          'replaceAll replaces every match.',
          'trim removes outside spaces.',
          'split turns a string into an array.',
          'includes checks whether a substring exists.',
        ],
        code: `let str = "Rohit Negi is a bad teacher Negi is";\nconsole.log(str.replaceAll("Negi", "maggi"));\nconsole.log("   Rohit Negi ".trim());\nconsole.log("Amir Rohit Anuj Anjali".split(" "));`,
      },
      {
        title: 'slice vs substring',
        summary: 'Both cut strings, but negative indexes behave differently.',
        points: [
          'slice(start, end) can use negative indexes to count from the end.',
          'substring(start, end) treats negative values like 0.',
          'This is why slice is often clearer when you need characters from the end.',
        ],
        code: `let str = "Hello Ji";\nconsole.log(str.slice(-2));      // Ji\nconsole.log(str.substring(-2));  // Hello Ji`,
      },
      {
        title: 'Searching inside strings',
        summary: 'Use includes, indexOf, and lastIndexOf to locate text.',
        points: [
          'includes returns true or false.',
          'indexOf returns the first position, or -1 if not found.',
          'lastIndexOf starts from the end and finds the last occurrence.',
          'These methods are useful for validation, search boxes, and parsing simple text.',
        ],
        code: `let str = "Rohit Negi is a teacher Negi is";\nconsole.log(str.includes("Negi"));      // true\nconsole.log(str.indexOf("Negi"));       // 6\nconsole.log(str.lastIndexOf("Negi"));   // 24`,
      },
      {
        title: 'Looping through a string',
        summary: 'A string is character data, so indexes and loops work together.',
        points: [
          'str.length tells you how many characters exist.',
          'str[i] reads the character at position i.',
          'This connects the string lesson back to loops from the same lecture.',
        ],
        code: `let str = "Hello Ji";\n\nfor (let i = 0; i < str.length; i++) {\n  console.log(str[i]);\n}`,
      },
      {
        title: 'Functions return answers',
        summary: 'Function inputs are parameters; the result comes from return.',
        points: [
          'Use function add(num1, num2) to define reusable addition.',
          'return sends the answer back to the caller.',
          'Without return, a function gives undefined unless it only performs side effects.',
        ],
        code: `function add(num1, num2) {\n  return num1 + num2;\n}\n\nconsole.log(add(2, 3));`,
      },
    ],
    code: `let data = "Amir Rohit Anuj Anjali";\nconsole.log(data.split(" "));\n\nfunction add(num1, num2) {\n  return num1 + num2;\n}\nconsole.log(add(2, 3));`,
    playground: `let name = "   Rohit Negi   ";\nlet clean = name.trim();\nconsole.log(clean);\nconsole.log(clean.includes("Negi"));\nconsole.log(clean.slice(0, 5));`,
    output: 'Rohit Negi\ntrue\nRohit',
    tip: 'String methods usually return a new string. They do not mutate the original primitive string.',
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
