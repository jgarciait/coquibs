'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import Image from 'next/image';

// @component: AutotransfusionIntroSection
export const AutotransfusionIntroSection = () => {
  // @return
  return <section id="que-es" className="lg:pt-40 px-4 pb-20 bg-white relative overflow-hidden">
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
            <div className="relative h-[600px] w-full overflow-hidden rounded-l-3xl bg-white" style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)' }}>
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
        }} className="bg-white rounded-r-3xl p-8 lg:p-12 h-[600px] flex flex-col justify-center relative" style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)' }}>
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
                <div className="flex flex-col items-center mb-8">
                  <motion.div 
                    initial={{
                      opacity: 0,
                      scale: 0,
                      rotate: -180,
                      y: 0
                    }} 
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0
                    }} 
                    viewport={{
                      once: true
                    }} 
                    animate={{
                      y: [0, -10, 0]
                    }}
                    transition={{
                      opacity: { delay: 0.2, duration: 0.6 },
                      scale: { delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 },
                      rotate: { delay: 0.2, duration: 0.6 },
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    className="w-16 h-16 bg-[#d2232a] rounded-full flex items-center justify-center shadow-lg mb-4"
                  >
                    <Activity className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center flex justify-center items-center flex-wrap gap-2">
                  <span>¿Qué es la</span>
                  <span className="text-[#d2232a] relative inline-block">
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
                  }} className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-[#d2232a] rounded-full" />
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
            }} className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                <span>Autotransfusión es un procedimiento donde se utiliza una máquina llamada &ldquo;cell saver&rdquo; (salvadora de células) donde se recoge la sangre que el paciente pierde durante la cirugía, se procesa o se &ldquo;limpia&rdquo; y se vuelve a introducir al paciente si es necesario.</span>
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
            }} className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
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