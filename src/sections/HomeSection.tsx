import TypingEffect from '@/components/TypingEffect';

export default function HomeSection({ isActive }: { isActive: boolean }) {
  return (
    <section className={`home section ${isActive ? 'active' : ''}`} id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              ¡Hola! Mi nombre es <span className="name">Daniel Stiven Diaz</span>
            </h3>
            <h3 className="my-profession">
              Soy <TypingEffect />
            </h3>
            <p>
              Ingeniero de Software Full Stack con experiencia en React, Node.js y WordPress. Especializado en desarrollo end-to-end de productos digitales, automatización de procesos con IA y despliegues en producción (DevOps). Combino ingeniería, producto y visión de negocio para crear soluciones escalables y rentables.
            </p>
           <a 
              href="/Daniel_Stiven_Diaz_CV_ES.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              Ver CV
            </a>
          </div>
          <div className="home-img padd-15">
            <img src="/images/hero.PNG" alt="Daniel Stiven Diaz" />
          </div>
        </div>
      </div>
    </section>
  );
}