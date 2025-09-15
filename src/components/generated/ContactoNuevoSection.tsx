'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

// @component: ContactoNuevoSection
export const ContactoNuevoSection = () => {
  // @return
  return <section id="contacto-nuevo" className="py-16 bg-white dark:bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
        <span>Contacto</span>
      </h2>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6 mb-8">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-red-600" />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  <span>Teléfono</span>
                </p>
                <a href="tel:787-448-2931" className="text-red-600 hover:text-red-700 transition-colors" aria-label="Llamar al 787-448-2931">
                  <span>787-448-2931</span>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-red-600" />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  <span>Email</span>
                </p>
                <a href="mailto:info@coquibs.com" className="text-red-600 hover:text-red-700 transition-colors" aria-label="Enviar email a info@coquibs.com">
                  <span>info@coquibs.com</span>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-red-600" />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  <span>Dirección</span>
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  <span>San Juan, Puerto Rico</span>
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                <span>Nombre</span>
              </label>
              <input type="text" id="nombre" name="nombre" className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-slate-800 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                <span>Teléfono</span>
              </label>
              <input type="tel" id="telefono" name="telefono" className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-slate-800 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                <span>Email</span>
              </label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-slate-800 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                <span>Mensaje</span>
              </label>
              <textarea id="mensaje" name="mensaje" rows={4} className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-slate-800 dark:text-white" required />
            </div>
            <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              <span>Enviar Mensaje</span>
            </button>
          </form>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
          <div className="h-64 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
            <p className="text-slate-500 dark:text-slate-400">
              <span>Mapa de San Juan, Puerto Rico</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
