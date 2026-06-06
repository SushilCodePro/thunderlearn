export const quizQuestionsByCourse = {
  'js-basics': [
    {
      id: 1,
      question: 'Why did Netscape want a new language in the browser in the 1990s?',
      options: [
        'To replace HTML entirely',
        'So web pages could respond instantly without waiting on the server',
        'To compete with Python on the desktop',
        'Because Java was too fast',
      ],
      correct: 1,
      explanation: 'Early pages were static. Netscape wanted the web to react instantly in the browser — that need seeded JavaScript.',
    },
    {
      id: 2,
      question: 'What was Java\'s famous promise that made it attractive for the web?',
      options: [
        '"Write once, run anywhere"',
        '"One language to rule them all"',
        '"No plugins required"',
        '"Built in ten days"',
      ],
      correct: 0,
      explanation: 'Java promised write once, run anywhere via the JVM — perfect for a web of different computers.',
    },
    {
      id: 3,
      question: 'What is the difference between "heavy lifting" and "glue" code on a web page?',
      options: [
        'Heavy lifting is CSS; glue is HTML',
        'Heavy lifting is big boxed programs; glue is small page interactions like clicks and form checks',
        'They are the same thing',
        'Glue code runs on the server only',
      ],
      correct: 1,
      explanation: 'Java handled heavy components in a box. JavaScript was the lightweight glue woven into the page.',
    },
    {
      id: 4,
      question: 'How long did Brendan Eich take to write the first JavaScript prototype?',
      options: ['Ten months', 'Ten weeks', 'Roughly ten days', 'One year'],
      correct: 2,
      explanation: 'The JavaScript prototype was written in roughly ten days in May 1995.',
    },
    {
      id: 5,
      question: 'How related are Java and JavaScript?',
      options: [
        'They are the same language with different names',
        'JavaScript is a subset of Java',
        'As related as "car" and "carpet" — mostly a marketing name',
        'JavaScript compiles to Java bytecode',
      ],
      correct: 2,
      explanation: 'JavaScript was named to borrow Java\'s fame. The two languages are largely unrelated despite similar syntax.',
    },
    {
      id: 6,
      question: 'Why could JavaScript touch the page but Java applets could not easily?',
      options: [
        'JavaScript was woven into the document; Java ran in a sealed box',
        'Java was faster so browsers blocked it',
        'JavaScript had more memory',
        'Java did not support functions',
      ],
      correct: 0,
      explanation: 'JavaScript lived in the page itself. Java applets ran isolated and could not easily interact with page elements.',
    },
    {
      id: 7,
      question: 'Why did browsers eventually remove Java applets (~2015–2017)?',
      options: [
        'Java was too easy for beginners',
        'Security holes, slow startup, and JavaScript engines caught up in speed',
        'Sun Microsystems shut down',
        'HTML5 replaced all programming',
      ],
      correct: 1,
      explanation: 'Java needed plugins, had security issues, and booted slowly. Fast JS engines and native graphics erased Java\'s advantages.',
    },
    {
      id: 8,
      question: 'What role does JavaScript play next to WebAssembly today?',
      options: [
        'WebAssembly replaces JavaScript entirely',
        'JavaScript is still the glue — WebAssembly cannot touch the page directly',
        'They cannot work together',
        'WebAssembly handles all UI events',
      ],
      correct: 1,
      explanation: 'WebAssembly is the new heavyweight. To change buttons or react to clicks, it must call out to JavaScript — still the glue.',
    },
    {
      id: 9,
      question: 'Why can\'t browsers run arbitrary C++ from websites safely?',
      options: [
        'C++ is too slow',
        'C++ could access files, run system commands, and overwrite memory without a full sandbox rewrite',
        'C++ does not support strings',
        'Browsers only support one language',
      ],
      correct: 1,
      explanation: 'Raw C++ has unrestricted file, memory, and system access — a massive security nightmare in a browser tab.',
    },
    {
      id: 10,
      question: 'Typical home PC RAM in 1995 was about:',
      options: ['16 GB', '4–8 MB', '512 MB', '1 GB'],
      correct: 1,
      explanation: 'Average PCs had 4–8 MB RAM. A heavy C++ runtime was impossible alongside Windows 95 and the browser.',
    },
  ],
  'dom-events': [
    {
      id: 1,
      question: 'Which method selects the first element matching a CSS selector?',
      options: ['getElementById', 'querySelector', 'getElementsByTag', 'findElement'],
      correct: 1,
      explanation: 'document.querySelector(".class") returns the first matching element in the DOM.',
    },
    {
      id: 2,
      question: 'How do you attach a click handler to a button?',
      options: [
        'button.onclick = handleClick',
        'button.addEventListener("click", handleClick)',
        'button.on("click", handleClick)',
        'Both A and B are valid',
      ],
      correct: 3,
      explanation: 'Both onclick assignment and addEventListener work. addEventListener is preferred — it allows multiple handlers.',
    },
  ],
  'async-js': [
    {
      id: 1,
      question: 'What does await do inside an async function?',
      options: [
        'Pauses the entire browser',
        'Waits for a Promise to resolve before continuing',
        'Creates a new thread',
        'Converts sync code to sync code',
      ],
      correct: 1,
      explanation: 'await pauses the async function until the Promise settles, then returns the resolved value.',
    },
  ],
}

export const getQuizQuestions = (courseId) =>
  quizQuestionsByCourse[courseId] ?? []
