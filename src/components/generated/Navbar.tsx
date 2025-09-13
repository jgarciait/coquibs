'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' }
];

// @component: Navbar
export const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
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
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
       <div className="flex justify-center">
         <nav className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full mt-6 px-8 py-3 shadow-2xl shadow-[#d2232a]/20 ring-1 ring-inset ring-white/20 glow-effect">
          <div className="flex items-center space-x-8">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#d2232a] to-[#2381d2] rounded-lg shadow-lg shadow-[#d2232a]/30"></div>
              <span className="text-lg font-bold text-white">Autotransfusión</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.slice(0, 4).map(link => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  whileHover={{
                    textShadow: '0 0 8px rgba(210, 35, 42, 0.8)',
                    scale: 1.05
                  }}
                  className="relative text-white hover:text-white transition-all duration-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d2232a] focus:ring-offset-2 focus:ring-offset-transparent rounded-md"
                >
                  <span>{link.label}</span>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d2232a] origin-left shadow-sm shadow-[#d2232a]/50"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Contact Button */}
            <motion.a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contacto');
              }}
              whileHover={{
                backgroundColor: 'white',
                color: '#d2232a',
                scale: 1.02,
                boxShadow: '0 0 20px rgba(210, 35, 42, 0.6)'
              }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-[#d2232a] text-white font-medium rounded-full border border-[#d2232a] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d2232a] focus:ring-offset-2 focus:ring-offset-transparent shadow-lg shadow-[#d2232a]/40"
            >
              Contacto
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#d2232a] focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-2 space-y-2">
                  {navLinks.map(link => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      whileHover={{
                        backgroundColor: 'rgba(210, 35, 42, 0.1)',
                        x: 4
                      }}
                      className="block px-4 py-3 text-white hover:text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d2232a] focus:ring-offset-2 focus:ring-offset-transparent"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
};