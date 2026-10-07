import type { Metadata } from "next";
import "./legacy.css";

export const metadata: Metadata = {
  title: "Daniel Diaz",
  description: "Página personal de Daniel Diaz, desarrollador de software.",
  icons: {
    icon: [{ url: "/brand/horus-gold.png", type: "image/png" }],
    shortcut: "/brand/horus-gold.png",
    apple: "/brand/horus-gold.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/style-switcher.css" />
        
        {/* Aplicamos el bypass de TypeScript usando spread y 'as React.LinkHTMLAttributes<HTMLLinkElement>' */}
        <link rel="stylesheet" href="/css/skins/color-1.css" className="alternate-style" title="color-1" />
        <link rel="stylesheet" href="/css/skins/color-2.css" className="alternate-style" title="color-2" {...({ disabled: true } as React.LinkHTMLAttributes<HTMLLinkElement>)} />
        <link rel="stylesheet" href="/css/skins/color-3.css" className="alternate-style" title="color-3" {...({ disabled: true } as React.LinkHTMLAttributes<HTMLLinkElement>)} />
        <link rel="stylesheet" href="/css/skins/color-4.css" className="alternate-style" title="color-4" {...({ disabled: true } as React.LinkHTMLAttributes<HTMLLinkElement>)} />
        <link rel="stylesheet" href="/css/skins/color-5.css" className="alternate-style" title="color-5" {...({ disabled: true } as React.LinkHTMLAttributes<HTMLLinkElement>)} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
