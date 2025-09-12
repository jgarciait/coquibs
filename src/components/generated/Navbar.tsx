'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';
const navLinks = [{
  href: '#inicio',
  label: 'Inicio'
}, {
  href: '#que-es',
  label: 'Qué es'
}, {
  href: '#beneficios',
  label: 'Beneficios'
}, {
  href: '#procedimientos',
  label: 'Procedimientos'
}] as any[];

// @component: Navbar
export const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState('#inicio');
  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    if (typeof document !== 'undefined') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  // @return
  return <motion.header initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.5,
    ease: 'easeOut'
  }} className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-gray-200/80">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" onClick={() => handleLinkClick('#inicio')} className="flex items-center space-x-2 text-2xl font-bold text-gray-900">
            <HeartPulse className="w-8 h-8 text-[#d2232a]" />
            <div>
              <span>Auto</span>
              <span className="text-[#d2232a]">transfusión</span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.href} href={link.href} onClick={e => {
            e.preventDefault();
            handleLinkClick(link.href);
          }} className={`relative text-gray-700 hover:text-[#d2232a] transition-colors duration-300 ${activeLink === link.href ? 'text-[#d2232a]' : ''}`}>
                <span>{link.label}</span>
                {activeLink === link.href && <motion.div layoutId="active-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d2232a]" />}
              </a>)}
          </div>

          <motion.a href="#contacto" onClick={e => {
          e.preventDefault();
          handleLinkClick('#contacto');
        }} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="hidden md:inline-block px-6 py-2 text-base font-semibold text-[#d2232a] border-2 border-[#d2232a] rounded-full transition-colors duration-300 hover:bg-[#d2232a] hover:text-white">
            <span>Contacto</span>
          </motion.a>
        </div>
      </nav>
    </motion.header>;
};