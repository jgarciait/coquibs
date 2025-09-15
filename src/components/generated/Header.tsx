'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onScrollToSection: (sectionId: string) => void;
}

// @component: Header
export const Header = ({
  activeSection,
  isDarkMode,
  onToggleDarkMode,
  onScrollToSection
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = [{
    id: 'inicio',
    label: 'Inicio'
  }, {
    id: 'beneficios-adicionales',
    label: 'Beneficios'
  }, {
    id: 'servicios',
    label: 'Servicios'
  }, {
    id: 'contacto-nuevo',
    label: 'Contacto'
  }] as any[];
  
  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  // @return
  return <motion.header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700" initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.3
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🐸</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              Coquí Blood Services
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map(item => <button key={item.id} onClick={() => handleNavClick(item.id)} className={`relative px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.id ? 'text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400'}`}>
                <span>{item.label}</span>
                {activeSection === item.id && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 dark:bg-red-400" layoutId="activeSection" transition={{
              type: "spring",
              stiffness: 380,
              damping: 30
            }} />}
              </button>)}
          </nav>

          <div className="flex items-center space-x-4">
            <button onClick={onToggleDarkMode} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}>
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300" aria-label="Abrir menú de navegación">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && <motion.div className="md:hidden border-t border-slate-200 dark:border-slate-700 py-4" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.2
      }}>
            <nav className="flex flex-col space-y-2">
              {navigationItems.map(item => <button key={item.id} onClick={() => handleNavClick(item.id)} className={`text-left px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.id ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20' : 'text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400'}`}>
                  <span>{item.label}</span>
                </button>)}
            </nav>
          </motion.div>}
      </div>
    </motion.header>;
};
