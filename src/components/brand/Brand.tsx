import Image from "next/image";
import Link from "next/link";
import { site, whatsappUrl } from "@/config/site";

export function Brand() {
  return <Link className="brand" href="/" aria-label="Daniel Diaz, inicio"><Image className="brand-eye" src="/brand/horus-gold.png" width={360} height={227} alt="" /><Image className="brand-wordmark" src="/brand/daniel-diaz-gold.png" width={640} height={238} alt="Daniel Diaz" priority /></Link>;
}

export function Header({ construction = false }: { construction?: boolean }) {
  return <header className="site-header"><div className="shell header-inner"><Brand /><nav aria-label="Navegación principal">{!construction && <><a href="#soluciones">Soluciones</a><a href="#proyectos">Proyectos</a></>}<a className="button button-small" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Hablemos <span aria-hidden="true">↗</span></a></nav></div></header>;
}

export function Footer({ showLegacy = true }: { showLegacy?: boolean }) {
  return <footer className="site-footer shell"><div><Brand /><p>{site.role} · {site.location}</p></div><div className="footer-links"><a href={`mailto:${site.email}`}>Email ↗</a><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>{showLegacy && <a href="/legacy">Portafolio anterior</a>}</div><small>© {new Date().getFullYear()} Daniel Diaz. Ingeniería con propósito.</small></footer>;
}
