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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.08),transparent_34%)]" />
      </div>
      <Header />
      <main className="relative z-10 mx-auto max-w-5xl px-6 py-10 lg:px-10">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-black">Minha conta</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Gerencie sua conta e acompanhe seu uso.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 animate-fade-in opacity-0 [animation-delay:100ms]">
          {/* Plan card */}
          <div className="rounded-[24px] border border-primary/20 bg-gradient-to-br from-primary/[0.08] to-transparent p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Crown size={20} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Plano atual</div>
                <div className="text-lg font-bold">Free</div>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-foreground/10 bg-background/40 p-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Usos restantes hoje</span>
                <span className="font-bold text-primary">3 / 5</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
                <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-gold-300 to-gold-500" />
              </div>
            </div>
            <Link
              to="/planos"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
            >
              Fazer upgrade
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Account card */}
          <div className="rounded-[24px] border border-foreground/10 bg-foreground/[0.035] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/10 text-foreground/60">
                <User size={20} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Conta</div>
                <div className="text-lg font-bold">usuario@email.com</div>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between rounded-xl border border-foreground/[0.06] bg-foreground/[0.02] p-3">
                <span>Membro desde</span>
                <span className="font-medium text-foreground/70">Março 2026</span>
              </div>
            </div>
            <button className="mt-5 inline-flex items-center gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-5 py-2.5 text-sm font-semibold text-foreground/80 transition hover:border-primary/30 hover:bg-primary/10">
              <Settings size={14} />
              Editar perfil
            </button>
          </div>
        </div>

        {/* History */}
        <div className="mt-8 animate-fade-in opacity-0 [animation-delay:200ms]">
          <h2 className="mb-4 text-lg font-bold">Histórico de uso</h2>
          <div className="rounded-[24px] border border-foreground/10 bg-foreground/[0.035] p-5">
            <div className="space-y-3">
              {recentHistory.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-foreground/[0.06] bg-foreground/[0.02] p-3.5 transition hover:border-foreground/15"
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Membros;
