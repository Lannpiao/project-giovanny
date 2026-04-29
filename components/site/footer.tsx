import Logo from './logo';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Logo size={44} />
              <div>
                <div className="font-display text-base text-white">
                  Giovanny <span className="gold-gradient-text">Designer</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">Brand Identity Studio</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-sm">
              Identidade visual estratégica para marcas que querem ser percebidas como referência no que fazem.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-5">Serviço</div>
            <ul className="space-y-3 text-white/65 text-sm">
              <li><a href="#portfolio" className="hover:text-gold transition-colors">Portfólio</a></li>
              <li><a href="#diferenciais" className="hover:text-gold transition-colors">Serviços</a></li>
              <li><a href="#processo" className="hover:text-gold transition-colors">Processo</a></li>
              <li><a href="#contato" className="hover:text-gold transition-colors">Orçamento</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-5">Ensino</div>
            <ul className="space-y-3 text-white/65 text-sm mb-6">
              <li><a href="#aprender" className="hover:text-gold transition-colors">Aprender Design</a></li>
              <li><a href="#aprender" className="hover:text-gold transition-colors">Mentoria</a></li>
            </ul>
            <div className="flex gap-3">
              <a href="https://wa.me/554396527300" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-white/10 hover:border-gold/40 flex items-center justify-center text-white/70 hover:text-gold transition-all">
                <MessageCircle size={16} />
              </a>
              <a href="https://instagram.com/giovannydesigner" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 hover:border-gold/40 flex items-center justify-center text-white/70 hover:text-gold transition-all">
                <Instagram size={16} />
              </a>
              <a href="mailto:contato@giovannydesigner.com" aria-label="E-mail" className="w-10 h-10 rounded-full border border-white/10 hover:border-gold/40 flex items-center justify-center text-white/70 hover:text-gold transition-all">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} Giovanny Designer. Todos os direitos reservados.</p>
          <p className="text-white/40 text-xs">Identidade visual que <span className="text-gold">posiciona</span>.</p>
        </div>
      </div>
    </footer>
  );
}
