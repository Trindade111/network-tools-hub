import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { categories, getToolsByCategory } from "@/lib/tools";
import { ArrowRight, Crown, Clock, Zap, TrendingUp, Shield } from "lucide-react";

const recentActivity = [
  { action: "Título gerado", time: "há 5 minutos", color: "text-primary" },
  { action: "Engajamento calculado", time: "há 12 minutos", color: "text-primary" },
  { action: "RPM calculado", time: "há 20 minutos", color: "text-primary" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-5%,hsl(var(--primary)/0.06),transparent_60%)]" />
      </div>
      <Header />
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
        <div className="mb-8 flex items-end justify-between animate-fade-in">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">Bem-vindo de volta</p>
          </div>
          <Link
            to="/planos"
            className="hidden items-center gap-1.5 rounded-xl border border-primary/20 bg-primary/[0.07] px-3.5 py-2 text-xs font-semibold text-primary transition-all duration-200 hover:bg-primary/[0.12] sm:inline-flex"
          >
            <Crown size={13} />
            Upgrade
          </Link>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3 animate-fade-in opacity-0 [animation-delay:80ms]">
          {[
            { icon: Shield, label: "Plano atual", value: "Free" },
            { icon: Zap, label: "Usos hoje", value: "3 / 5" },
            { icon: TrendingUp, label: "Total de usos", value: "47" },
          ].map((metric) => (
            <div key={metric.label} className="flex items-center gap-3.5 rounded-2xl border border-border bg-surface p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.1] to-primary/[0.03] text-primary">
                <metric.icon size={16} />
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{metric.label}</div>
                <div className="text-base font-bold">{metric.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Tools */}
          <div className="animate-fade-in opacity-0 [animation-delay:160ms]">
            {categories.map((cat, catIdx) => {
              const catTools = getToolsByCategory(cat.key);
              return (
                <div key={cat.key} className={catIdx > 0 ? "mt-8" : ""}>
                  <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{cat.label}</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {catTools.map((tool) => {
                      const Icon = tool.icon;
                      return (
                        <Link
                          key={tool.slug}
                          to={`/ferramenta/${tool.slug}`}
                          state={{ from: "/dashboard" }}
                          className="group flex items-center gap-3.5 rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:bg-surface-hover hover:border-primary/20 hover:shadow-[0_4px_24px_-8px_hsl(var(--primary)/0.08)]"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.1] to-primary/[0.03] text-primary transition-colors duration-200 group-hover:from-primary/[0.15]">
                            <Icon size={17} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold">{tool.name}</h3>
                            <p className="text-xs text-muted-foreground truncate">{tool.description}</p>
                          </div>
                          <ArrowRight size={14} className="shrink-0 text-foreground/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-4 animate-fade-in opacity-0 [animation-delay:240ms]">
            {/* Recent Activity */}
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Histórico recente</h2>
              <div className="rounded-2xl border border-border bg-surface overflow-hidden">
                <div className="divide-y divide-border">
                  {recentActivity.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-3.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
                        <Clock size={14} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-medium">{item.action}</div>
                      </div>
                      <div className="text-[11px] text-muted-foreground whitespace-nowrap">{item.time}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border px-4 py-3">
                  <Link to="/membros" className="text-xs font-medium text-primary hover:underline">
                    Ver tudo →
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Access */}
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Acesso rápido</h2>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Engajamento", to: "/ferramenta/calculadora-engajamento" },
                  { label: "RPM", to: "/ferramenta/calculadora-rpm" },
                  { label: "Títulos", to: "/ferramenta/gerador-titulos" },
                  { label: "Downloader", to: "/ferramenta/downloader" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="rounded-xl border border-border bg-surface px-3 py-2.5 text-center text-xs font-medium text-muted-foreground transition-all duration-200 hover:bg-surface-hover hover:text-foreground hover:border-primary/15"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-transparent p-5">
              <h3 className="text-sm font-bold">Acesso ilimitado</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                Desbloqueie todas as ferramentas sem limites diários.
              </p>
              <Link
                to="/planos"
                className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-2 text-xs font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[var(--gold-glow)]"
              >
                Ver planos
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
