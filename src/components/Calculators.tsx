import { useState } from "react";
import { Header } from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const EngagementCalculator = () => {
  const [views, setViews] = useState("");
  const [likes, setLikes] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const v = parseFloat(views);
    const l = parseFloat(likes);
    if (!v || v <= 0 || !l || l < 0) return;
    const engagement = (l / v) * 100;
    setResult(engagement.toFixed(2));
  };

  return (
    <div className="rounded-xl border border-border bg-surface p-5 animate-fade-in opacity-0 [animation-delay:120ms]">
      <div className="space-y-3">
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Visualizações
          </label>
          <input
            type="number"
            min="0"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Ex: 10000"
            className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/25 transition-all duration-150 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Curtidas
          </label>
          <input
            type="number"
            min="0"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
            placeholder="Ex: 1000"
            className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/25 transition-all duration-150 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
          />
        </div>
        <button
          onClick={calculate}
          disabled={!views || !likes}
          className="w-full rounded-lg bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[var(--gold-glow)] disabled:opacity-40"
        >
          Calcular engajamento
        </button>
      </div>
      {result !== null && (
        <div className="mt-4 rounded-lg border border-primary/15 bg-primary/[0.05] p-4 text-center animate-fade-in">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Taxa de engajamento</div>
          <div className="mt-1 text-2xl font-bold text-primary">{result}%</div>
        </div>
      )}
    </div>
  );
};

const RPMCalculator = () => {
  const [views, setViews] = useState("");
  const [rpm, setRpm] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const v = parseFloat(views);
    const r = parseFloat(rpm);
    if (!v || v <= 0 || !r || r < 0) return;
    const revenue = (v / 1000) * r;
    setResult(revenue.toFixed(2));
  };

  return (
    <div className="rounded-xl border border-border bg-surface p-5 animate-fade-in opacity-0 [animation-delay:120ms]">
      <div className="space-y-3">
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Visualizações
          </label>
          <input
            type="number"
            min="0"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Ex: 10000"
            className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/25 transition-all duration-150 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            RPM (R$)
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={rpm}
            onChange={(e) => setRpm(e.target.value)}
            placeholder="Ex: 1.50"
            className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/25 transition-all duration-150 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
          />
        </div>
        <button
          onClick={calculate}
          disabled={!views || !rpm}
          className="w-full rounded-lg bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[var(--gold-glow)] disabled:opacity-40"
        >
          Calcular receita
        </button>
      </div>
      {result !== null && (
        <div className="mt-4 rounded-lg border border-primary/15 bg-primary/[0.05] p-4 text-center animate-fade-in">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Receita estimada</div>
          <div className="mt-1 text-2xl font-bold text-primary">R$ {result}</div>
        </div>
      )}
    </div>
  );
};

export { EngagementCalculator, RPMCalculator };
