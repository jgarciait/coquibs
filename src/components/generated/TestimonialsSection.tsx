'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Dr. María González',
    role: 'Cirujana Cardiovascular',
    hospital: 'Hospital San Juan',
    image: '/doctor-hero.jpg',
    rating: 5,
    text: 'El sistema de autotransfusión ha revolucionado nuestros procedimientos cardíacos. La seguridad del paciente ha mejorado significativamente y los resultados post-operatorios son excepcionales.',
    procedure: 'Cirugía de Bypass Coronario'
  },
  {
    id: 'testimonial-2', 
    name: 'Dr. Carlos Rodríguez',
    role: 'Cirujano Ortopédico',
    hospital: 'Centro Médico Metropolitano',
    image: '/surgeon-hero.jpg',
    rating: 5,
    text: 'En procedimientos de reemplazo de cadera, la autotransfusión nos permite manejar mejor el sangrado intraoperatorio, reduciendo complicaciones y acelerando la recuperación.',
    procedure: 'Reemplazo de Articulaciones'
  },
  {
    id: 'testimonial-3',
    name: 'Ana Martínez',
    role: 'Paciente',
    hospital: 'Cirugía Cardíaca Exitosa',
    image: '/WomanSurgeon.png',
    rating: 5,
    text: 'Mi experiencia con la autotransfusión fue excepcional. Me sentí más segura sabiendo que usarían mi propia sangre, y mi recuperación fue más rápida de lo esperado.',
    procedure: 'Cirugía de Válvula Cardíaca'
  }
];

const stats = [
  { label: 'Casos Exitosos', value: '5,000+', icon: CheckCircle },
  { label: 'Satisfacción del Paciente', value: '98%', icon: Heart },
  { label: 'Reducción de Complicaciones', value: '85%', icon: Star }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#00217a] mb-4">
            Testimonios de <span className="text-[#d2232a]">Éxito</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historias reales de médicos y pacientes que han experimentado los beneficios 
            de la autotransfusión en procedimientos médicos complejos.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d2232a] rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#00217a] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-[#d2232a] opacity-60" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Procedure Tag */}
              <div className="inline-block bg-[#d2232a]/10 text-[#d2232a] px-4 py-2 rounded-full text-sm font-medium mb-6">
                {testimonial.procedure}
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#00217a]">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.hospital}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
