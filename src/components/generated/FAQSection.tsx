'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 'faq-1',
    question: '¿Qué es la autotransfusión y cómo funciona?',
    answer: 'La autotransfusión es un procedimiento médico donde se recolecta, procesa y reinfunde la propia sangre del paciente durante una cirugía. Utilizamos equipos especializados como el Cell Saver para limpiar y concentrar los glóbulos rojos, eliminando impurezas y coágulos antes de devolverla al paciente.'
  },
  {
    id: 'faq-2',
    question: '¿Es segura la autotransfusión?',
    answer: 'Sí, la autotransfusión es muy segura. Al usar la propia sangre del paciente, se eliminan completamente los riesgos de transmisión de enfermedades infecciosas y reacciones transfusionales adversas. Los equipos utilizan filtros especializados y procesos de lavado que garantizan la pureza de la sangre reinfundida.'
  },
  {
    id: 'faq-3',
    question: '¿En qué tipos de cirugía se puede utilizar?',
    answer: 'La autotransfusión es ideal para cirugías con alto riesgo de sangrado como: cirugía cardíaca (bypass, válvulas), ortopédica (reemplazo de articulaciones), vascular, neurocirugía, trasplantes y cirugía de trauma. Es especialmente valiosa en procedimientos donde se espera una pérdida sanguínea significativa.'
  },
  {
    id: 'faq-4',
    question: '¿Cuáles son los principales beneficios?',
    answer: 'Los beneficios incluyen: eliminación del riesgo de transmisión de enfermedades, compatibilidad perfecta (es su propia sangre), disponibilidad inmediata sin depender de donantes, reducción de costos hospitalarios, mejor recuperación post-operatoria, y aceptabilidad para pacientes con restricciones religiosas.'
  },
  {
    id: 'faq-5',
    question: '¿Hay alguna contraindicación para la autotransfusión?',
    answer: 'Las contraindicaciones incluyen: infección en el sitio quirúrgico, contaminación maligna del campo operatorio, uso de ciertos medicamentos (como antibióticos tópicos), y algunas condiciones médicas específicas. Cada caso es evaluado individualmente por el equipo médico.'
  },
  {
    id: 'faq-6',
    question: '¿Cómo se compara el costo con las transfusiones tradicionales?',
    answer: 'Aunque el equipo inicial representa una inversión, la autotransfusión resulta más económica a largo plazo. Reduce costos de almacenamiento de sangre, pruebas de compatibilidad, y potenciales complicaciones. Además, disminuye el tiempo de hospitalización y los costos asociados con tratamientos de reacciones adversas.'
  },
  {
    id: 'faq-7',
    question: '¿Qué capacitación requiere el personal médico?',
    answer: 'Ofrecemos programas completos de capacitación que incluyen: teoría sobre autotransfusión, operación del equipo Cell Saver, mantenimiento preventivo, resolución de problemas, y certificaciones. El entrenamiento se adapta a las necesidades específicas de cada institución médica.'
  },
  {
    id: 'faq-8',
    question: '¿Cuánto tiempo toma implementar el servicio?',
    answer: 'La implementación típica toma 2-4 semanas, incluyendo: instalación del equipo, capacitación del personal, establecimiento de protocolos, y período de supervisión inicial. Proporcionamos soporte continuo durante la fase de transición para garantizar el éxito del programa.'
  }
];

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = React.useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d2232a] rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00217a] mb-4">
            Preguntas <span className="text-[#d2232a]">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre autotransfusión y 
            nuestros servicios médicos especializados.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-[#00217a] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === faq.id ? (
                    <Minus className="w-6 h-6 text-[#d2232a]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#d2232a]" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-6 pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            ¿No encuentras la respuesta que buscas?
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-[#d2232a] text-white font-semibold rounded-full hover:bg-[#b91c1c] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contáctanos para Más Información
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
