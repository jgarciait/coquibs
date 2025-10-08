'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Activity, Heart, Zap, Bone, Users } from 'lucide-react';

// Example data structure - customize as needed
const surgerySpecialties = [
  {
    id: 'general',
    name: 'Cirugías Generales',
    icon: Activity,
    procedures: [
      'Resecciones hepáticas',
      'Puentes para esplenectomía',
      'Cirugía Vascular',
      'Aneurisma',
      'Trasplantes de Hígado'
    ]
  },
  {
    id: 'obgyn',
    name: 'Obstetricia y Ginecología',
    icon: Heart,
    procedures: [
      'Complicaciones Hemorrágicas del embarazo',
      'Embarazo Ectópico',
      'Histerectomía'
    ]
  },
  {
    id: 'urology',
    name: 'Urología',
    icon: Zap,
    procedures: [
      'Prostatectomía Radical'
    ]
  },
  {
    id: 'orthopedic',
    name: 'Ortopedia',
    icon: Bone,
    procedures: [
      'Reducción abierta y fijación de fracturas de pelvis',
      'Reemplazo de cadera',
      'Reemplazo de rodilla',
      'Escoliosis Corrección',
      'Posterior Anterior Spinal Fusion'
    ]
  }
];

export const ClonedSurgerySection = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [showAll, setShowAll] = useState(false);

  const activeSpecialty = surgerySpecialties.find(spec => spec.id === activeTab);

  return (
    <section id="cirugias-recomendadas" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-24"
        >
          {/* Full-width section with gradient background */}
          <div 
            className="relative -mx-[50vw] left-1/2 right-1/2 w-screen px-4 sm:px-6 lg:px-8 py-16"
            style={{
              background: `radial-gradient(
                ellipse 90% 50% at 50% 40%,
                #c7d7ee 0%,
                #bcd0eb 25%,
                rgba(199,215,238,0.9) 40%,
                #eef5fd 55%,
                #ffffff 70%,
                #ffffff 100%
              )`
            }}
          >
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#00217a] drop-shadow-sm">
                  Se recomienda la autotransfusión en las siguientes cirugías
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                </p>
              </motion.div>

              {/* Two Column Layout: Content Left, img Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                
                {/* Right Column - Surgery Image (Mobile First) */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="w-full lg:order-2"
                >
                  <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-white/30 overflow-hidden shadow-xl">
                    <div className="aspect-[5/4] relative">
                      {/* Replace with your image or fallback */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center">
                        <div className="text-center p-6 lg:p-8">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-20 h-20 mx-auto mb-6 bg-[#00217a] rounded-full flex items-center justify-center shadow-lg"
                          >
                            <Users className="w-10 h-10 text-white" />
                          </motion.div>
                          <h3 className="text-[#00217a] font-bold text-lg lg:text-xl mb-2">
                            Equipo Médico Especializado
                          </h3>
                          <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                            Profesionales certificados en<br/>
                            procedimientos de autotransfusión<br/>
                            con tecnología de vanguardia
                          </p>
                        </div>
                      </div>
                      {/* Overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00217a]/20 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Left Column - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="lg:order-1"
                >
                  {/* Tab Navigation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap gap-2 mb-8"
                  >
                    {surgerySpecialties.map((specialty, index) => (
                      <motion.button
                        key={`tab-${specialty.id}`}
                        onClick={() => setActiveTab(specialty.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ 
                          scale: 0.98,
                          transition: { duration: 0.1 }
                        }}
                        className={`
                          relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                          ${activeTab === specialty.id 
                            ? 'bg-[#00217a] text-white shadow-lg'  
                            : 'bg-white text-[#00217a] hover:bg-white/90 shadow-sm border border-white/50'
                          }
                        `}
                      >
                        {/* Ripple effect on click */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          initial={false}
                          animate={{
                            background: activeTab === specialty.id ? 'rgba(0, 33, 122, 0.1)' : 'transparent'
                          }}
                        />
                        <span className="relative z-10">{specialty.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* Glassmorphic Content Panel */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="bg-white rounded-3xl shadow-xl border border-white/20 p-6 lg:p-8 relative overflow-hidden">
                      {/* Subtle inner border effect */}
                      <div className="absolute inset-0 rounded-3xl border border-white/30 pointer-events-none" />
                      
                      {/* Specialty Header */}
                      <motion.div
                        key={`header-${activeTab}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center space-x-4 mb-6"
                      >
                        {/* Icon Badge */}
                        {activeSpecialty && (
                          <>
                            <motion.div
                              whileHover={{ scale: 1.03 }}
                              className="w-12 h-12 bg-gradient-to-br from-[#00217a] to-[#2381d2] rounded-full flex items-center justify-center shadow-lg"
                            >
                              <activeSpecialty.icon className="w-6 h-6 text-white" />
                            </motion.div>
                            
                            {/* Specialty Title */}
                            <div>
                              <h3 className="text-xl font-bold text-[#00217a] leading-tight">
                                {activeSpecialty.name}
                              </h3>
                            </div>
                          </>
                        )}
                      </motion.div>

                      {/* Procedures List */}
                      <motion.div
                        key={`content-${activeTab}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="space-y-3"
                      >
                        {activeSpecialty?.procedures.map((procedure, index) => (
                          <motion.div
                            key={`procedure-${activeTab}-${index}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-center space-x-3 py-2"
                          >
                            <CheckCircle className="w-5 h-5 text-[#2381d2] flex-shrink-0" />
                            <span className="text-slate-700 text-base leading-relaxed">
                              {procedure}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Ver todas button */}
                      <div className="flex justify-end mt-6 pt-4 border-t border-white/20">
                        <motion.button
                          onClick={() => setShowAll(!showAll)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="text-[#2381d2] hover:text-[#00217a] font-medium text-sm transition-colors duration-200 lg:hidden"
                        >
                          {showAll ? 'Ver menos' : 'Ver todas'}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile Accordion - All Specialties */}
                  {showAll && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="lg:hidden mt-6 space-y-4"
                    >
                      {surgerySpecialties.map((specialty, index) => (
                        <motion.div
                          key={`mobile-${specialty.id}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-white rounded-2xl p-6 border border-white/30"
                        >
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-[#00217a] rounded-full flex items-center justify-center">
                              <specialty.icon className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-[#00217a]">{specialty.name}</h4>
                          </div>
                          <div className="space-y-3">
                            {specialty.procedures.map((procedure, procIndex) => (
                              <div key={`mobile-procedure-${specialty.id}-${procIndex}`} className="flex items-center space-x-3">
                                <CheckCircle className="w-4 h-4 text-[#2381d2] flex-shrink-0" />
                                <span className="text-slate-700 text-sm">{procedure}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

