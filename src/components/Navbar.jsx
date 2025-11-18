import { Menu, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white/80 backdrop-blur border border-white/40 shadow-sm flex items-center justify-center">
            <span className="text-sm font-semibold tracking-tight text-slate-900">FM</span>
          </div>
          <span className="text-slate-900 font-semibold text-lg">Flame & Mint Agency</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-slate-700 hover:text-slate-900 transition">Services</a>
          <a href="#work" className="text-slate-700 hover:text-slate-900 transition">Work</a>
          <a href="#about" className="text-slate-700 hover:text-slate-900 transition">About</a>
          <a href="#contact" className="text-slate-700 hover:text-slate-900 transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition"
          >
            Start a project <ArrowUpRight size={16} />
          </a>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 backdrop-blur">
            <Menu size={20} className="text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
