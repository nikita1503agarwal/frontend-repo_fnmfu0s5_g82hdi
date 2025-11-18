import { Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 p-10 md:p-14 bg-gradient-to-br from-white to-slate-50">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Let’s make something timeless</h3>
            <p className="mt-3 text-slate-600">Tell us about your product and goals. We’ll reply within 24 hours with a clear scope and timeline.</p>

            <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
              <input type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <input type="email" placeholder="Email" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-3 font-medium shadow-sm hover:shadow-md transition"><Mail size={18}/> Request proposal</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
