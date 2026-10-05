'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useReducedMotion } from '../../hooks';

interface FinalCTAProps {
  className?: string;
  onPrimaryCtaClick: (sectionId: string) => void;
  onSecondaryCtaClick: () => void;
}

export function FinalCTA({ className = '', onPrimaryCtaClick, onSecondaryCtaClick }: FinalCTAProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className={`section relative overflow-hidden ${className}`}
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-violet-800" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-10" aria-hidden="true" />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 2 }}
        aria-hidden="true"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20"
          >
            ¿Listo para empezar?
          </motion.span>
          <h2
            id="cta-heading"
            className="heading-2 mt-4 text-white"
          >
            ¿Qué proceso querés transformar?
          </h2>
          <p className="body-lg mt-4 text-white/80 max-w-2xl mx-auto">
            Contanos qué está frenando a tu organización. Analizamos el proceso, identificamos oportunidades y definimos juntos el camino hacia una solución concreta.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={() => onPrimaryCtaClick('contact')}
            className="w-full sm:w-auto btn bg-white text-brand-700 hover:bg-white/90 focus-visible:ring-white group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Agendar llamada
            <motion.span
              className="transition-transform group-hover:translate-x-1"
              whileHover={{ x: 4 }}
            >
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </motion.span>
          </motion.button>
          <motion.button
            onClick={onSecondaryCtaClick}
            className="w-full sm:w-auto btn border-2 border-white/30 text-white hover:bg-white/10 focus-visible:ring-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageSquare className="w-5 h-5 mr-2" aria-hidden="true" />
            Enviar mensaje
          </motion.button>
        </motion.div>

        <motion.div
          className="relative aspect-video rounded-2xl bg-gradient-to-br from-brand-900 via-brand-800 to-violet-900 p-1"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.5 }}
        >
          <div className="w-full h-full rounded-xl bg-surface-950/80 backdrop-blur-xl border border-surface-800 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,_123,_240,_0.15)_0%,_transparent_70%)]" aria-hidden="true" />
            <div className="relative z-10 text-center p-8">
              <motion.div
                className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path d="M12 2v20M17 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  <path d="M7 7l5 5 5-5" />
                </svg>
              </motion.div>
              <h4 className="text-xl font-semibold text-white mb-2">Visualización de procesos en vivo</h4>
              <p className="text-white/70 max-w-sm mx-auto">Así se ve la orquestación en tiempo real</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 pt-12 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-sm text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.7 }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Seguridad empresarial</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Cumplimiento normativo</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Implementación en semanas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}