import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { categories, getToolsByCategory } from "@/lib/tools";
import { ArrowRight, Crown, Sparkles } from "lucide-react";

const NETWORKING_CLUB_URL = "https://networkingclub.com";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,hsl(var(--primary)/0.08),transparent_60%)]" />
      </div>
      <Header />
      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-10 lg:pt-32 lg:pb-28">
          <div className="max-w-2xl animate-fade-in">
            <div className="mb-5 inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Disponível 24/7
            </div>
            <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-balance">
              Networking{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                Ferramentas
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              Ferramentas criadas para quem trabalha com cortes e conteúdo curto.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/login"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[var(--gold-glow)]"
              >
                Começar agora
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/planos"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-surface-hover hover:text-foreground"
              >
                Ver planos
              </Link>
            </div>
          </div>
        </section>

        {/* Tools by category */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          {categories.map((cat, catIdx) => {
            const catTools = getToolsByCategory(cat.key);
            return (
              <div key={cat.key} className={catIdx > 0 ? "mt-14" : ""}>
                <div className="mb-5 animate-fade-in opacity-0" style={{ animationDelay: `${100 + catIdx * 80}ms` }}>
                  <h2 className="text-lg font-semibold tracking-tight">{cat.label}</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {catTools.map((tool, i) => {
                    const Icon = tool.icon;
                    return (
                      <Link
                        key={tool.slug}
                        to={`/ferramenta/${tool.slug}`}
                        className="group relative flex flex-col rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:bg-surface-hover hover:border-foreground/[0.12] hover:shadow-[0_2px_20px_-4px_hsl(var(--primary)/0.08)] animate-fade-in opacity-0"
                        style={{ animationDelay: `${160 + catIdx * 80 + i * 60}ms` }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.07] text-primary">
                            <Icon size={17} strokeWidth={2} />
                          </div>
                          <ArrowRight size={14} className="mt-0.5 text-foreground/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary" />
                        </div>
                        <h3 className="mt-4 text-[15px] font-semibold tracking-tight">{tool.name}</h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                          {tool.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        {/* Networking Club integration */}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="rounded-xl border border-primary/15 bg-gradient-to-r from-primary/[0.06] to-transparent p-8 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-lg">
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.07] px-3 py-1 text-xs font-medium text-primary">
                  <Sparkles size={12} />
                  Ecossistema Networking
                </div>
                <h2 className="text-xl font-semibold tracking-tight">
                  Parte do Networking Club
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  As ferramentas fazem parte do ecossistema Networking Club. Ao se tornar membro você desbloqueia:
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Uso ilimitado das ferramentas",
                    "Acesso à comunidade",
                    "Conteúdos exclusivos",
                    "Novas ferramentas futuras",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-muted-foreground">
                      <Crown size={12} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={NETWORKING_CLUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[var(--gold-glow)] shrink-0"
              >
                Acessar Networking Club
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="rounded-xl border border-border bg-surface p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  Pronto para começar?
                </h2>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Crie sua conta gratuitamente e acesse todas as ferramentas.
                </p>
              </div>
              <Link
                to="/login"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[var(--gold-glow)]"
              >
                Criar conta grátis
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
