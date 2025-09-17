'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Heart, Shield, Users, Award, Activity, Droplet, Sun, Moon } from 'lucide-react';
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const CounterAnimation = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (count < value) {
        setCount(count + (value / 30));
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [count, value]);
  
  return <span>{Math.floor(count)}{suffix}</span>;
};
const DoubleDroplet = ({ className }: { className?: string }) => (
  <div className="relative">
    <Droplet className={className} />
    <Droplet className={`${className?.replace('w-6 h-6', 'w-4 h-4')} absolute -top-1 -right-1`} />
  </div>
);

const autotransfusionIcons = [{
  id: 'icon-1',
  Icon: Heart,
  position: {
    top: '85%',
    left: '25%'
  }
}, {
  id: 'icon-5p',
  Icon: Award,
  position: {
    bottom: '60%',
    right: '16%'
  }
}, {
  id: 'icon-6',
  Icon: Activity,
  position: {
    top: '27%',
    left: '45%'
  }
}, {
  id: 'icon-7',
  Icon: DoubleDroplet,
  position: {
    top: '80%',
    left: '55%'
  }
}] as any[];

// @component: HeroSection
export const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // @return
  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Theme Toggle Button - Top Right Corner */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-gradient-to-b from-white/95 to-white/60 backdrop-blur-md border border-[#ffffff]/100 ring-1 ring-inset ring-white/20 text-[#00217a] hover:text-[#00217a]/80 transition-all duration-300 shadow-lg"
        style={{boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)'}}
        aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.button>
      {/* Background Gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 20%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0.25) 80%, rgba(255,255,255,0) 100%)'
          }}
        />
      </motion.div>

      {/* Floating Icons */}
      {autotransfusionIcons.map((item, index) => <motion.div key={item.id} initial={{
      opacity: 0,
      scale: 0
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      delay: 1 + index * 0.2,
      duration: 0.5
    }} className={`absolute z-[9999] hidden lg:block`} style={item.position}>
          <motion.div 
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }} 
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }} 
            whileHover={{
              scale: 1.1,
              rotate: 15,
              y: -5
            }}
            className="p-3 bg-white/60 backdrop-blur-sm border border-[#d2232a] rounded-full shadow-lg cursor-pointer"
            style={{
              cursor: 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'10\' fill=\'%23ff9999\' stroke=\'%23660000\' stroke-width=\'3\'/%3E%3C/svg%3E") 12 12, pointer'
            }}
          >
            <item.Icon className="w-6 h-6 text-[#d2232a]" />
          </motion.div>
        </motion.div>)}


      {/* Doctor Image - Right Side */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 right-0 z-20 hidden lg:block"
      >
        <img 
          src="/WomanSurgeon.png" 
          alt="Doctora profesional" 
          className="h-screen w-auto object-cover object-bottom"
        />
      </motion.div>

      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-8">
            {/* Animated Pill Banner */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-white/100 to-white/50 backdrop-blur-sm border border-[#ffffff] rounded-full">
              <motion.div animate={{
              scale: [1, 1.2, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }}>
              <Droplet className="w-4 h-4 text-[#d2232a] fill-current" />
            </motion.div>
              <span className="text-sm font-medium">Tecnología Médica Avanzada</span>
              <Heart className="w-4 h-4 text-[#d2232a] fill-current" />
            </motion.div>

            {/* Animated Headline */}
            <div className="space-y-4 max-w-lg">
              <motion.h1 initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.6
            }} className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                <span>Autotransfusión</span>
                <div className="relative inline-block">
                  <span className="text-[#d2232a]">Segura</span>
                  <motion.div initial={{
                  width: 0
                }} animate={{
                  width: '100%'
                }} transition={{
                  duration: 1,
                  delay: 1.2
                }} className="absolute -bottom-2 left-0 h-1 bg-[#d2232a] rounded-full"></motion.div>
                </div>
                
                <span className="text-black"> y Eficaz</span>
              </motion.h1>

              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.8
            }} className="text-xl text-gray-600 max-w-sm">
                <span>Revolucionamos los procedimientos quirúrgicos con tecnología de autotransfusión que garantiza la reducción de riesgos y mejora la recuperación del paciente.</span>
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 1
          }} className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 20px 40px rgba(210, 35, 42, 0.4)"
                }} 
                whileTap={{
                  scale: 0.95
                }} 
                className="group px-4 py-2.5 text-white rounded-full font-semibold text-lg transition-all duration-500 flex items-center justify-center space-x-2 relative overflow-hidden" 
                style={{
                  background: 'linear-gradient(45deg, #d2232a, #b91c1c)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0)',
                  filter: 'drop-shadow(0 10px 15px rgba(210, 35, 42, 0.5))'
                }}
              >
                <span className="relative z-10">Conocer Más</span>
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="w-5 h-5 relative z-10" />
                </motion.div>
                <div 
                  className="absolute inset-0 rounded-full blur-[15px] -z-10"
                  style={{
                    background: 'linear-gradient(45deg, #d2232a, #b91c1c)',
                    opacity: 0.5,
                    top: '10px'
                  }}
                />
              </motion.button>

              <motion.button 
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 20px 40px rgba(35, 129, 210, 0.4)"
                }} 
                whileTap={{
                  scale: 0.95
                }} 
                className="group px-4 py-2.5 text-white rounded-full font-semibold text-lg transition-all duration-500 flex items-center justify-center space-x-2 relative overflow-hidden" 
                style={{
                  background: 'linear-gradient(45deg, #2381d2, #1e40af)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0)',
                  filter: 'drop-shadow(0 10px 15px rgba(35, 129, 210, 0.5))'
                }}
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Play className="w-5 h-5 text-white relative z-10" />
                </motion.div>
                <span className="relative z-10">Ver Demo</span>
                <div 
                  className="absolute inset-0 rounded-full blur-[15px] -z-10"
                  style={{
                    background: 'linear-gradient(45deg, #2381d2, #1e40af)',
                    opacity: 0.5,
                    top: '10px'
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative">
            <div className="relative">

              {/* Floating Stats */}
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 1.5,
              duration: 0.5
            }} className="absolute top-5 left-1 z-10 bg-white/80 backdrop-blur-sm border border-[#ffffff] rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#2381d2]/10 border border-[#2381d2] rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#2381d2]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      <span>100%</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      <span>Seguridad</span>
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

      </div>

      {/* Recovery Box - Positioned at bottom of hero section */}
      <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 1.7,
        duration: 0.5
      }} className="absolute bottom-20 right-20 z-50 bg-white/80 backdrop-blur-sm border border-[#ffffff] rounded-2xl p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-[#d2232a]/10 border border-[#d2232a] rounded-full flex items-center justify-center">
            <Activity className="w-6 h-6 text-[#d2232a]" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">
              <span>100%</span>
            </p>
            <p className="text-sm text-gray-600">
              <span>Recuperación</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>;
};