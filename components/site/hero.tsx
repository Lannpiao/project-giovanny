'use client';

import { ArrowRight, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]" />
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.6) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-8">
            <Sparkles size={14} className="text-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold/90">Brand Identity Premium</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[1.05] tracking-tight text-white">
            Design que <br className="hidden sm:block" />
            <span className="gold-shimmer">posiciona marcas</span>
            <br className="hidden sm:block" />
            no nível certo.
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-white/65 max-w-xl leading-relaxed">
            Crio identidades visuais profissionais que fazem sua marca parecer uma{' '}
            <span className="text-white">empresa grande</span> — transmitindo valor, autoridade e confiança desde o primeiro olhar.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gold-gradient-bg text-black font-semibold tracking-wide hover:shadow-[0_0_50px_rgba(212,175,55,0.55)] transition-all duration-300"
            >
              Solicitar orçamento
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/90 font-medium hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              Ver trabalhos
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-xs text-white/70"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-white/55 mt-1">+120 marcas posicionadas</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full border border-gold/20 animate-spin-slow" />
            <div
              className="absolute inset-6 rounded-full border border-gold/10 animate-spin-slow"
              style={{ animationDirection: 'reverse', animationDuration: '40s' }}
            />
            <div className="absolute inset-12 rounded-3xl bg-gradient-to-br from-[#161616] to-[#0A0A0A] border border-white/5 overflow-hidden noise-overlay flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-[10rem] leading-none gold-gradient-text font-bold tracking-tighter">GD</div>
                <div className="mt-4 text-[10px] uppercase tracking-[0.5em] text-white/40">Est. Studio</div>
              </div>
              <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-gold/40" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-gold/40" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-gold/40" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-gold/40" />
            </div>

            <div className="absolute -left-4 top-12 px-4 py-2 rounded-full bg-[#0A0A0A]/80 backdrop-blur border border-white/10 text-xs text-white/80 animate-float">
              Logo Design
            </div>
            <div
              className="absolute -right-2 bottom-20 px-4 py-2 rounded-full bg-[#0A0A0A]/80 backdrop-blur border border-gold/30 text-xs text-gold animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              Brand Strategy
            </div>
            <div
              className="absolute right-8 top-4 px-4 py-2 rounded-full bg-[#0A0A0A]/80 backdrop-blur border border-white/10 text-xs text-white/80 animate-float"
              style={{ animationDelay: '3s' }}
            >
              Identidade Visual
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
}
