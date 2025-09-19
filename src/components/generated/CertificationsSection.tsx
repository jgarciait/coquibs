'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Star, Globe, Heart, FileCheck, Trophy } from 'lucide-react';

const certifications = [
  {
    id: 'cert-1',
    name: 'FDA Certification',
    organization: 'U.S. Food and Drug Administration',
    description: 'Certificación para dispositivos médicos de autotransfusión',
    icon: Shield,
    level: 'Federal',
    year: '2023'
  },
  {
    id: 'cert-2', 
    name: 'ISO 13485:2016',
    organization: 'International Organization for Standardization',
    description: 'Sistema de gestión de calidad para dispositivos médicos',
    icon: Globe,
    level: 'Internacional',
    year: '2023'
  },
  {
    id: 'cert-3',
    name: 'CE Marking',
    organization: 'Conformité Européenne',
    description: 'Conformidad europea para equipos médicos',
    icon: Star,
    level: 'Europeo',
    year: '2023'
  },
  {
    id: 'cert-4',
    name: 'Joint Commission',
    organization: 'The Joint Commission',
    description: 'Acreditación en seguridad del paciente y calidad',
    icon: Trophy,
    level: 'Nacional',
    year: '2023'
  }
];

const accreditations = [
  {
    id: 'acc-1',
    title: 'American Association of Blood Banks (AABB)',
    description: 'Estándares internacionales en medicina transfusional',
    icon: Heart
  },
  {
    id: 'acc-2',
    title: 'Colegio de Médicos de Puerto Rico',
    description: 'Registro profesional y certificación médica local',
    icon: FileCheck
  },
  {
    id: 'acc-3',
    title: 'International Society for Blood Transfusion',
    description: 'Membresía en la sociedad mundial de transfusión sanguínea',
    icon: Globe
  },
  {
    id: 'acc-4',
    title: 'American Society of Anesthesiologists',
    description: 'Certificación en manejo perioperatorio',
    icon: Award
  }
];

const qualityStandards = [
  { label: 'Tasa de Éxito', value: '99.7%', icon: CheckCircle },
  { label: 'Cumplimiento Normativo', value: '100%', icon: Shield },
  { label: 'Satisfacción del Cliente', value: '98.5%', icon: Star },
  { label: 'Tiempo de Respuesta', value: '<24h', icon: Award }
];

export const CertificationsSection = () => {
  return (
    <section id="certificaciones" className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d2232a] rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00217a] mb-4">
            Certificaciones y <span className="text-[#d2232a]">Acreditaciones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cumplimos con los más altos estándares internacionales de calidad, 
            seguridad y excelencia en servicios de autotransfusión médica.
          </p>
        </motion.div>

        {/* Quality Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {qualityStandards.map((standard, index) => (
            <div key={standard.label} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d2232a] rounded-full mb-4">
                <standard.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#00217a] mb-2">{standard.value}</div>
              <div className="text-gray-600">{standard.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-[#00217a] text-center mb-12">
            Certificaciones Principales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00217a] to-[#2381d2] rounded-full mb-6">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-[#00217a] mb-2">{cert.name}</h4>
                <p className="text-[#d2232a] font-semibold text-sm mb-3">{cert.organization}</p>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span className="bg-[#d2232a]/10 text-[#d2232a] px-3 py-1 rounded-full font-medium">
                    {cert.level}
                  </span>
                  <span>{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Accreditations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-[#00217a] text-center mb-12">
            Acreditaciones Profesionales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accreditations.map((acc, index) => (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00217a]/10 rounded-lg mr-4 flex-shrink-0">
                  <acc.icon className="w-6 h-6 text-[#00217a]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#00217a] mb-2">{acc.title}</h4>
                  <p className="text-gray-600">{acc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-[#00217a] to-[#2381d2] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Compromiso con la Excelencia
          </h3>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Mantenemos las certificaciones más rigurosas de la industria y nos comprometemos 
            con la mejora continua, asegurando que nuestros servicios cumplan y superen 
            los estándares internacionales de seguridad y calidad en autotransfusión médica.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">20+</div>
              <div className="text-blue-200 text-sm">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">15+</div>
              <div className="text-blue-200 text-sm">Certificaciones Activas</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-blue-200 text-sm">Cumplimiento Normativo</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
