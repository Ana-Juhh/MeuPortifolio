import React from 'react';
import { Send, Linkedin, Github, MessageSquareText } from 'lucide-react';
import { translations } from '../data';

interface CTAProps {
  lang: 'pt' | 'en';
  onContactClick: () => void;
}

export default function CTA({ lang, onContactClick }: CTAProps) {
  const t = translations[lang];

  return (
    <section className="w-full bg-[#ffd9f1] border-t-4 border-candy-dark py-20 px-6 md:px-8 text-center relative overflow-hidden" id="cta-section">
      {/* Outer Decorative Elements */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-candy-primary/15 rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-candy-secondary/15 rounded-full pointer-events-none"></div>

      <div 
        className="candy-card max-w-5xl mx-auto p-12 sm:p-16 md:p-20 !bg-candy-primary text-white border-4 border-candy-dark relative overflow-hidden shadow-[12px_12px_0px_#2d1b33]"
        id="cta-banner"
      >
        {/* Decorative Circles */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-candy-secondary/20 rounded-full pointer-events-none"></div>

        <div className="relative z-10 space-y-8">
          {/* Section title */}
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-tight text-white drop-shadow-[2px_2px_0px_rgba(45,27,51,0.5)]"
            id="cta-title"
          >
            {t.cta_title.split('<br/>').join('\n')}
          </h2>

          {/* Description */}
          <p 
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-bold leading-relaxed"
            id="cta-desc"
          >
            {t.cta_desc}
          </p>

          {/* Actions panel */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-4">
            {/* Interactive hire form launcher */}
            <button
              onClick={onContactClick}
              className="candy-btn-secondary px-10 py-5 font-display font-black text-lg sm:text-xl flex items-center justify-center gap-3.5 group cursor-pointer w-full sm:w-auto text-candy-dark bg-white hover:bg-candy-bg transition-colors"
              id="cta-contact-btn"
            >
              <Send size={22} className="stroke-[3] text-candy-primary group-hover:rotate-12 transition-transform" />
              <span>{t.cta_btn}</span>
            </button>

            {/* Direct Social Shortcuts */}
            <div className="flex gap-4 items-center">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/anajuliasouzadev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full candy-card flex items-center justify-center bg-white text-candy-dark hover:text-candy-primary hover:scale-105 hover:-translate-y-1 transition-transform"
                title="LinkedIn"
                id="cta-linkedin-link"
              >
                <Linkedin size={24} className="stroke-[2.5]" />
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/Ana-Juhh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full candy-card flex items-center justify-center bg-white text-candy-dark hover:text-candy-secondary hover:scale-105 hover:-translate-y-1 transition-transform"
                title="GitHub"
                id="cta-github-link"
              >
                <Github size={24} className="stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
