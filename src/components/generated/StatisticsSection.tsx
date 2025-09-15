'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Heart, Shield, Users, Clock, Award, BarChart3, Activity } from 'lucide-react';

const CounterAnimation = ({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    const increment = value / (duration / 50);
    const timer = setInterval(() => {
      setCount(prevCount => {
        const nextCount = prevCount + increment;
        if (nextCount >= value) {
          clearInterval(timer);
          return value;
        }
        return nextCount;
      });
    }, 50);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return <span>{Math.floor(count)}{suffix}</span>;
};

const mainStats = [
  {
    id: 'stat-1',
    value: 8500,
    suffix: '+',
    label: 'Procedimientos Exitosos',
    description: 'Cirugías con autotransfusión completadas',
    icon: Heart,
    color: 'text-[#d2232a]'
  },
  {
    id: 'stat-2', 
    value: 98.7,
    suffix: '%',
    label: 'Tasa de Éxito',
    description: 'Procedimientos sin complicaciones',
    icon: Shield,
    color: 'text-[#00217a]'
  },
  {
    id: 'stat-3',
    value: 150,
    suffix: '+',
    label: 'Hospitales Servidos',
    description: 'Instituciones médicas en Puerto Rico',
    icon: Users,
    color: 'text-[#2381d2]'
  },
  {
    id: 'stat-4',
    value: 24,
    suffix: '/7',
    label: 'Disponibilidad',
    description: 'Servicio de emergencia disponible',
    icon: Clock,
    color: 'text-[#d2232a]'
  }
];

const clinicalData = [
  {
    title: 'Reducción de Complicaciones',
    percentage: 85,
    description: 'Disminución en reacciones transfusionales adversas',
    color: '#d2232a'
  },
  {
    title: 'Tiempo de Recuperación',
    percentage: 67,
    description: 'Reducción promedio en días de hospitalización',
    color: '#00217a'
  },
  {
    title: 'Satisfacción del Paciente',
    percentage: 96,
    description: 'Pacientes reportan experiencia positiva',
    color: '#2381d2'
  },
  {
    title: 'Ahorro en Costos',
    percentage: 78,
    description: 'Reducción en costos de transfusión tradicional',
    color: '#d2232a'
  }
];

const procedureStats = [
  { procedure: 'Cirugía Cardíaca', cases: 3200, success: 99.1 },
  { procedure: 'Cirugía Ortopédica', cases: 2800, success: 98.9 },
  { procedure: 'Neurocirugía', cases: 1500, success: 97.8 },
  { procedure: 'Cirugía Vascular', cases: 1000, success: 98.5 }
];

export const StatisticsSection = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <section id="estadisticas" className="py-24 bg-gradient-to-b from-slate-50 to-white">
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
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00217a] mb-4">
            Estadísticas y <span className="text-[#d2232a]">Datos Clínicos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros resultados demuestran la efectividad y seguridad de los 
            servicios de autotransfusión en diversos procedimientos médicos.
          </p>
        </motion.div>

        {/* Main Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {mainStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {isVisible && <CounterAnimation value={stat.value} suffix={stat.suffix} />}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Clinical Data Charts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-[#00217a] text-center mb-12">
            Datos Clínicos de Efectividad
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinicalData.map((data, index) => (
              <motion.div
                key={data.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-[#00217a]">{data.title}</h4>
                  <span className="text-2xl font-bold" style={{ color: data.color }}>
                    {data.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${data.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="h-3 rounded-full"
                    style={{ backgroundColor: data.color }}
                  />
                </div>
                <p className="text-gray-600 text-sm">{data.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Procedure Statistics Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-[#00217a] text-center mb-12">
            Estadísticas por Tipo de Procedimiento
          </h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#00217a] text-white">
                  <tr>
                    <th className="px-8 py-4 text-left font-semibold">Procedimiento</th>
                    <th className="px-8 py-4 text-center font-semibold">Casos Realizados</th>
                    <th className="px-8 py-4 text-center font-semibold">Tasa de Éxito</th>
                    <th className="px-8 py-4 text-center font-semibold">Progreso</th>
                  </tr>
                </thead>
                <tbody>
                  {procedureStats.map((proc, index) => (
                    <motion.tr
                      key={proc.procedure}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-8 py-4 font-medium text-gray-800">{proc.procedure}</td>
                      <td className="px-8 py-4 text-center text-[#d2232a] font-semibold">
                        {proc.cases.toLocaleString()}
                      </td>
                      <td className="px-8 py-4 text-center text-[#00217a] font-semibold">
                        {proc.success}%
                      </td>
                      <td className="px-8 py-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${proc.success}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                            className="h-2 bg-gradient-to-r from-[#d2232a] to-[#b91c1c] rounded-full"
                          />
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-[#d2232a] to-[#b91c1c] rounded-2xl p-8 text-center text-white"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Activity className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Resultados que Hablan por Sí Mismos
          </h3>
          <p className="text-lg text-red-100 max-w-3xl mx-auto mb-8">
            Nuestras estadísticas reflejan nuestro compromiso con la excelencia médica 
            y la seguridad del paciente en cada procedimiento de autotransfusión.
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-white text-[#d2232a] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Ver Nuestros Casos de Estudio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
