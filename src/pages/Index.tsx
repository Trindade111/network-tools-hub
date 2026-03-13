import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { tools } from "@/lib/tools";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Subtle ambient glow */}
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
              Plataforma para criadores
            </div>
            <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-balance">
              Suas ferramentas.{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                Um só lugar.
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              Baixe vídeos, gere títulos, crie imagens e muito mais — tudo dentro da Network.
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

        {/* Stats */}
        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border animate-fade-in opacity-0 [animation-delay:120ms]">
            {[
              { value: "6", label: "Ferramentas" },
              { value: "∞", label: "Usos no Club" },
              { value: "24/7", label: "Disponível" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface px-5 py-5 text-center">
                <div className="text-xl font-bold tracking-tight text-foreground">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="mb-10 animate-fade-in opacity-0 [animation-delay:180ms]">
            <h2 className="text-lg font-semibold tracking-tight">Ferramentas</h2>
            <p className="mt-1 text-sm text-muted-foreground">Tudo o que você precisa para criar conteúdo</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  to={`/ferramenta/${tool.slug}`}
                  className="group relative flex flex-col rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:bg-surface-hover hover:border-foreground/[0.12] hover:shadow-[0_2px_20px_-4px_hsl(var(--primary)/0.08)] animate-fade-in opacity-0"
                  style={{ animationDelay: `${220 + i * 60}ms` }}
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
        </section>

        {/* Footer CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="rounded-xl border border-primary/15 bg-gradient-to-r from-primary/[0.06] to-transparent p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  Pronto para começar?
                </h2>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Crie sua conta gratuitamente e acesse todas as ferramentas da Network.
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
