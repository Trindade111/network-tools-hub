import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { tools } from "@/lib/tools";
import { ArrowRight, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.10),transparent_34%),radial-gradient(circle_at_bottom_right,hsl(var(--primary)/0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.16]" />
      </div>
      <Header />
      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Zap size={14} />
              Plataforma de ferramentas para criadores
            </div>
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Network{" "}
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Ferramentas
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Todas as ferramentas da Network em um só lugar. Baixe vídeos, gere títulos, crie imagens e muito mais.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/login"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-gold-300 to-gold-500 px-7 py-3.5 font-semibold text-primary-foreground shadow-[var(--gold-glow)] transition-all duration-300 hover:shadow-[var(--gold-glow-lg)] hover:scale-[1.02]"
              >
                Acessar minha conta
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/planos"
                className="inline-flex items-center gap-2 rounded-2xl border border-foreground/12 bg-foreground/5 px-7 py-3.5 font-semibold text-foreground/85 transition-all duration-300 hover:border-primary/35 hover:bg-primary/10"
              >
                Ver planos
              </Link>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
          <div className="grid grid-cols-3 gap-4 animate-fade-in opacity-0 [animation-delay:150ms]">
            {[
              { value: "6", label: "Ferramentas" },
              { value: "∞", label: "Usos no Club" },
              { value: "24/7", label: "Disponível" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-4 text-center">
                <div className="text-2xl font-black text-primary">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="mb-8 animate-fade-in opacity-0 [animation-delay:200ms]">
            <h2 className="text-2xl font-black">Ferramentas disponíveis</h2>
            <p className="mt-1 text-sm text-muted-foreground">Clique para abrir qualquer ferramenta</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  to={`/ferramenta/${tool.slug}`}
                  className="group flex flex-col rounded-[24px] border border-foreground/10 bg-foreground/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.06] hover:shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.15)] animate-fade-in opacity-0"
                  style={{ animationDelay: `${250 + i * 80}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon size={20} />
                    </div>
                    <ArrowRight size={16} className="mt-1 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{tool.name}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                    {tool.description}
                  </p>
                  <div className="mt-auto pt-5">
                    <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors">
                      Abrir ferramenta
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
          <div className="overflow-hidden rounded-[28px] border border-primary/20 bg-gradient-to-br from-primary/12 via-foreground/[0.03] to-transparent p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-black tracking-tight lg:text-3xl">
                  Comece a usar agora
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                  Crie sua conta gratuitamente e tenha acesso às ferramentas da Network.
                </p>
              </div>
              <Link
                to="/login"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-gold-300 to-gold-500 px-7 py-3.5 font-semibold text-primary-foreground shadow-[var(--gold-glow)] transition-all duration-300 hover:shadow-[var(--gold-glow-lg)] hover:scale-[1.02]"
              >
                Criar conta grátis
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
