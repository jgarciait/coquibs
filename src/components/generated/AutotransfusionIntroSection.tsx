'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Droplets, Activity } from 'lucide-react';

// @component: AutotransfusionIntroSection
export const AutotransfusionIntroSection = () => {
  // @return
  return <section id="que-es" className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span>¿Qué es la </span>
            <span className="text-[#d2232a] relative">
              <span>Autotransfusión</span>
              <motion.div initial={{
              width: 0
            }} whileInView={{
              width: '100%'
            }} viewport={{
              once: true
            }} transition={{
              duration: 1,
              delay: 0.5
            }} className="absolute -bottom-2 left-0 h-1 bg-[#d2232a] rounded-full" />
            </span>
            <span>?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image Placeholder */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <div className="relative bg-white border-2 border-[#d2232a]/20 rounded-3xl p-8 shadow-xl">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl min-h-[400px] flex items-center justify-center">
                <div className="text-center space-y-6">
                  <motion.div animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }} transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} className="w-24 h-24 mx-auto bg-[#d2232a]/10 backdrop-blur-sm border border-[#d2232a]/30 rounded-full flex items-center justify-center">
                    <Droplets className="w-12 h-12 text-[#d2232a]" />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      <span>Proceso de Autotransfusión</span>
                    </h3>
                    <p className="text-gray-600">
                      <span>Recolección y procesamiento</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Medical Icons */}
              <motion.div initial={{
              opacity: 0,
              scale: 0
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5,
              duration: 0.5
            }} className="absolute -top-4 -right-4 bg-white border border-[#2381d2]/20 rounded-full p-3 shadow-lg">
                <Heart className="w-6 h-6 text-[#2381d2]" />
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              scale: 0
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.7,
              duration: 0.5
            }} className="absolute -bottom-4 -left-4 bg-white border border-[#233e90]/20 rounded-full p-3 shadow-lg">
                <Shield className="w-6 h-6 text-[#233e90]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Text Panel */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 lg:p-12">
            <div className="space-y-6">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4
            }} className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#d2232a]/10 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[#d2232a]" />
                </div>
                <h3 className="text-2xl font-bold text-black-900">
                  <span>Tecnología Médica Avanzada</span>
                </h3>
              </motion.div>

              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.6
            }} className="text-lg text-gray-700 leading-relaxed mb-6">
                <span>Autotransfusión es un procedimiento donde se utiliza una máquina llamada “cell saver” (salvadora de células) donde se recoge la sangre que el paciente pierde durante la cirugía, se procesa o se “limpia” y se vuelve a introducir al paciente si es necesario.</span>
              </motion.p>

              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.8
            }} className="text-lg text-gray-700 leading-relaxed mb-8">
                <span>Este procedimiento ayud a disminuir el riezgo de contraer enfermedades que suelen ser resultado de transfusiones de sangre en operaciones.</span>
              </motion.p>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 1
            }} className="grid grid-cols-2 gap-4">
                <div className="bg-[#d2232a]/5 border border-[#d2232a]/20 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-[#d2232a] mb-1">
                    <span>100%</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    <span>Compatible</span>
                  </p>
                </div>
                <div className="bg-[#2381d2]/5 border border-[#2381d2]/20 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-[#2381d2] mb-1">
                    <span>0%</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    <span>Rechazo</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>;
};