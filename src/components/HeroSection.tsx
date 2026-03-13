export const HeroSection = () => (
  <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pt-16">
    <div className="space-y-7">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-primary">
        Terceiro site oficial da Network
      </div>
      <div className="space-y-4">
        <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          A central premium das <span className="text-primary">ferramentas da Network</span>
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          Mesmo universo visual da Network Club e Network Cortes, mas em um site separado para suportar login, área de membros, limites do plano free e uso ilimitado para assinantes.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="rounded-2xl bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 font-semibold text-primary-foreground shadow-[var(--gold-glow-lg)] transition hover:scale-[1.02]">
          Entrar nas ferramentas
        </button>
        <button className="rounded-2xl border border-foreground/12 bg-foreground/5 px-6 py-3 font-semibold text-foreground/85 transition hover:border-primary/35 hover:bg-primary/10">
          Ver demonstração
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: 'Visual', value: 'Black / Gold Premium' },
          { label: 'Acesso', value: 'Free + Club Ilimitado' },
          { label: 'Função', value: 'Ferramentas + membros' },
        ].map((item) => (
          <div key={item.label} className="rounded-3xl border border-foreground/10 bg-foreground/[0.04] p-5 backdrop-blur-sm">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{item.label}</div>
            <div className="mt-3 text-lg font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
    <HeroPreview />
  </section>
);

const HeroPreview = () => (
  <div className="relative">
    <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-primary/20 blur-3xl" />
    <div className="relative overflow-hidden rounded-[30px] border border-primary/20 bg-card p-5 shadow-[0_0_50px_rgba(0,0,0,0.45)]">
      <div className="mb-5 flex items-center justify-between rounded-2xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Área principal</div>
          <div className="mt-1 text-sm font-medium text-foreground/85">Dashboard de Ferramentas</div>
        </div>
        <div className="rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 text-xs text-green-300">Online</div>
      </div>
      <div className="space-y-4">
        <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/14 to-foreground/[0.02] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary/80">Ferramenta destaque</div>
              <div className="mt-2 text-2xl font-bold">Downloader sem anúncio</div>
              <div className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                Campo grande, CTA forte, feedback de sucesso e histórico de downloads no mesmo padrão visual da Network.
              </div>
            </div>
            <div className="rounded-2xl border border-primary/25 bg-background/30 px-3 py-1 text-xs text-primary/80">UI principal</div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
            <div className="rounded-2xl border border-foreground/10 bg-background/35 px-4 py-3 text-sm text-muted-foreground">
              Cole o link do vídeo aqui...
            </div>
            <button className="rounded-2xl bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-3 text-sm font-semibold text-primary-foreground">
              Baixar agora
            </button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-foreground/10 bg-foreground/[0.035] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">IA</div>
                <div className="mt-1 text-lg font-semibold">Pedidos inteligentes</div>
              </div>
              <div className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs text-primary">Fluxo premium</div>
            </div>
            <div className="space-y-3 text-sm text-foreground/70">
              <div className="rounded-2xl border border-foreground/10 bg-background/30 p-3">Assunto: "corte sobre política"</div>
              <div className="rounded-2xl border border-foreground/10 bg-background/30 p-3">Tom: "forte e curioso"</div>
              <div className="rounded-2xl border border-foreground/10 bg-background/30 p-3">Resultado: 10 títulos gerados</div>
            </div>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-foreground/[0.035] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Membros</div>
                <div className="mt-1 text-lg font-semibold">Login e acesso</div>
              </div>
              <div className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-foreground/70">Separado dos outros sites</div>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-foreground/10 bg-background/30 px-4 py-3 text-sm text-muted-foreground">E-mail</div>
              <div className="rounded-2xl border border-foreground/10 bg-background/30 px-4 py-3 text-sm text-muted-foreground">Senha</div>
              <button className="w-full rounded-2xl bg-foreground px-4 py-3 text-sm font-semibold text-background">Entrar na conta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
