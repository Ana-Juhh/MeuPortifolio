import React from 'react';
import { Award, GraduationCap, FolderCode, Terminal } from 'lucide-react';
import { translations } from '../data';

interface StatsProps {
  lang: 'pt' | 'en';
}

export default function Stats({ lang }: StatsProps) {
  const t = translations[lang];

  const statItems = [
    {
      id: "stat-graduated",
      value: t.stat_graduated,
      label: t.stat_graduated_sub,
      colorClass: "text-candy-primary",
      icon: Award
    },
    {
      id: "stat-student",
      value: t.stat_student,
      label: t.stat_student_sub,
      colorClass: "text-candy-secondary",
      icon: GraduationCap,
      withBorder: true
    },
    {
      id: "stat-projects",
      value: "6+",
      label: t.stat_projects_sub,
      colorClass: "text-candy-tertiary",
      icon: FolderCode,
      withBorder: true
    },
    {
      id: "stat-ai",
      value: t.stat_ai,
      label: t.stat_ai_sub,
      colorClass: "text-candy-primary",
      icon: Terminal,
      withBorder: true
    }
  ];

  return (
    <section className="py-12 border-y-4 border-candy-dark bg-candy-tertiary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className={`text-center flex flex-col items-center justify-center p-4 transition-transform hover:scale-105 ${
                  item.withBorder ? 'md:border-l-4 md:border-candy-dark/20' : ''
                }`}
                id={item.id}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={18} className={`${item.colorClass} opacity-80 stroke-[3] hidden sm:block`} />
                  <p className={`text-2xl sm:text-3xl md:text-4xl font-display font-black ${item.colorClass}`}>
                    {item.value}
                  </p>
                </div>
                <p className="text-xs sm:text-sm font-display font-bold uppercase tracking-widest text-candy-dark-muted">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
