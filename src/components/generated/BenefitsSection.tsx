'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, Users, TrendingDown, CheckCircle } from 'lucide-react';

const benefits = [{
  id: 'seguridad',
  icon: Shield,
  title: 'Mayor Seguridad',
  description: 'Elimina el riesgo de transmisión de enfermedades infecciosas y reacciones transfusionales adversas.'
}, {
  id: 'compatibilidad',
  icon: Heart,
  title: 'Compatibilidad Perfecta',
  description: 'La sangre del propio paciente es 100% compatible, eliminando problemas de incompatibilidad.'
}, {
  id: 'disponibilidad',
  icon: Clock,
  title: 'Disponibilidad Inmediata',
  description: 'No depende de la disponibilidad de sangre en bancos, especialmente para tipos raros.'
}, {
  id: 'recuperacion',
  icon: TrendingDown,
  title: 'Mejor Recuperación',
  description: 'Reduce el tiempo de hospitalización y mejora la recuperación postoperatoria del paciente.'
}, {
  id: 'religiosas',
  icon: Users,
  title: 'Consideraciones Religiosas',
  description: 'Respeta las creencias de pacientes que no aceptan transfusiones de sangre de donantes.'
}, {
  id: 'calidad',
  icon: CheckCircle,
  title: 'Sangre Fresca',
  description: 'Utiliza sangre fresca del paciente con mejor función plaquetaria y factores de coagulación.'
}] as any[];

// @component: BenefitsSection
export const BenefitsSection = () => {
  // @return
  return <section id="beneficios-adicionales" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span>Beneficios Adicionales</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            <span>La autotransfusión intraoperatoria ofrece múltiples ventajas para la seguridad y recuperación del paciente.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return <motion.div key={benefit.id} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} whileHover={{
            y: -5,
            transition: {
              duration: 0.2
            }
          }} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    <span>{benefit.title}</span>
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span>{benefit.description}</span>
                </p>
              </motion.div>;
        })}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <p className="text-red-800 dark:text-red-200 font-medium text-lg">
              <span>La autotransfusión es especialmente beneficiosa en cirugías ortopédicas, cardiovasculares y procedimientos con alto riesgo de sangrado.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
};
