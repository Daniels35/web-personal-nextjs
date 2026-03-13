import React, { useEffect } from 'react';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function Modal({ onClose, children, maxWidth = "max-w-4xl" }: ModalProps) {
  // Bloquear el scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className={`relative w-full ${maxWidth} max-h-[90vh] flex flex-col bg-white dark:bg-[#151515] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300`}
        style={{ 
          border: '1px solid var(--skin-color)',
          boxShadow: '0 0 30px rgba(0,0,0,0.5), 0 0 10px var(--skin-color)' 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar Flotante */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 z-50 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10 text-gray-800 dark:text-white hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg"
        >
          <i className="fa fa-times text-xl"></i>
        </button>

        {/* Contenido con Scroll Interno */}
        <div className="overflow-y-auto custom-scrollbar p-1">
          {children}
        </div>
      </div>
    </div>
  );
}