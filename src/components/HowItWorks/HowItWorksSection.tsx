'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STAGES } from '../../constants';
import { useReducedMotion, useIntersectionObserver } from '../../hooks';

interface HowItWorksSectionProps {
  className?: string;
}

export function HowItWorksSection({ className = '' }: HowItWorksSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isVisible = useIntersectionObserver(containerRef as React.RefObject<Element>);

  return (
    <section
      id="process"
      className={`section relative bg-surface-50 dark:bg-surface-900/50 ${className}`}
      aria-labelledby="process-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,_123,_240,_0.06)_0%,_transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-50" aria-hidden="true" />

      <div ref={containerRef} className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium border border-brand-200 dark:border-brand-800"
          >
            Nuestra metodología
          </motion.span>
          <h2
            id="process-heading"
            className="heading-2 mt-4 text-surface-950 dark:text-white"
          >
            Cómo trabajamos: de la idea a la evolución continua
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            Metodología probada en 500+ proyectos. Entregas de valor temprano, riesgo controlado y alineación constante con tu negocio.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-brand-300/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reducedMotion ? 0 : 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ transformOrigin: 'center' }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-5 gap-4 lg:gap-0 relative z-10">
            {PROCESS_STAGES.map((stage, index) => (
              <motion.div
                key={stage.id}
                className="relative flex flex-col items-center text-center px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: reducedMotion ? 0 : 0.5, delay: index * 0.12 }}
              >
                <div className="relative z-10 mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-white dark:bg-surface-900 border-2 border-surface-200 dark:border-surface-700 flex items-center justify-center shadow-lg shadow-brand-500/5 group-hover:border-brand-300 dark:group-hover:border-brand-700/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(99, 123, 240, 0.2)' }}
                  >
                    <span className="font-display text-2xl font-bold text-brand-600 dark:text-brand-400">
                      {stage.number}
                    </span>
                  </motion.div>

                  {index < PROCESS_STAGES.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-brand-300/50 to-transparent -ml-8"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.6 + index * 0.12 }}
                      style={{ transformOrigin: 'left center' }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3 className="heading-3 text-surface-950 dark:text-white mb-2">
                  {stage.title}
                </h3>
                <p className="body text-surface-600 dark:text-surface-300 max-w-xs">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="lg:hidden mt-12 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.5 }}
        >
          {PROCESS_STAGES.map((stage, index) => (
            <motion.div
              key={stage.id}
              className="flex gap-4 p-4 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reducedMotion ? 0 : 0.4, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <span className="font-display text-xl font-bold text-brand-600 dark:text-brand-400">
                  {stage.number}
                </span>
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-surface-950 dark:text-white mb-1">
                  {stage.title}
                </h3>
                <p className="text-sm text-surface-600 dark:text-surface-300">
                  {stage.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-brand-500 flex-shrink-0 self-center" aria-hidden="true" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}