import React from 'react';
import { Project } from './PortfolioCard';

interface ModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ModalProps) {
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-black/70 transition-opacity"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#151515] rounded-xl shadow-2xl custom-scrollbar transition-all"
        style={{ 
          boxShadow: '0 0 25px var(--skin-color)', 
          border: '1px solid var(--skin-color)' 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-red-500 hover:text-white transition-colors z-10"
        >
          <i className="fa fa-times text-xl"></i>
        </button>

        <div className="p-6 md:p-8">
          <div className="mb-6 pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
            <p className="text-lg font-medium" style={{ color: 'var(--skin-color)' }}>
              {project.role} | {project.date}
            </p>
          </div>

          <div className="mb-6 flex gap-4 overflow-x-auto pb-4 snap-x">
            {project.images.map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt={`${project.title} captura ${i + 1}`} 
                className="w-full md:w-[80%] h-auto md:h-72 object-cover rounded-lg snap-center flex-shrink-0 border border-gray-200 dark:border-gray-800"
              />
            ))}
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Sobre el proyecto</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

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
      </div>
    </div>
  );
}