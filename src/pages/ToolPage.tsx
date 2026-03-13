import { useParams, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { getToolBySlug } from "@/lib/tools";
import { ArrowLeft, Loader2 } from "lucide-react";

const ToolPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = getToolBySlug(slug || "");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  if (!tool) return <Navigate to="/dashboard" replace />;

  const Icon = tool.icon;

  const handleAction = () => {
    if (!inputValue.trim()) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.08),transparent_34%)]" />
      </div>
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-10 lg:px-10">
        {/* Back nav */}
        <Link
          to="/dashboard"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-foreground animate-fade-in"
        >
          <ArrowLeft size={15} />
          Voltar ao dashboard
        </Link>

        {/* Tool header */}
        <div className="flex items-center gap-4 animate-fade-in opacity-0 [animation-delay:80ms]">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
            <Icon size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-black">{tool.name}</h1>
            <p className="text-sm text-muted-foreground">{tool.description}</p>
          </div>
        </div>

        {/* Input area */}
        <div className="mt-8 rounded-[24px] border border-foreground/10 bg-foreground/[0.035] p-6 animate-fade-in opacity-0 [animation-delay:160ms]">
          <label className="mb-2 block text-sm font-medium text-muted-foreground">
            {tool.inputLabel}
          </label>
          {tool.inputType === "textarea" ? (
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={tool.inputPlaceholder}
              rows={4}
              className="w-full resize-none rounded-2xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20"
            />
          ) : (
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={tool.inputPlaceholder}
              className="w-full rounded-2xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20"
            />
          )}
          <button
            onClick={handleAction}
            disabled={loading || !inputValue.trim()}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 font-semibold text-primary-foreground shadow-[var(--gold-glow)] transition-all duration-300 hover:shadow-[var(--gold-glow-lg)] hover:scale-[1.01] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-[var(--gold-glow)]"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Processando...
              </>
            ) : (
              tool.actionLabel
            )}
          </button>
        </div>

        {/* Result area */}
        <div className="mt-6 rounded-[24px] border border-foreground/10 bg-foreground/[0.025] p-6 animate-fade-in opacity-0 [animation-delay:240ms]">
          <div className="text-sm font-medium text-muted-foreground">{tool.resultLabel}</div>
          <div className="mt-4 flex min-h-[140px] items-center justify-center rounded-2xl border border-dashed border-foreground/10 text-sm text-muted-foreground">
            {loading ? (
              <div className="flex items-center gap-2 text-primary">
                <Loader2 size={16} className="animate-spin" />
                Processando...
              </div>
            ) : (
              <span className="text-foreground/30">Os resultados aparecerão aqui</span>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ToolPage;
