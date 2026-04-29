const items = [
  'Identidade Visual',
  'Brand Strategy',
  'Logo Design',
  'Manual de Marca',
  'Posicionamento',
  'Design Premium',
  'Mockups',
  'Tipografia',
];

export default function Marquee() {
  return (
    <section className="relative py-10 border-y border-white/5 bg-[#080808] overflow-hidden">
      <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-2xl md:text-3xl text-white/70">{item}</span>
            <span className="text-gold text-2xl">✦</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
