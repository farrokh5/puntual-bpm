'use client';

import { motion } from 'framer-motion';
import { PROBLEMS, SOLUTION_PILLARS } from '../../constants';
import { useReducedMotion } from '../../hooks';

interface ProblemSectionProps {
  className?: string;
}

export function ProblemSection({ className = '' }: ProblemSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="problem"
      className={`section relative bg-surface-50 dark:bg-surface-900/50 ${className}`}
      aria-labelledby="problem-heading"
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-30" aria-hidden="true" />

      <div className="container relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <span className="section-badge">El desafío</span>
          <h2
            id="problem-heading"
            className="heading-2 text-surface-950 dark:text-white"
          >
            Cuando el proceso es complejo, el software genérico no alcanza.
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            Las organizaciones modernas operan con procesos que cruzan departamentos, sistemas y geografías.
            El software tradicional no fue diseñado para esta complejidad.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.2 }}
        >
          {PROBLEMS.map((problem, index) => (
            <motion.article
              key={problem.id}
              className="card-elevated p-6 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reducedMotion ? 0 : 0.4, delay: index * 0.08 }}
            >
              <h3 className="heading-4 text-surface-950 dark:text-white mb-2">
                {problem.title}
              </h3>
              <p className="body-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                {problem.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <span className="section-badge">La respuesta</span>
            <h3 className="heading-2 mt-4 text-surface-950 dark:text-white max-w-2xl mx-auto">
              Puntual BPM conecta personas, procesos, datos y sistemas en una misma arquitectura.
            </h3>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {SOLUTION_PILLARS.map((pillar, index) => (
              <motion.article
                key={pillar.id}
                className="relative card-elevated p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" aria-hidden="true" />
                <div className="relative z-10">
                  <h4 className="heading-4 text-surface-950 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="body-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.8 }}
          >
            <p className="body-lg text-surface-600 dark:text-surface-300 max-w-2xl mx-auto font-medium">
              Del caos a la orquestación. De la fragmentación al control. De la estaticidad a la evolución continua.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}