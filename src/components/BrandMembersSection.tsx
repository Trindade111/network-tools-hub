const memberItems = [
  "Login e cadastro de membros",
  "Controle de limite diário para plano free",
  "Acesso ilimitado para assinantes do Club",
  "Histórico de pedidos e downloads",
  "Área do programador separada dos outros sites",
];

export const BrandMembersSection = () => (
  <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[30px] border border-foreground/10 bg-foreground/[0.035] p-6">
        <div className="text-xs uppercase tracking-[0.28em] text-primary/80">Logo</div>
        <h3 className="mt-2 text-2xl font-black">Conceito visual da marca</h3>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          A marca segue o DNA visual da Network: base preta profunda, dourado intenso, brilho sutil e presença premium. O ícone principal continua forte para conectar com Club e Cortes, mas aqui com foco em tecnologia, automação e área de membros.
        </p>
        <div className="mt-6 flex items-center gap-4 rounded-[28px] border border-primary/20 bg-background/30 p-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-gold-300 to-gold-500 text-3xl font-black text-primary-foreground shadow-[var(--gold-glow-lg)]">
            N
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.34em] text-primary/75">Network</div>
            <div className="text-2xl font-bold tracking-wide">Ferramentas</div>
            <div className="mt-1 text-sm text-muted-foreground">Premium tools hub</div>
          </div>
        </div>
      </div>
      <div className="rounded-[30px] border border-foreground/10 bg-card p-6">
        <div className="mb-4 text-xs uppercase tracking-[0.28em] text-primary/80">Área de membros</div>
        <h3 className="text-2xl font-black">O que esse terceiro site precisa passar</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {memberItems.map((item) => (
            <div key={item} className="rounded-2xl border border-foreground/10 bg-foreground/[0.035] px-4 py-4 text-sm text-foreground/78">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4 text-sm leading-6 text-foreground/80">
          Direção criativa: este site não precisa competir com o Club nem com o Cortes. Ele precisa parecer a extensão natural deles, só que com cara de produto, dashboard e tecnologia.
        </div>
      </div>
    </div>
  </section>
);
