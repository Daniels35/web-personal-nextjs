import TypingEffect from '@/components/TypingEffect';
import NextSectionButton from '@/components/NextSectionButton';


export default function HomeSection({ isActive }: { isActive: boolean }) {
  return (
    <section className={`home section ${isActive ? 'active' : ''}`} id="home">
      
      <style dangerouslySetInnerHTML={{__html: `
        .home .row {
          min-height: calc(100vh - 130px); 
          align-items: center;
        }

        .my-profession {
          min-height: 40px; 
        }

        .home-img {
          text-align: center;
        }
        
        .home-img img {
          max-width: 100%;
          height: auto;
          max-height: 450px; 
          object-fit: cover;
          border-radius: 10px;
          margin: 0 auto;
        }

        @media (max-width: 991px) {
          .home .row {
            min-height: auto;
            padding-top: 30px;
          }
          .my-profession {
            min-height: 80px; 
          }
          
          .home-img {
            max-width: 250px !important; 
            margin: 40px auto 30px auto !important; 
          }
          
          .home-img::before {
            left: -15px !important;
            top: -15px !important;
            height: 50px !important;
            width: 50px !important;
            border-width: 8px !important;
          }
          .home-img::after {
            right: -15px !important;
            bottom: -15px !important;
            height: 50px !important;
            width: 50px !important;
            border-width: 8px !important;
          }
        }
      `}} />

      <div className="container">
        <div className="row">
          
          <div className="home-info padd-15">
            <h3 className="hello">
              ¡Hola! Mi nombre es <span className="name">Daniel Diaz</span>
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
              style={{ marginTop: '15px' }}
            >
              Ver CV
            </a>
          </div>

          <div className="home-img padd-15">
            <img src="/images/hero.PNG" alt="Daniel Stiven Diaz" />
          </div>
        </div>
          <NextSectionButton target="portfolio" text="Ver mi trabajo" />
      </div>
    </section>
  );
}