import React, { useState } from 'react';
import { X, Printer, Copy, Check, FileText, Award, MapPin, Mail, Globe, Phone, Linkedin, Github } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'pt' | 'en';
}

export default function CVModal({ isOpen, onClose, lang }: CVModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const textContent = lang === 'pt' ? `
ANA JÚLIA FERREIRA
Desenvolvedora Full Stack
Localização: Jardim São Francisco, São Paulo, SP
Telefone: (11) 94915-1995
E-mail: ju.12ferre@gmail.com
GitHub: https://github.com/Ana-Juhh
LinkedIn: https://www.linkedin.com/in/anajuliasouzadev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
Portfólio: https://anajuliaportifolio.netlify.app

GRADUAÇÃO
- Ciência da Computação (Cursando atualmente — Universidade Cruzeiro do Sul)
- Análise e Desenvolvimento de Sistemas (Formada — UNINOVE - Universidade Nove de Julho)

EXPERIÊNCIA PROFISSIONAL
- Auxiliar de TI no Colégio Satélite (Suporte técnico e desenvolvimento autônomo de ferramentas internas para otimização e automação de fluxos de trabalho, como um sistema de agendamentos e uma extensão para Chromebooks).

HABILIDADES TÉCNICAS
- Web/Mobile: TypeScript, React, React Native, HTML5, CSS3, JavaScript, Tailwind.
- Backend/Infra: Java, Spring Boot, Spring Data, Docker, SQL, Python, Node.js.
- Integrações & Ferramentas: Consumo e integração de REST APIs, PocketBase, Figma, Git/GitHub.
- IA & Engenharia de Prompt (Análise, Arquitetura e Automação): Antigravity, Claude (Anthropic), OpenAI Codex, Engenharia de Prompt, LLMs.
` : `
ANA JÚLIA FERREIRA
Full Stack Developer
Location: Jardim São Francisco, São Paulo, SP
Phone: (11) 94915-1995
Email: ju.12ferre@gmail.com
GitHub: https://github.com/Ana-Juhh
LinkedIn: https://www.linkedin.com/in/anajuliasouzadev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
Portfolio: https://anajuliaportifolio.netlify.app

EDUCATION
- Computer Science (Currently pursuing — Cruzeiro do Sul University)
- Analysis and Systems Development (Graduated — UNINOVE - Nove de Julho University)

PROFESSIONAL EXPERIENCE
- IT Support Assistant at Colégio Satélite (Technical support and autonomous development of internal tools for workflow optimization and automation, such as a booking system and a Chromebook extension).

TECHNICAL SKILLS
- Web/Mobile: TypeScript, React, React Native, HTML5, CSS3, JavaScript, Tailwind.
- Backend/Infra: Java, Spring Boot, Spring Data, Docker, SQL, Python, Node.js.
- Integrations & Tools: Consumption and integration of REST APIs, PocketBase, Figma, Git/GitHub.
- AI & Prompt Engineering (Analysis, Architecture and Automation): Antigravity, Claude (Anthropic), OpenAI Codex, Prompt Engineering, LLMs.
`;

    navigator.clipboard.writeText(textContent.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-candy-dark/60 backdrop-blur-sm animate-fade-in print:bg-white print:p-0"
      onClick={onClose}
      id="cv-modal-backdrop"
    >
      <div 
        className="candy-card max-w-2xl w-full bg-white p-6 sm:p-8 relative shadow-[12px_12px_0px_#2d1b33] max-h-[90vh] overflow-y-auto print:shadow-none print:border-none print:max-h-full print:w-full"
        onClick={(e) => e.stopPropagation()}
        id="cv-modal-box"
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex justify-between items-center pb-4 mb-6 border-b-2 border-candy-dark/10 print:hidden">
          <div className="flex items-center gap-2 text-candy-primary">
            <FileText size={18} className="stroke-[2.5]" />
            <span className="font-display font-black text-xs uppercase tracking-widest">
              {lang === 'pt' ? 'Visualizador de Currículo' : 'Resume Viewer'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="w-10 h-10 rounded-full border-2 border-candy-dark hover:bg-candy-secondary hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title={lang === 'pt' ? 'Copiar Informações' : 'Copy Information'}
              id="cv-modal-copy-btn"
            >
              {copied ? <Check size={16} className="text-green-500 stroke-[3]" /> : <Copy size={16} className="stroke-[2.5]" />}
            </button>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="w-10 h-10 rounded-full border-2 border-candy-dark hover:bg-candy-tertiary hover:text-candy-dark flex items-center justify-center transition-colors cursor-pointer"
              title={lang === 'pt' ? 'Imprimir / Salvar PDF' : 'Print / Save PDF'}
              id="cv-modal-print-btn"
            >
              <Printer size={16} className="stroke-[2.5]" />
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border-2 border-candy-dark hover:bg-candy-primary hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title={lang === 'pt' ? 'Fechar' : 'Close'}
              id="cv-modal-close-btn"
            >
              <X size={16} className="stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Prominent Download Banner */}
        <div className="mb-6 bg-candy-primary/10 border-3 border-candy-dark p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden shadow-[4px_4px_0px_#2d1b33]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-candy-primary text-white flex items-center justify-center font-display font-black">
              <FileText size={20} className="stroke-[2.5]" />
            </div>
            <div className="text-left">
              <p className="font-display font-black text-sm text-candy-dark">
                {lang === 'pt' ? 'Precisa de uma cópia física?' : 'Need a physical copy?'}
              </p>
              <p className="text-xs font-medium text-candy-dark-muted">
                {lang === 'pt' ? 'Gere um PDF limpo e formatado em A4 para impressão.' : 'Generate a clean A4 formatted PDF ready for print.'}
              </p>
            </div>
          </div>
          <button
            onClick={handlePrint}
            className="candy-btn-primary px-6 py-3 font-display font-black text-xs sm:text-sm tracking-wider flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
            id="cv-modal-prominent-print-btn"
          >
            <Printer size={16} className="stroke-[3]" />
            <span>{lang === 'pt' ? 'Baixar Currículo em PDF' : 'Download Resume'}</span>
          </button>
        </div>

        {/* CV Document Content */}
        <div className="text-left space-y-6" id="cv-printable-document">
          {/* Header CV details */}
          <div className="border-b-4 border-candy-dark pb-4 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-candy-dark">
                Ana Júlia Ferreira
              </h2>
              <p className="text-candy-primary font-display font-black uppercase text-sm tracking-widest mt-1">
                {lang === 'pt' ? 'Desenvolvedora Full Stack' : 'Full Stack Developer'}
              </p>
            </div>
            
            <div className="space-y-1 text-xs font-bold text-candy-dark-muted">
              <div className="flex items-center gap-1.5 justify-start sm:justify-end">
                <MapPin size={12} className="text-candy-secondary stroke-[2.5]" />
                <span>Jardim São Francisco, São Paulo, SP</span>
              </div>
              <div className="flex items-center gap-1.5 justify-start sm:justify-end">
                <Phone size={12} className="text-candy-secondary stroke-[2.5]" />
                <span>(11) 94915-1995</span>
              </div>
              <div className="flex items-center gap-1.5 justify-start sm:justify-end">
                <Mail size={12} className="text-candy-secondary stroke-[2.5]" />
                <a href="mailto:ju.12ferre@gmail.com" className="hover:text-candy-primary">ju.12ferre@gmail.com</a>
              </div>
              <div className="flex items-center gap-1.5 justify-start sm:justify-end">
                <Globe size={12} className="text-candy-secondary stroke-[2.5]" />
                <a href="https://anajuliaportifolio.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-candy-primary">anajuliaportifolio.netlify.app</a>
              </div>
              <div className="flex items-center gap-1.5 justify-start sm:justify-end">
                <Github size={12} className="text-candy-secondary stroke-[2.5]" />
                <a href="https://github.com/Ana-Juhh" target="_blank" rel="noopener noreferrer" className="hover:text-candy-primary">github.com/Ana-Juhh</a>
              </div>
              <div className="flex items-center gap-1.5 justify-start sm:justify-end">
                <Linkedin size={12} className="text-candy-secondary stroke-[2.5]" />
                <a href="https://www.linkedin.com/in/anajuliasouzadev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-candy-primary truncate max-w-[180px]" title="LinkedIn Profile">linkedin.com/in/anajuliasouzadev</a>
              </div>
            </div>
          </div>

          {/* Education Block */}
          <div className="space-y-3">
            <h3 className="font-display font-black text-lg uppercase tracking-wider text-candy-dark border-b-2 border-candy-dark/10 pb-1 flex items-center gap-2">
              <Award size={16} className="text-candy-primary stroke-[2.5]" />
              <span>{lang === 'pt' ? 'Graduação' : 'Education'}</span>
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-display font-black text-sm text-candy-dark">
                  Ciência da Computação
                </p>
                <p className="text-xs font-bold text-candy-dark-muted">
                  {lang === 'pt' ? 'Cursando atualmente — Universidade Cruzeiro do Sul' : 'Currently pursuing — Cruzeiro do Sul University'}
                </p>
              </div>
              <div>
                <p className="font-display font-black text-sm text-candy-dark">
                  Análise e Desenvolvimento de Sistemas
                </p>
                <p className="text-xs font-bold text-candy-dark-muted">
                  {lang === 'pt' ? 'Formada — UNINOVE - Universidade Nove de Julho' : 'Graduated — UNINOVE - Nove de Julho University'}
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h3 className="font-display font-black text-lg uppercase tracking-wider text-candy-dark border-b-2 border-candy-dark/10 pb-1 flex items-center gap-2">
              <FileText size={16} className="text-candy-secondary stroke-[2.5]" />
              <span>{lang === 'pt' ? 'Experiência Profissional' : 'Professional Work Experience'}</span>
            </h3>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-display font-black text-sm text-candy-dark">
                    {lang === 'pt' ? 'Auxiliar de TI no Colégio Satélite' : 'IT Support Assistant at Colégio Satélite'}
                  </p>
                  <p className="text-xs font-bold text-candy-dark-muted">
                    {lang === 'pt' ? 'Colégio Satélite • Presente' : 'Colégio Satélite • Present'}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-candy-dark-muted mt-2 leading-relaxed">
                {lang === 'pt' 
                  ? 'Suporte técnico e desenvolvimento autônomo de ferramentas internas para otimização e automação de fluxos de trabalho, como um sistema de agendamentos e uma extensão para Chromebooks.'
                  : 'Technical support and autonomous development of internal tools for workflow optimization and automation, such as a booking system and a Chromebook extension.'}
              </p>
            </div>
          </div>

          {/* Detailed Skills lists */}
          <div className="space-y-3">
            <h3 className="font-display font-black text-lg uppercase tracking-wider text-candy-dark border-b-2 border-candy-dark/10 pb-1 flex items-center gap-2">
              <Award size={16} className="text-candy-tertiary stroke-[2.5]" />
              <span>{lang === 'pt' ? 'Habilidades Técnicas' : 'Technical Skills'}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-candy-dark-muted">
              <div className="space-y-1 bg-candy-bg p-3 rounded-xl border-2 border-candy-dark/5">
                <p className="font-display font-black text-candy-dark uppercase text-[10px] tracking-wider mb-1">
                  Web/Mobile
                </p>
                <p>TypeScript, React, React Native, HTML5, CSS3, JavaScript, Tailwind.</p>
              </div>

              <div className="space-y-1 bg-candy-bg p-3 rounded-xl border-2 border-candy-dark/5">
                <p className="font-display font-black text-candy-dark uppercase text-[10px] tracking-wider mb-1">
                  Backend/Infra
                </p>
                <p>Java, Spring Boot, Spring Data, Docker, SQL, Python, Node.js.</p>
              </div>

              <div className="space-y-1 bg-candy-bg p-3 rounded-xl border-2 border-candy-dark/5">
                <p className="font-display font-black text-candy-dark uppercase text-[10px] tracking-wider mb-1">
                  {lang === 'pt' ? 'Integrações & Ferramentas' : 'Integrations & Tools'}
                </p>
                <p>Consumo e integração de REST APIs, PocketBase, Figma, Git/GitHub.</p>
              </div>

              <div className="space-y-1 bg-candy-bg p-3 rounded-xl border-2 border-candy-dark/5">
                <p className="font-display font-black text-candy-dark uppercase text-[10px] tracking-wider mb-1">
                  {lang === 'pt' ? 'IA & Engenharia de Prompt (Análise, Arquitetura e Automação)' : 'AI & Prompt Engineering (Analysis, Architecture & Automation)'}
                </p>
                <p>Antigravity, Claude (Anthropic), OpenAI Codex, Engenharia de Prompt, LLMs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
