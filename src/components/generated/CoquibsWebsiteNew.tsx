'use client';

import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { BenefitsSection } from './BenefitsSection';
import { ServiciosSection } from './ServiciosSection';
import { PlanesAdicionalesSection } from './PlanesAdicionalesSection';
import { ContactoNuevoSection } from './ContactoNuevoSection';

// @component: CoquibsWebsiteNew
export const CoquibsWebsiteNew = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'beneficios-adicionales', 'servicios', 'contacto-nuevo'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // @return
  return <div className={`min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300`}>
      <Header 
        activeSection={activeSection} 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={toggleDarkMode} 
        onScrollToSection={scrollToSection} 
      />

      <main>
        <HeroSection />
        <BenefitsSection />
        <ServiciosSection />
        <PlanesAdicionalesSection />
        <ContactoNuevoSection />
      </main>

      <footer className="bg-slate-900 dark:bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-red-400 transition-colors">
                <span>Inicio</span>
              </button>
              <button onClick={() => scrollToSection('beneficios-adicionales')} className="hover:text-red-400 transition-colors">
                <span>Beneficios</span>
              </button>
              <button onClick={() => scrollToSection('servicios')} className="hover:text-red-400 transition-colors">
                <span>Servicios</span>
              </button>
              <button onClick={() => scrollToSection('contacto-nuevo')} className="hover:text-red-400 transition-colors">
                <span>Contacto</span>
              </button>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400">
                <span>© 2024 Coquí Blood Services. Todos los derechos reservados.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
