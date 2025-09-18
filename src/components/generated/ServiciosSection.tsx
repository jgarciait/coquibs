'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

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
  return (
    <section id="servicios" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
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
                <img
                  src={provider.logo}
                  alt={provider.alt}
                  className="h-16 object-contain mb-4"
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
                <div className="text-center text-base text-[#233e90] font-bold" style={{ transform: 'translateZ(2px)' }}>
                  {provider.name === 'MAPFRE' && (
                    <div className="flex space-x-6 justify-center">
                      <div className="flex items-center justify-center">
                        <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                        <span>Comercial</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                        <span>Medicare Excel</span>
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
                <img
                  src={provider.logo}
                  alt={provider.alt}
                  className="h-16 object-contain mb-4"
                />
              </div>
            ))}
            {/* Third set for seamless loop */}
            {insuranceProviders.map((provider, index) => (
              <div
                key={`third-${provider.name}-${index}`}
                className="flex-shrink-0 px-12 py-8 flex flex-col items-center justify-end h-48"
              >
                <div className="text-center text-base text-[#233e90] font-bold" style={{ transform: 'translateZ(2px)' }}>
                  {provider.name === 'MAPFRE' && (
                    <div className="flex space-x-6 justify-center">
                      <div className="flex items-center justify-center">
                        <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                        <span>Comercial</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="w-1 h-1 bg-[#233e90] rounded-full mr-2"></span>
                        <span>Medicare Excel</span>
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
                <img
                  src={provider.logo}
                  alt={provider.alt}
                  className="h-16 object-contain mb-4"
                />
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

        {/* Hospitals Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          {/* Section Header */}
          <div className="text-left mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#d2232a' }}>
              Servicios:
            </h2>
            <p className="text-lg text-gray-700 max-w-5xl">
              <span style={{ color: '#d2232a' }}>Instituciones hospitalarias donde tenemos privilegios para dar servicio y nombres de médicos especialistas que nos refieren casos.</span>
            </p>
          </div>

          {/* Two Column Layout: Hospitals + Map */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Hospitals List */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Hospitales Afiliados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {hospitals.map((hospital, index) => (
                  <motion.div
                    key={`hospital-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                     className="bg-white border border-gray-200 rounded-lg py-1 px-4 pr-8 shadow-sm hover:shadow-md transition-shadow duration-300 w-full min-w-[340px]"
                  >
                    <div className="flex items-start space-x-1">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-6 h-6 bg-blue-50 border-2 border-blue-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                        </div>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-semibold text-gray-900 text-left">
                          {hospital.name}
                        </h3>
                        <p className="text-gray-600 text-xs text-left">
                          {hospital.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Map and Info */}
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Cobertura en Puerto Rico</h3>
              
              {/* Map Container */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 relative overflow-hidden">
                  {/* Puerto Rico Map Shape */}
                  <div className="relative w-full h-64 flex items-center justify-center">
                    <svg viewBox="0 0 400 200" className="w-full h-full">
                      {/* Puerto Rico Island Shape (more rounded and organic) */}
                      <path
                        d="M120 100 Q140 70 180 75 Q220 80 260 85 Q300 90 340 100 Q360 110 350 130 Q340 150 300 145 Q260 140 220 135 Q180 130 140 125 Q100 120 80 110 Q70 100 90 90 Q110 85 120 100 Z"
                        fill="#4ade80"
                        fillOpacity="0.8"
                        stroke="#22c55e"
                        strokeWidth="1"
                      />
                      
                      {/* Hospital Location Points - positioned like in the image */}
                      <circle cx="130" cy="85" r="5" fill="#dc2626" />   {/* Top left */}
                      <circle cx="320" cy="95" r="5" fill="#dc2626" />   {/* Top right */}
                      <circle cx="200" cy="95" r="5" fill="#dc2626" />   {/* Center top */}
                      <circle cx="290" cy="115" r="5" fill="#dc2626" />  {/* Right */}
                      <circle cx="160" cy="140" r="5" fill="#dc2626" />  {/* Bottom */}
                    </svg>
                  </div>
                  
                  {/* Map Legend */}
                  <div className="bg-white bg-opacity-95 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">Hospitales con servicio</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-700">10+ ubicaciones</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Rectangle */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg py-2 px-6">
                <p className="text-blue-800 leading-relaxed">
                  <strong>Coquí Blood Services</strong> es una empresa especializada en autotransfusión intraoperatoria con más de 15 años de experiencia sirviendo a la comunidad médica de Puerto Rico.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};