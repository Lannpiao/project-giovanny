import { Check } from 'lucide-react';

const targets = [
  'Empreendedores que querem profissionalizar a marca',
  'Negócios locais prontos para crescer no digital',
  'Empresas que querem sair da aparência amadora',
  'Marcas que precisam transmitir mais autoridade',
  'Profissionais que cobram bem e querem refletir isso visualmente',
  'Quem entende que marca forte vende sozinha',
];

export default function ForWho() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 70%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">Para quem é</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Você se reconhece <br />em <span className="gold-gradient-text">algum desses</span>?
          </h2>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-md">
            Se sim, você está exatamente no lugar certo. Esse trabalho foi pensado para marcas que querem evoluir.
          </p>
        </div>

        <div className="space-y-4">
          {targets.map((t, i) => (
            <div key={i} className="group flex items-start gap-4 p-5 rounded-xl bg-[#111] border border-white/5 hover:border-gold/30 transition-all">
              <div className="shrink-0 w-8 h-8 rounded-full gold-gradient-bg flex items-center justify-center mt-0.5">
                <Check size={16} className="text-black" strokeWidth={3} />
              </div>
              <p className="text-white/85 text-base lg:text-lg leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
