'use client';

import { motion } from 'framer-motion';
import { BUSINESS_OUTCOMES } from '../../constants';
import { useReducedMotion } from '../../hooks';
import { 
  X, Check, Zap, Shield, Clock, Users, Code, Layers, 
  BarChart2, Link2, RefreshCw, ChevronRight 
} from 'lucide-react';

const COMPARISON_POINTS = [
  {
    fromScratch: 'Cada componente debe construirse desde cero',
    withPuntual: 'Motor de procesos BPMN 2.0 listo para usar',
    icon: Layers,
    category: 'Core de procesos',
  },
  {
    fromScratch: 'Mayor esfuerzo inicial y riesgo técnico',
    withPuntual: 'Formularios configurables sin código',
    icon: Code,
    category: 'UI y Datos',
  },
  {
    fromScratch: 'Más infraestructura que mantener',
    withPuntual: 'Reglas de negocio externalizadas (DMN)',
    icon: Shield,
    category: 'Decisiones',
  },
  {
    fromScratch: 'Más tiempo antes de obtener valor',
    withPuntual: 'Integraciones y conectores preconstruidos',
    icon: Link2,
    category: 'Integración',
  },
  {
    fromScratch: 'Reinventar capacidades comunes',
    withPuntual: 'Gestión de tareas, SLAs y escalamiento nativo',
    icon: Users,
    category: 'Operación',
  },
  {
    fromScratch: 'Auditoría y trazabilidad manual',
    withPuntual: 'Auditoría inmutable y trazabilidad automática',
    icon: Check,
    category: 'Compliance',
  },
] as const;

const OUTCOME_ICONS = {
  speed: Zap,
  traceability: BarChart2,
  automation: Check,
  consistency: Shield,
  integration: Link2,
  evolution: RefreshCw,
} as const;

const OUTCOME_ACCENTS = {
  speed: 'from-yellow-500 to-orange-500',
  traceability: 'from-blue-500 to-cyan-500',
  automation: 'from-emerald-500 to-teal-500',
  consistency: 'from-violet-500 to-purple-500',
  integration: 'from-indigo-500 to-blue-500',
  evolution: 'from-rose-500 to-pink-500',
} as const;

export function WhyPuntual({ className = '' }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="why-puntual"
      className={`section relative bg-surface-50 dark:bg-surface-900/50 ${className}`}
      aria-labelledby="why-heading"
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-30" aria-hidden="true" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="section-header max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <span className="section-badge">Por qué Puntual BPM</span>
          <h2
            id="why-heading"
            className="heading-2 text-surface-950 dark:text-white"
          >
            La diferencia entre empezar desde cero y construir sobre un core probado.
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            30+ años de experiencia encapsulados en una plataforma que elimina meses de desarrollo base y reduce riesgo técnico.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="overflow-x-auto rounded-2xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.2 }}
        >
          <table className="w-full" role="table">
            <thead>
              <tr className="border-b border-surface-200 dark:border-surface-800">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400">
                  Capacidad
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                    Desarrollo desde cero
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Con Puntual BPM
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-200 dark:divide-surface-800">
              {COMPARISON_POINTS.map((point, index) => (
                <motion.tr
                  key={point.category}
                  className={index % 2 === 0 ? 'bg-surface-50 dark:bg-surface-900/50' : ''}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reducedMotion ? 0 : 0.4, delay: 0.3 + index * 0.08 }}
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                        <point.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="font-medium text-surface-950 dark:text-white text-sm">{point.category}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-surface-600 dark:text-surface-400">
                    <span className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500 flex-shrink-0" aria-hidden="true" />
                      {point.fromScratch}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-surface-700 dark:text-surface-300">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-500 flex-shrink-0" aria-hidden="true" />
                      {point.withPuntual}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Business Outcomes - Value Translation */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <span className="section-badge">Valor de negocio medible</span>
            <h3 className="heading-2 mt-4 text-surface-950 dark:text-white max-w-2xl mx-auto">
              La tecnología importa. El resultado, más.
            </h3>
            <p className="body-lg mt-4 text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
              Traducimos capacidades técnicas de Puntual BPM en resultados de negocio concretos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_OUTCOMES.map((outcome, index) => {
              const IconComponent = OUTCOME_ICONS[outcome.id as keyof typeof OUTCOME_ICONS] || Zap;
              const accentColor = OUTCOME_ACCENTS[outcome.id as keyof typeof OUTCOME_ACCENTS] || 'from-brand-500 to-brand-600';
              
              return (
                <motion.article
                  key={outcome.id}
                  className="card-elevated group relative overflow-hidden h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4, boxShadow: '0 25px 50px -12px rgba(99, 123, 240, 0.15)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br text-white mb-4" style={{ background: `linear-gradient(135deg, ${accentColor.split(' ')[0]}, ${accentColor.split(' ')[2]})` }}>
                      <IconComponent className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="heading-4 text-surface-950 dark:text-white mb-2">
                      {outcome.title}
                    </h3>
                    <p className="body-sm text-surface-600 dark:text-surface-300 text-sm leading-relaxed flex-1">
                      {outcome.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.7 }}
          >
            <p className="body-lg text-surface-600 dark:text-surface-300 max-w-2xl mx-auto mb-6">
              Cada capacidad técnica de Puntual BPM está diseñada para resolver un problema de negocio real.
            </p>
            <motion.button className="btn-outline" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Ver cómo aplica a tu caso
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Key Differentiator Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-brand-50 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800">
            <svg className="w-5 h-5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <p className="font-semibold text-brand-700 dark:text-brand-300 text-balance max-w-3xl">
              La personalización está en la solución. La complejidad tecnológica ya está resuelta en el core.
            </p>
          </div>
        </motion.div>

        {/* Additional Trust Signals */}
        <motion.div
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.7 }}
        >
          {[
            { icon: Clock, title: 'Time-to-value', desc: 'Primera entrega funcional en 6-8 semanas', color: 'from-yellow-500 to-orange-500' },
            { icon: Shield, title: 'Riesgo controlado', desc: 'Core probado en 500+ proyectos críticos', color: 'from-emerald-500 to-teal-500' },
            { icon: Layers, title: 'Evolución continua', desc: 'Cambios en reglas y flujos en horas, no meses', color: 'from-violet-500 to-purple-500' },
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="card-elevated p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br text-white" style={{ background: `linear-gradient(135deg, ${benefit.color.split(' ')[0]}, ${benefit.color.split(' ')[2]})` }}>
                <benefit.icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <h4 className="font-semibold text-surface-950 dark:text-white mb-2">{benefit.title}</h4>
              <p className="text-sm text-surface-600 dark:text-surface-400">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}