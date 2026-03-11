"use client";

import { useState } from 'react';
import SmokeBackground from '@/components/SmokeBackground';
import Sidebar from '@/components/Sidebar';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import HomeSection from '@/sections/HomeSection';
import PortfolioSection from '@/sections/PortfolioSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <SmokeBackground />
      
      <div className="main-container" id="content">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <div className="main-content">
          <HomeSection isActive={activeSection === 'home'} />
          <PortfolioSection isActive={activeSection === 'portfolio'} />
        </div>
      </div>

      <ThemeSwitcher />
    </>
  );
}