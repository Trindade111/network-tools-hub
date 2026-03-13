import type { LucideIcon } from "lucide-react";
import {
  Download,
  Type,
  Image,
  Scissors,
  FileText,
  Palette,
  Percent,
  DollarSign,
} from "lucide-react";

export interface Tool {
  slug: string;
  name: string;
  description: string;
  inputLabel: string;
  inputPlaceholder: string;
  actionLabel: string;
  resultLabel: string;
  inputType: "text" | "textarea" | "file" | "custom";
  icon: LucideIcon;
  category: "edicao" | "criacao" | "analise";
}

export const tools: Tool[] = [
  // Edição e Cortes
  {
    slug: "downloader",
    name: "Downloader de Vídeos",
    description: "Baixe vídeos de TikTok, Instagram e YouTube rapidamente e sem anúncios.",
    inputLabel: "Link do vídeo",
    inputPlaceholder: "Cole o link aqui...",
    actionLabel: "Baixar",
    resultLabel: "Resultado",
    inputType: "text",
    icon: Download,
    category: "edicao",
  },
  {
    slug: "ia-cortes",
    name: "IA que encontra os melhores cortes",
    description: "Envie um vídeo e a inteligência artificial identifica automaticamente os melhores momentos para criar cortes.",
    inputLabel: "Vídeo",
    inputPlaceholder: "Cole o link ou envie o arquivo...",
    actionLabel: "Analisar",
    resultLabel: "Cortes encontrados",
    inputType: "text",
    icon: Scissors,
    category: "edicao",
  },
  {
    slug: "transcricao",
    name: "IA de Transcrição de Vídeos",
    description: "Envie um vídeo e receba a transcrição completa do conteúdo automaticamente.",
    inputLabel: "Link ou arquivo",
    inputPlaceholder: "Cole o link do vídeo...",
    actionLabel: "Transcrever",
    resultLabel: "Transcrição",
    inputType: "text",
    icon: FileText,
    category: "edicao",
  },
  // Criação de Conteúdo
  {
    slug: "gerador-titulos",
    name: "IA Geradora de Títulos",
    description: "Digite o assunto do vídeo e a inteligência artificial gera títulos virais.",
    inputLabel: "Assunto do vídeo",
    inputPlaceholder: "Descreva o assunto...",
    actionLabel: "Gerar títulos",
    resultLabel: "Títulos gerados",
    inputType: "textarea",
    icon: Type,
    category: "criacao",
  },
  {
    slug: "gerador-imagens",
    name: "IA Geradora de Imagens",
    description: "Crie imagens automaticamente usando inteligência artificial para utilizar em vídeos e conteúdos.",
    inputLabel: "Descrição da imagem",
    inputPlaceholder: "Descreva o que deseja gerar...",
    actionLabel: "Gerar imagem",
    resultLabel: "Imagens geradas",
    inputType: "textarea",
    icon: Image,
    category: "criacao",
  },
  {
    slug: "gerador-capas",
    name: "Gerador de Capas para Vídeos",
    description: "Ferramenta para criar capas chamativas para vídeos e cortes.",
    inputLabel: "Descrição da capa",
    inputPlaceholder: "Descreva a capa que deseja...",
    actionLabel: "Criar capa",
    resultLabel: "Capas geradas",
    inputType: "textarea",
    icon: Palette,
    category: "criacao",
  },
  // Análise de Conteúdo
  {
    slug: "calculadora-engajamento",
    name: "Calculadora de Taxa de Engajamento",
    description: "Descubra rapidamente a taxa de engajamento de um vídeo.",
    inputLabel: "",
    inputPlaceholder: "",
    actionLabel: "Calcular engajamento",
    resultLabel: "Resultado",
    inputType: "custom",
    icon: Percent,
    category: "analise",
  },
  {
    slug: "calculadora-rpm",
    name: "Calculadora de RPM",
    description: "Descubra quanto um vídeo pode gerar de receita com base nas visualizações.",
    inputLabel: "",
    inputPlaceholder: "",
    actionLabel: "Calcular receita",
    resultLabel: "Resultado",
    inputType: "custom",
    icon: DollarSign,
    category: "analise",
  },
];

export const categories = [
  { key: "edicao" as const, label: "Edição e Cortes" },
  { key: "criacao" as const, label: "Criação de Conteúdo" },
  { key: "analise" as const, label: "Análise de Conteúdo" },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: Tool["category"]): Tool[] {
  return tools.filter((t) => t.category === category);
}
