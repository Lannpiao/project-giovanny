'use client';

import { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const move = (clientX: number) => {
      if (!dragging.current || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.max(0, Math.min(100, x)));
    };
    const onMouseMove = (e: MouseEvent) => move(e.clientX);
    const onTouchMove = (e: TouchEvent) => move(e.touches[0].clientX);
    const stop = () => (dragging.current = false);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchend', stop);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('touchend', stop);
    };
  }, []);

  return (
    <section className="relative py-28 lg:py-36 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">Antes & Depois</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            A diferença entre <span className="gold-gradient-text">amador</span> e profissional.
          </h2>
          <p className="mt-6 text-white/60 text-lg">
            Arraste para revelar como uma marca evolui quando passa por um processo de design estratégico.
          </p>
        </div>

        <div ref={ref} className="relative aspect-[16/9] max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 select-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#161616] to-[#0A0A0A] flex items-center justify-center">
            <div className="text-center">
              <div className="font-display text-7xl md:text-9xl gold-gradient-text font-bold tracking-tight">LUMEN</div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.5em] text-white/50">Premium Studio · Est. 2024</div>
              <div className="mt-6 mx-auto w-16 h-px bg-gold" />
            </div>
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-gold text-black text-[10px] uppercase tracking-widest font-semibold">Depois</div>
          </div>

          <div
            className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <div className="text-center">
              <div className="text-6xl md:text-8xl text-yellow-500 font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Lumen!
              </div>
              <div className="mt-3 text-xs md:text-sm text-white/60">* studio de design *</div>
            </div>
            <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-[10px] uppercase tracking-widest font-semibold">Antes</div>
          </div>

          <div className="absolute top-0 bottom-0 w-px bg-gold pointer-events-none" style={{ left: `${pos}%` }}>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full gold-gradient-bg flex items-center justify-center cursor-ew-resize pointer-events-auto shadow-[0_0_30px_rgba(212,175,55,0.5)]"
              onMouseDown={() => (dragging.current = true)}
              onTouchStart={() => (dragging.current = true)}
            >
              <MoveHorizontal size={18} className="text-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
