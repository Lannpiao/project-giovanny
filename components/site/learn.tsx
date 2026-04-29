'use client';

import { useState } from 'react';
import { GraduationCap, BookOpen, Rocket, Users, ShieldAlert, MessageSquare, Check, Loader as Loader2, Send, MessageCircle, PenTool } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const benefits = [
  { icon: BookOpen, title: 'Do zero ao avançado', desc: 'Trilha completa, mesmo sem experiência anterior.' },
  { icon: Rocket, title: 'Aprendizado prático', desc: 'Você aprende fazendo projetos reais, não teoria vazia.' },
  { icon: PenTool, title: 'Logos profissionais', desc: 'Método claro para criar marcas que parecem premium.' },
  { icon: Users, title: 'Como conseguir clientes', desc: 'Prospecção, preço e fechamento — o que ninguém te conta.' },
  { icon: ShieldAlert, title: 'Evite erros de iniciante', desc: 'Atalhos que levam anos pra descobrir sozinho.' },
  { icon: MessageSquare, title: 'Mentoria direta', desc: 'Acesso a mim para tirar dúvidas e revisar seus trabalhos.' },
];

const forWho = [
  'Iniciantes que querem começar do jeito certo',
  'Quem quer viver de design',
  'Freelancers que querem cobrar mais',
  'Designers intermediários que travaram',
];

const whatsAppURL =
  'https://wa.me/5500000000000?text=Oi%2C%20tenho%20interesse%20em%20aprender%20design%20com%20voc%C3%AA%2C%20pode%20me%20explicar%20como%20funciona%3F';

export default function Learn() {
  const [form, setForm] = useState({ name: '', phone: '', level: '', goal: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('learning_leads').insert([form]);
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', phone: '', level: '', goal: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Erro ao enviar.');
    }
  };

  return (
    <section id="aprender" className="relative py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 30%, rgba(212,175,55,0.6) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(212,175,55,0.35) 0%, transparent 55%)',
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <GraduationCap size={14} className="text-gold" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold/90">Aprenda Design</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Além de criar marcas, <br />
            eu <span className="gold-gradient-text">ensino você</span> a criar as suas.
          </h2>
          <p className="mt-6 text-white/65 text-lg leading-relaxed">
            Aprenda design com quem trabalha na área todos os dias desenvolvendo identidades visuais profissionais —
            método direto, prático e sem enrolação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {benefits.map((b, i) => (
            <div key={i} className="group p-7 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0c0c0c] border border-white/5 hover:border-gold/30 transition-all">
              <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <b.icon size={18} className="text-gold" />
              </div>
              <h3 className="font-display text-xl text-white mb-2">{b.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">Pra quem é</p>
            <h3 className="font-display text-3xl text-white mb-6 leading-tight">
              Você está pronto pra <span className="gold-gradient-text">dar o próximo passo</span>?
            </h3>
            <div className="space-y-3">
              {forWho.map((t, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#0f0f0f] border border-white/5">
                  <div className="shrink-0 w-6 h-6 rounded-full gold-gradient-bg flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-black" strokeWidth={3} />
                  </div>
                  <p className="text-white/85 text-sm leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#1a1510] via-[#121212] to-[#0a0a0a] border border-gold/20 overflow-hidden">
              <div
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.6) 0%, transparent 70%)' }}
              />

              <div className="relative">
                {!showForm ? (
                  <>
                    <h3 className="font-display text-3xl lg:text-4xl text-white leading-tight mb-4">
                      Quer aprender <br />
                      <span className="gold-gradient-text">do jeito certo</span>?
                    </h3>
                    <p className="text-white/65 text-base leading-relaxed mb-8">
                      Fale comigo e entenda como funciona a mentoria. Sem compromisso, sem script de vendas. Só uma conversa real.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setShowForm(true)}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full gold-gradient-bg text-black font-semibold hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all"
                      >
                        <GraduationCap size={18} />
                        Quero aprender design
                      </button>
                      <a
                        href={whatsAppURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white/90 font-medium hover:border-gold/50 hover:text-gold transition-all"
                      >
                        <MessageCircle size={18} />
                        Falar no WhatsApp
                      </a>
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
                      <Stat value="+120" label="Alunos" />
                      <Stat value="6+" label="Anos no mercado" />
                      <Stat value="100%" label="Prático" />
                    </div>
                  </>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="font-display text-2xl text-white mb-6">
                      Vamos <span className="gold-gradient-text">começar</span>
                    </h3>
                    <LField label="Nome" name="name" value={form.name} onChange={handleChange} required />
                    <LField label="WhatsApp" name="phone" value={form.phone} onChange={handleChange} required />
                    <div className="mb-5">
                      <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Seu nível</label>
                      <select
                        name="level"
                        value={form.level}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white outline-none focus:border-gold/50 transition-colors"
                      >
                        <option value="">Selecione...</option>
                        <option value="iniciante">Iniciante</option>
                        <option value="intermediario">Intermediário</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Seu objetivo</label>
                      <textarea
                        name="goal"
                        value={form.goal}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white outline-none focus:border-gold/50 transition-colors resize-none"
                        placeholder="O que você quer conseguir aprendendo design?"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gold-gradient-bg text-black font-semibold hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all disabled:opacity-60"
                      >
                        {status === 'sending' && <Loader2 size={18} className="animate-spin" />}
                        {status === 'success' ? (
                          <><Check size={18} /> Recebido — respondo em breve</>
                        ) : status === 'sending' ? (
                          'Enviando...'
                        ) : (
                          <><Send size={18} /> Quero participar</>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-5 py-3.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all"
                      >
                        Voltar
                      </button>
                    </div>
                    {status === 'error' && <p className="mt-4 text-sm text-red-400 text-center">{errorMsg}</p>}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl gold-gradient-text">{value}</div>
      <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{label}</div>
    </div>
  );
}

function LField({
  label,
  name,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="mb-5">
      <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white outline-none focus:border-gold/50 transition-colors"
      />
    </div>
  );
}
