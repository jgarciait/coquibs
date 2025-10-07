'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Stethoscope, GraduationCap, Phone } from 'lucide-react';

const teamMembers = [
  {
    id: 'team-1',
    name: 'Dra. Elena Vásquez',
    role: 'Directora Médica, Anestesiología',
    specialty: 'Anestesiología y Medicina Crítica',
    experience: '9+ años de experiencia',
    education: 'MD - Universidad de Puerto Rico, Fellowship en Medicina Crítica',
    image: '/Dra. Elena Vásquez .png',
    quote: 'Coquí Blood Salvage nos ha permitido reducir la necesidad de transfusiones alogénicas en cirugías complejas. El servicio es puntual, profesional y con una comunicación impecable en sala. Mis pacientes se benefician con una recuperación más segura.',
    achievements: [
      'Certificación en Autotransfusión Avanzada',
      'Más de 3,000 procedimientos supervisados',
      'Investigación publicada en revistas médicas'
    ]
  },
  {
    id: 'team-2',
    name: 'Dr. Miguel Santamaría',
    role: 'Especialista en Perfusión, Cirugía Cardíaca',
    specialty: 'Cirugía Cardíaca y Perfusión',
    experience: '10+ años de experiencia',
    education: 'MD - Escuela de Medicina de Ponce, Certificación en Perfusión',
    image: '/Dr. Miguel Santamaría.png',
    quote: 'La autotransfusión intraoperatoria con su equipo de cell saver ha sido clave para optimizar resultados. La disponibilidad 24/7 y el conocimiento técnico de Coquí Blood Salvage marcan la diferencia en nuestro flujo quirúrgico.',
    achievements: [
      'Experto en Cell Saver Technology',
      'Entrenamiento en Mayo Clinic',
      'Coordinador de Programas de Capacitación'
    ]
  },
  {
    id: 'team-3',
    name: 'Dra. Carmen Rivera',
    role: 'Consultora en Hematología Transfusional',
    specialty: 'Hematología Transfusional',
  experience: '7+ años de experiencia',
    education: 'MD - Universidad Central del Caribe, Fellowship en Hematología',
    image: '/Dra. Carmen Rivera.png',
    quote: 'Confío en Coquí Blood Salvage por su estandarización de procesos y trazabilidad. La coordinación pre y postoperatoria es ejemplar y se refleja en menor exposición a sangre alogénica para mis pacientes.',
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
            Lo que dicen nuestros <span className="text-[#d2232a]">clientes médicos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionales de la salud que utilizan el servicio de autotransfusión de Coquí Blood Salvage, Inc. para estandarizar procesos y mejorar la seguridad del paciente.
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

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((t, i) => (
            <article
              key={i}
              className="relative rounded-2xl transition-all duration-300 hover:-translate-y-0.5 flex flex-col h-full"
            >
              <div className="h-80 overflow-hidden rounded-t-2xl relative">
                <Image 
                  src={t.image} 
                  alt={t.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="px-6 py-6 bg-white rounded-b-2xl shadow-lg flex-1 flex flex-col">
                <div className="text-center">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "#233e90" }}
                  >
                    {t.name}
                  </h3>
                  <p className="text-sm font-semibold" style={{ color: "#d2232a" }}>
                    {t.role}
                  </p>
                  <p
                    className="text-xs font-medium"
                    style={{ color: "#2381d2" }}
                  >
                    {t.experience}
                  </p>
                </div>

                <blockquote
                  className="mt-5 text-[15px] leading-relaxed flex-1"
                  style={{ color: "#0f172a" }}
                >
                  <span
                    className="mr-2 align-[-0.2em] text-2xl"
                    style={{ color: "#2381d2" }}
                  >
                    &ldquo;
                  </span>
                  {t.quote}
                  <span
                    className="ml-1 align-[-0.2em] text-2xl"
                    style={{ color: "#2381d2" }}
                  >
                    &rdquo;
                  </span>
                </blockquote>

                <div className="mt-5 flex items-center justify-between">
                  <div
                    className="flex items-center gap-1"
                    aria-label="Valoración 5 de 5"
                  >
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg
                        key={s}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-[#ffb703]"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span
                      className="ml-2 text-xs"
                      style={{ color: "#64748b" }}
                    >
                      5.0
                    </span>
                  </div>
                  <span
                    className="text-[11px] font-medium px-2 py-1 rounded-full"
                    style={{
                      background: "#d2232a10",
                      color: "#d2232a",
                      border: "1px solid #d2232a33",
                    }}
                  >
                    Cliente verificado
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

