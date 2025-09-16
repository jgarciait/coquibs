'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

// Hospital data with exact names as requested
const leftColumnHospitals = [
  { name: 'Hospital Clínica Perea', location: 'Mayagüez, PR' },
  { name: 'Hospital Ryder Memorial', location: 'Humacao, PR' },
  { name: 'Hospital Metropolitano de Yauco', location: 'Yauco, PR' },
  { name: 'Hospital Buen Samaritano', location: 'Aguadilla, PR' },
  { name: 'Hospital Santa Rosa', location: 'Guayama, PR' },
  { name: 'Hospital Centro Medico', location: 'Rio Piedras, PR' }
];

const rightColumnHospitals = [
  { name: 'Hospital de la Concepción', location: 'San Germán, PR' },
  { name: 'Hospital Bella Vista', location: 'Mayagüez, PR' },
  { name: 'Hospital Auxilio Mutuo', location: 'San Juan, PR' },
  { name: 'Hospital Doctor\'s Center', location: 'Santurce, PR' },
  { name: 'Hospital Doctor\'s Center', location: 'Bayamon, PR' },
  { name: 'Children\'s Hospital', location: 'Bayamon, PR' }
];

// Pin coordinates for the map (approximate positions based on the image)
const mapPins = [
  { x: 45, y: 25 }, // Top left area
  { x: 75, y: 20 }, // Top right area
  { x: 70, y: 35 }, // Right side
  { x: 85, y: 45 }, // Far right
  { x: 55, y: 55 }  // Bottom center
];

export const ServiciosSection = () => {
  return (
    <section id="servicios" className="bg-gray-50 py-20 lg:py-28">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Servicios
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Ofrecemos servicios de autotransfusión intraoperatoria en los principales hospitales<br />
            de Puerto Rico.
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Hospitales Afiliados */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Hospitales Afiliados</h3>
            
            {/* Two column grid for hospitals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left sub-column */}
              <div className="space-y-4">
                {leftColumnHospitals.map((hospital, index) => (
                  <motion.div
                    key={hospital}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100"
                  >
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500/20 border border-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium text-sm">{hospital.name}</p>
                    <p className="text-gray-500 text-xs mt-1">{hospital.location}</p>
                  </div>
                  </motion.div>
                ))}
              </div>

              {/* Right sub-column */}
              <div className="space-y-4">
                {rightColumnHospitals.map((hospital, index) => (
                  <motion.div
                    key={hospital}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index + leftColumnHospitals.length) * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100"
                  >
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500/20 border border-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium text-sm">{hospital.name}</p>
                    <p className="text-gray-500 text-xs mt-1">{hospital.location}</p>
                  </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Cobertura en Puerto Rico</h3>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="relative">
                {/* Map Background */}
                <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-lg relative overflow-hidden">
                  {/* Puerto Rico shape approximation */}
                  <div 
                    className="absolute bg-green-300 rounded-full opacity-80"
                    style={{
                      width: '70%',
                      height: '50%',
                      top: '25%',
                      left: '15%',
                      clipPath: 'ellipse(80% 60% at 50% 50%)'
                    }}
                  ></div>
                  
                  {/* Hospital pins */}
                  {mapPins.map((pin, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.3 }}
                      className="absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"
                      style={{
                        left: `${pin.x}%`,
                        top: `${pin.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-red-500 rounded-full opacity-30"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-between mt-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600">Hospitales con servicio</span>
                  </div>
                  <span className="text-gray-500 font-medium">10+ ubicaciones</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-4xl"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 leading-relaxed">
              <strong>Coquí Blood Services</strong> es una empresa especializada en autotransfusión intraoperatoria 
              con más de 15 años de experiencia sirviendo a la comunidad médica de Puerto Rico.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};