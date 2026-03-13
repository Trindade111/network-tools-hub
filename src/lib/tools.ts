export interface Tool {
  slug: string;
  name: string;
  description: string;
  inputLabel: string;
  inputPlaceholder: string;
  actionLabel: string;
  resultLabel: string;
  inputType: "text" | "textarea" | "file";
}

export const tools: Tool[] = [
  {
    slug: "downloader",
    name: "Downloader",
    description: "Baixe vídeos de qualquer plataforma",
    inputLabel: "Link do vídeo",
    inputPlaceholder: "Cole o link aqui...",
    actionLabel: "Baixar",
    resultLabel: "Resultado",
    inputType: "text",
  },
  {
    slug: "gerador-titulos",
    name: "Gerador de Títulos",
    description: "Crie títulos prontos para seus vídeos",
    inputLabel: "Assunto do vídeo",
    inputPlaceholder: "Descreva o assunto...",
    actionLabel: "Gerar títulos",
    resultLabel: "Títulos gerados",
    inputType: "textarea",
  },
  {
    slug: "gerador-imagens",
    name: "Gerador de Imagens",
    description: "Gere imagens para seus conteúdos",
    inputLabel: "Descrição da imagem",
    inputPlaceholder: "Descreva o que deseja gerar...",
    actionLabel: "Gerar imagem",
    resultLabel: "Imagens geradas",
    inputType: "textarea",
  },
  {
    slug: "ia-cortes",
    name: "IA de Cortes",
    description: "Encontre os melhores momentos do vídeo",
    inputLabel: "Vídeo",
    inputPlaceholder: "Cole o link ou envie o arquivo...",
    actionLabel: "Analisar",
    resultLabel: "Cortes encontrados",
    inputType: "text",
  },
  {
    slug: "transcricao",
    name: "Transcrição",
    description: "Transforme áudio em texto automaticamente",
    inputLabel: "Link ou arquivo",
    inputPlaceholder: "Cole o link do vídeo...",
    actionLabel: "Transcrever",
    resultLabel: "Transcrição",
    inputType: "text",
  },
  {
    slug: "gerador-capas",
    name: "Gerador de Capas",
    description: "Crie capas e thumbnails para seus vídeos",
    inputLabel: "Descrição da capa",
    inputPlaceholder: "Descreva a capa que deseja...",
    actionLabel: "Criar capa",
    resultLabel: "Capas geradas",
    inputType: "textarea",
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
