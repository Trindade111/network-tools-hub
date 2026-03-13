import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Crown, User, Clock, ArrowRight, Settings } from "lucide-react";

const recentHistory = [
  { tool: "Downloader", action: "Download de vídeo", time: "Hoje, 14:32" },
  { tool: "Gerador de Títulos", action: "10 títulos gerados", time: "Hoje, 13:10" },
  { tool: "IA de Cortes", action: "3 cortes encontrados", time: "Ontem, 18:45" },
  { tool: "Transcrição", action: "Vídeo transcrito", time: "Ontem, 16:20" },
];

const Membros = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-5%,hsl(var(--primary)/0.05),transparent_60%)]" />
      </div>
      <Header />
      <main className="relative z-10 mx-auto max-w-4xl px-6 py-8 lg:px-10 lg:py-10">
        <div className="animate-fade-in">
          <h1 className="text-2xl font-semibold tracking-tight">Minha conta</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Gerencie sua conta e acompanhe seu uso.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 animate-fade-in opacity-0 [animation-delay:80ms]">
          <div className="rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] to-surface p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.07] text-primary">
                <Crown size={16} />
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Plano</div>
                <div className="text-sm font-semibold">Free</div>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-border bg-background/60 p-3">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-muted-foreground">Usos restantes</span>
                <span className="font-semibold text-primary">3 / 5</span>
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-foreground/[0.06]">
                <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-gold-300 to-gold-500" />
              </div>
            </div>
            <Link
              to="/planos"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-gold-300 to-gold-500 px-3.5 py-1.5 text-xs font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[var(--gold-glow)]"
            >
              Fazer upgrade
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/[0.06] text-muted-foreground">
                <User size={16} />
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Conta</div>
                <div className="text-sm font-semibold">usuario@email.com</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-background/60 px-3 py-2.5 text-[13px]">
              <span className="text-muted-foreground">Membro desde</span>
              <span className="font-medium text-foreground/70">Março 2026</span>
            </div>
            <button className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-hover px-3.5 py-1.5 text-xs font-medium text-foreground/70 transition-all duration-200 hover:text-foreground">
              <Settings size={12} />
              Editar perfil
            </button>
          </div>
        </div>

        <div className="mt-8 animate-fade-in opacity-0 [animation-delay:160ms]">
          <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Histórico de uso</h2>
          <div className="rounded-xl border border-border bg-surface">
            <div className="divide-y divide-border">
              {recentHistory.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 transition-colors duration-150 hover:bg-surface-hover">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/[0.07] text-primary">
                    <Clock size={13} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-medium">{item.tool}</div>
                    <div className="text-[11px] text-muted-foreground">{item.action}</div>
                  </div>
                  <div className="text-[11px] text-muted-foreground whitespace-nowrap">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Membros;
