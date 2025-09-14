'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home', hoverColor: 'bg-[#2381d2]/40' },
  { href: '#beneficios', label: 'Beneficios', hoverColor: 'bg-[#d2232a]/40' },
  { href: '#servicios', label: 'Servicios', hoverColor: 'bg-[#2381d2]/40' }
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
         <nav className="bg-gradient-to-b from-white/95 to-white/60 backdrop-blur-md border border-[#ffffff]/100 rounded-full mt-6 px-8 py-3 ring-1 ring-inset ring-white/20 glow-effect" style={{boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4'}}>
          <div className="flex items-center space-x-8">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Logo" className="w-11 h-11 object-contain" />
              <div className="text-left">
                <div className="text-xl font-black text-[#d2232a]">Coquí Blood Salvage Inc.</div>
                <div className="text-sm font-bold text-[#00217a] text-right">CELL-SAVER</div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="hidden md:block w-px h-12 bg-[#00217a]"></div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map(link => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: link.hoverColor.includes('2381d2') ? 'rgba(35, 129, 210, 0.4)' : 'rgba(210, 35, 42, 0.4)'
                  }}
                  transition={{ duration: 0.05 }}
                  className="relative text-black hover:text-white transition-all duration-75 px-4 py-2 focus:outline-none rounded-full"
                >
                  <span className="relative z-10">{link.label}</span>
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
                scale: 1.05,
                backgroundColor: '#b01e24',
                color: '#ffffff'
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-b from-[#ff6b7a] to-[#b01e24] text-white font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d2232a] focus:ring-offset-2 focus:ring-offset-transparent" style={{boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)'}}
            >
              Contacto
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-black hover:bg-white/10 rounded-lg transition-colors duration-200 focus:outline-none"
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
                      className="block px-4 py-3 text-black hover:text-black rounded-lg transition-all duration-300 focus:outline-none"
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