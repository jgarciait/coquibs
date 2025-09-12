'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Settings, ArrowRight, Heart } from 'lucide-react';
const timelineSteps = [{
  id: 'step-1',
  title: 'Recolectar',
  description: 'La sangre perdida durante la cirugía se recolecta mediante sistemas especializados de aspiración.',
  icon: Droplets,
  color: '#d2232a',
  bgColor: '#d2232a/10'
}, {
  id: 'step-2',
  title: 'Procesar',
  description: 'La sangre se filtra, lava y concentra eliminando impurezas y coágulos para su purificación.',
  icon: Settings,
  color: '#2381d2',
  bgColor: '#2381d2/10'
}, {
  id: 'step-3',
  title: 'Reinfundir',
  description: 'La sangre procesada se reinfunde al paciente de manera segura e inmediata durante la operación.',
  icon: Heart,
  color: '#233e90',
  bgColor: '#233e90/10'
}] as any[];

// @component: HowItWorksSection
export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % timelineSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // @return
  return <section id="como-funciona" className="py-20 px-4 bg-gray-50/30 relative overflow-hidden">
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
            <span>¿Cómo </span>
            <span className="text-[#d2232a] relative">
              <span>Funciona</span>
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span>Un proceso simple y seguro en tres pasos fundamentales</span>
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Container */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            {timelineSteps.map((step, index) => <div key={step.id} className="flex flex-col lg:flex-row items-center">
                {/* Timeline Step Card */}
                <motion.div initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.2,
              duration: 0.6
            }} whileHover={{
              scale: 1.05
            }} className={`relative bg-white/80 backdrop-blur-sm border-2 rounded-3xl p-8 w-full max-w-sm transition-all duration-500 ${activeStep === index ? `border-[${step.color}] shadow-2xl` : 'border-gray-200 hover:border-gray-300'}`} style={{
              boxShadow: activeStep === index ? `0 20px 40px ${step.color}20, 0 0 0 1px ${step.color}30` : undefined
            }}>
                  {/* Glow Effect */}
                  {activeStep === index && <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} className="absolute inset-0 rounded-3xl" style={{
                background: `radial-gradient(circle at center, ${step.color}10 0%, transparent 70%)`,
                filter: 'blur(20px)'
              }} />}

                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.div animate={activeStep === index ? {
                    scale: [1, 1.1, 1]
                  } : {}} transition={{
                    duration: 2,
                    repeat: Infinity
                  }} className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl`} style={{
                    backgroundColor: step.color
                  }}>
                        <span>{index + 1}</span>
                      </motion.div>
                      <motion.div animate={activeStep === index ? {
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  } : {}} transition={{
                    duration: 3,
                    repeat: Infinity
                  }} className={`w-12 h-12 rounded-full flex items-center justify-center`} style={{
                    backgroundColor: step.bgColor
                  }}>
                        <step.icon className="w-6 h-6" style={{
                      color: step.color
                    }} />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        <span>{step.title}</span>
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        <span>{step.description}</span>
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-6">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div initial={{
                      width: 0
                    }} animate={{
                      width: activeStep === index ? '100%' : '0%'
                    }} transition={{
                      duration: 3
                    }} className="h-2 rounded-full" style={{
                      backgroundColor: step.color
                    }} />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Connector */}
                {index < timelineSteps.length - 1 && <motion.div initial={{
              opacity: 0,
              scale: 0
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.2 + 0.3,
              duration: 0.5
            }} className="flex items-center justify-center lg:mx-8 my-8 lg:my-0">
                    <motion.div animate={{
                x: [0, 10, 0],
                opacity: [0.5, 1, 0.5]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }} className="w-12 h-12 bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-6 h-6 text-gray-600 lg:rotate-0 rotate-90" />
                    </motion.div>
                  </motion.div>}
              </div>)}
          </div>

          {/* Manual Step Controls */}
          <div className="flex justify-center mt-12 space-x-4">
            {timelineSteps.map((_, index) => <button key={index} onClick={() => setActiveStep(index)} className={`w-4 h-4 rounded-full transition-all duration-300 ${activeStep === index ? 'bg-[#d2232a] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} />)}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.8
      }} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-6">
            <motion.p animate={{
            scale: [1, 1.05, 1]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="text-3xl font-bold text-[#d2232a] mb-2">
              <span>15 min</span>
            </motion.p>
            <p className="text-gray-600">
              <span>Tiempo promedio del proceso</span>
            </p>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-6">
            <motion.p animate={{
            scale: [1, 1.05, 1]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5
          }} className="text-3xl font-bold text-[#2381d2] mb-2">
              <span>95%</span>
            </motion.p>
            <p className="text-gray-600">
              <span>Eficiencia de recuperación</span>
            </p>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-6">
            <motion.p animate={{
            scale: [1, 1.05, 1]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1
          }} className="text-3xl font-bold text-[#233e90] mb-2">
              <span>100%</span>
            </motion.p>
            <p className="text-gray-600">
              <span>Compatibilidad garantizada</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
};