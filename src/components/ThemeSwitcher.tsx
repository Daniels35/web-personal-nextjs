"use client";

import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'dark' || (!savedMode && prefersDark)) {
      document.body.classList.add('dark');
      setIsDark(true);
    } else {
      document.body.classList.remove('dark');
      setIsDark(false);
    }

    const savedColor = localStorage.getItem('themeColor') || 'color-1';
    setActiveStyle(savedColor);

    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const setActiveStyle = (color: string) => {
    const alternateStyles = document.querySelectorAll(".alternate-style");
    alternateStyles.forEach((style) => {
      if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled");
      } else {
        style.setAttribute("disabled", "true");
      }
    });
    localStorage.setItem('themeColor', color);
  };

  const toggleMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.body.classList.add('dark');
      localStorage.setItem('themeMode', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('themeMode', 'light');
    }
  };

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      <div className="style-switcher-toggler s-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-cog fa-spin"></i>
      </div>
      <div className="day-night s-icon" onClick={toggleMode}>
        <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
      </div>
      <h4>Color Theme</h4>
      <div className="colors">
        <span className="color-1" onClick={() => setActiveStyle('color-1')}></span>
        <span className="color-2" onClick={() => setActiveStyle('color-2')}></span>
        <span className="color-3" onClick={() => setActiveStyle('color-3')}></span>
        <span className="color-4" onClick={() => setActiveStyle('color-4')}></span>
        <span className="color-5" onClick={() => setActiveStyle('color-5')}></span>
      </div>
      
      <h4>Language</h4>
      <div className="language">
        <button className="translate" id="es">ES</button>
        <button className="translate" id="en">EN</button>
      </div>
    </div>
  );
}