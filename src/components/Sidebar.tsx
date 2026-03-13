"use client";

import Link from 'next/link';
import { useState } from 'react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false); 
  };

  return (
    // Agregamos 'flex flex-col h-screen' para controlar la distribución vertical
    <div className={`aside ${isOpen ? 'open' : ''} flex flex-col h-screen fixed left-0 top-0 z-[10] shadow-lg`}>
      
      {/* 1. Logo (Parte Superior) */}
      <div className="logo py-8 text-center">
        <Link href="#" className="text-2xl font-bold tracking-widest">
          <span className="text-[var(--skin-color)]">D</span>ANIEL
        </Link>
      </div>
      
      <div 
        className={`nav-toggler ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
      </div>
      
      {/* 2. Navegación (Parte Central) 
          'flex-grow' hace que ocupe todo el espacio disponible, 
          'flex items-center' centra el menú verticalmente */}
      <nav className="flex-grow flex items-center justify-center">
        <ul className="nav w-full">
          {['home', 'portfolio', 'about', 'contact'].map((sec) => (
            <li key={sec} className="mb-4">
              <a 
                href={`#${sec}`} 
                className={`block py-2 px-8 transition-all duration-300 ${activeSection === sec ? 'active text-[var(--skin-color)]' : 'text-gray-400 hover:pl-10'}`} 
                onClick={(e) => { e.preventDefault(); handleNavClick(sec); }}
              >
                <i className={`fa ${
                  sec === 'home' ? 'fa-home' : 
                  sec === 'portfolio' ? 'fa-briefcase' : 
                  sec === 'about' ? 'fa-user' : 'fa-comments'
                } mr-3 w-5 text-center`}></i>
                <span className="capitalize">{sec === 'home' ? 'Inicio' : sec === 'portfolio' ? 'Portafolio' : sec === 'about' ? 'Sobre Mí' : 'Contacto'}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 3. Redes Sociales (Parte Inferior)
          El 'pb-10' asegura que no se pegue al borde de abajo */}
      <div className="networks pb-10 flex justify-center gap-[25px]">
        <a 
          href="https://github.com/Daniels35" 
          target="_blank" 
          rel="noreferrer"
          className="social-icon transition-transform hover:-translate-y-1"
        >
          <i className="fab fa-github text-2xl hover:text-[var(--skin-color)]"></i>
        </a>
        <a 
          href="https://linkedin.com/in/danielsdiaz35" 
          target="_blank" 
          rel="noreferrer"
          className="social-icon transition-transform hover:-translate-y-1"
        >
          <i className="fab fa-linkedin text-2xl hover:text-[var(--skin-color)]"></i>
        </a>
      </div>

    </div>
  );
}