"use client";

import PortfolioCard, { Project } from '@/components/PortfolioCard';

const mockProjects: Project[] = [
  {
    id: 1,
    title: "Firplak Logística",
    description: "Plataforma integral para la gestión de envíos y logística. Permite la trazabilidad en tiempo real y la automatización de correos.",
    role: "Full Stack Developer",
    image: "/images/portfolio/portfolio-4.webp",
    images: [
      "/images/portfolio/portfolio-4.webp", 
      "/images/portfolio/portfolio-4.webp"
    ],
    link: "https://www.proyectologistica.online",
    githubLink: "https://github.com/Daniels35/firplak",
    technologies: ["React", "Axios", "MySQL2", "Cloudinary", "Nodemailer", "Express"],
    collaborators: [
      { name: "Juan Pérez", role: "Frontend", linkedin: "https://linkedin.com/in/juan" }
    ],
    date: "2023"
  },
  {
    id: 2,
    title: "Car Wash Manager",
    description: "Sistema SaaS para la administración completa de autolavados, incluyendo control de inventario, finanzas y reportes en Excel.",
    role: "Líder Técnico",
    image: "/images/portfolio/portfolio-2.webp",
    images: ["/images/portfolio/portfolio-2.webp"],
    link: "https://carwashmanager.online/",
    technologies: ["React", "Date-fns", "Exceljs", "Firebase", "Redux-toolkit", "Cloud-functions"],
    collaborators: [],
    date: "2024"
  },
  {
    id: 3,
    title: "Start Bussines",
    description: "Landing page corporativa de alto rendimiento con sistema de autenticación y envío de correos automatizado.",
    role: "Frontend Developer",
    image: "/images/portfolio/portfolio-6.webp",
    images: ["/images/portfolio/portfolio-6.webp"],
    link: "https://start-bussines.vercel.app",
    technologies: ["Next Js", "Tailwindcss", "Postgresql", "Next-auth", "Nodemailer"],
    collaborators: [
      { name: "Ana Gómez", role: "UX/UI Designer" }
    ],
    date: "2024"
  },
  {
    id: 4,
    title: "Henry Encuestas",
    description: "Aplicación interactiva para la creación, gestión y análisis de encuestas dinámicas.",
    role: "Full Stack Developer",
    image: "/images/portfolio/portfolio-3.webp",
    images: ["/images/portfolio/portfolio-3.webp"],
    link: "https://daniels35.github.io/encuestasHenry/",
    technologies: ["React", "MySQL2", "Cors", "Nodemailer", "Express"],
    collaborators: [],
    date: "2023"
  },
  {
    id: 5,
    title: "Pinzas Lasvi",
    description: "E-commerce y catálogo digital interactivo de productos para la marca de pinzas Lasvi.",
    role: "Frontend Developer",
    image: "/images/portfolio/portfolio-1.webp",
    images: ["/images/portfolio/portfolio-1.webp"],
    link: "https://daniels35.github.io/lasvipagina/",
    technologies: ["React", "Axios", "React-carousel", "React-hook-form", "MySQL2"],
    collaborators: [],
    date: "2023"
  },
  {
    id: 6,
    title: "Videogames",
    description: "Catálogo interactivo de videojuegos consumiendo una API externa con opciones avanzadas de filtrado y búsqueda.",
    role: "Full Stack Developer",
    image: "/images/portfolio/portfolio-5.webp",
    images: ["/images/portfolio/portfolio-5.webp"],
    link: "https://daniels35.github.io/VideoGame",
    technologies: ["React", "Axios", "Cloud Functions", "Postgresql", "Tsparticles", "Redux Thunk"],
    collaborators: [],
    date: "2023"
  }
];

export default function PortfolioSection({ isActive }: { isActive: boolean }) {
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
          {mockProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}