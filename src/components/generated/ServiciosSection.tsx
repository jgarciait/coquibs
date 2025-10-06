'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Activity, Heart, Zap, Bone, Users } from 'lucide-react';
import PRHospitalsMap from '../PRHospitalsMap';
import Image from 'next/image';

// Surgery specialties data
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

// Insurance providers data
const insuranceProviders = [
  {
    name: 'Pan American Life Insurance Group',
    logo: '/PANAMERICANLIFE.png',
    alt: 'Pan American Life Insurance Group logo'
  },
  {
    name: 'Humana',
    logo: '/HUMANA.png',
    alt: 'Humana logo'
  },
  {
    name: 'MAPFRE',
    logo: '/MAPFRE.png',
    alt: 'MAPFRE logo'
  },
  {
    name: 'MCS',
    logo: '/MCS.png',
    alt: 'MCS logo'
  }
];

// Hospitals data
const hospitals = [
  { name: 'Hospital Clínica Perea', location: 'Mayagüez, PR' },
  { name: 'Hospital Ryder Memorial', location: 'Humacao, PR' },
  { name: 'Hospital Metropolitano de Yauco', location: 'Yauco, PR' },
  { name: 'Hospital Buen Samaritano', location: 'Aguadilla, PR' },
  { name: 'Hospital Santa Rosa', location: 'Guayama, PR' },
  { name: 'Hospital Centro Médico', location: 'Río Piedras, PR' },
  { name: 'Hospital de la Concepción', location: 'San Germán, PR' },
  { name: 'Hospital Bella Vista', location: 'Mayagüez, PR' },
  { name: 'Hospital Auxilio Mutuo', location: 'San Juan, PR' },
  { name: 'Hospital Doctor\'s Center', location: 'Santurce, PR' },
  { name: 'Hospital Doctor\'s Center', location: 'Bayamón, PR' },
  { name: 'Children\'s Hospital', location: 'Bayamón, PR' }
];

