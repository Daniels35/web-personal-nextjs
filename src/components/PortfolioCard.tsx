import React from 'react';

export interface Collaborator {
  name: string;
  role: string;
  linkedin?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  image: string;     
  images: string[];
  link: string;
  githubLink?: string; 
  technologies: string[];
  collaborators: Collaborator[];
  date: string;
}

export default function PortfolioCard({ project }: { project: Project }) {
  const half = Math.ceil(project.technologies.length / 2);
  const techCol1 = project.technologies.slice(0, half);
  const techCol2 = project.technologies.slice(half);

  return (
    <div className="square-container">
      <div className="border-light"></div>
      
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="hover-info-portafolio">
          <div className="hover-info-portafolio-title">
            <h1>{project.title}</h1>
          </div>
          <div className="hover-info-portafolio-body">
            <h4>Tecnologías</h4>
            <div className="hover-info-portafolio-body-ul">
              <ul>
                {techCol1.map((tech, index) => (
                  <li key={`col1-${index}`}>{tech}</li>
                ))}
              </ul>
              <ul>
                {techCol2.map((tech, index) => (
                  <li key={`col2-${index}`}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </a>
      
      <div className="border-light-container">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img className="square-image" src={project.image} alt={project.title} />
        </a>
      </div>           
    </div>
  );
}