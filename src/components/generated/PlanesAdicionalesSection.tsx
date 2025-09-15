'use client';

import React from 'react';
import { motion } from 'framer-motion';

// @component: PlanesAdicionalesSection
export const PlanesAdicionalesSection = () => {
  // @return
  return <section className="py-16 bg-slate-50 dark:bg-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
        <span>Planes Médicos Aceptados</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {['Triple-S', 'MCS', 'Humana', 'MAPFRE'].map(insurer => <div key={insurer} className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
            <div className="text-center text-slate-600 dark:text-slate-300 font-medium">
              <span>{insurer}</span>
            </div>
          </div>)}
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
        <p className="text-red-800 dark:text-red-200 text-center font-medium">
          <span>⚠️ First Medical NO es aceptado</span>
        </p>
      </div>
    </div>
  </section>;
};
