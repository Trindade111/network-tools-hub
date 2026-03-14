import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { categories, getToolsByCategory } from "@/lib/tools";
import { ArrowRight, Crown, Sparkles, Check, Users, Zap, Shield, Star } from "lucide-react";

const NETWORKING_CLUB_URL = "https://networkingclub.pro";
const NETWORKING_CORTES_URL = "https://networkingcortes.com";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.1),transparent_60%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      <Header />
      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28 lg:pb-24">
          <div className="max-w-3xl animate-fade-in">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/15 bg-primary/[0.06] px-3.5 py-1.5 text-xs font-medium text-primary/90 shadow-[0_0_16px_-4px_hsl(var(--primary)/0.1)]">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Disponível 24/7
            </div>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
              Networking{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(250,204,21,0.15)]">
                Cortes
              </span>
            </h1>
            <p className="mt-4 text-lg font-medium tracking-tight text-muted-foreground/80">
              Ferramentas profissionais para clipadores
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#ferramentas"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_4px_24px_-4px_rgba(250,204,21,0.25)] transition-all duration-300 hover:shadow-[0_8px_32px_-4px_rgba(250,204,21,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Explorar ferramentas
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/planos"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-surface-hover hover:text-foreground hover:border-foreground/[0.12]"
              >
                Ver planos
              </Link>
            </div>
          </div>
        </section>

        {/* Tools by category */}
        <section id="ferramentas" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="mb-10 animate-fade-in">
            <p className="text-sm text-muted-foreground">
              Ferramentas criadas para quem trabalha com cortes e conteúdo curto.
            </p>
          </div>

          {categories.map((cat, catIdx) => {
            const catTools = getToolsByCategory(cat.key);
            return (
              <div key={cat.key} className={catIdx > 0 ? "mt-16" : ""}>
                <div className="mb-6 flex items-center gap-3 animate-fade-in opacity-0" style={{ animationDelay: `${80 + catIdx * 80}ms` }}>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                  <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{cat.label}</h2>
                  <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {catTools.map((tool, i) => {
                    const Icon = tool.icon;
                    return (
                      <Link
                        key={tool.slug}
                        to={`/ferramenta/${tool.slug}`}
                        state={{ from: "/" }}
                        className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:bg-surface-hover hover:border-primary/20 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.12)] hover:-translate-y-0.5 animate-fade-in opacity-0"
                        style={{ animationDelay: `${140 + catIdx * 80 + i * 60}ms` }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.1] to-primary/[0.03] text-primary shadow-[0_0_12px_-4px_hsl(var(--primary)/0.15)]">
                            <Icon size={18} strokeWidth={1.8} />
                          </div>
                          <ArrowRight size={14} className="mt-1 text-foreground/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                        </div>
                        <h3 className="mt-5 text-[15px] font-semibold tracking-tight">{tool.name}</h3>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
                          {tool.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <span className="text-xs font-medium text-primary/80 group-hover:text-primary transition-colors duration-200">
                            Abrir ferramenta →
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        {/* Community Section */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] via-surface to-surface p-10 lg:p-14">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,hsl(var(--primary)/0.06),transparent_70%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-lg">
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1 text-xs font-medium text-primary">
                  <Users size={12} />
                  Comunidade
                </div>
                <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                  Entre para a comunidade Networking Cortes
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Conecte-se com outros clipadores, acompanhe novidades do ecossistema e tenha acesso a oportunidades exclusivas.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { icon: Users, text: "Comunidade ativa" },
                    { icon: Zap, text: "Novidades em primeira mão" },
                    { icon: Star, text: "Conteúdo exclusivo" },
                    { icon: Shield, text: "Suporte direto" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-[13px] text-muted-foreground">
                      <item.icon size={13} className="text-primary/70 shrink-0" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={NETWORKING_CORTES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-primary/25 bg-primary/[0.08] px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/[0.14] hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.15)] shrink-0"
              >
                Entrar na comunidade gratuita
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Desbloqueie tudo */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Desbloqueie tudo com o Networking Club</h2>
            <p className="mt-2 text-sm text-muted-foreground">Compare os planos e escolha o melhor para você.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 max-w-3xl mx-auto">
            {/* Free */}
            <div className="flex flex-col rounded-2xl border border-border bg-surface p-7">
              <h3 className="text-lg font-semibold">Plano Free</h3>
              <p className="mt-1 text-xs text-muted-foreground">Para começar a explorar</p>
              <ul className="mt-6 space-y-3 flex-1">
                {["Uso limitado", "Limite diário", "Acesso básico"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
                    <Check size={14} strokeWidth={2.5} className="text-foreground/30" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            {/* Club */}
            <div className="relative flex flex-col rounded-2xl border-2 border-primary/30 bg-gradient-to-b from-primary/[0.07] via-surface to-surface p-7 shadow-[0_0_48px_-12px_hsl(var(--primary)/0.15)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-3.5 py-1 text-[11px] font-bold text-primary-foreground shadow-[0_4px_16px_-4px_rgba(250,204,21,0.3)]">
                <Sparkles size={11} />
                Recomendado
              </div>
              <h3 className="text-lg font-semibold">Networking Club</h3>
              <p className="mt-1 text-xs text-muted-foreground">Para quem produz conteúdo todos os dias</p>
              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "Uso ilimitado",
                  "Acesso completo às ferramentas",
                  "Prioridade em novos recursos",
                  "Experiência premium",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
                    <Check size={14} strokeWidth={2.5} className="text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={NETWORKING_CLUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_4px_24px_-4px_rgba(250,204,21,0.25)] transition-all duration-300 hover:shadow-[0_8px_32px_-4px_rgba(250,204,21,0.35)]"
              >
                Entrar no Networking Club
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Ecossistema Networking */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="rounded-2xl border border-border bg-surface p-10 lg:p-14">
            <div className="text-center mb-8">
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.07] px-3.5 py-1 text-xs font-medium text-primary">
                <Sparkles size={12} />
                Ecossistema Networking
              </div>
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                Parte do ecossistema Networking
              </h2>
              <p className="mt-3 mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground">
                As ferramentas fazem parte do ecossistema Networking. Escolha o caminho que faz mais sentido para você.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <a
                href={NETWORKING_CORTES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-hover px-6 py-3 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-foreground/[0.08] hover:text-foreground"
              >
                <Users size={15} />
                Comunidade gratuita
              </a>
              <a
                href={NETWORKING_CLUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_4px_24px_-4px_rgba(250,204,21,0.2)] transition-all duration-300 hover:shadow-[0_8px_32px_-4px_rgba(250,204,21,0.3)]"
              >
                Ver planos premium
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="rounded-2xl border border-border bg-surface p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  Pronto para começar?
                </h2>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Use as ferramentas gratuitamente ou faça login para acesso ilimitado.
                </p>
              </div>
              <Link
                to="/login"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_4px_24px_-4px_rgba(250,204,21,0.2)] transition-all duration-300 hover:shadow-[0_8px_32px_-4px_rgba(250,204,21,0.3)]"
              >
                Começar agora
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
