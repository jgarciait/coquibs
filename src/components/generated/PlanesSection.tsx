'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Building2, HeartHandshake, AlertCircle } from 'lucide-react';

const insurancePlans = [
  {
    id: 'mcs',
    name: 'MCS Comercial y Classicare',
    icon: Shield,
    bgColor: 'bg-[#2381d2]/10',
    iconColor: 'text-[#2381d2]',
    borderColor: 'border-[#2381d2]/20'
  },
  {
    id: 'mapfre', 
    name: 'MAPFRE Comercial y Medicare Excel',
    icon: Building2,
    bgColor: 'bg-[#d2232a]/10',
    iconColor: 'text-[#d2232a]',
    borderColor: 'border-[#d2232a]/20'
  },
  {
    id: 'humana',
    name: 'HUMANA Comercial', 
    icon: HeartHandshake,
    bgColor: 'bg-[#233e90]/10',
    iconColor: 'text-[#233e90]',
    borderColor: 'border-[#233e90]/20'
  },
  {
    id: 'panamerican',
    name: 'Pan American Life Insurance Group Panamerican Life Insurance PALIC',
    icon: Shield,
    bgColor: 'bg-[#2381d2]/10', 
    iconColor: 'text-[#2381d2]',
    borderColor: 'border-[#2381d2]/20'
  }
];

// @component: PlanesSection
export const PlanesSection = () => {
  // @return
  return (
    <section id="planes" className="bg-gray-50/30 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
          >
            <span className="text-[#233e90]">Estamos aceptando los siguientes</span>
            <br />
            <span className="text-[#d2232a]">planes médicos</span>
          </motion.h2>
        </motion.div>

        {/* Insurance Cards Infinite Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="overflow-hidden mb-20 -mt-12 mt-16"
        >
          <motion.div
            animate={{ 
              x: [0, -(320 + 24) * insurancePlans.length] 
            }}
            transition={{ 
              repeat: Infinity,
              duration: 15,
              ease: 'linear'
            }}
            className="flex gap-6 w-fit"
            style={{ width: 'max-content' }}
          >
            {/* Original cards */}
            {insurancePlans.map((plan, index) => (
              <motion.div
                key={`${plan.id}-1`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group bg-white rounded-3xl p-8 border-2 ${plan.borderColor} hover:shadow-xl transition-all duration-300 cursor-pointer flex-shrink-0`}
                style={{ width: '320px', height: '160px' }}
              >
                {/* Logo Placeholder */}
                <div className={`w-16 h-16 ${plan.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className={`w-8 h-8 ${plan.iconColor}`} />
                </div>
                
                {/* Plan Name */}
                <div className="text-center">
                  <h3 className="text-gray-800 font-semibold text-sm leading-tight group-hover:text-[#233e90] transition-colors duration-300">
                    {plan.name}
                  </h3>
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate cards for seamless loop */}
            {insurancePlans.map((plan, index) => (
              <motion.div
                key={`${plan.id}-2`}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group bg-white rounded-3xl p-8 border-2 ${plan.borderColor} hover:shadow-xl transition-all duration-300 cursor-pointer flex-shrink-0`}
                style={{ width: '320px', height: '160px' }}
              >
                {/* Logo Placeholder */}
                <div className={`w-16 h-16 ${plan.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className={`w-8 h-8 ${plan.iconColor}`} />
                </div>
                
                {/* Plan Name */}
                <div className="text-center">
                  <h3 className="text-gray-800 font-semibold text-sm leading-tight group-hover:text-[#233e90] transition-colors duration-300">
                    {plan.name}
                  </h3>
                </div>
              </motion.div>
            ))}
            
            {/* Triple cards for better seamless effect */}
            {insurancePlans.map((plan, index) => (
              <motion.div
                key={`${plan.id}-3`}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group bg-white rounded-3xl p-8 border-2 ${plan.borderColor} hover:shadow-xl transition-all duration-300 cursor-pointer flex-shrink-0`}
                style={{ width: '320px', height: '160px' }}
              >
                {/* Logo Placeholder */}
                <div className={`w-16 h-16 ${plan.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className={`w-8 h-8 ${plan.iconColor}`} />
                </div>
                
                {/* Plan Name */}
                <div className="text-center">
                  <h3 className="text-gray-800 font-semibold text-sm leading-tight group-hover:text-[#233e90] transition-colors duration-300">
                    {plan.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="bg-amber-50/80 border border-amber-200/60 rounded-2xl p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-medium text-gray-800">Importante:</span> Planes médicos los cuales por el momento no estamos aceptando{' '}
                <span className="font-bold text-[#d2232a]">First Medical</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
