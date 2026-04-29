export default function PricingTable() {
  const plans = [
    { service: "Uma foto", price: "R$ 35", desc: "Ideal para um material rápido e objetivo." },
    { service: "4 fotos", price: "R$ 50", desc: "Mais variações para divulgar com consistência." },
    { service: "Fotos ilimitadas", price: "R$ 80", desc: "A opção mais completa para campanhas e conteúdos." },
  ];

  return (
    <section className="relative w-full py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <span className="inline-flex items-center rounded-full border border-[#d4af37]/30 px-5 py-2 text-xs tracking-[0.35em] uppercase text-[#d4af37]">
            Investimento
          </span>

          <h2 className="mt-6 font-serif text-4xl md:text-6xl text-white">
            Tabela de <span className="text-[#d4af37]">valores</span>
          </h2>

          <p className="mt-5 text-white/60 max-w-2xl mx-auto text-base md:text-lg">
            Escolha o formato ideal para transformar suas fotos em materiais
            profissionais, elegantes e prontos para divulgação.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#d4af37]/25 bg-[#080808]/80 p-3 shadow-[0_0_80px_rgba(212,175,55,0.08)] backdrop-blur">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            {plans.map((item, index) => (
              <div
                key={item.service}
                className={`grid gap-5 p-7 md:grid-cols-[1fr_auto] md:items-center ${
                  index !== plans.length - 1 ? "border-b border-white/10" : ""
                } ${
                  item.service === "Fotos ilimitadas"
                    ? "bg-gradient-to-r from-[#d4af37]/15 to-transparent"
                    : "bg-white/[0.02]"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                    <h3 className="font-serif text-2xl text-white">
                      {item.service}
                    </h3>
                  </div>

                  <p className="mt-2 text-sm md:text-base text-white/55">
                    {item.desc}
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <span className="block text-xs uppercase tracking-[0.25em] text-white/40">
                    Valor
                  </span>

                  <strong className="mt-1 block text-3xl md:text-4xl font-semibold text-[#d4af37]">
                    {item.price}
                  </strong>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-5 px-4 py-6 md:px-7">
            <p className="text-sm text-white/45 text-center md:text-left">
              Valores para criação visual personalizada conforme necessidade do projeto.
            </p>

            <a
              href="https://wa.me/554396527300?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              className="rounded-full bg-[#d4af37] px-8 py-3 font-semibold text-black transition hover:scale-105 hover:bg-[#e8c85a]"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}