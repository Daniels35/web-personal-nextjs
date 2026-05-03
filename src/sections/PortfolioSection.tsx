"use client";

import { useState } from 'react';
import PortfolioCard, { Project } from '@/components/PortfolioCard';
import projectsData from '@/data/projects.json';
import NextSectionButton from '@/components/NextSectionButton';

interface ExtendedProject extends Project {
  category?: string;
}

interface PortfolioSectionProps {
  isActive: boolean;
}

export default function PortfolioSection({ isActive }: PortfolioSectionProps) {
  const projects = projectsData as ExtendedProject[];
  
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', ...Array.from(new Set(projects.map(p => p.category).filter(Boolean)))];

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className={`portfolio section ${isActive ? 'active' : ''}`} id="portfolio">
      <div className="container">
        
        <style dangerouslySetInnerHTML={{__html: `
          .portfolio-filter-desktop {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
            margin-bottom: 30px;
          }
          .portfolio-filter-mobile {
            display: none;
            width: 100%;
            max-width: 300px;
            margin: 0 auto 30px auto;
          }
          @media (max-width: 768px) {
            .portfolio-filter-desktop { display: none; }
            .portfolio-filter-mobile { display: flex; justify-content: center;}
          }
        `}} />

        <div className="row">
          <div className="section-title padd-15">
            <h2>Portafolio</h2>
          </div>
        </div>
        
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>Mis Últimos Proyectos:</h2>
          </div>
        </div>

        <div className="row">
          <div className="padd-15" style={{ width: '100%' }}>
            
            <div className="portfolio-filter-desktop">
              {categories.map((cat, index) => (
                <button 
                  key={index} 
                  onClick={() => setFilter(cat as string)}
                  className={`btn ${filter === cat ? 'active' : ''}`}
                  style={{ 
                    opacity: filter === cat ? 1 : 0.7, 
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: 'none'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="portfolio-filter-mobile">
              <select 
                className="form-control" 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                style={{ 
                  cursor: 'pointer',
                  padding: '10px',
                  textAlign: 'center',
                  appearance: 'auto'
                }}
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat as string}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        <div className="cards-portafolio">
          {filteredProjects.map((project) => (
            <PortfolioCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
      </div>
          <NextSectionButton target="about" text="Conoce más de mí" />
    </section>
  );
}