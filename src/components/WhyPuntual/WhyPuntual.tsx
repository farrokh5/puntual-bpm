'use client';

import { motion } from 'framer-motion';
import { WHY_PUNTUAL_COMPARISON } from '../../constants';
import { useReducedMotion } from '../../hooks';

interface WhyPuntualProps {
  className?: string;
}

export function WhyPuntual({ className = '' }: WhyPuntualProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="why-puntual"
      className={`section relative bg-surface-50 dark:bg-surface-900/50 ${className}`}
      aria-labelledby="why-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,_123,_240,_0.04)_0%,_transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-30" aria-hidden="true" />

      <div className="container relative z-10">
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
            Diferencia clave
          </motion.span>
          <h2
            id="why-heading"
            className="heading-2 mt-4 text-surface-950 dark:text-white"
          >
            ¿Por qué construir sobre Puntual BPM?
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            La diferencia entre empezar desde cero y construir sobre un core probado.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.2 }}
        >
          <motion.article
            className="p-8 bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-surface-950 dark:text-white">
                Desarrollo desde cero
              </h3>
            </div>
            <ul className="space-y-4">
              {WHY_PUNTUAL_COMPARISON.fromScratch.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm text-surface-600 dark:text-surface-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reducedMotion ? 0 : 0.3, delay: 0.4 + i * 0.08 }}
                >
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            className="p-8 bg-brand-50 dark:bg-brand-900/20 rounded-2xl border border-brand-200 dark:border-brand-800 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" aria-hidden="true" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-surface-950 dark:text-white">
                  Desarrollo con Puntual BPM
                </h3>
              </div>
              <ul className="space-y-4">
                {WHY_PUNTUAL_COMPARISON.withPuntual.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-sm text-surface-700 dark:text-surface-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: reducedMotion ? 0 : 0.3, delay: 0.4 + i * 0.08 }}
                  >
                    <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>
        </motion.div>

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
            <p className="font-semibold text-brand-700 dark:text-brand-300">
              La personalización está en la solución. La complejidad tecnológica ya está resuelta en el core.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}