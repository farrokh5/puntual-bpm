'use client';

import { motion } from 'framer-motion';
import {
  GitBranch,
  Layout,
  Scale,
  Link2,
  CheckSquare,
  BarChart2,
  FileText,
  Shield,
} from 'lucide-react';
import { PLATFORM_CAPABILITIES } from '../../constants';
import { useReducedMotion } from '../../hooks';

const ICON_MAP = {
  'git-branch': GitBranch,
  layout: Layout,
  scale: Scale,
  'link-2': Link2,
  'check-square': CheckSquare,
  'bar-chart-2': BarChart2,
  'file-text': FileText,
  shield: Shield,
} as const;

interface PlatformSectionProps {
  className?: string;
}

export function PlatformSection({ className = '' }: PlatformSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="platform"
      className={`section bg-white dark:bg-surface-950 ${className}`}
      aria-labelledby="platform-heading"
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
          >
            Plataforma Puntual BPM
          </motion.span>
          <h2
            id="platform-heading"
            className="heading-2 mt-4 text-surface-950 dark:text-white"
          >
            El core tecnológico que acelera tu desarrollo
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            30 años de experiencia encapsulados en una plataforma robusta. Motor BPMN, formularios, reglas, integraciones y analítica listos para usar.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-brand-500/10 to-violet-500/10 blur-3xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLATFORM_CAPABILITIES.map((capability, index) => {
              const Icon = ICON_MAP[capability.icon as keyof typeof ICON_MAP];
              return (
                <motion.article
                  key={capability.id}
                  className="card group relative overflow-hidden h-full"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: reducedMotion ? 0 : 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(99, 123, 240, 0.15)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-surface-950 dark:text-white mb-2">
                      {capability.title}
                    </h3>
                    <p className="body text-surface-600 dark:text-surface-300 text-sm leading-relaxed flex-1">
                      {capability.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-brand-500/20 pointer-events-none"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 1, delay: 0.6 }}
            aria-hidden="true"
          />
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.4 }}
        >
          <p className="body text-surface-600 dark:text-surface-300 mb-6 max-w-2xl mx-auto">
            La plataforma se extiende con APIs abiertas, webhooks, SDK y framework de conectores para integrar cualquier sistema.
          </p>
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver capacidades técnicas
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}