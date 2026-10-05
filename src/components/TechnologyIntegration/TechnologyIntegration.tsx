'use client';

import { motion } from 'framer-motion';
import { INTEGRATION_TECHNOLOGIES } from '../../constants';
import { useReducedMotion } from '../../hooks';

interface TechnologyIntegrationProps {
  className?: string;
}

export function TechnologyIntegration({ className = '' }: TechnologyIntegrationProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="technology"
      className={`section relative bg-white dark:bg-surface-950 ${className}`}
      aria-labelledby="tech-heading"
    >
      <div className="container relative z-10 pt-12 pb-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium border border-brand-200 dark:border-brand-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.5 }}
          >
            <svg className="w-3.5 h-3.5 text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M17 2L12 7L7 2" />
            </svg>
            Integración
          </motion.span>

          <h2 id="tech-heading" className="heading-2 mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-950 dark:text-white leading-tracking-tight">
            Construido para integrarse con tu ecosistema.
          </h2>

          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300 leading-relaxed mx-auto">
            Puntual BPM no es una plataforma aislada. Es la capa de orquestación que conecta tus sistemas existentes.
          </p>
        </div>

        {/* Integration cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 mt-8">
          {INTEGRATION_TECHNOLOGIES.map((tech, index) => (
            <motion.div
              key={tech.label}
              className="group rounded-xl bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 overflow-hidden transition-all duration-300 hover:border-brand-100 hover:shadow-sm hover:shadow-brand-500/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0 : 0.4,
                delay: 0.5 + index * 0.08,
              }}
            >
              <div className="p-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  {tech.category.charAt(0)}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-sm text-surface-950 dark:text-white">{tech.label}</p>
                  <p className="text-xs text-surface-400 dark:text-surface-500 mt-0.5">{tech.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout / summary */}
        <motion.p
          className="mt-12 text-center text-surface-600 dark:text-surface-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.7 }}
        >
          Puntual BPM actúa como la capa de orquestación: conecta, transforma y coordina sin reemplazar lo que ya funciona.
        </motion.p>
      </div>
    </section>
  );
}