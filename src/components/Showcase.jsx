import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Juniper Skincare',
    tag: 'Ecommerce • Brand System',
    image:
      'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Polar Studio',
    tag: 'SaaS • Website',
    image:
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Lumen Labs',
    tag: 'Fintech • Campaign',
    image:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Selected work</h2>
            <p className="mt-3 text-slate-600">A mix of product, brand, and growth engagements.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-slate-900 font-medium">
            View all <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.name} href="#" className="group relative overflow-hidden rounded-3xl border border-slate-200">
              <img src={p.image} alt="" className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs opacity-80">{p.tag}</p>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900"><ArrowUpRight size={18} /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
