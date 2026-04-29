'use client';

import { useState } from 'react';
import { Instagram, MessageCircle, Mail, Send, Check, Loader as Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', project_type: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('leads').insert([form]);
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', project_type: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Erro ao enviar.');
    }
  };

  return (
    <section id="contato" className="relative py-28 lg:py-36 bg-[#080808] border-t border-white/5">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">Contato</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Vamos conversar <br />sobre sua <span className="gold-gradient-text">marca</span>.
          </h2>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            Conte um pouco sobre seu projeto. Respondo pessoalmente em até 24h com um orçamento honesto e detalhado.
          </p>

          <div className="mt-10 space-y-4">
            <a href="https://wa.me/554396527300" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl bg-[#111] border border-white/5 hover:border-gold/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center">
                <MessageCircle size={20} className="text-[#25D366]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/40">WhatsApp</div>
                <div className="text-white group-hover:text-gold transition-colors">Conversa direta</div>
              </div>
            </a>
            <a href="https://instagram.com/giovannydesigner" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl bg-[#111] border border-white/5 hover:border-gold/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Instagram size={20} className="text-gold" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/40">Instagram</div>
                <div className="text-white group-hover:text-gold transition-colors">@giovannydesigner</div>
              </div>
            </a>
            <a href="mailto:contato@giovannydesigner.com" className="flex items-center gap-4 p-5 rounded-xl bg-[#111] border border-white/5 hover:border-gold/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Mail size={20} className="text-gold" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/40">E-mail</div>
                <div className="text-white group-hover:text-gold transition-colors">contato@giovannydesigner.com</div>
              </div>
            </a>
          </div>
        </div>

        <div className="min-w-0 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl min-w-0 p-5 sm:p-6 lg:p-10 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0c0c0c] border border-white/10"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nome" name="name" value={form.name} onChange={handleChange} required />
              <Field label="WhatsApp" name="phone" value={form.phone} onChange={handleChange} required />
            </div>
            <Field label="E-mail" type="email" name="email" value={form.email} onChange={handleChange} required />
            <div className="mb-5">
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Tipo de projeto</label>
              <select
                name="project_type"
                value={form.project_type}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white outline-none focus:border-gold/50 transition-colors"
              >
                <option value="">Selecione...</option>
                <option value="logo">Logo</option>
                <option value="identidade">Identidade visual completa</option>
                <option value="rebrand">Rebranding</option>
                <option value="outros">Outros</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Conte sobre seu projeto</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white outline-none focus:border-gold/50 transition-colors resize-none"
                placeholder="Sobre o que é a marca, público, momento atual..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl gold-gradient-bg text-black font-semibold hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all disabled:opacity-60"
            >
              {status === 'sending' && <Loader2 size={18} className="animate-spin" />}
              {status === 'success' ? (
                <><Check size={18} /> Recebido — respondo em até 24h</>
              ) : status === 'sending' ? (
                'Enviando...'
              ) : (
                <><Send size={18} /> Solicitar orçamento</>
              )}
            </button>

            {status === 'error' && <p className="mt-4 text-sm text-red-400 text-center">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = 'text', value, onChange, required,
}: {
  label: string; name: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <div className="mb-5">
      <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white outline-none focus:border-gold/50 transition-colors"
      />
    </div>
  );
}
