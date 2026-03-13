import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { tools } from "@/lib/tools";
import { ArrowRight, Crown, Clock, Zap, TrendingUp } from "lucide-react";

const recentActivity = [
  { tool: "Downloader", action: "Download realizado", time: "2 min atrás" },
  { tool: "Gerador de Títulos", action: "10 títulos gerados", time: "15 min atrás" },
  { tool: "Transcrição", action: "Vídeo transcrito", time: "1h atrás" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.08),transparent_34%)]" />
      </div>
      <Header />
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {/* Header */}
        <div className="mb-10 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black">Dashboard</h1>
              <p className="mt-1 text-sm text-muted-foreground">Bem-vindo de volta</p>
            </div>
            <Link
              to="/planos"
              className="hidden items-center gap-2 rounded-2xl border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20 sm:inline-flex"
            >
              <Crown size={14} />
              Fazer upgrade
            </Link>
          </div>
        </div>

        {/* Status cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3 animate-fade-in opacity-0 [animation-delay:100ms]">
          <div className="rounded-[20px] border border-foreground/10 bg-foreground/[0.035] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Crown size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Plano atual</div>
                <div className="font-bold">Free</div>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] border border-foreground/10 bg-foreground/[0.035] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Zap size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Usos hoje</div>
                <div className="font-bold">3 / 5</div>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] border border-foreground/10 bg-foreground/[0.035] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <TrendingUp size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Total de usos</div>
                <div className="font-bold">47</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick access + Recent */}
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Tools */}
          <div className="animate-fade-in opacity-0 [animation-delay:200ms]">
            <h2 className="mb-4 text-lg font-bold">Ferramentas</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {tools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.slug}
                    to={`/ferramenta/${tool.slug}`}
                    className="group flex items-start gap-4 rounded-[20px] border border-foreground/10 bg-foreground/[0.035] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary/[0.05] hover:shadow-[0_6px_24px_-8px_hsl(var(--primary)/0.12)]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition group-hover:bg-primary/20">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-bold">{tool.name}</h3>
                        <ArrowRight size={14} className="shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                        {tool.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Sidebar: Recent activity */}
          <div className="animate-fade-in opacity-0 [animation-delay:300ms]">
            <h2 className="mb-4 text-lg font-bold">Atividade recente</h2>
            <div className="rounded-[20px] border border-foreground/10 bg-foreground/[0.035] p-5">
              <div className="space-y-4">
                {recentActivity.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-foreground/[0.06] bg-foreground/[0.02] p-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Clock size={15} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">{item.tool}</div>
                      <div className="text-xs text-muted-foreground">{item.action}</div>
                    </div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-foreground/10">
                <Link to="/membros" className="text-sm font-medium text-primary hover:underline">
                  Ver histórico completo
                </Link>
              </div>
            </div>

            {/* Upgrade CTA */}
            <div className="mt-4 rounded-[20px] border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-5">
              <h3 className="font-bold">Desbloqueie tudo</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Acesso ilimitado a todas as ferramentas.
              </p>
              <Link
                to="/planos"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
              >
                Ver planos
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
