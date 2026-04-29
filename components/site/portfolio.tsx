'use client';

import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Aurum & Co.',
    category: 'Identidade Visual · Joalheria',
    image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Noir Coffee',
    category: 'Logo · Cafeteria',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'lg:col-span-1',
  },
  {
    title: 'Velluto Studio',
    category: 'Branding · Moda',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'lg:col-span-1',
  },
  {
    title: 'Méridien Hotel',
    category: 'Identidade · Hotelaria',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'lg:col-span-2',
  },
  {
    title: 'Eden Skincare',
    category: 'Embalagem · Beleza',
    image: 'https://images.pexels.com/photos/3735632/pexels-photo-3735632.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'lg:col-span-1',
  },
  {
    title: 'Forge Fitness',
    category: 'Branding · Esporte',
    image: 'https://images.pexels.com/photos/116078/pexels-photo-116078.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'lg:col-span-2',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Selected Work</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Marcas que <span className="gold-gradient-text">cresceram</span>
              <br />com a aparência certa.
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-lg leading-relaxed">
            Uma seleção de identidades visuais que transformaram a forma como essas marcas são percebidas no mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[300px] gap-5">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href="#contato"
              className={`group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 ${p.span} cursor-pointer`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-gold/40 transition-all" />

              <div className="relative h-full min-h-[300px] p-6 flex flex-col justify-between">
                <div className="self-end w-10 h-10 rounded-full bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-2">{p.category}</p>
                  <h3 className="font-display text-2xl lg:text-3xl text-white">{p.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
