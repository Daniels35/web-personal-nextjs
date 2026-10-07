import type { Metadata } from "next";
import LandingPage from "@/features/v4/LandingPage";

export const metadata: Metadata = {
  title: "Daniel Diaz | Software e IA para hacer crecer tu negocio",
  description: "Páginas web, software a medida, agentes IA y Odoo. Explora una demo y conversa con Daniel Diaz sobre tu empresa.",
  robots: { index: false, follow: true },
};

export default function V4Page() { return <LandingPage />; }
