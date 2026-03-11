"use client";

import Link from 'next/link';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  return (
    <div className="aside">
      <div className="logo">
        <Link href="#"><span>D</span>ANIEL</Link>
      </div>
      
      <div className="nav-toggler">
        <span></span>
      </div>
      
      <ul className="nav">
        <li>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''} 
            onClick={(e) => { e.preventDefault(); setActiveSection('home'); }}
          >
            <i className="fa fa-home"></i> Inicio
          </a>
        </li>
        <li>
          <a 
            href="#portfolio" 
            className={activeSection === 'portfolio' ? 'active' : ''} 
            onClick={(e) => { e.preventDefault(); setActiveSection('portfolio'); }}
          >
            <i className="fa fa-briefcase"></i> Portafolio
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); setActiveSection('about'); }}
          >
            <i className="fa fa-user"></i> Sobre Mí
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); setActiveSection('contact'); }}
          >
            <i className="fa fa-comments"></i> Contacto
          </a>
        </li>
      </ul>
      <div className="networks">
        <a href="https://github.com/Daniels35" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/danielsdiaz35" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}