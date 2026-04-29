'use client';

import { useEffect, useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import Logo from './logo';

type Link = { href: string; label: string; highlight?: boolean };

const links: Link[] = [
  { href: '#diferenciais', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#aprender', label: 'Aprender Design', highlight: true },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <Logo size={44} />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base text-white tracking-wide">
              Giovanny <span className="gold-gradient-text">Designer</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Brand Identity Studio
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) =>
            l.highlight ? (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold-light transition-colors relative"
              >
                <GraduationCap size={14} />
                {l.label}
                <span className="absolute -top-1.5 -right-3 w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              </a>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 hover:text-gold transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            )
          )}
        </nav>

        <a
          href="#contato"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-gradient-bg text-black text-sm font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-shadow"
        >
          Solicitar orçamento
        </a>

        <button aria-label="Abrir menu" onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-2 border-b border-white/5 inline-flex items-center gap-2 ${
                  l.highlight ? 'text-gold' : 'text-white/80'
                }`}
              >
                {l.highlight && <GraduationCap size={15} />}
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-full gold-gradient-bg text-black font-semibold"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
