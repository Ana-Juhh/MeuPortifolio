import React from 'react';
import { Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';
import { translations, experiences } from '../data';

interface JourneyProps {
  lang: 'pt' | 'en';
}

export default function Journey({ lang }: JourneyProps) {
  const t = translations[lang];

  return (
    <section id="experience" className="py-24 px-6 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Title */}
      <div className="text-center mb-16 space-y-4">
        <h2 
          className="text-4xl md:text-5xl font-display font-black text-candy-dark"
          id="journey-heading"
        >
          {t.journey_title}
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="max-w-3xl mx-auto relative pl-6 sm:pl-12 space-y-12">
        {/* Timeline main left line */}
        <div className="absolute left-9 sm:left-[59px] top-4 bottom-4 w-1.5 bg-candy-dark rounded-full"></div>

        {experiences.map((exp) => {
          // Dynamic title, subtitle, description, status mappings based on language
          let expTitle = '';
          switch (exp.titleKey) {
            case 'exp1_title':
              expTitle = t.exp1_title;
              break;
            case 'exp2_title':
              expTitle = t.exp2_title;
              break;
            case 'exp3_title':
              expTitle = t.exp3_title;
              break;
            default:
              expTitle = t.exp1_title;
          }

          let expSub = '';
          switch (exp.subKey) {
            case 'exp1_subtitle':
              expSub = t.exp1_subtitle;
              break;
            case 'exp2_subtitle':
              expSub = t.exp2_subtitle;
              break;
            case 'exp3_subtitle':
              expSub = t.exp3_subtitle;
              break;
            default:
              expSub = t.exp1_subtitle;
          }

          let expDesc = '';
          switch (exp.descKey) {
            case 'exp1_desc':
              expDesc = t.exp1_desc;
              break;
            case 'exp2_desc':
              expDesc = t.exp2_desc;
              break;
            case 'exp3_desc':
              expDesc = t.exp3_desc;
              break;
            default:
              expDesc = t.exp1_desc;
          }

          let expStatus = '';
          switch (exp.statusKey) {
            case 'journey_present':
              expStatus = t.journey_present;
              break;
            case 'journey_ongoing':
              expStatus = t.journey_ongoing;
              break;
            case 'journey_completed':
              expStatus = t.journey_completed;
              break;
            default:
              expStatus = t.journey_present;
          }

          // Determine specific icon to show inside card
          const isAcademic = exp.subKey !== 'exp1_subtitle';

          return (
            <div 
              key={exp.id} 
              className="relative group text-left"
              id={`journey-item-${exp.id}`}
            >
              {/* Timeline thick marker dot */}
              <div 
                className={`absolute left-[-21px] sm:left-[-45px] top-4 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-candy-dark group-hover:scale-125 transition-transform duration-300 z-10 shadow-[4px_4px_0px_#2d1b33] ${exp.dotColor}`}
                id={`journey-dot-${exp.id}`}
              ></div>

              {/* Candy Card Container */}
              <div className="candy-card p-6 sm:p-8 bg-white transition-all duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl border-2 border-candy-dark bg-candy-bg flex items-center justify-center flex-shrink-0 mt-0.5 text-candy-dark">
                      {isAcademic ? <GraduationCap size={20} className="stroke-[2.5]" /> : <Briefcase size={20} className="stroke-[2.5]" />}
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-display font-black text-candy-dark leading-tight">
                        {expTitle}
                      </h4>
                      <p className={`font-display font-black text-xs sm:text-sm uppercase tracking-widest mt-1.5 ${
                        exp.id === 'exp1' ? 'text-candy-primary' : exp.id === 'exp2' ? 'text-candy-secondary' : 'text-candy-dark-muted'
                      }`}>
                        {expSub}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span className={`text-[10px] font-display font-black border-2 px-3.5 py-1 rounded-full uppercase tracking-wider shadow-[2px_2px_0px_#2d1b33] ${exp.statusColor}`}>
                    {expStatus}
                  </span>
                </div>

                <p className="text-candy-dark-muted text-sm sm:text-base font-medium leading-relaxed">
                  {expDesc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
