'use client';

import { motion } from 'framer-motion';
import { OFFER_PILLARS } from '../../constants';
import { useReducedMotion } from '../../hooks';

interface ValuePropositionProps {
  className?: string;
}

export function ValueProposition({ className = '' }: ValuePropositionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="offer"
      className={`section bg-white dark:bg-surface-950 ${className}`}
      aria-labelledby="offer-heading"
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <span className="section-badge">Nuestra propuesta</span>
          <h2
            id="offer-heading"
            className="heading-2 text-surface-950 dark:text-white"
          >
            No partimos de cero. Construimos sobre experiencia.
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            Cuatro pilares que definen cómo entregamos valor en cada proyecto.
          </p>
        </motion.div>

        <div className="space-y-12 lg:space-y-16">
          {OFFER_PILLARS.map((pillar, index) => (
            <motion.article
              key={pillar.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: reducedMotion ? 0 : 0.6, delay: index * 0.15 }}
            >
              <div className="flex lg:flex-row lg:items-start gap-8 lg:gap-16">
                <div className="flex-shrink-0 w-16 lg:w-20 text-right lg:text-left">
                  <span className="font-display text-4xl lg:text-5xl font-bold text-brand-500/20">
                    {pillar.number}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="heading-3 text-surface-950 dark:text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="body-lg text-surface-600 dark:text-surface-300 mb-4 pr-8">
                    {pillar.description}
                  </p>
                  <div className="hidden lg:block w-1 h-12 bg-gradient-to-b from-brand-500/30 to-transparent ml-2" aria-hidden="true" />
                </div>
              </div>
              <motion.div
                className="mt-6 lg:mt-8 pl-16 lg:pl-24 max-w-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.3 }}
              >
                <p className="body-sm text-surface-500 dark:text-surface-400 leading-relaxed border-l-2 border-brand-500/30 pl-4">
                  {pillar.longDescription}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-16 lg:mt-24 p-8 lg:p-12 rounded-2xl bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="heading-3 text-surface-950 dark:text-white mb-4">
              La diferencia: software genérico vs. Puntual BPM
            </h3>
            <div className="grid sm:grid-cols-2 gap-8 mt-8 text-left">
              <div className="p-6 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800">
                <h4 className="heading-4 text-surface-950 dark:text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  Software genérico
                </h4>
                <ul className="space-y-3 text-sm text-surface-600 dark:text-surface-400">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" aria-hidden="true" /> Funcionalidad fija, difícil de adaptar</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" aria-hidden="true" /> Personalización limitada y costosa</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" aria-hidden="true" /> Procesos dictados por el proveedor</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" aria-hidden="true" /> Cambios requieren ciclos de release largos</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" aria-hidden="true" /> Integraciones frágiles y propietarias</li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-surface-900 rounded-xl border border-brand-200 dark:border-brand-800">
                <h4 className="heading-4 text-surface-950 dark:text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Puntual BPM
                </h4>
                <ul className="space-y-3 text-sm text-surface-600 dark:text-surface-300">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" /> Soluciones a medida para tus procesos reales</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" /> BPM como core tecnológico reutilizable</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" /> Arquitectura orientada a procesos</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" /> Cambios en reglas y flujos en horas</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" /> Integraciones nativas y extensibles</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}