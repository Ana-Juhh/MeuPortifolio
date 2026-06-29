import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CVModal from './components/CVModal';

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-candy-bg text-candy-dark selection:bg-candy-primary selection:text-white antialiased">
      {/* Navigation Header */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        onContactClick={() => setIsContactOpen(true)} 
      />

      {/* Hero Showcase Section */}
      <Hero 
        lang={lang} 
        onCVClick={() => setIsCVOpen(true)} 
      />

      {/* Quantitative Stats Banner */}
      <Stats lang={lang} />

      {/* Skills Showcase Section */}
      <Skills lang={lang} />

      {/* Selected Featured Projects Section */}
      <Projects lang={lang} />

      {/* Experience and Academic Journey timeline */}
      <Journey lang={lang} />

      {/* Call To Action banner */}
      <CTA 
        lang={lang} 
        onContactClick={() => setIsContactOpen(true)} 
      />

      {/* Bottom Footer block */}
      <Footer 
        lang={lang} 
        onContactClick={() => setIsContactOpen(true)} 
      />

      {/* Dedicated Interactive Modals */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        lang={lang} 
      />

      <CVModal 
        isOpen={isCVOpen} 
        onClose={() => setIsCVOpen(false)} 
        lang={lang} 
      />
    </div>
  );
}
