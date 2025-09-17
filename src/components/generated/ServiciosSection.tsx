'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                className="flex-shrink-0 px-12 py-8 flex items-center justify-center"
                style={{ filter: 'blur(0.5px)' }}
              >
                <img
                  src={provider.logo}
                  alt={provider.alt}
                  className="w-64 h-32 object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {insuranceProviders.map((provider, index) => (
              <div
                key={`second-${provider.name}-${index}`}
                className="flex-shrink-0 px-12 py-8 flex items-center justify-center"
                style={{ filter: 'blur(0.5px)' }}
              >
                <img
                  src={provider.logo}
                  alt={provider.alt}
                  className="w-64 h-32 object-contain"
                />
              </div>
            ))}
            {/* Third set for seamless loop */}
            {insuranceProviders.map((provider, index) => (
              <div
                key={`third-${provider.name}-${index}`}
                className="flex-shrink-0 px-12 py-8 flex items-center justify-center"
                style={{ filter: 'blur(0.5px)' }}
              >
                <img
                  src={provider.logo}
                  alt={provider.alt}
                  className="w-64 h-32 object-contain"
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
              <strong>Importante:</strong> Planes médicos los cuales por el momento no estamos aceptando <span className="font-semibold text-red-700">First Medical</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};