import React, { useState } from 'react';
import { X, Send, CheckCircle, Sparkles, AlertCircle, CalendarRange } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'pt' | 'en';
}

interface MessageHistoryItem {
  name: string;
  email: string;
  service: string;
  message: string;
  date: string;
}

export default function ContactModal({ isOpen, onClose, lang }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('full-stack');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError(lang === 'pt' ? 'Por favor, insira seu nome.' : 'Please enter your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError(lang === 'pt' ? 'Insira um e-mail válido.' : 'Please enter a valid email.');
      return;
    }
    if (!message.trim()) {
      setError(lang === 'pt' ? 'Escreva uma breve mensagem.' : 'Please write a short message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Save inquiry to localStorage to simulate actual backend persistence
      const newInquiry: MessageHistoryItem = {
        name,
        email,
        service,
        message,
        date: new Date().toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', {
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      try {
        const existing = localStorage.getItem('anajulia_portfolio_inquiries');
        const list = existing ? JSON.parse(existing) : [];
        list.push(newInquiry);
        localStorage.setItem('anajulia_portfolio_inquiries', JSON.stringify(list));
      } catch (err) {
        console.error("Storage error:", err);
      }

      // Reset form fields
      setName('');
      setEmail('');
      setService('full-stack');
      setMessage('');
    }, 1500);
  };

  const services = [
    { value: 'full-stack', labelPt: 'Desenvolvimento Full Stack', labelEn: 'Full Stack Development' },
    { value: 'frontend', labelPt: 'Frontend & React', labelEn: 'Frontend & React' },
    { value: 'backend', labelPt: 'Sistemas Java & APIs', labelEn: 'Java Systems & APIs' },
    { value: 'consulting', labelPt: 'Consultoria / Mentoria', labelEn: 'Consulting / Mentorship' }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-candy-dark/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      id="contact-modal-backdrop"
    >
      <div 
        className="candy-card max-w-lg w-full bg-white p-6 sm:p-8 relative shadow-[12px_12px_0px_#2d1b33]"
        onClick={(e) => e.stopPropagation()}
        id="contact-modal-box"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-candy-dark hover:bg-candy-primary hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          title={lang === 'pt' ? 'Fechar' : 'Close'}
          id="contact-modal-close-btn"
        >
          <X size={18} className="stroke-[3]" />
        </button>

        {isSuccess ? (
          /* Success Message Display */
          <div className="text-center py-8 space-y-6" id="contact-success-panel">
            <div className="w-20 h-20 bg-candy-tertiary/20 rounded-full border-4 border-candy-dark flex items-center justify-center mx-auto text-candy-primary animate-bounce">
              <CheckCircle size={40} className="stroke-[3]" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-3xl font-display font-black text-candy-dark">
                {lang === 'pt' ? 'Mensagem Enviada!' : 'Message Sent!'}
              </h3>
              <p className="text-candy-dark-muted font-medium text-sm sm:text-base max-w-xs mx-auto">
                {lang === 'pt' 
                  ? 'Obrigado pelo contato, Ana Júlia retornará sua mensagem o mais rápido possível!' 
                  : 'Thank you for reaching out, Ana Júlia will get back to you as soon as possible!'}
              </p>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="candy-btn-primary px-8 py-3.5 font-display font-black text-sm tracking-wider w-full cursor-pointer"
              id="contact-success-dismiss-btn"
            >
              {lang === 'pt' ? 'Fechar Janela' : 'Close Window'}
            </button>
          </div>
        ) : (
          /* Contact Form Input fields */
          <div className="space-y-6 text-left" id="contact-form-panel">
            {/* Header branding */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-candy-primary">
                <Sparkles size={16} className="stroke-[2.5]" />
                <span className="font-display font-black text-[10px] uppercase tracking-widest">
                  {lang === 'pt' ? 'Iniciar Conversa' : 'Start a Conversation'}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-candy-dark">
                {lang === 'pt' ? 'Contrate Ana Júlia' : 'Hire Ana Júlia'}
              </h3>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border-2 border-red-200 text-red-600 rounded-xl text-xs font-bold flex items-center gap-2">
                <AlertCircle size={16} className="flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-display font-black uppercase text-candy-dark">
                  {lang === 'pt' ? 'Nome Completo' : 'Full Name'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'pt' ? 'Seu nome' : 'Your name'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-candy-bg border-2 border-candy-dark rounded-xl font-medium text-sm focus:outline-none focus:ring-2 focus:ring-candy-primary focus:bg-white transition-colors"
                  id="contact-input-name"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-display font-black uppercase text-candy-dark">
                  {lang === 'pt' ? 'E-mail de Contato' : 'Contact Email'}
                </label>
                <input
                  type="email"
                  placeholder="seuemail@provedor.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-candy-bg border-2 border-candy-dark rounded-xl font-medium text-sm focus:outline-none focus:ring-2 focus:ring-candy-primary focus:bg-white transition-colors"
                  id="contact-input-email"
                />
              </div>

              {/* Service Interest */}
              <div className="space-y-1.5">
                <label className="text-xs font-display font-black uppercase text-candy-dark">
                  {lang === 'pt' ? 'Assunto de Interesse' : 'Area of Interest'}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 bg-candy-bg border-2 border-candy-dark rounded-xl font-medium text-sm focus:outline-none focus:ring-2 focus:ring-candy-primary focus:bg-white transition-colors"
                  id="contact-input-service"
                >
                  {services.map((item) => (
                    <option key={item.value} value={item.value}>
                      {lang === 'pt' ? item.labelPt : item.labelEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-display font-black uppercase text-candy-dark">
                  {lang === 'pt' ? 'Mensagem' : 'Message'}
                </label>
                <textarea
                  rows={3}
                  placeholder={lang === 'pt' ? 'Olá Ana Júlia, gostaria de falar sobre um projeto...' : 'Hello Ana Júlia, I would like to build a project...'}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-candy-bg border-2 border-candy-dark rounded-xl font-medium text-sm focus:outline-none focus:ring-2 focus:ring-candy-primary focus:bg-white transition-colors resize-none"
                  id="contact-input-message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="candy-btn-primary w-full py-4 font-display font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{lang === 'pt' ? 'Enviando...' : 'Sending...'}</span>
                  </>
                ) : (
                  <>
                    <Send size={16} className="stroke-[3]" />
                    <span>{lang === 'pt' ? 'Enviar Proposta' : 'Submit proposal'}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
