const steps = [
  { n: '01', title: 'Contato inicial', desc: 'Você fala comigo direto pelo WhatsApp ou pelo formulário. Sem robôs, sem enrolação.' },
  { n: '02', title: 'Briefing estratégico', desc: 'Conversa profunda sobre seu negócio, público, concorrência e objetivos. Aqui mora a estratégia.' },
  { n: '03', title: 'Criação', desc: 'Desenvolvimento da identidade: logo, paleta, tipografia e sistema visual. Você acompanha cada etapa.' },
  { n: '04', title: 'Ajustes', desc: 'Refinamento até ficar exatamente como sua marca precisa. Sem brigas, sem retrabalho fora do escopo.' },
  { n: '05', title: 'Entrega final', desc: 'Pacote completo com todos os arquivos, manual de marca e mockups prontos para uso imediato.' },
];

export default function Process() {
  return (
    <section id="processo" className="relative py-28 lg:py-36 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">Como funciona</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Um processo <span className="gold-gradient-text">claro</span> do começo ao fim.
          </h2>
          <p className="mt-6 text-white/60 text-lg">
            Sem mistério, sem surpresa. Você sabe exatamente o que esperar em cada etapa do projeto.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-x-1/2" />
          <div className="space-y-6 lg:space-y-0">
            {steps.map((s, i) => (
              <div key={i} className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="lg:py-12">
                  <div className={`p-8 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0c0c0c] border border-white/5 hover:border-gold/30 transition-all duration-500 ${i % 2 === 1 ? 'lg:ml-auto' : ''} lg:max-w-md`}>
                    <div className="font-display text-5xl gold-gradient-text mb-4">{s.n}</div>
                    <h3 className="font-display text-2xl text-white mb-3">{s.title}</h3>
                    <p className="text-white/60 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="hidden lg:flex justify-center relative">
                  <div className="w-4 h-4 rounded-full gold-gradient-bg ring-8 ring-[#080808] z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
