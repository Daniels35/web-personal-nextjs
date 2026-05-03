import React from 'react';

export default function AboutSection({ isActive }: { isActive: boolean }) {
  return (
    <section className={`about section ${isActive ? 'active' : ''}`} id="about">
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 991px) {
          .about .about-content .personal-info .info-item p {
            min-height: 95px; 
            display: flex;
            flex-direction: column;
            justify-content: initial;
          }
        }
      `}} />

      <div className="container">
        
        <div className="row">
          <div className="section-title padd-15">
            <h2>Sobre Mí</h2>
          </div>
        </div>

        <div className="row">
          <div className="about-content padd-15">
            
            {/* Texto de introducción */}
            <div className="row">
              <div className="about-text padd-15">
                <h3>Ingeniero de Software Full Stack <span>Orientado a Producto</span></h3>
                <p>
                  Soy un desarrollador apasionado por crear soluciones escalables y rentables. Combino ingeniería, producto y visión de negocio. Me especializo en el desarrollo end-to-end de productos digitales, la automatización de procesos utilizando Inteligencia Artificial (OpenAI, n8n) y despliegues en producción (DevOps con Docker y CI/CD).
                </p>
              </div>
            </div>

            <div className="row">
              {/* Información Personal */}
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <a href="mailto:danielstiven35@gmail.com" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                      <p>
                        <span><i className="fa fa-envelope" style={{ marginRight: '8px' }}></i>Email : </span>
                        <span style={{ wordBreak: 'break-all' }}>danielstiven35@gmail.com</span>
                      </p>
                    </a>
                  </div>
                  <div className="info-item padd-15">
                    <a href="https://wa.me/573135804424?text=Hola%20Daniel,%20vengo%20desde%20tu%20sitio%20web." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                      <p>
                        <span><i className="fa fa-whatsapp" style={{ marginRight: '8px' }}></i>WhatsApp: </span>
                        <span>+57 313 580 44 24</span>
                      </p>
                    </a>
                  </div>
                  <div className="info-item padd-15">
                    <a href="https://www.google.com/maps/place/Medellín,+Antioquia,+Colombia" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                      <p>
                        <span><i className="fa fa-map-marker" style={{ marginRight: '8px' }}></i>Ciudad : </span>
                        <span>Medellín, Colombia</span>
                      </p>
                    </a>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      <span><i className="fa fa-briefcase" style={{ marginRight: '8px' }}></i>Freelance : </span>
                      <span>Disponible</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <a href="#contact" className="btn">Contáctame</a>
                  </div>
                </div>
              </div>

              {/* Habilidades (Skills) */}
              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item padd-15">
                    <h5>React & Next.js</h5>
                    <div className="progress"><div className="progress-in" style={{ width: '90%' }}></div><div className="skill-percent">90%</div></div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Node.js & Express</h5>
                    <div className="progress"><div className="progress-in" style={{ width: '85%' }}></div><div className="skill-percent">85%</div></div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>DevOps (Docker, CI/CD)</h5>
                    <div className="progress"><div className="progress-in" style={{ width: '80%' }}></div><div className="skill-percent">80%</div></div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>WordPress & CMS</h5>
                    <div className="progress"><div className="progress-in" style={{ width: '95%' }}></div><div className="skill-percent">95%</div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
              
              {/* Columna de Experiencia Laboral */}
              <div className="experience padd-15" style={{ flex: '1 1 300px' }}>
                <h3 className="title">Experiencia Laboral</h3>
                <div className="row">
                  <div className="timeline-box padd-15" style={{ width: '100%' }}>
                    <div className="timeline shadow-dark">
                      
                      {/* Liquitty */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i> Actualidad</h3>
                        <h4 className="timeline-title">Senior Full Stack Software Engineer</h4>
                        <p className="timeline-text" style={{ fontWeight: 'bold', marginBottom: '10px' }}>Liquitty</p>
                        <p className="timeline-text" style={{ marginBottom: '15px' }}>
                          Evolución de plataforma líder en gestión de cobranza utilizada por entidades como Bancolombia y Davivienda. Enfocado en asegurar la escalabilidad y seguridad para operaciones bancarias masivas.
                        </p>
                        
                        <p className="timeline-text" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Enfoque Técnico:</p>
                        <ul className="timeline-text" style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <li><strong>Alta Disponibilidad:</strong> Desarrollo full stack (React, Node.js) optimizado para grandes volúmenes de datos.</li>
                          <li><strong>Entornos Críticos:</strong> Operación bajo estrictos estándares de seguridad financiera y conexiones VPN.</li>
                          <li><strong>DevOps y CI/CD:</strong> Gestión de versiones y despliegues mediante GitLab y Docker.</li>
                          <li><strong>Arquitectura:</strong> Refactorización de sistemas legacy hacia arquitecturas modernas y mantenibles.</li>
                          <li><strong>Trabajo 100% Remoto:</strong> Integración de soluciones complejas de frontend y backend en un equipo distribuido.</li>
                        </ul>
                      </div>

                      {/* Tag Marketing Digital */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i> Experiencia Previa</h3>
                        <h4 className="timeline-title">Full Stack Developer & WordPress Specialist</h4>
                        <p className="timeline-text" style={{ fontWeight: 'bold', marginBottom: '10px' }}>Tag Marketing Digital</p>
                        <p className="timeline-text" style={{ marginBottom: '15px' }}>
                          Lideré el ciclo de vida completo de productos web, transformando requerimientos de negocio en soluciones técnicas escalables mediante el uso de CMS WordPress, desarrollo custom (PHP, JS) e integraciones de IA.
                        </p>

                        <p className="timeline-text" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Responsabilidades y Logros Clave:</p>
                        <ul className="timeline-text" style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <li><strong>Desarrollo Full Stack & Custom:</strong> Lideré la creación y mantenimiento de +25 ecosistemas web, incluyendo el desarrollo de plugins a medida para extender WooCommerce y WordPress.</li>
                          <li><strong>Automatización e IA:</strong> Implementé flujos de trabajo con n8n y la API de OpenAI para atención al cliente y agendamiento, incrementando la eficiencia operativa de la agencia en un 30%.</li>
                          <li><strong>Performance (WPO) y SEO:</strong> Ejecuté optimizaciones de caché y assets que redujeron los tiempos de carga hasta en un 40%, mejorando la conversión y el posicionamiento orgánico.</li>
                          <li><strong>Infraestructura y Seguridad:</strong> Gestión de servidores (VPS Linux, Hosting), migraciones críticas sin pérdida de datos, y protocolos activos de detección y limpieza de malware (Cloudflare).</li>
                          <li><strong>Consultoría Técnica:</strong> Puente técnico directo con el cliente desde la fase de preventa, diseñando hojas de ruta de desarrollo y estrategias de UX/UI.</li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Columna de Educación */}
              <div className="education padd-15" style={{ flex: '1 1 300px' }}>
                <h3 className="title">Educación & Certificaciones</h3>
                <div className="row">
                  <div className="timeline-box padd-15" style={{ width: '100%' }}>
                    <div className="timeline shadow-dark">
                      
                      {/* Formación Continua */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i> Ene 2023 - Presente</h3>
                        <h4 className="timeline-title">Especialización Técnica y de Producto</h4>
                        <p className="timeline-text">
                          Integración de IA (OpenAI API), Automatización (n8n), Performance Web. Certificación en Diseño de Producto (LinkedIn Learning) enfocado en UX/UI, usabilidad y jerarquía visual.
                        </p>
                      </div>

                      {/* Comfama */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i> Ene 2026</h3>
                        <h4 className="timeline-title">Curso Intensivo en Metodologías Ágiles</h4>
                        <p className="timeline-text">
                          Formación en marcos de trabajo ágiles (Scrum), enfocada en la gestión eficiente de proyectos, ceremonias y entregas de valor continuo.
                        </p>
                      </div>

                      {/* Henry */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i> Ene 2023 - Dic 2023</h3>
                        <h4 className="timeline-title">Full Stack Web Developer</h4>
                        <p className="timeline-text" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Henry Bootcamp</p>
                        <p className="timeline-text">
                          Programa intensivo (+700 horas) enfocado en desarrollo web moderno con React, Node.js y bases de datos.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}