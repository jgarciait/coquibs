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
    image: '/Dra. Elena Vásquez.png'
  },
  {
    id: 'team-2',
    name: 'Dr. Miguel Santamaría',
    role: 'Especialista en Perfusión',
    specialty: 'Cirugía Cardíaca y Perfusión',
    experience: '12+ años',
    image: '/Dr. Miguel Santamaría.png?v=2'
  },
  {
    id: 'team-3',
    name: 'Dra. Carmen Rivera',
    role: 'Consultora en Hematología',
    specialty: 'Hematología Transfusional',
    experience: '18+ años',
    image: '/Dra. Carmen Rivera.png'
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
    <section id="equipo-medico" className="lg:py-15 bg-gradient-to-b from-slate-50 to-white">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="flex flex-col">
              {/* Profile Image - Top Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-transparent overflow-hidden h-96 mb-0"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Profile Info - Bottom Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                className="bg-white rounded-t-none rounded-b-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 flex flex-col"
              >
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#00217a] mb-2">{member.name}</h3>
                    <p className="text-[#d2232a] font-semibold mb-1">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.specialty}</p>
                  </div>

                  {/* Experience */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <Award className="w-5 h-5 text-[#d2232a] mr-2" />
                      <span className="font-semibold text-[#00217a]">Experiencia: {member.experience}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#00217a] to-[#2381d2] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesita consultar con nuestro equipo?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Nuestros especialistas están disponibles para consultas profesionales, 
              capacitaciones y asesoramiento en implementación de programas de autotransfusión.
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-[#d2232a] text-white font-semibold rounded-full hover:bg-[#b91c1c] transition-colors duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Agendar Consulta
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
