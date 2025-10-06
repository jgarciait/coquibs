'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

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
  const [openFAQ, setOpenFAQ] = React.useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <style jsx global>{`
        :root {
          --bg: #f7f9fc;
          --surface: #ffffff;
          --text: #0f172a;
          --muted: #475569;
          --primary: #2381d2;
          --primary-50: #e9f2fb;
          --primary-100: #d9e9fa;
          --primary-700: #1a5fa8;
          --line: #e6edf5;
        }
      `}</style>
      <section id="faq" className="py-20 lg:py-28 bg-white">
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '44px 1fr',
                  gap: '14px',
                  alignItems: 'center',
                  padding: '12px',
                  border: '1px solid var(--line)',
                  borderRadius: '14px',
                  transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
                  background: 'radial-gradient(120% 100% at -10% 10%, var(--primary-50), transparent 60%)',
                  cursor: 'pointer'
                }}
                onClick={() => toggleFAQ(faq.id)}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  background: 'linear-gradient(135deg, #00217a 0%, #2381d2 100%)',
                  boxShadow: '0 4px 12px rgba(0, 33, 122, 0.3)',
                  flexShrink: 0
                }} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="#ffffff" strokeWidth="1.6" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="17" r=".5" fill="#ffffff" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#00217a', marginBottom: '6px' }}>
                    {faq.question}
                  </div>
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '2px', lineHeight: '1.6' }}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        </div>
      </section>
    </>
  );
};
