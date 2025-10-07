'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Heart, Settings, Sun, Moon } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '#que-es', label: 'Inicio', hoverColor: 'bg-[#2381d2]/40', icon: Home },
  { href: '#beneficios', label: 'Beneficios', hoverColor: 'bg-[#d2232a]/40', icon: Heart },
  { href: '#servicios', label: 'Servicios', hoverColor: 'bg-[#2381d2]/40', icon: Settings }
];

// @component: Navbar
export const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState('#que-es');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['que-es', 'beneficios', 'servicios', 'contacto'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink('#' + section);
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
      className="fixed top-0 left-0 right-0 z-[9999] w-full"
    >
       <div className="flex justify-center">
         <nav className="bg-gradient-to-b from-white/95 to-white/60 backdrop-blur-md border border-[#ffffff]/100 rounded-full mt-6 px-8 py-1 ring-1 ring-inset ring-white/20 glow-effect" style={{boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4'}}>
          <div className="flex items-center space-x-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Logo" className="w-[80px] h-[50px] object-contain" width={80} height={50} />
              <div className="flex flex-col justify-center">
                <div className="text-3xl font-black text-[#d2232a] mt-4" style={{fontFamily: "'Eurostile', sans-serif", fontStyle: 'oblique', fontWeight: '700', letterSpacing: '0.08em'}}>Coquí Blood Salvage Inc.</div>
                <div className=" font-bold text-xs text-[#00217a] text-right" style={{fontFamily: "'Eurostile', sans-serif", fontStyle: 'oblique', letterSpacing: '0.2em'}}>CELL-SAVER</div>
              </div>
            </div>



            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 ml-20">
              {navLinks.map(link => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  whileHover={{
                    scale: 1.05
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-[#00217a] hover:text-[#00217a]/80 transition-all duration-200 px-3 py-2 font-medium tracking-wide relative group"
                >
                  <span className="relative z-10">{link.label}</span>
                  {activeLink === link.href && <motion.div className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#d2232a]" layoutId="activeNavbar" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#d2232a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
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
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex items-center px-6 py-2.5 text-white font-semibold rounded-full transition-all duration-500 focus:outline-none relative overflow-hidden" 
              style={{
                background: 'linear-gradient(45deg, #d2232a, #b91c1c)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0)',
                filter: 'drop-shadow(0 10px 15px rgba(210, 35, 42, 0.5))'
              }}
            >
              <span className="relative z-10">Contacto</span>
              <div 
                className="absolute inset-0 rounded-full blur-[15px] -z-10"
                style={{
                  background: 'linear-gradient(45deg, #d2232a, #b91c1c)',
                  opacity: 0.5,
                  top: '10px'
                }}
              />
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
                        x: 4,
                        scale: 1.05
                      }}
                      className="block px-4 py-3 text-[#00217a] hover:text-[#00217a]/80 rounded-lg transition-all duration-300 focus:outline-none tracking-wide font-medium relative group"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#d2232a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
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