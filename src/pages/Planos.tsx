import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "R$ 0",
    period: "/mês",
    description: "Para começar a explorar",
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
    description: "Para criadores que produzem diariamente",
    features: [
      "Acesso ilimitado",
      "Todas as ferramentas",
      "Sem limites diários",
      "Suporte prioritário",
      "Novidades em primeira mão",
    ],
    cta: "Assinar Club",
    highlighted: true,
  },
];

const Planos = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.10),transparent_34%)]" />
      </div>
      <Header />
      <main className="relative z-10 mx-auto max-w-4xl px-6 py-16 lg:px-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-black">Escolha seu plano</h1>
          <p className="mt-3 text-muted-foreground">
            Comece grátis ou desbloqueie tudo com o Club.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 animate-fade-in opacity-0 [animation-delay:150ms]">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[28px] border p-7 transition-all duration-300 hover:-translate-y-0.5 ${
                plan.highlighted
                  ? "border-primary/30 bg-gradient-to-b from-primary/[0.08] to-foreground/[0.02] shadow-[0_0_40px_-12px_hsl(var(--primary)/0.15)]"
                  : "border-foreground/10 bg-foreground/[0.035]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-1 text-xs font-bold text-primary-foreground">
                  <Star size={12} />
                  Recomendado
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted ? "bg-primary/20 text-primary" : "bg-foreground/10 text-foreground/50"
                      }`}>
                        <Check size={12} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-8 w-full rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-gold-300 to-gold-500 text-primary-foreground shadow-[var(--gold-glow)] hover:shadow-[var(--gold-glow-lg)] hover:scale-[1.01]"
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
