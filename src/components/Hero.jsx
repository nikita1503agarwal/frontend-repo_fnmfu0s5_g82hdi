import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/50 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur pointer-events-none">
              Minimal • Modern • Impactful
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
              A clean marketing agency for modern brands
            </h1>
            <p className="mt-5 text-slate-700 text-lg md:text-xl max-w-xl">
              We craft elegant websites, brand systems, and campaigns that make your product unforgettable.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white px-6 py-3 font-medium shadow-sm hover:shadow-md transition">
                Get a proposal <ArrowRight size={18} />
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-full bg-white/70 backdrop-blur px-6 py-3 font-medium text-slate-900 border border-white/50">
                See our work
              </a>
            </div>
          </div>
        </div>

        {/* subtle gradient overlay to keep text readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90" />
      </div>
    </section>
  );
}
