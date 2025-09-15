'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { AutotransfusionIntroSection } from './AutotransfusionIntroSection';
import { HowItWorksSection } from './HowItWorksSection';
import { ServiciosSection } from './ServiciosSection';
import { PlanesSection } from './PlanesSection';
import { Heart, Shield, Users, Award, Phone, Mail, MapPin, ChevronDown, ChevronRight } from 'lucide-react';
const benefitsData = [{
  id: 'benefit-1',
  title: 'Reducción de Riesgos',
  description: 'Minimiza complicaciones transfusionales'
}, {
  id: 'benefit-2',
  title: 'Mejor Recuperación',
  description: 'Acelera el proceso de sanación'
}, {
  id: 'benefit-3',
  title: 'Menos Infecciones',
  description: 'Reduce riesgo de transmisión de patógenos'
}, {
  id: 'benefit-4',
  title: 'Compatibilidad Total',
  description: 'Usa tu propia sangre, sin incompatibilidades'
}, {
  id: 'benefit-5',
  title: 'Disponibilidad Inmediata',
  description: 'No depende de donantes externos'
}, {
  id: 'benefit-6',
  title: 'Costo Efectivo',
  description: 'Reduce costos hospitalarios'
}] as any[];
const proceduresData = [{
  id: 'proc-1',
  title: 'Cirugía Cardíaca',
  description: 'Procedimientos de corazón abierto y bypass'
}, {
  id: 'proc-2',
  title: 'Cirugía Ortopédica',
  description: 'Reemplazo de articulaciones y trauma óseo'
}, {
  id: 'proc-3',
  title: 'Neurocirugía',
  description: 'Operaciones cerebrales y espinales'
}, {
  id: 'proc-4',
  title: 'Cirugía Vascular',
  description: 'Reparación de arterias y venas'
}] as any[];
const testimonialsData = [{
  id: 'test-1',
  name: 'Dr. María González',
  role: 'Cirujana Cardiovascular',
  quote: 'La autotransfusión ha revolucionado nuestros procedimientos quirúrgicos.'
}, {
  id: 'test-2',
  name: 'Dr. Carlos Ruiz',
  role: 'Jefe de Ortopedia',
  quote: 'Resultados excepcionales en recuperación de pacientes.'
}, {
  id: 'test-3',
  name: 'Dra. Ana López',
  role: 'Anestesióloga',
  quote: 'Mayor seguridad y confianza en cada cirugía.'
}] as any[];
const faqData = [{
  id: 'faq-1',
  question: '¿Qué es la autotransfusión?',
  answer: 'Es el proceso de recolectar, procesar y reinfundir la propia sangre del paciente durante una cirugía.'
}, {
  id: 'faq-2',
  question: '¿Es segura la autotransfusión?',
  answer: 'Sí, es muy segura ya que utiliza la propia sangre del paciente, eliminando riesgos de incompatibilidad.'
}, {
  id: 'faq-3',
  question: '¿En qué cirugías se puede usar?',
  answer: 'Se puede usar en cirugías cardíacas, ortopédicas, vasculares y neurocirugías.'
}, {
  id: 'faq-4',
  question: '¿Cuáles son los beneficios?',
  answer: 'Reduce riesgos, mejora recuperación, elimina incompatibilidades y está disponible inmediatamente.'
}] as any[];

// @component: AutotransfusionLandingPage
export const AutotransfusionLandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  const [openFAQ, setOpenFAQ] = React.useState<string | null>(null);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // @return
  return <><div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AutotransfusionIntroSection />
      <HowItWorksSection />
      <ServiciosSection />
      <PlanesSection />
      
      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span>Beneficios de la </span>
              <span className="text-[#d2232a]">Autotransfusión</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsData.map((benefit, index) => <motion.div key={benefit.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            scale: 1.02
          }} className="bg-white/60 backdrop-blur-sm border border-[#d2232a]/20 rounded-2xl p-6 hover:border-[#d2232a]/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-[#d2232a] mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Recommended Procedures Section */}
      <section id="procedimientos" className="py-20 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span>Procedimientos </span>
              <span className="text-[#d2232a]">Recomendados</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proceduresData.map((procedure, index) => <motion.div key={procedure.id} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -20 : 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-[#2381d2] mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">{procedure.title}</h3>
                </div>
                <p className="text-gray-600">{procedure.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="hidden py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span>Lo que dicen los </span>
              <span className="text-[#d2232a]">Profesionales</span>
            </h2>
          </motion.div>
          
          <div className="relative">
            <motion.div key={activeTestimonial} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 text-center">
              <blockquote className="text-xl text-gray-700 mb-6">
                &ldquo;{testimonialsData[activeTestimonial].quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">{testimonialsData[activeTestimonial].name}</p>
                <p className="text-[#d2232a]">{testimonialsData[activeTestimonial].role}</p>
              </div>
            </motion.div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonialsData.map((_, index) => <button key={index} onClick={() => setActiveTestimonial(index)} className={`w-3 h-3 rounded-full transition-colors ${index === activeTestimonial ? 'bg-[#d2232a]' : 'bg-gray-300'}`} />)}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span>Preguntas </span>
              <span className="text-[#d2232a]">Frecuentes</span>
            </h2>
          </motion.div>
          
          <div className="space-y-4">
            {faqData.map(faq => <motion.div key={faq.id} initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className={`bg-white/80 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${openFAQ === faq.id ? 'border-[#d2232a] shadow-lg' : 'border-gray-200'}`}>
                <button onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openFAQ === faq.id ? <ChevronDown className="w-5 h-5 text-[#d2232a]" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
                </button>
                {openFAQ === faq.id && <motion.div initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: 'auto',
              opacity: 1
            }} exit={{
              height: 0,
              opacity: 0
            }} className="px-6 pb-4 border-l-4 border-[#d2232a] ml-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>}
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span>Contáctanos</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#d2232a]" />
                <div>
                  <h3 className="font-semibold text-gray-900">Teléfono</h3>
                  <p className="text-gray-600">+1 (787) 448-2931</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#d2232a]" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@autotransfusion.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#d2232a]" />
                <div>
                  <h3 className="font-semibold text-gray-900">Dirección</h3>
                  <p className="text-gray-600">123 Medical Center Dr, Ciudad</p>
                </div>
              </div>
            </motion.div>
            
            <motion.form initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <span>Nombre</span>
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d2232a] focus:border-[#d2232a] transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <span>Email</span>
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d2232a] focus:border-[#d2232a] transition-colors" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    <span>Mensaje</span>
                  </label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d2232a] focus:border-[#d2232a] transition-colors" suppressHydrationWarning></textarea>
                </div>
                <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} type="submit" className="w-full bg-[#d2232a] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#b01e24] transition-colors">
                  <span>Enviar Mensaje</span>
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
    
    {/* Footer */}
    <footer className="relative py-12 px-4" style={{ backgroundColor: '#032144' }}>
      <img src="/red.png" alt="Red logo" className="absolute bottom-0 left-0 h-full object-contain" />
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white text-lg font-medium">
          © 2010. Derechos Reservados. Coquí Blod Salvage, Inc.
        </p>
      </div>
    </footer>
    </>;
};