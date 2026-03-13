export const Header = () => (
  <header className="sticky top-0 z-30 border-b border-foreground/10 bg-background/65 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
      <div className="flex items-center gap-4">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-gradient-to-br from-gold-300 to-gold-500 text-primary-foreground shadow-[var(--gold-glow)]">
          <span className="text-2xl font-black">N</span>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.35em] text-primary/80">Network</div>
          <div className="text-lg font-semibold tracking-wide">Ferramentas</div>
        </div>
      </div>
      <nav className="hidden items-center gap-3 md:flex">
        {['Ferramentas', 'Área de membros', 'Planos', 'Suporte'].map((item) => (
          <button
            key={item}
            className="rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm text-foreground/80 transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  </header>
);
