import React from 'react';

export default function AboutSection({ isActive }: { isActive: boolean }) {
  return (
    <section className={`about section ${isActive ? 'active' : ''}`} id="about">
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
                  <div className="info-item padd-15"><p>Email : <span>danielstiven35@gmail.com</span></p></div>
                  <div className="info-item padd-15"><p>Teléfono : <span>+57 324 7878784</span></p></div>
                  <div className="info-item padd-15"><p>Ciudad : <span>Medellín, Colombia</span></p></div>
                  <div className="info-item padd-15"><p>Freelance : <span>Disponible</span></p></div>
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

            {/* TIMELINES: Educación y Experiencia */}
            <div className="row">
              
              {/* Columna de Experiencia Laboral */}
              <div className="experience padd-15">
                <h3 className="title">Experiencia Laboral</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      
                      {/* Liquitty */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i> Actualidad</h3>
                        <h4 className="timeline-title">Senior Full Stack Software Engineer</h4>
                        <p className="timeline-text" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Liquitty</p>
                        <p className="timeline-text">
                          Lidero evoluciones técnicas en "Wiser", plataforma de cobranza usada por bancos como Bancolombia y Davivienda. Desarrollo arquitectura Fintech con React y Node.js para volúmenes masivos. Gestión de despliegues seguros con Docker y GitLab CI/CD. Refactorización de sistemas legacy hacia arquitecturas modernas.
                        </p>
                      </div>

                      {/* Tag Marketing Digital */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i> Experiencia Previa</h3>
                        <h4 className="timeline-title">Full Stack Developer & WordPress Specialist</h4>
                        <p className="timeline-text" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Tag Marketing Digital</p>
                        <p className="timeline-text">
                          Lideré la creación y mantenimiento de ecosistemas web robustos. Optimización de performance, SEO técnico y desarrollo de soluciones a la medida enfocadas en marketing y conversión.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Columna de Educación */}
              <div className="education padd-15">
                <h3 className="title">Educación & Certificaciones</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
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