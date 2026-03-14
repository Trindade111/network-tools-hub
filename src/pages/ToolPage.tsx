import { useParams, Navigate, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { getToolBySlug } from "@/lib/tools";
import { ArrowLeft, Loader2 } from "lucide-react";
import { EngagementCalculator, RPMCalculator } from "@/components/Calculators";

const ToolPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const tool = getToolBySlug(slug || "");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const from = (location.state as { from?: string })?.from;
  const backTo = from === "/dashboard" ? "/dashboard" : "/";
  const backLabel = from === "/dashboard" ? "Dashboard" : "Início";

  if (!tool) return <Navigate to="/" replace />;

  const Icon = tool.icon;
  const isCalculator = tool.inputType === "custom";

  const handleAction = () => {
    if (!inputValue.trim()) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-5%,hsl(var(--primary)/0.05),transparent_60%)]" />
      </div>
      <Header />
      <main className="relative z-10 mx-auto max-w-2xl px-6 py-8 lg:px-10 lg:py-10">
        <Link
          to={backTo}
          className="mb-6 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors duration-150 hover:text-foreground animate-fade-in"
        >
          <ArrowLeft size={14} />
          {backLabel}
        </Link>

        <div className="flex items-center gap-3.5 animate-fade-in opacity-0 [animation-delay:60ms]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.07] text-primary">
            <Icon size={18} />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">{tool.name}</h1>
            <p className="text-[13px] text-muted-foreground">{tool.description}</p>
          </div>
        </div>

        <div className="mt-8">
          {slug === "calculadora-engajamento" ? (
            <EngagementCalculator />
          ) : slug === "calculadora-rpm" ? (
            <RPMCalculator />
          ) : (
            <>
              <div className="rounded-xl border border-border bg-surface p-5 animate-fade-in opacity-0 [animation-delay:120ms]">
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {tool.inputLabel}
                </label>
                {tool.inputType === "textarea" ? (
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={tool.inputPlaceholder}
                    rows={4}
                    className="w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/25 transition-all duration-150 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                  />
                ) : (
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={tool.inputPlaceholder}
                    className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/25 transition-all duration-150 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                  />
                )}
                <button
                  onClick={handleAction}
                  disabled={loading || !inputValue.trim()}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[var(--gold-glow)] disabled:opacity-40 disabled:hover:shadow-none"
                >
                  {loading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Processando...
                    </>
                  ) : (
                    tool.actionLabel
                  )}
                </button>
              </div>

              <div className="mt-4 rounded-xl border border-border bg-surface p-5 animate-fade-in opacity-0 [animation-delay:180ms]">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{tool.resultLabel}</div>
                <div className="mt-4 flex min-h-[160px] items-center justify-center rounded-lg border border-dashed border-border text-sm text-foreground/20">
                  {loading ? (
                    <div className="flex items-center gap-2 text-primary">
                      <Loader2 size={14} className="animate-spin" />
                      <span className="text-sm">Processando...</span>
                    </div>
                  ) : (
                    "Os resultados aparecerão aqui"
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default ToolPage;
