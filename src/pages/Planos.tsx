import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "R$ 0",
    period: "/mês",
    description: "Para explorar as ferramentas",
    features: [
      "Acesso a todas as ferramentas",
      "5 usos por dia",
      "Resultados padrão",
    ],
    cta: "Começar grátis",
    highlighted: false,
  },
  {
    name: "Club",
    price: "R$ 29",
    period: "/mês",
    description: "Para quem produz conteúdo todos os dias",
    features: [
      "Uso ilimitado",
      "Todas as ferramentas",
      "Sem limites diários",
      "Suporte prioritário",
      "Acesso antecipado a novidades",
    ],
    cta: "Assinar o Club",
    highlighted: true,
  },
];

const Planos = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,hsl(var(--primary)/0.07),transparent_60%)]" />
      </div>
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl font-semibold tracking-tight">Planos</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Comece grátis ou desbloqueie tudo com o Club.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 animate-fade-in opacity-0 [animation-delay:120ms]">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-6 transition-all duration-200 ${
                plan.highlighted
                  ? "border-primary/25 bg-gradient-to-b from-primary/[0.06] via-surface to-surface shadow-[0_0_32px_-8px_hsl(var(--primary)/0.1)]"
                  : "border-border bg-surface"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-3 py-0.5 text-[11px] font-semibold text-primary-foreground">
                  <Sparkles size={10} />
                  Recomendado
                </div>
              )}
              <div>
                <h3 className="text-base font-semibold">{plan.name}</h3>
                <p className="mt-0.5 text-[13px] text-muted-foreground">{plan.description}</p>
                <div className="mt-5 flex items-baseline gap-0.5">
                  <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
                      <div className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted ? "text-primary" : "text-foreground/40"
                      }`}>
                        <Check size={13} strokeWidth={2.5} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-8 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-gold-300 to-gold-500 text-primary-foreground hover:shadow-[var(--gold-glow)]"
                    : "border border-border bg-surface-hover text-foreground/80 hover:bg-foreground/[0.08]"
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
