import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <CTA />
      <footer className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Flame & Mint Agency. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-600 hover:text-slate-900">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Terms</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
