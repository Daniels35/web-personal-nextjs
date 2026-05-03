"use client";

import PortfolioCard, { Project } from '@/components/PortfolioCard';
import projectsData from '@/data/projects.json';

// Añadimos onOpenProject a las props
interface PortfolioSectionProps {
  isActive: boolean;
  onOpenProject: (project: Project) => void;
}

export default function PortfolioSection({ isActive, onOpenProject }: PortfolioSectionProps) {
  const projects = projectsData as Project[];

  return (
    <section className={`portfolio section ${isActive ? 'active' : ''}`} id="portfolio">
      <div className="container">
        
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

        <div className="cards-portafolio">
          {projects.map((project) => (
            <PortfolioCard 
              key={project.id} 
              project={project} 

            />
          ))}
        </div>

      </div>
    </section>
  );
}