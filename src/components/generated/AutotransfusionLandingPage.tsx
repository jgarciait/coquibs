'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { AutotransfusionIntroSection } from './AutotransfusionIntroSection';
import { HowItWorksSection } from './HowItWorksSection';
import { ServiciosSection } from './ServiciosSection';
import { ContactoNuevoSection } from './ContactoNuevoSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FAQSection } from './FAQSection';
import { ContactoModernoSection } from './ContactoModernoSection';
import { CertificationsSection } from './CertificationsSection';
import { StatisticsSection } from './StatisticsSection';
import { ResourcesSection } from './ResourcesSection';
import { Heart, Shield, Users, Award, Phone, Mail, MapPin } from 'lucide-react';
const benefitsData = [] as any[];
const proceduresData = [{
  id: 'proc-1',
  title: 'Cirugía Cardíaca',
  description: 'Bypass, válvulas, procedimientos complejos del corazón'
}, {
  id: 'proc-2',
  title: 'Cirugía Ortopédica',
  description: 'Reemplazo de articulaciones, corrección espinal'
}, {
  id: 'proc-3',
  title: 'Neurocirugía',
  description: 'Operaciones del cerebro y sistema nervioso'
}, {
  id: 'proc-4',
  title: 'Trasplantes',
  description: 'Procedimientos de trasplante de órganos'
}, {
  id: 'proc-5',
  title: 'Cirugía Vascular',
  description: 'Procedimientos en vasos sanguíneos mayores'
}, {
  id: 'proc-6',
  title: 'Trauma',
  description: 'Cirugías de emergencia con alto riesgo de sangrado'
}] as any[];
const testimonialsData = [{
  name: 'Dr. Carlos Méndez',
  role: 'Cirujano Cardiovascular',
  quote: 'La autotransfusión ha revolucionado nuestros procedimientos cardíacos.'
}, {
  name: 'Dra. María González',
  role: 'Anestesióloga',
  quote: 'Seguridad y eficiencia en cada operación.'
}, {
  name: 'Dr. Roberto Silva',
  role: 'Cirujano Ortopédico',
  quote: 'Resultados excepcionales en cirugías complejas de columna.'
}, {
  name: 'Dra. Ana Torres',
  role: 'Directora Médica',

  quote: 'Mayor seguridad y confianza en cada cirugía.'
}] as any[];

// @component: AutotransfusionLandingPage
export const AutotransfusionLandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
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

      {/* Autotransfusion Benefits Section */}
      <section className="py-20 lg:py-28 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-0"
          >
            {/* background accent */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-0 top-0 h-48 w-48 rounded-full blur-3xl opacity-10" style={{background:"#2381d2"}} />
              <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full blur-3xl opacity-10" style={{background:"#d2232a"}} />
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#233e90]">
                Beneficios de la autotransfusión
              </h2>
              <p className="mt-4 text-lg text-slate-600">
              {/*Usar tu propia sangre durante la cirugía ofrece un procedimiento más seguro y predecible.*/}
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {/* Card 1 */}
              <div className="group rounded-2xl bg-white p-6 flex items-start gap-4 h-full">
                <div className="inline-flex h-14 w-14 items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
                    <path d="M12 2C8 6 6 9 6 12a6 6 0 0 0 12 0c0-3-2-6-6-10z" fill="#2381d2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Menor riesgo de infecciones
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Evita enfermedades asociadas a transfusiones de donantes como VIH, Hepatitis B y C, entre otras.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group rounded-2xl bg-white p-6 flex items-start gap-4 h-full">
                <div className="inline-flex h-14 w-14 items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
                    <path d="M12 4a8 8 0 1 1-8 8" fill="none" stroke="#2381d2" strokeWidth="2"/>
                    <path d="M7 12a5 5 0 0 0 10 0" fill="none" stroke="#d2232a" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Menos reacciones inmunológicas
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Al transfundir tu propia sangre, disminuye la probabilidad de respuestas adversas del sistema inmune.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group rounded-2xl bg-white p-6 flex items-start gap-4 h-full">
                <div className="inline-flex h-14 w-14 items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
                    <path d="M4 7h16M4 12h10M4 17h16" stroke="#2381d2" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Mayor disponibilidad para tu cirugía
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Reduce la necesidad de reprogramar procedimientos por escasez de reservas de sangre.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
      
      <HowItWorksSection />
      <ServiciosSection />
      {/* <ContactoNuevoSection /> */}
      {/* <TestimonialsSection /> */}
      
      <FAQSection />
      <ContactoModernoSection />
      {/* <CertificationsSection /> */}
      {/* <StatisticsSection /> */}
      {/* <ResourcesSection /> */}
      
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#inicio" className="hover:text-[#d2232a] transition-colors">
                <span>Inicio</span>
              </a>
              <a href="#beneficios" className="hover:text-[#d2232a] transition-colors">
                <span>Beneficios</span>
              </a>
            
              <a href="#servicios" className="hover:text-[#d2232a] transition-colors">
                <span>Servicios</span>
              </a>
              
              <a href="#hospitales" className="hover:text-[#d2232a] transition-colors">
                <span>Hospitales</span>
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400">
                <span>© 2010. Derechos Reservados. Coquí Blod Salvage, Inc.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div></>;
};

export default AutotransfusionLandingPage;