export const ServiciosSection = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [showAll, setShowAll] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState('/SurgicalTeam.jpeg');

  const activeSpecialty = surgerySpecialties.find(spec => spec.id === activeTab);

  // Alternative image sources to try
  const imageSources = [
    '/SurgicalTeam.jpeg',
    '/doctor-hero.png',
    '/doctorhero.png'
  ];

  const handleImageError = () => {
    const currentIndex = imageSources.indexOf(currentImageSrc);
    const nextIndex = currentIndex + 1;
    
    if (nextIndex < imageSources.length) {
      setCurrentImageSrc(imageSources[nextIndex]);
    } else {
      setImageError(true);
    }
  };

  return (
    <section id="servicios" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Recommended Surgery Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-24"
        >
          {/* Full-width section with gradient background */}
          <div className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-slate-50/50 via-blue-50/30 to-white">
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
                
                {/* Right Column - Surgery img (Mobile First) */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="w-full lg:order-2" // Show first on mobile, second on desktop
                >
                  <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-white/30 overflow-hidden shadow-xl" style={{ transform: 'scale(1.06)' }}>
                    <div className="aspect-square relative">
                      {!imageError ? (
                        <>
                          <Image 
                            src={currentImageSrc}
                            alt="Equipo médico realizando cirugía con tecnología de autotransfusión"
                            className="w-full h-full object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onError={handleImageError}
                         
                          />
                          {/* Overlay for better text contrast and integration */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#00217a]/20 via-transparent to-transparent pointer-events-none"></div>
                          
                        </>
                      ) : (
                        /* Fallback content if image doesn't load */
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
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Left Column - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="lg:order-1" // Show second on mobile, first on desktop
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
                            : 'bg-white/60 backdrop-blur-sm text-[#00217a] hover:bg-white/80 shadow-sm border border-white/50'
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
                    <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 p-6 lg:p-8 relative overflow-hidden">
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
                          className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30"
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

        {/* Hospitals Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-24"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#233e90] mb-4">
                Servicios:
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Instituciones hospitalarias donde tenemos privilegios para dar servicio y nombres de <br />médicos especialistas que nos refieren casos. 
                <br /><br />
                <strong>Haz clic en cualquier hospital para ver más detalles.</strong>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden"
            >
              <PRHospitalsMap
                title="Hospitales Afiliados"
                pulseColor="rgba(210,35,42,0.70)"
                ringColor="rgba(210,35,42,0.45)"
                durationMs={2400}
                flyToZoom={14}
                hoverPulseColor="rgba(210,35,42,0.55)"
                hoverRingColor="rgba(210,35,42,0.35)"
                hoverDurationMs={900}
              />
              {/* Info Rectangle */}
              <div className="mt-20 max-w-4xl mx-auto">
                <div className="bg-blue-50 border border-blue-200 rounded-lg py-4 px-6">
                  <p className="text-blue-800 leading-relaxed text-center">
                    <strong>Coquí Blood Services</strong> es una empresa especializada en autotransfusión intraoperatoria con más de 15 años de experiencia sirviendo a la comunidad médica de Puerto Rico.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold mb-2"
          >
            <span style={{ color: '#233e90' }}>Estamos aceptando los siguientes</span>
            <br />
            <span className="font-bold" style={{ color: '#d2232a' }}>planes médicos</span>
          </motion.h2>
        </motion.div>

        {/* Insurance Providers Scrolling Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mb-8 overflow-hidden"
        >
          {/* Scrolling Container */}
          <div className="flex animate-scroll-logos whitespace-nowrap">
            {/* First set of logos */}
            {insuranceProviders.map((provider, index) => (
              <div
                key={`first-${provider.name}-${index}`}
                className="flex-shrink-0 px-12 py-8 flex flex-col items-center justify-end h-48"
              >
                <Image
                  src={provider.logo}
                  alt={provider.alt}
                  className={`object-contain mb-4 ${provider.name === 'MAPFRE' ? 'w-80 h-44' : provider.name === 'MCS' ? 'w-48 h-20' : 'w-64 h-32'}`}
                  width={provider.name === 'MAPFRE' ? 320 : provider.name === 'MCS' ? 192 : 256}
                  height={provider.name === 'MAPFRE' ? 176 : provider.name === 'MCS' ? 80 : 128}
                />
                <div className="text-center text-base text-[#233e90] font-bold" style={{ transform: 'translateZ(2px)' }}>
                  {provider.name === 'MAPFRE' && (
                    <div className="flex space-x-6 justify-center">
                      <div className="flex items-center justify-start">
                        <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                        <span> Comercial</span>
                      </div>
                      <div className="flex items-center justify-start">
                        <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                        <span> Medicare Excel</span>
                      </div>
                    </div>
                  )}
                  {provider.name === 'Humana' && (
                    <div className="flex items-center justify-center">
                      <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                      <span>Comercial</span>
                    </div>
                  )}
                  {provider.name === 'Pan American Life Insurance Group' && (
                    <div className="flex items-center justify-center">
                      <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                      <span>Panamerican Life Insurance (PALIC)</span>
                    </div>
                  )}
                  {provider.name === 'MCS' && (
                    <div className="h-6"></div>
                  )}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {insuranceProviders.map((provider, index) => (
              <div
                key={`second-${provider.name}-${index}`}
                className="flex-shrink-0 px-12 py-8 flex flex-col items-center justify-end h-48"
              >
                <Image
                  src={provider.logo}
                  alt={provider.alt}
                  className={`object-contain mb-4 ${provider.name === 'MAPFRE' ? 'w-80 h-44' : provider.name === 'MCS' ? 'w-48 h-20' : 'w-64 h-32'}`}
                  width={provider.name === 'MAPFRE' ? 320 : provider.name === 'MCS' ? 192 : 256}
                  height={provider.name === 'MAPFRE' ? 176 : provider.name === 'MCS' ? 80 : 128}
                />
                <div className="text-center text-base text-[#233e90] font-bold" style={{ transform: 'translateZ(2px)' }}>
                  {provider.name === 'MAPFRE' && (
                    <div className="flex space-x-6 justify-center">
                      <div className="flex items-center justify-start">
                        <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                        <span> Comercial</span>
                      </div>
                      <div className="flex items-center justify-start">
                        <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                        <span> Medicare Excel</span>
                      </div>
                    </div>
                  )}
                  {provider.name === 'Humana' && (
                    <div className="flex items-center justify-center">
                      <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                      <span>Comercial</span>
                    </div>
                  )}
                  {provider.name === 'Pan American Life Insurance Group' && (
                    <div className="flex items-center justify-center">
                      <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                      <span>Panamerican Life Insurance (PALIC)</span>
                    </div>
                  )}
                  {provider.name === 'MCS' && (
                    <div className="h-6"></div>
                  )}
                </div>
              </div>
            ))}
            {/* Third set for seamless loop */}
            {insuranceProviders.map((provider, index) => (
              <div
                key={`third-${provider.name}-${index}`}
                className="flex-shrink-0 px-12 py-8 flex flex-col items-center justify-end h-48"
              >
                <Image
                  src={provider.logo}
                  alt={provider.alt}
                  className={`object-contain mb-4 ${provider.name === 'MAPFRE' ? 'w-80 h-44' : provider.name === 'MCS' ? 'w-48 h-20' : 'w-64 h-32'}`}
                  width={provider.name === 'MAPFRE' ? 320 : provider.name === 'MCS' ? 192 : 256}
                  height={provider.name === 'MAPFRE' ? 176 : provider.name === 'MCS' ? 80 : 128}
                />
                <div className="text-center text-base text-[#233e90] font-bold" style={{ transform: 'translateZ(2px)' }}>
                  {provider.name === 'MAPFRE' && (
                    <div className="flex space-x-6 justify-center">
                      <div className="flex items-center justify-start">
                        <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                        <span> Comercial</span>
                      </div>
                      <div className="flex items-center justify-start">
                        <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                        <span> Medicare Excel</span>
                      </div>
                    </div>
                  )}
                  {provider.name === 'Humana' && (
                    <div className="flex items-center justify-center">
                      <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                      <span>Comercial</span>
                    </div>
                  )}
                  {provider.name === 'Pan American Life Insurance Group' && (
                    <div className="flex items-center justify-center">
                      <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                      <span>Panamerican Life Insurance (PALIC)</span>
                    </div>
                  )}
                  {provider.name === 'MCS' && (
                    <div className="h-6"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Fade gradients */}
          <div className="absolute inset-y-0 left-0 w-[8%] bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-[8%] bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </div>
            <p className="text-red-800 text-sm leading-relaxed">
              <strong>Importante:</strong> Planes médicos los cuales por el momento no estamos aceptando. <span className="font-semibold text-red-700">First Medical</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};