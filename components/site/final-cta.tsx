import { ArrowRight, MessageCircle, GraduationCap } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.2) 0%, transparent 60%)' }}
      />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-6">O próximo passo</p>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] tracking-tight">
          Sua marca merece um <br />
          <span className="gold-shimmer">design profissional</span>.
        </h2>
        <p className="mt-8 text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
          O que separa uma marca esquecida de uma marca desejada é, antes de tudo, como ela se apresenta.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gold-gradient-bg text-black font-semibold tracking-wide hover:shadow-[0_0_50px_rgba(212,175,55,0.55)] transition-all duration-300"
          >
            Solicitar orçamento
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/554396527300?text=Ol%C3%A1%20Giovanny%2C%20quero%20um%20or%C3%A7amento"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold tracking-wide hover:shadow-[0_0_50px_rgba(37,211,102,0.45)] transition-all duration-300"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 inline-flex items-center gap-3 text-white/55 text-sm">
          <span>Quer aprender design ao invés de contratar?</span>
          <a href="#aprender" className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light transition-colors">
            <GraduationCap size={15} />
            Ver mentoria
          </a>
        </div>
      </div>
    </section>
  );
}
