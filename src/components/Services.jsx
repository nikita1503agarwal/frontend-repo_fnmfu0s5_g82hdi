import { Sparkles, Palette, Rocket, LineChart } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Brand Identity',
    desc: 'Strategy, naming, and visual systems that express your story with clarity.'
  },
  {
    icon: Palette,
    title: 'Web Design',
    desc: 'Clean, conversion-first websites built with modern performance in mind.'
  },
  {
    icon: Rocket,
    title: 'Campaigns',
    desc: 'Launch-ready creative for product drops and ongoing growth initiatives.'
  },
  {
    icon: LineChart,
    title: 'Content & SEO',
    desc: 'Content engines that rank, convert, and build lasting relationships.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">Focused services designed to move the needle without the noise.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
