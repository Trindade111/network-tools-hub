import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const plans = [
  {
    name: "Free",
    price: "R$ 0",
    period: "/mês",
    features: ["Acesso limitado às ferramentas", "5 usos por dia", "Sem suporte prioritário"],
    cta: "Começar grátis",
    highlighted: false,
  },
  {
    name: "Club",
    price: "R$ 29",
    period: "/mês",
    features: ["Acesso ilimitado", "Todas as ferramentas", "Suporte prioritário", "Sem limites diários"],
    cta: "Assinar Club",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "R$ 59",
    period: "/mês",
    features: ["Tudo do Club", "API de integração", "Uso comercial", "Suporte dedicado"],
    cta: "Assinar Pro",
    highlighted: false,
  },
];

const Planos = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.10),transparent_34%)]" />
      </div>
      <Header />
      <main className="relative z-10 mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <div className="text-center">
          <h1 className="text-4xl font-black">Planos</h1>
          <p className="mt-2 text-muted-foreground">Escolha o plano ideal para você</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-[28px] border p-6 transition ${
                plan.highlighted
                  ? "border-primary/30 bg-primary/[0.06]"
                  : "border-foreground/10 bg-foreground/[0.035]"
              }`}
            >
              <div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-black">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-8 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-gold-300 to-gold-500 text-primary-foreground shadow-[var(--gold-glow)] hover:scale-[1.01]"
                    : "border border-foreground/10 bg-foreground/5 text-foreground/80 hover:border-primary/30 hover:bg-primary/10"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Planos;
