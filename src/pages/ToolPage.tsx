import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { getToolBySlug } from "@/lib/tools";

const ToolPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = getToolBySlug(slug || "");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  if (!tool) return <Navigate to="/dashboard" replace />;

  const handleAction = () => {
    if (!inputValue.trim()) return;
    setLoading(true);
    // Simula loading — backend será conectado depois
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.08),transparent_34%)]" />
      </div>
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-10 lg:px-10">
        <h1 className="text-3xl font-black">{tool.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{tool.description}</p>

        <div className="mt-8 rounded-[28px] border border-foreground/10 bg-foreground/[0.035] p-6">
          <label className="mb-2 block text-sm font-medium text-muted-foreground">
            {tool.inputLabel}
          </label>
          {tool.inputType === "textarea" ? (
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={tool.inputPlaceholder}
              rows={4}
              className="w-full resize-none rounded-2xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none"
            />
          ) : (
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={tool.inputPlaceholder}
              className="w-full rounded-2xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none"
            />
          )}
          <button
            onClick={handleAction}
            disabled={loading || !inputValue.trim()}
            className="mt-4 w-full rounded-2xl bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 font-semibold text-primary-foreground shadow-[var(--gold-glow)] transition hover:scale-[1.01] disabled:opacity-50 disabled:hover:scale-100"
          >
            {loading ? "Processando..." : tool.actionLabel}
          </button>
        </div>

        {/* Result area */}
        <div className="mt-6 rounded-[28px] border border-foreground/10 bg-foreground/[0.025] p-6">
          <div className="text-sm font-medium text-muted-foreground">{tool.resultLabel}</div>
          <div className="mt-4 flex min-h-[120px] items-center justify-center rounded-2xl border border-dashed border-foreground/10 text-sm text-muted-foreground">
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                Processando...
              </div>
            ) : (
              "Os resultados aparecerão aqui"
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ToolPage;
