export const FooterCTA = () => (
  <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
    <div className="overflow-hidden rounded-[34px] border border-primary/20 bg-gradient-to-br from-primary/12 via-foreground/[0.03] to-transparent p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.32em] text-primary/80">Resumo da estética</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Black + gold, UI de produto, cara de comunidade premium.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
            O Network Ferramentas deve comunicar valor, automação e praticidade. A navegação precisa ser limpa, com cards fortes, CTAs visíveis, áreas escuras, brilho controlado e sensação de tecnologia séria. É o braço operacional da Network.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-2xl bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-3 font-semibold text-primary-foreground">
            Abrir conceito
          </button>
          <button className="rounded-2xl border border-foreground/12 bg-background/30 px-5 py-3 font-semibold text-foreground/85">
            Passar ao programador
          </button>
        </div>
      </div>
    </div>
  </section>
);
