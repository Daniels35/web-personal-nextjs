"use client";

import Link from 'next/link';
import { useState } from 'react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Obtenemos el año actual para que se actualice solo
  const currentYear = new Date().getFullYear();

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false); 
  };

  return (
    <div className={`aside ${isOpen ? 'open' : ''} flex flex-col h-screen fixed left-0 top-0 z-[10] shadow-lg`}>
      
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
      

      <nav className="flex-grow flex items-center justify-center">
        <ul className="nav w-full">
          {/* Navegación Principal */}
          {['home', 'portfolio', 'about', 'contact'].map((sec) => (
            <li key={sec} className="mb-4">
              <a 
                href={`#${sec}`} 
                className={`block py-2 px-8 transition-all duration-300 ${activeSection === sec ? 'active text-[var(--skin-color)]' : 'text-gray-400 hover:pl-10 hover:text-[var(--skin-color)]'}`} 
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

          <li className="mb-4 mt-10">
            <a 
              href="/Daniel_Stiven_Diaz_CV_ES.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="block py-2 px-8 transition-all duration-300 text-gray-400 hover:pl-10 hover:text-[var(--skin-color)]"
            >
              <i className="fa fa-download mr-3 w-5 text-center"></i>
              <span className="capitalize">Descargar CV</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="w-full flex flex-col items-center pb-8 gap-[20px]">
        
        <div className="networks flex justify-center gap-[25px] mb-6">
          <a 
            href="https://github.com/Daniels35" 
            target="_blank" 
            rel="noreferrer"
            className="social-icon transition-transform hover:-translate-y-1 block"
          >
            <i className="fab fa-github text-2xl hover:text-[var(--skin-color)]"></i>
          </a>
          <a 
            href="https://linkedin.com/in/danielsdiaz35" 
            target="_blank" 
            rel="noreferrer"
            className="social-icon transition-transform hover:-translate-y-1 block"
          >
            <i className="fab fa-linkedin text-2xl hover:text-[var(--skin-color)]"></i>
          </a>
          <a 
            href="https://gitlab.com/danielstiven35" 
            target="_blank" 
            rel="noreferrer"
            className="social-icon transition-transform hover:-translate-y-1 block"
          >
            <i className="fab fa-gitlab text-2xl hover:text-[var(--skin-color)]"></i>
          </a>
        </div>

        <div className="text-center text-[11px] text-[var(--text-black-700)] tracking-wide">
          <p>&copy; {currentYear} Daniel Diaz.</p>
          <p >Hecho con ☕ en Medellín.</p>
        </div>

      </div>

    </div>
  );
}