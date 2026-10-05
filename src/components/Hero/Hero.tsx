'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { ProcessScene } from './ProcessScene/ProcessScene';
import { HERO_STATS } from '../../constants';
import { useReducedMotion } from '../../hooks';

interface HeroProps {
  onCtaClick: (sectionId: string) => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-surface-950"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-30" aria-hidden="true" />

      <motion.div
        className="container relative z-10 pt-20 pb-16 lg:pt-28 lg:pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.8 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            className="max-w-xl pr-8 lg:pr-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium border border-brand-200 dark:border-brand-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              30+ años construyendo software para procesos críticos
            </motion.span>

            <h1
              id="hero-title"
              className="heading-1 mt-5 text-surface-950 dark:text-white leading-[1.05] text-balance"
            >
              <span className="block">Desarrollo a medida.</span>
              <span className="block text-gradient">Puntual BPM como core.</span>
            </h1>

            <motion.p
              className="body-lg mt-6 max-w-xl text-surface-600 dark:text-surface-300 leading-relaxed text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.3 }}
            >
              No vendemos software genérico. Construimos soluciones únicas para tus desafíos, usando nuestra plataforma BPM propietaria y 30+ años de experiencia como base tecnológica.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.4 }}
            >
              <motion.button
                onClick={() => onCtaClick('contact')}
                className="btn-primary group w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Agendar una llamada
                <motion.span
                  className="transition-transform group-hover:translate-x-1"
                  whileHover={{ x: 4 }}
                >
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </motion.span>
              </motion.button>
              <motion.button
                onClick={() => onCtaClick('offer')}
                className="btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Conocer la plataforma
              </motion.button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-6 mt-10 pt-6 border-t border-surface-200 dark:border-surface-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.5 }}
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                    <CheckCircle className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="stat-value text-2xl sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="stat-label">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ willChange: 'transform, opacity' }}
            aria-label="Visualización interactiva de procesos de negocio"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-violet-500/5" aria-hidden="true" />
            <ProcessScene />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.8, delay: 1.2 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-5 h-9 border-2 border-surface-300 dark:border-surface-700 rounded-full flex justify-center pt-2"
        >
          <motion.div
            className="w-1.5 h-1.5 bg-surface-400 dark:bg-surface-500 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}