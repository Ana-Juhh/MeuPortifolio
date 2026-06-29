import React from 'react';
import { translations } from '../data';

interface FooterProps {
  lang: 'pt' | 'en';
  onContactClick: () => void;
}

export default function Footer({ lang, onContactClick }: FooterProps) {
  const t = translations[lang];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ffd9f1] py-12 md:py-16 border-t-4 border-candy-dark/20 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 max-w-7xl mx-auto gap-8">
        {/* Brand Copyright */}
        <div className="text-center md:text-left space-y-2">
          <a 
            href="#" 
            onClick={(e) => handleLinkClick(e, '#about')}
            className="text-2xl font-display font-black text-candy-primary hover:opacity-80 transition-opacity"
            id="footer-logo"
          >
            AnaJuliaDev
          </a>
          <p className="text-xs sm:text-sm font-display font-bold text-candy-dark-muted uppercase tracking-wider">
            {lang === 'pt' 
              ? `© 2026 AnaJuliaDev - AJS. Todos os direitos reservados.` 
              : `© 2026 AnaJuliaDev - AJS. All rights reserved.`}
          </p>
        </div>

        {/* Footer Quick Navigation / Socials */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <a 
            href="https://www.linkedin.com/in/anajuliasouzadev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-candy-dark hover:text-candy-primary font-display font-black uppercase text-[11px] sm:text-xs tracking-widest transition-transform hover:scale-105"
            id="footer-link-linkedin"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Ana-Juhh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-candy-dark hover:text-candy-primary font-display font-black uppercase text-[11px] sm:text-xs tracking-widest transition-transform hover:scale-105"
            id="footer-link-github"
          >
            GitHub
          </a>
          <a 
            href="https://anajuliaportifolio.netlify.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-candy-dark hover:text-candy-primary font-display font-black uppercase text-[11px] sm:text-xs tracking-widest transition-transform hover:scale-105"
            id="footer-link-portfolio"
          >
            Portfolio
          </a>
          <a 
            href="mailto:ju.12ferre@gmail.com"
            className="text-candy-dark hover:text-candy-primary font-display font-black uppercase text-[11px] sm:text-xs tracking-widest transition-transform hover:scale-105"
            id="footer-link-email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
