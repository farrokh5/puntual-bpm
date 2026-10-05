'use client';

import { motion } from 'framer-motion';
import { HERO_STATS } from '../../constants';
import { useReducedMotion } from '../../hooks';

interface TrustBarProps {
  className?: string;
}

export function TrustBar({ className = '' }: TrustBarProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className={`relative py-12 lg:py-16 border-y border-surface-200 dark:border-surface-800 bg-white/50 dark:bg-surface-950/50 backdrop-blur-sm ${className}`}
      aria-label="Indicadores de confianza"
    >
      <div className="container">
        <div className="grid grid-cols-3 gap-8 lg:gap-12 text-center">
          {HERO_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-display font-bold text-surface-950 dark:text-white tracking-tight leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-surface-500 dark:text-surface-400 font-medium">
                {stat.label}
              </div>
              {index < HERO_STATS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-px h-12 bg-gradient-to-b from-transparent via-surface-300 dark:via-surface-700 to-transparent -translate-y-1/2" aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-center text-sm text-surface-500 dark:text-surface-400 mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.4 }}
        >
          Experiencia construyendo soluciones para procesos críticos y organizaciones complejas.
        </motion.p>
      </div>
    </section>
  );
}