import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="text-xl font-bold gradient-text mb-2">⚡ ThunderLearn</p>
          <p className="text-sm opacity-60">Learn JavaScript. Build the future.</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm opacity-70">
          <a href="#curriculum" className="hover:text-indigo-400 transition-colors">Curriculum</a>
          <a href="#concepts" className="hover:text-indigo-400 transition-colors">Concepts</a>
          <Link to="/dashboard" className="hover:text-indigo-400 transition-colors">Dashboard</Link>
          <a href="https://twitter.com/intent/tweet?text=Learning%20JavaScript%20with%20ThunderLearn%20%F0%9F%9A%80" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Twitter/X</a>
        </div>
      </div>
      <p className="text-center text-xs opacity-40 mt-8">Built with ⚡ for Thunder Course Hackathon 2026</p>
    </footer>
  )
}
