'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Video, FileText, Users, Calendar, ExternalLink, Lightbulb } from 'lucide-react';

const resources = [
  {
    id: 'resource-1',
    title: 'Guía Completa de Autotransfusión',
    type: 'PDF Guide',
    description: 'Manual completo sobre técnicas, protocolos y mejores prácticas en autotransfusión médica.',
    icon: FileText,
    category: 'Educativo',
    downloadUrl: '#',
    size: '2.8 MB'
  },
  {
    id: 'resource-2',
    title: 'Videos de Entrenamiento',
    type: 'Video Series',
    description: 'Serie de videos educativos sobre operación del equipo Cell Saver y técnicas avanzadas.',
    icon: Video,
    category: 'Training',
    downloadUrl: '#',
    duration: '45 min'
  },
  {
    id: 'resource-3',
    title: 'Protocolos Quirúrgicos',
    type: 'Clinical Protocols',
    description: 'Protocolos estandarizados para diferentes tipos de procedimientos quirúrgicos.',
    icon: BookOpen,
    category: 'Clínico',
    downloadUrl: '#',
    pages: '24 páginas'
  },
  {
    id: 'resource-4',
    title: 'Manual de Mantenimiento',
    type: 'Technical Manual',
    description: 'Guía técnica para mantenimiento preventivo y solución de problemas del equipo.',
    icon: FileText,
    category: 'Técnico',
    downloadUrl: '#',
    size: '1.5 MB'
  }
];

const webinars = [
  {
    id: 'webinar-1',
    title: 'Autotransfusión en Cirugía Cardíaca',
    date: '15 de Octubre, 2024',
    time: '2:00 PM - 3:30 PM AST',
    speaker: 'Dr. Elena Vásquez',
    description: 'Técnicas avanzadas y casos de estudio en procedimientos cardíacos.',
    registered: 128,
    maxCapacity: 150
  },
  {
    id: 'webinar-2',
    title: 'Manejo de Emergencias con Cell Saver',
    date: '22 de Octubre, 2024',
    time: '7:00 PM - 8:30 PM AST',
    speaker: 'Dr. Miguel Santamaría',
    description: 'Protocolos de emergencia y resolución rápida de problemas técnicos.',
    registered: 95,
    maxCapacity: 120
  },
  {
    id: 'webinar-3',
    title: 'Innovaciones en Autotransfusión 2024',
    date: '29 de Octubre, 2024',
    time: '3:00 PM - 4:30 PM AST',
    speaker: 'Dra. Carmen Rivera',
    description: 'Últimas tendencias y tecnologías en medicina transfusional.',
    registered: 87,
    maxCapacity: 100
  }
];

const studyMaterials = [
  { title: 'Fundamentos de Autotransfusión', type: 'Beginner', lessons: 8 },
  { title: 'Técnicas Avanzadas Cell Saver', type: 'Advanced', lessons: 12 },
  { title: 'Manejo de Complicaciones', type: 'Expert', lessons: 6 },
  { title: 'Pediatric Autotransfusion', type: 'Specialized', lessons: 10 }
];

export const ResourcesSection = () => {
  return (
    <section id="recursos" className="py-24 bg-gradient-to-b from-white to-slate-50">
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
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00217a] mb-4">
            Recursos <span className="text-[#d2232a]">Educativos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Material educativo, guías técnicas y recursos de capacitación para 
            profesionales médicos en autotransfusión y tecnologías Cell Saver.
          </p>
        </motion.div>

        {/* Downloadable Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-[#00217a] mb-8 text-center">
            Recursos Descargables
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00217a]/10 rounded-lg">
                    <resource.icon className="w-6 h-6 text-[#00217a]" />
                  </div>
                  <span className="bg-[#d2232a]/10 text-[#d2232a] text-xs px-2 py-1 rounded-full font-medium">
                    {resource.category}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-[#00217a] mb-2">{resource.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{resource.type}</span>
                  <span>{resource.size || resource.duration || resource.pages}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-4 py-2 bg-[#d2232a] text-white font-medium rounded-lg hover:bg-[#b91c1c] transition-colors duration-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Study Materials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-[#00217a] mb-8 text-center">
            Cursos de Capacitación
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyMaterials.map((material, index) => (
              <motion.div
                key={material.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#00217a] to-[#2381d2] rounded-xl p-6 text-white"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg mb-4">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{material.title}</h4>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="bg-white/20 px-2 py-1 rounded text-xs">{material.type}</span>
                  <span>{material.lessons} lecciones</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-4 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Curso
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Webinars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-[#00217a] mb-8 text-center">
            Próximos Webinars
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, x: index % 3 === 0 ? -30 : index % 3 === 1 ? 0 : 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#d2232a] rounded-lg">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div>{webinar.registered}/{webinar.maxCapacity}</div>
                    <div>registrados</div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-[#00217a] mb-2">{webinar.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{webinar.description}</p>
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[#d2232a]" />
                    {webinar.date}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-[#d2232a]" />
                    {webinar.speaker}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-[#d2232a] h-2 rounded-full"
                    style={{ width: `${(webinar.registered / webinar.maxCapacity) * 100}%` }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-4 py-2 bg-[#00217a] text-white font-medium rounded-lg hover:bg-[#001a5c] transition-colors duration-200"
                >
                  Registrarse Gratis
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact for More Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-slate-100 to-white rounded-2xl p-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d2232a] rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#00217a] mb-4">
            ¿Necesita Recursos Personalizados?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Podemos crear material educativo específico para su institución, 
            incluyendo protocolos personalizados y programas de entrenamiento a medida.
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-[#d2232a] text-white font-semibold rounded-full hover:bg-[#b91c1c] transition-colors duration-300 shadow-lg"
          >
            Solicitar Recursos Personalizados
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
