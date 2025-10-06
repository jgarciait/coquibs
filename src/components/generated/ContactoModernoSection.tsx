'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactoModernoSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor completa todos los campos');
      return;
    }
    
    // Show success message
    alert('Mensaje enviado exitosamente. Nos pondremos en contacto contigo pronto.');
    
    
    // Reset form
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="bg-white py-16 px-4 lg:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-black mb-4 tracking-tight leading-tight">
            Contacto
          </h1>
          <p className="text-xl text-gray-600 font-normal">
            Atención confiable y rápida
          </p>
        </motion.header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0.5 bg-gray-300 rounded-2xl overflow-hidden min-h-[700px]">
          {/* Left Panel - Contact Information */}
          <motion.section 
            className="bg-white p-8 lg:p-12 flex flex-col relative shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-black mb-2 tracking-tight">
                Información
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Múltiples formas de contactarnos
              </p>
            </div>

            <div className="flex flex-col justify-between flex-1">
              {/* Contact Items */}
              <div className="space-y-0">
                {/* Phone */}
                <motion.div 
                  className="flex items-start gap-5 py-4 transition-all duration-300 hover:pl-3"
                  whileHover={{ x: 3 }}
                >
                  <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-blue-600 hover:scale-105 group">
                    <Phone className="w-5.5 h-5.5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black mb-1">
                      Teléfono
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      787 448 2931<br />787 744 8359 · Fax
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  className="flex items-start gap-5 py-4 transition-all duration-300 hover:pl-3"
                  whileHover={{ x: 3 }}
                >
                  <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-blue-600 hover:scale-105 group">
                    <Mail className="w-5.5 h-5.5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600 text-sm">
                      info@coquibs.com
                    </p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  className="flex items-start gap-5 py-4 transition-all duration-300 hover:pl-3"
                  whileHover={{ x: 3 }}
                >
                  <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-blue-600 hover:scale-105 group">
                    <MapPin className="w-5.5 h-5.5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black mb-1">
                      Ubicación
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Urb. Bosque Verde #112 c/Aguila<br />Caguas, PR 00727-6985
                    </p>
                  </div>
                </motion.div>

                {/* Schedule */}
                <motion.div 
                  className="flex items-start gap-5 py-4 transition-all duration-300 hover:pl-3"
                  whileHover={{ x: 3 }}
                >
                  <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-blue-600 hover:scale-105 group">
                    <Clock className="w-5.5 h-5.5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black mb-1">
                      Horarios
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lunes a Viernes<br />8:00 a.m. — 5:00 p.m.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-3 mt-6 flex-col sm:flex-row">
                <a 
                  href="tel:7874482931" 
                  className="px-6 py-3 bg-red-600 text-white border border-red-600 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/30 text-center inline-block"
                >
                  Llamar
                </a>
                <a 
                  href="mailto:info@coquibs.com" 
                  className="px-6 py-3 bg-red-600 text-white border border-red-600 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/30 text-center inline-block"
                >
                  Email
                </a>
              </div>
            </div>
          </motion.section>

          {/* Right Panel - Contact Form */}
          <motion.section 
            className="bg-white p-8 lg:p-12 flex flex-col relative shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-black mb-2 tracking-tight">
                Mensaje
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Envíanos tu consulta directamente
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              <div className="flex flex-col gap-8 mb-10 flex-1">
                {/* Name Input */}
                <div className="relative">
                  <label className="text-sm font-medium text-gray-600 mb-2 block tracking-wide">
                    Nombre
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo"
                    required
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-white text-base outline-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 placeholder:text-gray-400"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label className="text-sm font-medium text-gray-600 mb-2 block tracking-wide">
                    Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-white text-base outline-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 placeholder:text-gray-400"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <label className="text-sm font-medium text-gray-600 mb-2 block tracking-wide">
                    Mensaje
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="¿En qué podemos ayudarte?"
                    required
                    rows={5}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-white text-base outline-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 placeholder:text-gray-400 resize-none min-h-[140px]"
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col gap-6 mt-6">
                <p className="text-xs text-gray-400 leading-relaxed">
                  Al enviar aceptas que te contactemos para dar seguimiento.
                </p>
                <div className="flex justify-center gap-3 flex-col sm:flex-row">
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-red-600 text-white border border-red-600 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/30"
                  >
                    Enviar
                  </button>
                  <button 
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 bg-red-600 text-white border border-red-600 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/30"
                  >
                    Limpiar
                  </button>
                </div>
              </div>
            </form>
          </motion.section>
        </div>
      </div>
    </section>
  );
};
