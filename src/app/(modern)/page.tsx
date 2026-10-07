import type { Metadata } from "next";
import { Footer, Header } from "@/components/brand/Brand";
import { whatsappUrl } from "@/config/site";

export const metadata: Metadata = { title: "Daniel Diaz | Una nueva visión, en construcción" };

export default function ConstructionPage() {
  return <><Header construction /><main id="main" className="shell construction"><div className="eyebrow"><span className="status-dot" /> NUEVA EXPERIENCIA EN CONSTRUCCIÓN</div><div className="construction-grid"><div><h1>Una nueva visión.<br /><em>Más posibilidades.</em></h1><p className="lead">Estoy construyendo un nuevo espacio para conectar tecnología, inteligencia artificial y el crecimiento de tu negocio.</p><p className="muted">La web está evolucionando. Las conversaciones y los proyectos siguen en marcha.</p><div className="actions"><a className="button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Hablemos de tu proyecto ↗</a></div></div></div><div className="construction-bottom"><span>SOFTWARE A LA MEDIDA</span><span>INTELIGENCIA ARTIFICIAL</span><span>AUTOMATIZACIÓN</span><span>MEDELLÍN → EL MUNDO</span></div></main><Footer showLegacy={false} /></>;
}
