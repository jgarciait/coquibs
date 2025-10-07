'use client';

import React from 'react';
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

  // @return
  return <section id="como-funciona" className="lg:pt-36 pb-20 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span>¿Cómo </span>
            <span className="text-[#d2232a] relative">
              <span>Funciona</span>
              <div className="absolute -bottom-2 left-0 h-1 bg-[#d2232a] rounded-full w-full" />
            </span>
            <span>?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span>Un proceso simple y seguro en tres pasos fundamentales</span>
          </p>
        </div>

        <div className="relative">
          {/* Timeline Container */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            {timelineSteps.map((step, index) => <div key={step.id} className="flex flex-col lg:flex-row items-center">
                {/* Timeline Step Card */}
                <div className="relative bg-white/80 backdrop-blur-sm border-2 rounded-3xl p-8 w-full max-w-sm transition-all duration-500" style={{
              borderColor: step.color
            }}>
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl`} style={{
                    backgroundColor: step.color
                  }}>
                        <span>{index + 1}</span>
                      </div>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center`} style={{
                    backgroundColor: step.bgColor
                  }}>
                        <step.icon className="w-6 h-6" style={{
                      color: step.color
                    }} />
                      </div>
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
                  </div>
                </div>

                {/* Timeline Connector */}
                {index < timelineSteps.length - 1 && <div className="flex items-center justify-center lg:mx-8 my-8 lg:my-0">
                    <div className="w-12 h-12 bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-6 h-6 text-gray-600 lg:rotate-0 rotate-90" />
                    </div>
                  </div>}
              </div>)}
          </div>
        </div>

        
      </div>
    </section>;
};