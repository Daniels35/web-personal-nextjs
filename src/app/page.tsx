"use client";

import { useState, useEffect } from 'react';
import SmokeBackground from '@/components/SmokeBackground';
import Sidebar from '@/components/Sidebar';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import HomeSection from '@/sections/HomeSection';
import PortfolioSection from '@/sections/PortfolioSection';
import AboutSection from '@/sections/AboutSection';
import ContactSection from '@/sections/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';


export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'portfolio', 'about', 'contact'].includes(hash)) {
        setActiveSection(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <SmokeBackground />
      
      <div className="main-container" id="content">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <div className="main-content">
          <HomeSection isActive={activeSection === 'home'} />
          <PortfolioSection isActive={activeSection === 'portfolio'} />
          <AboutSection isActive={activeSection === 'about'} />
          <ContactSection isActive={activeSection === 'contact'} />
        </div>
      </div>

      <ThemeSwitcher />
      <WhatsAppButton />
    </>
  );
}