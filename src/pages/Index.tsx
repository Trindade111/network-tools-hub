import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { categories, tools, getToolsByCategory } from "@/lib/tools";
import { ArrowRight, Crown, Sparkles, Check, Users, Zap, Shield, Star, Search, Rocket, Lightbulb, Send, MessageSquare, Wand2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const NETWORKING_CLUB_URL = "https://networkingclub.pro";
const NETWORKING_CORTES_URL = "https://networkingcortes.com";

const upcomingTools = [
  { icon: MessageSquare, name: "Gerador de roteiros", description: "Ferramenta de inteligência artificial que gera roteiros automaticamente com base em um tema ou ideia." },
  { icon: Wand2, name: "Pré-edição automática de vídeo", description: "Ferramenta que pré-edita vídeos automaticamente, identificando os melhores momentos, removendo pausas de fala e cortando partes desnecessárias ou duplicadas do vídeo para agilizar o processo de edição." },
];

const Index = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [suggestionSent, setSuggestionSent] = useState(false);

  const filteredCategories = categories.map((cat) => ({
    ...cat,
    tools: getToolsByCategory(cat.key).filter(
      (t) =>
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.tools.length > 0);

  const handleSuggestion = () => {
    if (!suggestion.trim()) return;
    setSuggestionSent(true);
    setSuggestion("");
    setTimeout(() => setSuggestionSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.1),transparent_60%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      <Header />
      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-10 lg:pt-28 lg:pb-24">
          <div className="max-w-3xl animate-fade-in">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/15 bg-primary/[0.06] px-3.5 py-1.5 text-xs font-medium text-primary/90 shadow-[0_0_16px_-4px_hsl(var(--primary)/0.1)]">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Disponível 24/7
            </div>
            <h1 className="text-[clamp(2rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
              Networking{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(250,204,21,0.15)]">
                Cortes
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg font-medium tracking-tight text-muted-foreground/80">
              Ferramentas profissionais para clipadores
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="#ferramentas"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_4px_24px_-4px_rgba(250,204,21,0.25)] transition-all duration-300 hover:shadow-[0_8px_32px_-4px_rgba(250,204,21,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Explorar ferramentas
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/planos"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-surface-hover hover:text-foreground hover:border-foreground/[0.12]"
              >
                Ver planos
              </Link>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section id="ferramentas" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
          <div className="mb-8 animate-fade-in">
            <p className="text-sm text-muted-foreground mb-6">
              Ferramentas criadas para quem trabalha com cortes e conteúdo curto.
            </p>
            {/* Search */}
            <div className="relative max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar ferramenta..."
                className="w-full rounded-xl border border-border bg-surface pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 transition-all duration-200 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:bg-surface-hover"
              />
            </div>
          </div>

          {filteredCategories.length === 0 && (
            <div className="py-16 text-center animate-fade-in">
              <p className="text-sm text-muted-foreground">Nenhuma ferramenta encontrada.</p>
            </div>
          )}

          {filteredCategories.map((cat, catIdx) => (
            <div key={cat.key} className={catIdx > 0 ? "mt-14" : ""}>
              <div className="mb-6 flex items-center gap-3 animate-fade-in opacity-0" style={{ animationDelay: `${80 + catIdx * 80}ms` }}>
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">{cat.label}</h2>
                <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.tools.map((tool, i) => {
                  const Icon = tool.icon;
                  return (
                    <Tooltip key={tool.slug}>
                      <TooltipTrigger asChild>
                        <Link
                          to={`/ferramenta/${tool.slug}`}
                          state={{ from: "/" }}
                          className="group relative flex flex-col rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all duration-300 hover:bg-surface-hover hover:border-primary/20 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.12)] hover:-translate-y-0.5 animate-fade-in opacity-0"
                          style={{ animationDelay: `${140 + catIdx * 80 + i * 60}ms` }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.1] to-primary/[0.03] text-primary shadow-[0_0_12px_-4px_hsl(var(--primary)/0.15)]">
                              <Icon size={18} strokeWidth={1.8} />
                            </div>
                            <ArrowRight size={14} className="mt-1 text-foreground/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                          </div>
                          <h3 className="mt-4 sm:mt-5 text-[15px] font-semibold tracking-tight">{tool.name}</h3>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
                            {tool.description}
                          </p>
                          <div className="mt-4 pt-3 border-t border-border/50">
                            <span className="text-xs font-medium text-primary/80 group-hover:text-primary transition-colors duration-200">
                              Abrir ferramenta →
                            </span>
                          </div>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-[240px] text-xs">
                        {tool.description}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* Community */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] via-surface to-surface p-8 sm:p-10 lg:p-14">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,hsl(var(--primary)/0.06),transparent_70%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-lg">
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1 text-xs font-medium text-primary">
                  <Users size={12} />
                  Comunidade
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight lg:text-3xl">
                  Entre para a comunidade Networking Cortes
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Conecte-se com outros clipadores, acompanhe novidades do ecossistema e tenha acesso a oportunidades exclusivas.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { icon: Users, text: "Comunidade ativa" },
                    { icon: Zap, text: "Novidades em primeira mão" },
                    { icon: Star, text: "Conteúdo exclusivo" },
                    { icon: Shield, text: "Suporte direto" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-[13px] text-muted-foreground">
                      <item.icon size={13} className="text-primary/70 shrink-0" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={NETWORKING_CORTES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-primary/25 bg-primary/[0.08] px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/[0.14] hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.15)] shrink-0 self-start lg:self-center"
              >
                Entrar na comunidade gratuita
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Unlock */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight lg:text-3xl">Desbloqueie tudo com o Networking Club</h2>
            <p className="mt-2 text-sm text-muted-foreground">Compare os planos e escolha o melhor para você.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
            <div className="flex flex-col rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <h3 className="text-lg font-semibold">Plano Free</h3>
              <p className="mt-1 text-xs text-muted-foreground">Para começar a explorar</p>
              <ul className="mt-6 space-y-3 flex-1">
                {["Uso limitado", "Limite diário", "Acesso básico"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
                    <Check size={14} strokeWidth={2.5} className="text-foreground/30" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex flex-col rounded-2xl border-2 border-primary/30 bg-gradient-to-b from-primary/[0.07] via-surface to-surface p-6 sm:p-7 shadow-[0_0_48px_-12px_hsl(var(--primary)/0.15)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-3.5 py-1 text-[11px] font-bold text-primary-foreground shadow-[0_4px_16px_-4px_rgba(250,204,21,0.3)]">
                <Sparkles size={11} />
                Recomendado
              </div>
              <h3 className="text-lg font-semibold">Networking Club</h3>
              <p className="mt-1 text-xs text-muted-foreground">Para quem produz conteúdo todos os dias</p>
              <ul className="mt-6 space-y-3 flex-1">
                {["Uso ilimitado", "Acesso completo às ferramentas", "Prioridade em novos recursos", "Experiência premium"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
                    <Check size={14} strokeWidth={2.5} className="text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={NETWORKING_CLUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_4px_24px_-4px_rgba(250,204,21,0.25)] transition-all duration-300 hover:shadow-[0_8px_32px_-4px_rgba(250,204,21,0.35)]"
              >
                Entrar no Networking Club
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Upcoming Tools */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10 lg:p-14">
            <div className="text-center mb-8">
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.07] px-3.5 py-1 text-xs font-medium text-primary">
                <Rocket size={12} />
                Em breve
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Novas ferramentas chegando</h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                A plataforma está em constante evolução com novas ferramentas para clipadores.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 max-w-2xl mx-auto">
              {upcomingTools.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-2.5 rounded-xl border border-border/50 bg-background/50 p-5 transition-all duration-200 hover:border-primary/15 hover:bg-surface"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/10 bg-primary/[0.05] text-primary/60">
                      <item.icon size={16} />
                    </div>
                    <h3 className="text-[14px] font-semibold text-foreground">{item.name}</h3>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suggest a Tool */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
            <div className="max-w-lg mx-auto text-center">
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.07] px-3.5 py-1 text-xs font-medium text-primary">
                <Lightbulb size={12} />
                Sua ideia importa
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Sugira uma ferramenta</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Se você tem uma ideia de ferramenta que ajudaria criadores de cortes e editores de conteúdo curto, envie sua sugestão.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  placeholder="Descreva sua ideia de ferramenta..."
                  className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 transition-all duration-200 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                />
                <button
                  onClick={handleSuggestion}
                  disabled={!suggestion.trim()}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--gold-glow)] disabled:opacity-40 active:scale-[0.98] shrink-0"
                >
                  <Send size={14} />
                  Enviar sugestão
                </button>
              </div>
              {suggestionSent && (
                <p className="mt-3 text-xs font-medium text-primary animate-fade-in">
                  Sugestão enviada com sucesso! Obrigado pela contribuição.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10 lg:p-14">
            <div className="text-center mb-8">
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.07] px-3.5 py-1 text-xs font-medium text-primary">
                <Sparkles size={12} />
                Ecossistema Networking
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight lg:text-3xl">
                Parte do ecossistema Networking
              </h2>
              <p className="mt-3 mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground">
                As ferramentas fazem parte do ecossistema Networking. Escolha o caminho que faz mais sentido para você.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <a
                href={NETWORKING_CORTES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-hover px-6 py-3 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-foreground/[0.08] hover:text-foreground"
              >
                <Users size={15} />
                Comunidade gratuita
              </a>
              <a
                href={NETWORKING_CLUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_4px_24px_-4px_rgba(250,204,21,0.2)] transition-all duration-300 hover:shadow-[0_8px_32px_-4px_rgba(250,204,21,0.3)]"
              >
                Ver planos premium
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  Pronto para começar?
                </h2>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Use as ferramentas gratuitamente ou faça login para acesso ilimitado.
                </p>
              </div>
              <Link
                to="/login"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_4px_24px_-4px_rgba(250,204,21,0.2)] transition-all duration-300 hover:shadow-[0_8px_32px_-4px_rgba(250,204,21,0.3)]"
              >
                Começar agora
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground/50 leading-relaxed max-w-md mx-auto">
            Estamos constantemente adicionando novas ferramentas para ajudar criadores de cortes e editores de conteúdo curto. Esta plataforma continuará evoluindo com novas funcionalidades.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Index;
