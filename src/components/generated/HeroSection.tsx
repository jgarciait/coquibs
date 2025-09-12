'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Heart, Shield, Zap, Users, Award, Activity } from 'lucide-react';
const autotransfusionIcons = [{
  id: 'icon-1',
  Icon: Heart,
  position: {
    top: '20%',
    left: '15%'
  }
}, {
  id: 'icon-2',
  Icon: Shield,
  position: {
    top: '30%',
    right: '20%'
  }
}, {
  id: 'icon-3',
  Icon: Zap,
  position: {
    bottom: '25%',
    left: '10%'
  }
}, {
  id: 'icon-4',
  Icon: Users,
  position: {
    top: '15%',
    right: '10%'
  }
}, {
  id: 'icon-5',
  Icon: Award,
  position: {
    bottom: '20%',
    right: '15%'
  }
}, {
  id: 'icon-6',
  Icon: Activity,
  position: {
    top: '40%',
    left: '8%'
  }
}] as any[];

// @component: HeroSection
export const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  // @return
  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline onLoadedData={() => setIsVideoLoaded(true)} className="w-full h-full object-cover opacity-20">
          {/* Placeholder video source removed to prevent 404 errors */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/50"></div>
      </div>

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
    }} className="absolute z-10 hidden lg:block" style={item.position}>
          <motion.div animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0]
      }} transition={{
        duration: 3 + index * 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="p-3 bg-white/20 backdrop-blur-sm border border-[#d2232a]/30 rounded-full">
            <item.Icon className="w-6 h-6 text-[#d2232a]" />
          </motion.div>
        </motion.div>)}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
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
          }} className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-[#d2232a]/10 to-[#2381d2]/10 backdrop-blur-sm border border-[#d2232a]/20 rounded-full">
              <motion.div animate={{
              scale: [1, 1.2, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }} className="w-2 h-2 bg-[#d2232a] rounded-full"></motion.div>
              <span className="text-sm font-medium text-gray-700">
                <span>Tecnología Médica Avanzada</span>
              </span>
              <Heart className="w-4 h-4 text-[#d2232a]" />
            </motion.div>

            {/* Animated Headline */}
            <div className="space-y-4">
              <motion.h1 initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.6
            }} className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span>Haciendo las </span>
                <div className="relative inline-block">
                  <span className="text-[#d2232a]">Cirugías</span>
                  <motion.div initial={{
                  width: 0
                }} animate={{
                  width: '100%'
                }} transition={{
                  duration: 1,
                  delay: 1.2
                }} className="absolute -bottom-2 left-0 h-1 bg-[#d2232a] rounded-full"></motion.div>
                </div>
                <br />
                <span>Más Seguras</span>
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
            }} className="text-xl text-gray-600 max-w-lg">
                <span>Revoluciona la medicina con autotransfusión: usa tu propia sangre para cirugías más seguras y recuperación más rápida.</span>
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
              <motion.button whileHover={{
              scale: 1.05,
              backgroundColor: '#b01e24',
              color: '#ffffff'
            }} whileTap={{
              scale: 0.95
            }} className="group px-8 py-4 bg-[#d2232a] text-white rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Conocer Más</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button whileHover={{
              scale: 1.05,
              backgroundColor: '#2381d2',
              color: '#ffffff',
              borderColor: '#2381d2'
            }} whileTap={{
              scale: 0.95
            }} className="group px-8 py-4 bg-transparent text-[#2381d2] border-2 border-[#2381d2] rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Ver Demo</span>
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
              {/* Glass Card Overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-[#d2232a]/20 rounded-3xl shadow-2xl"></div>
              
              {/* Image Placeholder */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 min-h-[500px] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-white/50 backdrop-blur-sm border border-[#d2232a]/30 rounded-full flex items-center justify-center">
                    <Heart className="w-16 h-16 text-[#d2232a]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-800">
                      <span>Equipo Médico</span>
                    </h3>
                    <p className="text-gray-600">
                      <span>Tecnología de Autotransfusión</span>
                    </p>
                  </div>
                </div>
              </div>

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
            }} className="absolute -top-6 -left-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#d2232a]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#d2232a]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      <span>99.9%</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      <span>Seguridad</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 1.7,
              duration: 0.5
            }} className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#2381d2]/10 rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-[#2381d2]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      <span>50%</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      <span>Recuperación</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};