'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import Image from 'next/image';

// @component: AutotransfusionIntroSection
export const AutotransfusionIntroSection = () => {
  // @return
  return <section id="que-es" className="lg:pt-28 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
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
            <div className="relative h-[600px] w-full overflow-hidden rounded-l-3xl bg-white shadow-2xl">
              <Image 
                src="/Image.png"
                alt="Tecnología Médica Avanzada"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
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
        }} className="bg-white border-4 border-[#d2232a] rounded-r-3xl p-8 lg:p-12 shadow-2xl h-[600px] flex flex-col justify-center relative">
            <motion.div initial={{
              opacity: 0,
              scale: 0
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }} className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#d2232a] rounded-full flex items-center justify-center shadow-lg">
              <Activity className="w-8 h-8 text-white" />
            </motion.div>

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
              delay: 0.3
            }}>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
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
                <span>Este procedimiento ayuda disminuir el riezgo de contraer enfermedades que suelen ser resultado de transfusiones de sangre en operaciones.</span>
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
                
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>;
};