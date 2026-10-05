'use client';

import { motion } from 'framer-motion';
import { BUSINESS_OUTCOMES } from '../../constants';
import { useReducedMotion } from '../../hooks';

interface BusinessOutcomesProps {
  className?: string;
}

export function BusinessOutcomes({ className = '' }: BusinessOutcomesProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="outcomes"
      className={`section bg-white dark:bg-surface-950 ${className}`}
      aria-labelledby="outcomes-heading"
    >
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium border border-brand-200 dark:border-brand-800"
          >
            Valor de negocio
          </motion.span>
          <h2
            id="outcomes-heading"
            className="heading-2 mt-4 text-surface-950 dark:text-white"
          >
            La tecnología importa. El resultado, más.
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            Traducimos capacidades técnicas en resultados de negocio medibles.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_OUTCOMES.map((outcome, index) => (
            <motion.article
              key={outcome.id}
              className="card group relative overflow-hidden h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(99, 123, 240, 0.15)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-semibold text-surface-950 dark:text-white mb-2">
                  {outcome.title}
                </h3>
                <p className="body text-surface-600 dark:text-surface-300 text-sm leading-relaxed flex-1">
                  {outcome.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.4 }}
        >
          <p className="body text-surface-600 dark:text-surface-300 max-w-2xl mx-auto mb-6">
            Cada capacidad técnica de Puntual BPM está diseñada para resolver un problema de negocio real.
          </p>
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver cómo aplica a tu caso
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}