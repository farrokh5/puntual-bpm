'use client';

import { motion } from 'framer-motion';
import { OFFER_PILLARS } from '../../constants';
import { useReducedMotion } from '../../hooks';

interface OfferSectionProps {
  className?: string;
}

export function OfferSection({ className = '' }: OfferSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="offer"
      className={`section bg-white dark:bg-surface-950 ${className}`}
      aria-labelledby="offer-heading"
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.5 }}
          >
            Nuestra propuesta
          </motion.span>
          <h2
            id="offer-heading"
            className="heading-2 mt-4 text-surface-950 dark:text-white"
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
                <p className="text-surface-500 dark:text-surface-400 leading-relaxed border-l-2 border-brand-500/30 pl-4">
                  {pillar.longDescription}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}