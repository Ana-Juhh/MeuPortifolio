import React, { useState } from 'react';
import { Menu, X, Send, Globe } from 'lucide-react';
import { translations } from '../data';

interface HeaderProps {
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
  onContactClick: () => void;
}

export default function Header({ lang, setLang, onContactClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  const navItems = [
    { name: t.nav_projects, href: '#projects' },
    { name: t.nav_skills, href: '#skills' },
    { name: t.nav_experience, href: '#experience' },
    { name: t.nav_about, href: '#about' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/75 backdrop-blur-md border-b-4 border-candy-dark py-4 transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="text-2xl font-display font-black text-candy-primary hover:scale-105 transition-transform"
          id="nav-logo"
        >
          AnaJuliaDev
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-display font-bold text-candy-dark hover:text-candy-primary transition-colors uppercase text-xs tracking-wider"
              id={`nav-item-${item.href.replace('#', '')}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Custom Candy Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-xl border-3 border-candy-dark bg-white text-candy-dark hover:text-candy-primary font-display font-black text-xs tracking-wider transition-all shadow-[3px_3px_0px_#2d1b33] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer flex items-center gap-1"
            title={lang === 'pt' ? "Switch to English" : "Mudar para Português"}
            id="lang-switch-btn"
          >
            <Globe size={14} className="stroke-[3]" />
            <span>{lang === 'pt' ? 'EN' : 'PT'}</span>
          </button>

          {/* Hire Me Button */}
          <button 
            onClick={onContactClick}
            className="hidden sm:block candy-btn-primary px-6 py-2 font-display font-black uppercase text-xs tracking-wider"
            id="header-hire-me-btn"
          >
            {t.hire_me}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-candy-dark focus:outline-none p-1 border-2 border-transparent hover:border-candy-dark rounded-md transition-colors"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} className="stroke-[3]" /> : <Menu size={24} className="stroke-[3]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden absolute top-[71px] left-0 w-full bg-candy-bg border-b-4 border-candy-dark px-6 py-6 flex flex-col gap-4 shadow-xl animate-fade-in"
          id="mobile-nav-drawer"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-display font-bold text-candy-dark hover:text-candy-primary py-2 text-sm uppercase tracking-wider border-b-2 border-candy-dark/10"
              id={`mobile-nav-item-${item.href.replace('#', '')}`}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="candy-btn-primary w-full py-3 mt-2 font-display font-black uppercase text-sm tracking-wider flex items-center justify-center gap-2"
            id="mobile-hire-me-btn"
          >
            <Send size={16} className="stroke-[3]" />
            {t.hire_me}
          </button>
        </div>
      )}
    </header>
  );
}
