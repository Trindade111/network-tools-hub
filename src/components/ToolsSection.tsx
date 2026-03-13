const tools = [
  { title: "Downloader de Vídeos", subtitle: "TikTok, Instagram e YouTube", desc: "Download limpo, rápido e sem distrações, com visual premium e foco total na ação.", badge: "Sem anúncios", action: "Colar link" },
  { title: "IA de Títulos", subtitle: "Gere títulos chamativos", desc: "Você coloca o tema do vídeo e recebe opções prontas com pegada viral e linguagem de corte.", badge: "IA", action: "Gerar títulos" },
  { title: "Gerador de Imagens", subtitle: "Imagens para vídeos e cortes", desc: "Crie artes visuais para usar em vídeos, posts, anúncios e conteúdos internos da comunidade.", badge: "Treinada", action: "Descrever imagem" },
  { title: "IA de Cortes", subtitle: "Encontra os melhores momentos", desc: "Estética inspirada em ferramentas premium de clipping, mas com identidade Network e foco em agilidade.", badge: "Destaque", action: "Enviar vídeo" },
  { title: "Transcrição de Vídeos", subtitle: "Texto pronto em segundos", desc: "Área limpa, clara e objetiva para transcrever falas e reaproveitar o conteúdo em outras peças.", badge: "Automação", action: "Transcrever" },
  { title: "Gerador de Capas", subtitle: "Capas chamativas para vídeos e cortes", desc: "Interface visual forte para gerar thumbnails e capas seguindo o padrão premium da Network.", badge: "Creator", action: "Criar capa" },
];

export const ToolsSection = () => (
  <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80">Estética das ferramentas</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight">Mesmo ecossistema. Nova estrutura.</h2>
      </div>
      <div className="hidden rounded-2xl border border-foreground/10 bg-foreground/[0.04] px-4 py-2 text-sm text-muted-foreground md:block">
        Layout pensado para front + backend
      </div>
    </div>
    <div className="grid gap-5 lg:grid-cols-3">
      {tools.map((tool) => (
        <div
          key={tool.title}
          className="group rounded-[28px] border border-foreground/10 bg-foreground/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.06]"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{tool.subtitle}</div>
              <h3 className="mt-2 text-xl font-bold">{tool.title}</h3>
            </div>
            <div className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-primary">{tool.badge}</div>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{tool.desc}</p>
          <div className="mt-5 rounded-2xl border border-foreground/10 bg-background/30 p-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Visual da área</div>
            <div className="mt-3 flex items-center justify-between rounded-xl border border-foreground/10 bg-foreground/[0.03] px-3 py-2 text-sm text-muted-foreground">
              <span>{tool.action}</span>
              <span className="rounded-lg bg-primary/15 px-2 py-1 text-xs text-primary">CTA</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
