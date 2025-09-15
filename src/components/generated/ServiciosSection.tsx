'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Building2 } from 'lucide-react';

const hospitals = [
  'Hospital Clinica Perea Mayaguez PR',
  'Hospital Ryder Memorial Humacao PR', 
  'Hospital Metropolitano de Yauco Yauco PR',
  'Hospital Buen Samaritano Aguadilla PR',
  'Hospital Santa Rosa Guayama PR',
  'Hospital Centro Medico Rio Piedras PR',
  'Hospital de la Concepcion San German PR',
  'Hospital Bella Vista Mayaguez PR',
  'Hospital Auxilio Mutuo San Juan PR',
  'Hospital Doctors Center Santurce PR',
  'Hospital Doctors Center Bayamon PR',
  'Childrens Hospital Bayamon PR'
];

// @component: ServiciosSection
export const ServiciosSection = () => {
  // Split hospitals into two columns
  const midpoint = Math.ceil(hospitals.length / 2);
  const leftColumn = hospitals.slice(0, midpoint);
  const rightColumn = hospitals.slice(midpoint);

  // @return
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="text-[#233e90]">Servicios</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Instituciones hospitalarias donde tenemos privilegios para dar servicio y nombres de médicos especialistas que nos refieren casos.
          </motion.p>
        </motion.div>

        {/* Hospital List */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Left Column */}
            <div className="space-y-4">
              {leftColumn.map((hospital, index) => (
                <motion.div
                  key={hospital}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50/80 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-[#2381d2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 font-medium leading-relaxed group-hover:text-[#233e90] transition-colors duration-300">
                      {hospital}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-x-1/2"></div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightColumn.map((hospital, index) => (
                <motion.div
                  key={hospital}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="group flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50/80 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-[#2381d2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 font-medium leading-relaxed group-hover:text-[#233e90] transition-colors duration-300">
                      {hospital}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
