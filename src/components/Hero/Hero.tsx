'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ProcessScene } from './ProcessScene/ProcessScene';
import { useReducedMotion } from '../../hooks';

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden bg-white dark:bg-surface-950"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-30" aria-hidden="true" />

      <div className="container relative z-10 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="max-w-2xl pr-8 lg:pr-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium border border-brand-200 dark:border-brand-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              30+ años construyendo software para procesos críticos
            </motion.span>

            <h1
              id="hero-title"
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-[-0.03em] leading-[1.02] text-surface-950 dark:text-white text-balance mt-6"
            >
              <span className="block">Desarrollo a medida.</span>
              <span className="block bg-gradient-to-r from-brand-600 via-brand-500 to-violet-600 bg-clip-text text-transparent">Puntual BPM como core.</span>
            </h1>

            <motion.p
              className="text-lg sm:text-xl text-surface-600 dark:text-surface-300 leading-relaxed text-balance mt-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.3 }}
            >
              No vendemos software genérico. Construimos soluciones únicas para tus desafíos, usando nuestra plataforma BPM propietaria y 30+ años de experiencia como base tecnológica.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ willChange: 'transform, opacity' }}
            aria-label="Visualización interactiva de procesos de negocio"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-violet-500/5" aria-hidden="true" />
            <ProcessScene />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.8, delay: 1.4 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-6 h-10 border-2 border-surface-300 dark:border-surface-700 rounded-full flex justify-center pt-3"
        >
          <motion.div
            className="w-2 h-2 bg-surface-400 dark:bg-surface-500 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}