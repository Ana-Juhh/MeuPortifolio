import React, { useState } from 'react';
import { ExternalLink, Code2, Link as LinkIcon, ArrowRight, X, Sparkles, BookOpen, CheckCircle } from 'lucide-react';
import { translations, projects } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  lang: 'pt' | 'en';
}

export default function Projects({ lang }: ProjectsProps) {
  const t = translations[lang];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Show first 4 projects by default, show all 9 if showAllProjects is true
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);

  const handleProjectDetailsClick = (project: Project, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Title Header Block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
        <div className="space-y-4">
          <h2 
            className="text-4xl md:text-5xl font-display font-black text-candy-dark"
            id="projects-heading"
          >
            {t.projects_title}
          </h2>
          <p 
            className="text-lg md:text-xl text-candy-dark-muted max-w-xl font-medium leading-relaxed"
            id="projects-subheading"
          >
            {t.projects_subtitle}
          </p>
        </div>
        <button
          onClick={() => setShowAllProjects(!showAllProjects)}
          className="candy-btn-secondary px-8 py-4 font-display font-black uppercase text-xs sm:text-sm tracking-wider flex items-center gap-3 self-start md:self-auto"
          id="projects-toggle-all-btn"
        >
          <span>
            {showAllProjects 
              ? (lang === 'pt' ? 'Ocultar Projetos Extra' : 'Hide Extra Projects')
              : t.projects_view_all
            }
          </span> 
          <ArrowRight size={16} className={`stroke-[3] transition-transform duration-300 ${showAllProjects ? 'rotate-90' : ''}`} />
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {displayedProjects.map((project) => {
          return (
            <div 
              key={project.id}
              className="col-span-1 candy-card overflow-hidden group p-0 bg-white flex flex-col h-full"
              id={`project-card-${project.id}`}
            >
              {/* Cover Image Container */}
              <div className="h-64 relative overflow-hidden border-b-3 border-candy-dark bg-candy-bg flex-shrink-0">
                <img 
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  id={`project-image-${project.id}`}
                  onError={(e) => {
                    // Fallback to stylized abstract SVG/gradient if image does not exist yet
                    (e.currentTarget as HTMLImageElement).src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80`;
                  }}
                />
                
                {/* Floating Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-3.5 py-1 bg-candy-dark text-white text-[10px] sm:text-xs font-display font-black rounded-full border border-white/20 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-8 text-left flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-candy-dark mb-3 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-candy-dark-muted mb-6 text-sm font-medium leading-relaxed line-clamp-3">
                    {lang === 'pt' ? project.descPt : project.descEn}
                  </p>
                </div>

                {/* Card CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2 mt-auto">
                  <a
                    href="#"
                    onClick={(e) => handleProjectDetailsClick(project, e)}
                    className="text-candy-primary font-display font-black text-sm uppercase tracking-wider flex items-center gap-1.5 hover:translate-x-1.5 transition-transform underline decoration-3 underline-offset-4"
                    id={`project-details-link-${project.id}`}
                  >
                    <Sparkles size={14} className="stroke-[3]" /> 
                    <span>{lang === 'pt' ? 'Ver Detalhes' : 'View Details'}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Specifications/Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-candy-dark/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
          id="project-modal-backdrop"
        >
          <div 
            className="candy-card max-w-2xl w-full bg-white p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            id="project-modal-content"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-candy-dark hover:bg-candy-primary hover:text-white flex items-center justify-center transition-colors"
              title={lang === 'pt' ? "Fechar" : "Close"}
              id="project-modal-close-btn"
            >
              <X size={18} className="stroke-[3]" />
            </button>

            {/* Modal Heading */}
            <div className="flex items-center gap-2 text-candy-primary mb-4">
              <Sparkles size={18} className="stroke-[2.5]" />
              <span className="font-display font-black text-xs uppercase tracking-widest">
                {lang === 'pt' ? 'Detalhes do Projeto' : 'Project Details'}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-display font-black text-candy-dark mb-4">
              {selectedProject.title}
            </h3>

            {/* Modal Image */}
            <div className="rounded-xl overflow-hidden border-2 border-candy-dark bg-candy-bg mb-6 aspect-video">
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                id="project-modal-image"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80`;
                }}
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3.5 py-1 bg-candy-bg text-candy-dark text-xs font-display font-bold rounded-full border-2 border-candy-dark"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Project Overview */}
            <p className="text-candy-dark font-medium leading-relaxed mb-6 bg-candy-primary/5 p-4 rounded-xl border-l-4 border-candy-primary text-sm sm:text-base">
              {lang === 'pt' ? selectedProject.descPt : selectedProject.descEn}
            </p>

            {/* Technical Bullet points */}
            <div className="space-y-4 mb-6">
              <h4 className="font-display font-black text-base uppercase tracking-wider text-candy-dark flex items-center gap-2">
                <BookOpen size={16} className="stroke-[2.5] text-candy-secondary" />
                <span>{lang === 'pt' ? 'Arquitetura e Recursos' : 'Architecture & Features'}</span>
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.techDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm font-medium text-candy-dark-muted leading-relaxed">
                    <CheckCircle size={14} className="text-candy-tertiary mt-1 flex-shrink-0 stroke-[3]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links action bar */}
            <div className="flex flex-wrap gap-4 pt-2 border-t-2 border-candy-dark/10">
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="candy-btn-primary px-6 py-3 font-display font-black text-xs sm:text-sm tracking-wider flex items-center gap-2"
                  id="project-modal-demo-btn"
                >
                  <LinkIcon size={16} className="stroke-[3]" />
                  <span>{lang === 'pt' ? 'Ver Demonstração' : 'Launch Demo'}</span>
                </a>
              )}
              {selectedProject.codeUrl && (
                <a
                  href={selectedProject.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="candy-btn-secondary px-6 py-3 font-display font-black text-xs sm:text-sm tracking-wider flex items-center gap-2"
                  id="project-modal-code-btn"
                >
                  <Code2 size={16} className="stroke-[3]" />
                  <span>{lang === 'pt' ? 'Acessar Repositório' : 'Browse Repository'}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
