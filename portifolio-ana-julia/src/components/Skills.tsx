import React, { useState } from 'react';
import { Code2, Database, Layers, BrainCircuit, Lightbulb, Check } from 'lucide-react';
import { translations, skillCategories } from '../data';

interface SkillsProps {
  lang: 'pt' | 'en';
}

export default function Skills({ lang }: SkillsProps) {
  const t = translations[lang];
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={32} className="stroke-[2.5]" />;
      case 'Database':
        return <Database size={32} className="stroke-[2.5]" />;
      case 'Layers':
        return <Layers size={32} className="stroke-[2.5]" />;
      case 'BrainCircuit':
        return <BrainCircuit size={32} className="stroke-[2.5]" />;
      default:
        return <Code2 size={32} className="stroke-[2.5]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 
          className="text-4xl md:text-5xl font-display font-black text-candy-dark"
          id="skills-heading"
        >
          {t.skills_title}
        </h2>
        <p 
          className="text-lg md:text-xl text-candy-dark-muted max-w-2xl mx-auto font-medium leading-relaxed"
          id="skills-subheading"
        >
          {t.skills_subtitle}
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category) => {
          // Dynamic title mapping based on current language
          let categoryTitle = '';
          switch (category.titleKey) {
            case 'skills_web':
              categoryTitle = t.skills_web;
              break;
            case 'skills_backend':
              categoryTitle = t.skills_backend;
              break;
            case 'skills_integrations':
              categoryTitle = t.skills_integrations;
              break;
            case 'skills_ai':
              categoryTitle = t.skills_ai;
              break;
            default:
              categoryTitle = t.skills_web;
          }

          return (
            <div 
              key={category.id} 
              className="candy-card p-6 flex flex-col gap-6 bg-white"
              id={`skills-category-${category.id}`}
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl bg-white border-2 border-candy-dark flex items-center justify-center ${category.colorClass} shadow-[4px_4px_0px_#2d1b33] transition-transform duration-300 hover:rotate-6`}>
                {getCategoryIcon(category.icon)}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-display font-black text-candy-dark">
                {categoryTitle}
              </h3>

              {/* Badges list */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
                    className={`skill-badge cursor-pointer select-none relative flex items-center gap-1.5 ${
                      activeSkill === skill 
                        ? 'bg-candy-primary text-white scale-105 border-candy-dark' 
                        : ''
                    }`}
                    title={lang === 'pt' ? `Clique para destacar ${skill}` : `Click to highlight ${skill}`}
                    id={`skill-badge-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {activeSkill === skill && <Check size={12} className="stroke-[4]" />}
                    <span>{skill}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Helper Text */}
      <div className="mt-12 flex justify-center">
        <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl border-2 border-candy-dark/10 bg-candy-bg text-candy-dark-muted font-medium text-sm">
          <Lightbulb size={16} className="text-candy-primary stroke-[2.5]" />
          <span>
            {lang === 'pt' 
              ? 'Dica: Clique nos badges para ver um marcador de destaque interativo!' 
              : 'Tip: Click on badges to see an interactive highlight indicator!'}
          </span>
        </div>
      </div>
    </section>
  );
}
