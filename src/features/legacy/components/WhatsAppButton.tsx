"use client";

import React from 'react';

export default function WhatsAppButton() {
  return (
    <>
      {/* ESTILOS A PRUEBA DE FALLOS */}
      <style dangerouslySetInnerHTML={{__html: `
        .whatsapp-float-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .whatsapp-float-btn {
          width: 60px;
          height: 60px;
          background-color: var(--skin-color);
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
        }

        .whatsapp-float-btn i {
          font-size: 35px;
        }

        .whatsapp-float-btn:hover {
          transform: scale(1.1);
          box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.4);
          color: white;
        }

        .whatsapp-tooltip {
          position: absolute;
          bottom: 75px;
          right: -5px; /* Ajuste para alinear con el botón */
          background-color: #222222;
          color: white;
          padding: 6px 12px;
          border-radius: 5px;
          font-size: 14px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
        }

        /* El triangulito del tooltip apuntando hacia abajo */
        .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          bottom: -10px;
          right: 25px;
          border-width: 5px;
          border-style: solid;
          border-color: #222222 transparent transparent transparent;
        }

        /* Animación para mostrar el tooltip al pasar el mouse */
        .whatsapp-float-container:hover .whatsapp-tooltip {
          opacity: 1;
        }
      `}} />

      <div className="whatsapp-float-container">
        
        {/* Tooltip flotante */}
        <span className="whatsapp-tooltip">
          ¡Hablemos!
        </span>

        {/* Botón Principal */}
        <a
          href="https://wa.me/573135804424?text=Hola%20Daniel,%20vengo%20desde%20tu%20sitio%20web."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float-btn"
          aria-label="Escríbeme por WhatsApp"
        >
          <i className="fa fa-whatsapp"></i>
        </a>
        
      </div>
    </>
  );
}