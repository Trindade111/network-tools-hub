import { Header } from "@/components/Header";
import { Link } from "react-router-dom";

const Membros = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.08),transparent_34%)]" />
      </div>
      <Header />
      <main className="relative z-10 mx-auto max-w-4xl px-6 py-16 lg:px-10">
        <h1 className="text-3xl font-black">Área de Membros</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Gerencie sua conta e acompanhe seu uso.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-foreground/10 bg-foreground/[0.035] p-6">
            <h3 className="text-lg font-bold">Meu plano</h3>
            <div className="mt-3 flex items-center gap-3">
              <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Free
              </span>
              <span className="text-sm text-muted-foreground">5 usos restantes hoje</span>
            </div>
            <Link
              to="/planos"
              className="mt-5 inline-flex rounded-2xl border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20"
            >
              Fazer upgrade
            </Link>
          </div>

          <div className="rounded-[28px] border border-foreground/10 bg-foreground/[0.035] p-6">
            <h3 className="text-lg font-bold">Minha conta</h3>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <div>E-mail: usuario@email.com</div>
              <div>Membro desde: março 2026</div>
            </div>
            <button className="mt-5 inline-flex rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:border-primary/30">
              Editar perfil
            </button>
          </div>

          <div className="md:col-span-2 rounded-[28px] border border-foreground/10 bg-foreground/[0.035] p-6">
            <h3 className="text-lg font-bold">Histórico de uso</h3>
            <div className="mt-4 flex min-h-[100px] items-center justify-center rounded-2xl border border-dashed border-foreground/10 text-sm text-muted-foreground">
              Nenhum registro ainda
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Membros;
