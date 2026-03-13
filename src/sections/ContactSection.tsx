"use client";

import { useState } from 'react';

export default function ContactSection({ isActive }: { isActive: boolean }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Datos listos para enviar al backend:", formData);
    
    alert("¡Mensaje enviado con éxito! (Simulación temporal)");
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className={`contact section ${isActive ? 'active' : ''}`} id="contact">
      <div className="container">
        
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contacto</h2>
          </div>
        </div>

        <h3 className="contact-title padd-15">¿Tienes alguna pregunta?</h3>
        <h4 className="contact-sub-title padd-15">ESTOY A TU SERVICIO</h4>

        <div className="row">
          {/* Cajas de Información */}
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-phone"></i></div>
            <h4>Llámame</h4>
            <p>+57 324 7878784</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-map-marker"></i></div>
            <h4>Ciudad</h4>
            <p>Medellín, Colombia</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-envelope"></i></div>
            <h4>Email</h4>
            <p>danielstiven35@gmail.com</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-globe"></i></div>
            <h4>Sitio Web</h4>
            <p>daniels35.lat</p>
          </div>
        </div>

        <h3 className="contact-title padd-15">Envíame un correo</h3>
        <h4 className="contact-sub-title padd-15">RESPONDERÉ LO MÁS PRONTO POSIBLE</h4>

        <div className="row">
          <div className="contact-form padd-15">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Nombre" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Asunto" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea 
                      className="form-control" 
                      placeholder="Mensaje" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn">Enviar Mensaje</button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}