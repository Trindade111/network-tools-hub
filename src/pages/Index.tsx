import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { tools } from "@/lib/tools";

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
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 lg:px-10">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Network <span className="text-primary">Ferramentas</span>
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              Todas as ferramentas da Network em um só lugar.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/login"
                className="rounded-2xl bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 font-semibold text-primary-foreground shadow-[var(--gold-glow)] transition hover:scale-[1.02]"
              >
                Acessar minha conta
              </Link>
              <Link
                to="/planos"
                className="rounded-2xl border border-foreground/12 bg-foreground/5 px-6 py-3 font-semibold text-foreground/85 transition hover:border-primary/35 hover:bg-primary/10"
              >
                Ver planos
              </Link>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <div
                key={tool.slug}
                className="group flex flex-col justify-between rounded-[28px] border border-foreground/10 bg-foreground/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.06]"
              >
                <div>
                  <h3 className="text-xl font-bold">{tool.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
                <Link
                  to={`/ferramenta/${tool.slug}`}
                  className="mt-5 inline-flex items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/20"
                >
                  Abrir ferramenta
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
          <div className="overflow-hidden rounded-[34px] border border-primary/20 bg-gradient-to-br from-primary/12 via-foreground/[0.03] to-transparent p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-black tracking-tight">
                  Comece a usar agora
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Crie sua conta e tenha acesso às ferramentas da Network.
                </p>
              </div>
              <Link
                to="/login"
                className="rounded-2xl bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 font-semibold text-primary-foreground shadow-[var(--gold-glow)] transition hover:scale-[1.02]"
              >
                Criar conta grátis
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
