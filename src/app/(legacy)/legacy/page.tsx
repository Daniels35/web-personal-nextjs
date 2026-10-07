import type { Metadata } from "next";
import LegacyPortfolio from "@/features/legacy/LegacyPortfolio";

export const metadata: Metadata = {
  title: "Daniel Diaz | Portafolio",
  description: "Portafolio personal de Daniel Diaz: proyectos, experiencia y contacto.",
};

export default function LegacyPage() {
  return <LegacyPortfolio />;
}
