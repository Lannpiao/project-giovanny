import { Target, Crown, Eye, MessageCircle, Layers, Zap } from 'lucide-react';

const items = [
  { icon: Target, title: 'Design estratégico', desc: 'Cada decisão visual tem propósito. Não é só bonito — é construído para posicionar sua marca acima da concorrência.' },
  { icon: Crown, title: 'Aparência premium', desc: 'Sua marca passa a transmitir o nível profissional que você já tem por dentro. Cliente percebe valor antes de perguntar o preço.' },
  { icon: Eye, title: 'Atenção aos detalhes', desc: 'Tipografia, espaçamento, proporções, hierarquia. O que faz uma identidade parecer cara está nos detalhes.' },
  { icon: Layers, title: 'Identidade que vende', desc: 'Sistemas visuais completos: logo, paleta, tipografia, aplicações e mockups. Tudo pronto para usar.' },
  { icon: MessageCircle, title: 'Comunicação profissional', desc: 'Briefings claros, prazos respeitados, processo transparente. Você sabe o que esperar em cada etapa.' },
  { icon: Zap, title: 'Foco em posicionamento', desc: 'O objetivo não é só entregar arquivos. É fazer sua marca parecer maior, mais sólida e mais desejada.' },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">Por que contratar</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Não é apenas design.
            <br />É <span className="gold-gradient-text">posicionamento</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div key={i} className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0c0c0c] border border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold/0 group-hover:bg-gold/10 blur-3xl transition-all duration-700" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <it.icon size={20} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl text-white mb-3">{it.title}</h3>
                <p className="text-white/60 leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
