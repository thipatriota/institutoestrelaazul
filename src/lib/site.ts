export const siteConfig = {
  name: "Instituto Estrela Azul",
  description:
    "Centro de referência em cerimônias de ayahuasca e medicinas da floresta, promovendo cura, autoconhecimento e conexão espiritual.",
  keywords: [
    "ayahuasca",
    "medicinas da floresta",
    "cerimônias sagradas",
    "rapé",
    "espiritualidade"
  ] as const,
  title: "Instituto Estrela Azul - Medicinas da Floresta"
};

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "/", label: "Início" },
  { href: "/sobre/", label: "Sobre" },
  { href: "/faq/", label: "FAQ" },
  { href: "/depoimentos/", label: "Depoimentos" },
  { href: "/agenda/", label: "Agenda" },
  { href: "/contato/", label: "Contato" }
];

