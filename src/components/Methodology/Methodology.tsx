'use client';

import { motion } from 'framer-motion';
import { PROCESS_STAGES } from '../../constants';
import { useReducedMotion } from '../../hooks';

type ProcessStageType = typeof PROCESS_STAGES[number];

function MethodologyStep({ stage, index, reducedMotion }: { stage: ProcessStageType; index: number; reducedMotion: boolean }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex lg:flex-row ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-8 lg:gap-16`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: reducedMotion ? 0 : 0.5, delay: index * 0.12 }}
    >
      <div className="relative lg:w-1/2 lg:pr-8 lg:pl-8 lg:flex lg:items-center lg:justify-end">
        <div className="absolute top-8 lg:top-10 left-1/2 lg:left-auto lg:right-0 w-px h-full bg-gradient-to-b from-transparent via-brand-300/50 to-transparent -translate-x-1/2" aria-hidden="true" />

        <motion.div
          className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-surface-900 border-2 border-surface-200 dark:border-surface-700 flex items-center justify-center shadow-lg shadow-brand-500/5 flex-shrink-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.6 + index * 0.12 }}
        >
          <span className="font-display text-2xl lg:text-3xl font-bold text-brand-600 dark:text-brand-400">
            {stage.number}
          </span>
        </motion.div>
      </div>

      <motion.div
        className="lg:w-1/2 lg:pl-8 lg:pr-8 pt-4"
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.3 + index * 0.12 }}
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-medium border border-brand-200 dark:border-brand-800 mb-3">
          Paso {stage.number}
        </span>
        <h3 className="heading-3 text-surface-950 dark:text-white mb-2">
          {stage.title}
        </h3>
        <p className="body text-surface-600 dark:text-surface-300">
          {stage.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function Methodology({ className = '' }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  const steps = PROCESS_STAGES.map((stage, index) => (
    <MethodologyStep
      key={stage.id}
      stage={stage}
      index={index}
      reducedMotion={reducedMotion}
    />
  ));

  return (
    <section
      id="process"
      className={`section relative bg-white dark:bg-surface-950 ${className}`}
      aria-labelledby="process-heading"
    >
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
            Metodología
          </motion.span>
          <h2
            id="process-heading"
            className="heading-2 mt-4 text-surface-950 dark:text-white"
          >
            Cómo trabajamos: de la idea a la evolución continua.
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            Metodología probada en 500+ proyectos. Entregas de valor temprano, riesgo controlado y alineación constante.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-300/50 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: reducedMotion ? 0 : 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ transformOrigin: 'top center' }}
            aria-hidden="true"
          />

          <div className="space-y-12 lg:space-y-16">
            {steps}
          </div>
        </div>
      </div>
    </section>
  );
}