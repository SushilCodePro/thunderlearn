const highlightJS = (code) => {
  const keywords = ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'async', 'await', 'new', 'typeof', 'true', 'false', 'null', 'undefined', 'import', 'export', 'from', 'class']
  let result = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  result = result.replace(/(\/\/.*$)/gm, '<span class="code-comment">$1</span>')
  result = result.replace(/('[^']*'|"[^"]*"|`[^`]*`)/g, '<span class="code-string">$1</span>')
  keywords.forEach((kw) => {
    result = result.replace(new RegExp(`\\b${kw}\\b`, 'g'), `<span class="code-keyword">${kw}</span>`)
  })
  result = result.replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>')
  return result
}

export default function CodeBlock({ code, className = '', showPrompt = false }) {
  return (
    <div className={`rounded-xl bg-[#0d1117] border border-white/10 overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <span className="text-xs opacity-50 ml-2 font-mono">javascript</span>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
        <code
          dangerouslySetInnerHTML={{
            __html: showPrompt
              ? `<span class="code-string">&gt; </span>${highlightJS(code)}`
              : highlightJS(code),
          }}
        />
      </pre>
    </div>
  )
}
