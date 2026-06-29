import React, { useState, useEffect } from 'react';
import { Sparkles, Code2, ArrowDown, FileText } from 'lucide-react';
import { translations } from '../data';

interface HeroProps {
  lang: 'pt' | 'en';
  onCVClick: () => void;
}

export default function Hero({ lang, onCVClick }: HeroProps) {
  const t = translations[lang];
  const roles = t.typewriter_roles;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex] || '';

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(75);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentFullText) {
      // Pause at full text
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  // Handle resetting state when language switches to avoid indices mismatches
  useEffect(() => {
    setRoleIndex(0);
    setDisplayText('');
    setIsDeleting(false);
  }, [lang]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      className="pt-32 pb-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Copy Column */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Availability Badge */}
          <div 
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border-2 border-candy-dark bg-white text-candy-primary font-display font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_#2d1b33]"
            id="hero-availability-badge"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-candy-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-candy-primary"></span>
            </span>
            <span>{t.hero_availability}</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-candy-dark leading-tight"
              id="hero-title"
            >
              Ana Júlia <br />
              <span className="text-candy-primary typewriter" id="typewriter-text">
                {displayText}
              </span>
            </h1>
          </div>

          {/* Description */}
          <p 
            className="text-base sm:text-lg md:text-xl text-candy-dark-muted max-w-xl font-medium leading-relaxed"
            id="hero-description"
          >
            {t.hero_desc}
          </p>

          {/* Buttons CTA */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={scrollToProjects}
              className="candy-btn-primary px-8 py-4 font-display font-black text-base sm:text-lg tracking-wider flex items-center gap-2"
              id="hero-view-work-btn"
            >
              <Sparkles size={20} className="stroke-[2.5]" />
              {t.hero_view_work}
            </button>
            <button
              onClick={onCVClick}
              className="candy-btn-secondary px-8 py-4 font-display font-black text-base sm:text-lg tracking-wider flex items-center gap-2"
              id="hero-download-cv-btn"
            >
              <FileText size={20} className="stroke-[2.5]" />
              {t.hero_download_cv}
            </button>
          </div>
        </div>

        {/* Right Portrait Column */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative group max-w-sm sm:max-w-md lg:max-w-none w-full">
            {/* Ambient Background Glow Effect */}
            <div className="absolute -inset-4 bg-candy-primary/20 rounded-[2.5rem] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Portrait Border Container */}
            <div 
              className="relative candy-card p-4 bg-white"
              id="hero-portrait-card"
            >
              <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden border-2 border-candy-dark bg-candy-bg">
                <img 
                  src=" \public\assets\imgs\foto-perfil.png"
                  alt="Ana Júlia Ferreira - Full Stack Developer portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  id="hero-portrait-image"
                />
              </div>

              {/* Floating Highlight Tag */}
              <div 
                className="absolute -bottom-4 -left-4 candy-card px-5 py-3.5 flex items-center gap-3 bg-candy-secondary text-white border-2 border-candy-dark shadow-[4px_4px_0px_#2d1b33]"
                id="hero-floating-badge"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Code2 size={18} className="stroke-[3]" />
                </div>
                <div>
                  <p className="text-[9px] font-display font-black uppercase tracking-widest opacity-80 leading-none">
                    {t.hero_exp_label}
                  </p>
                  <p className="font-display font-black text-sm mt-0.5 whitespace-nowrap">
                    {t.hero_exp_value}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="flex justify-center pt-12 animate-bounce">
        <button 
          onClick={scrollToProjects}
          className="w-10 h-10 rounded-full border-2 border-candy-dark flex items-center justify-center bg-white hover:bg-candy-primary hover:text-white transition-colors"
          title="Scroll down"
          id="hero-scroll-down-btn"
        >
          <ArrowDown size={18} className="stroke-[3]" />
        </button>
      </div>
    </section>
  );
}
