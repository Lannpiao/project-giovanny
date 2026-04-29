import { Quote, Star } from 'lucide-react';

const testimonials = [
  { quote: 'Ficou melhor do que eu esperava. Minha marca finalmente tem a cara que combina com o serviço que eu entrego.', name: 'Marcos Andrade', role: 'Fundador, Andrade Consult' },
  { quote: 'Minha marca ficou profissional de um jeito que eu não imaginava. O cliente percebe valor antes mesmo de eu falar o preço.', name: 'Letícia Moura', role: 'CEO, Moura Beauty' },
  { quote: 'Agora passo muito mais confiança. O processo foi cuidadoso, organizado e o resultado superou tudo.', name: 'Rafael Pinto', role: 'Sócio, Pinto Arquitetura' },
  { quote: 'Já trabalhei com outros designers. O Giovanny é de outro nível — entende de marca, não só de Photoshop.', name: 'Camila Reis', role: 'Diretora, Reis & Co.' },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">Quem já viveu</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Marcas que <span className="gold-gradient-text">cresceram</span>
            <br />depois do redesign.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0c0c0c] border border-white/5 hover:border-gold/20 transition-all">
              <Quote size={48} className="absolute top-6 right-6 text-gold/10" />
              <div className="flex gap-1 text-gold mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg lg:text-xl text-white/85 leading-relaxed mb-8 font-light">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full gold-gradient-bg flex items-center justify-center font-display text-lg text-black font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium">{t.name}</div>
                  <div className="text-white/50 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
