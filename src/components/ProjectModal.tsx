import React from 'react';
import { Project } from './PortfolioCard';
import Modal from './UI/Modal'; // Importamos el base

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Modal onClose={onClose}>
      <div className="p-6 md:p-8">
        {/* Cabecera */}
        <div className="mb-6 pr-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            {project.title}
          </h2>
          <p className="text-lg font-medium" style={{ color: 'var(--skin-color)' }}>
            {project.role} | {project.date}
          </p>
        </div>

        {/* Galería de imágenes (Slider horizontal simple) */}
        <div className="mb-6 flex gap-4 overflow-x-auto pb-4 snap-x custom-scrollbar">
          {project.images.map((img, i) => (
            <img 
              key={i} 
              src={img} 
              alt={`${project.title} captura ${i + 1}`} 
              className="w-full md:w-[80%] h-auto md:h-72 object-cover rounded-lg snap-center flex-shrink-0 border border-gray-200 dark:border-gray-800"
            />
          ))}
        </div>

        {/* Descripción */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Sobre el proyecto</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Detalles Técnicos y Colaboradores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-[#222] text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.collaborators && project.collaborators.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Colaboradores</h3>
              <ul className="space-y-3">
                {project.collaborators.map((collab, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-semibold text-gray-900 dark:text-white">{collab.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{collab.role}</span>
                    {collab.linkedin && (
                      <a href={collab.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline mt-1" style={{ color: 'var(--skin-color)' }}>
                        <i className="fab fa-linkedin mr-1"></i>LinkedIn
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Enlaces de Acción */}
        <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
            <i className="fa fa-globe mr-2"></i>Visitar Web
          </a>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
              <i className="fab fa-github mr-2"></i>Ver Código
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}