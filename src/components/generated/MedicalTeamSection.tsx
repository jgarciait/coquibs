'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Stethoscope, GraduationCap, Phone } from 'lucide-react';

const teamMembers = [
  {
    id: 'team-1',
    name: 'Dra. Elena Vásquez',
    role: 'Directora Médica',
    specialty: 'Anestesiología y Medicina Crítica',
    experience: '15+ años',
    education: 'MD - Universidad de Puerto Rico, Fellowship en Medicina Crítica',
    image: '/Dra. Elena Vásquez .png',
    achievements: [
      'Certificación en Autotransfusión Avanzada',
      'Más de 3,000 procedimientos supervisados',
      'Investigación publicada en revistas médicas'
    ]
  },
  {
    id: 'team-2',
    name: 'Dr. Miguel Santamaría',
    role: 'Especialista en Perfusión',
    specialty: 'Cirugía Cardíaca y Perfusión',
    experience: '12+ años',
    education: 'MD - Escuela de Medicina de Ponce, Certificación en Perfusión',
    image: '/Dr. Miguel Santamaría.png',
    achievements: [
      'Experto en Cell Saver Technology',
      'Entrenamiento en Mayo Clinic',
      'Coordinador de Programas de Capacitación'
    ]
  },
  {
    id: 'team-3',
    name: 'Dra. Carmen Rivera',
    role: 'Consultora en Hematología',
    specialty: 'Hematología Transfusional',
    experience: '18+ años',
    education: 'MD - Universidad Central del Caribe, Fellowship en Hematología',
    image: '/Dra. Carmen Rivera.png',
    achievements: [
      'Especialista en Medicina Transfusional',
      'Directora de Banco de Sangre (8 años)',
      'Certificación Internacional en Aféresis'
    ]
  }
];

const expertise = [
  {
    icon: Heart,
    title: 'Cirugía Cardíaca',
    description: 'Especialización en procedimientos cardíacos complejos con autotransfusión'
  },
  {
    icon: Users,
    title: 'Equipo Multidisciplinario',
    description: 'Colaboración estrecha entre cirujanos, anestesiólogos y perfusionistas'
  },
  {
    icon: Award,
    title: 'Certificaciones',
    description: 'Equipo certificado en las últimas tecnologías de autotransfusión'
  },
  {
    icon: GraduationCap,
    title: 'Educación Continua',
    description: 'Programas de capacitación y actualización constante'
  }
];

export const MedicalTeamSection = () => {
  return (
    <section id="equipo-medico" className="py-20 lg:py-28 bg-white">
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
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00217a] mb-4">
            Nuestro <span className="text-[#d2232a]">Equipo Médico</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionales altamente capacitados y certificados en autotransfusión, 
            comprometidos con la excelencia en el cuidado del paciente.
          </p>
        </motion.div>

        {/* Expertise Areas - Hidden */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {expertise.map((item, index) => (
            <div key={item.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00217a]/10 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-[#00217a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#00217a] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </motion.div> */}

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              {/* Profile Image */}
              <div className="h-80 overflow-hidden rounded-t-2xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Profile Info */}
              <div className="bg-white/90 backdrop-blur-sm rounded-b-2xl shadow-lg p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#00217a] mb-1">{member.name}</h3>
                  <p className="text-[#d2232a] font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.specialty}</p>
                </div>

                {/* Experience */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Award className="w-5 h-5 text-[#d2232a] mr-2 flex-shrink-0" />
                    <span className="font-semibold text-[#00217a] text-sm">Experiencia: {member.experience}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

