import type { Metadata } from "next";
import "./modern.css";

export const metadata: Metadata = {
  title: "Daniel Diaz | Tech & AI Solutions",
  description: "Software, páginas web y automatización con IA para tu empresa. Daniel Diaz, Medellín, Colombia.",
  icons: {
    icon: [{ url: "/brand/horus-gold.png", type: "image/png" }],
    shortcut: "/brand/horus-gold.png",
    apple: "/brand/horus-gold.png",
  },
};

export default function ModernLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body><a className="skip-link" href="#main">Saltar al contenido</a>{children}</body></html>;
}
