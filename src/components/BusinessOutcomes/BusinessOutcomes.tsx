'use client';

import { motion } from 'framer-motion';
import { BUSINESS_OUTCOMES } from '../../constants';
import { useReducedMotion } from '../../hooks';
import { 
  Zap, BarChart2, Shield, CheckCircle, Link2, RefreshCw
} from 'lucide-react';

interface BusinessOutcomesProps {
  className?: string;
}

const OUTCOME_ICONS = {
  speed: Zap,
  traceability: BarChart2,
  automation: CheckCircle,
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
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <span className="section-badge">Valor de negocio</span>
          <h2
            id="outcomes-heading"
            className="heading-2 text-surface-950 dark:text-white"
          >
            La tecnología importa. El resultado, más.
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            Traducimos capacidades técnicas de Puntual BPM en resultados de negocio medibles.
          </p>
        </motion.div>

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
                transition={{ duration: reducedMotion ? 0 : 0.5, delay: index * 0.1 }}
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
          className="mt-16 lg:mt-24 p-8 lg:p-12 rounded-2xl bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="heading-3 text-surface-950 dark:text-white mb-4">
              Cada capacidad técnica está diseñada para resolver un problema de negocio real
            </h3>
            <p className="body-lg text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
              No implementamos tecnología por tecnología. Cada feature de Puntual BPM nace de una necesidad real de nuestros clientes en 30 años de proyectos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}