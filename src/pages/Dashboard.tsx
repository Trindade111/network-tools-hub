import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { categories, getToolsByCategory } from "@/lib/tools";
import { ArrowRight, Crown, Clock, Zap, TrendingUp } from "lucide-react";

const recentActivity = [
  { tool: "Gerador de Títulos", action: "Título gerado", time: "5 min" },
  { tool: "Engajamento", action: "Engajamento calculado", time: "12 min" },
  { tool: "RPM", action: "RPM calculado", time: "20 min" },
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
            <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
            <p className="mt-0.5 text-sm text-muted-foreground">Bem-vindo de volta</p>
          </div>
          <Link
            to="/planos"
            className="hidden items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/[0.07] px-3 py-1.5 text-xs font-medium text-primary transition-all duration-200 hover:bg-primary/[0.12] sm:inline-flex"
          >
            <Crown size={12} />
            Upgrade
          </Link>
        </div>

        <div className="mb-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 animate-fade-in opacity-0 [animation-delay:80ms]">
          {[
            { icon: Crown, label: "Plano atual", value: "Free" },
            { icon: Zap, label: "Usos hoje", value: "3 / 5" },
            { icon: TrendingUp, label: "Total de usos", value: "47" },
          ].map((metric) => (
            <div key={metric.label} className="flex items-center gap-3 bg-surface p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.07] text-primary">
                <metric.icon size={15} />
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{metric.label}</div>
                <div className="text-sm font-semibold">{metric.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="animate-fade-in opacity-0 [animation-delay:160ms]">
            {categories.map((cat, catIdx) => {
              const catTools = getToolsByCategory(cat.key);
              return (
                <div key={cat.key} className={catIdx > 0 ? "mt-6" : ""}>
                  <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">{cat.label}</h2>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {catTools.map((tool) => {
                      const Icon = tool.icon;
                      return (
                        <Link
                          key={tool.slug}
                          to={`/ferramenta/${tool.slug}`}
                          className="group flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:bg-surface-hover hover:border-foreground/[0.12]"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.07] text-primary transition-colors duration-200 group-hover:bg-primary/[0.12]">
                            <Icon size={16} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium">{tool.name}</h3>
                            <p className="text-xs text-muted-foreground truncate">{tool.description}</p>
                          </div>
                          <ArrowRight size={13} className="shrink-0 text-foreground/15 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-4 animate-fade-in opacity-0 [animation-delay:240ms]">
            <div>
              <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Histórico recente</h2>
              <div className="rounded-xl border border-border bg-surface">
                <div className="divide-y divide-border">
                  {recentActivity.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/[0.07] text-primary">
                        <Clock size={13} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-medium">{item.tool}</div>
                        <div className="text-[11px] text-muted-foreground">{item.action}</div>
                      </div>
                      <div className="text-[11px] text-muted-foreground">{item.time}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border px-4 py-2.5">
                  <Link to="/membros" className="text-xs font-medium text-primary hover:underline">
                    Ver tudo →
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-transparent p-4">
              <h3 className="text-sm font-semibold">Acesso ilimitado</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Desbloqueie todas as ferramentas sem limites diários.
              </p>
              <Link
                to="/planos"
                className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-gold-300 to-gold-500 px-3.5 py-1.5 text-xs font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[var(--gold-glow)]"
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
