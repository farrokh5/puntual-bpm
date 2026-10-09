'use client';

import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { PROBLEMS, SOLUTION_PILLARS } from '../../constants';
import { useReducedMotion } from '../../hooks';
import { 
  GitBranch, Scale, BarChart2, Link2, ChevronRight 
} from 'lucide-react';

const BPM_STEPS = [
  { id: 'start', label: 'Inicio', icon: 'circle', from: '#10b981', to: '#0d9488', desc: 'Disparador del proceso' },
  { id: 'task', label: 'Tarea humana', icon: 'user', from: '#637bf0', to: '#4f5de5', desc: 'Persona ejecuta trabajo' },
  { id: 'decision', label: 'Decisión', icon: 'diamond', from: '#f59e0b', to: '#f97316', desc: 'Regla de negocio evalúa' },
  { id: 'auto', label: 'Automatismo', icon: 'zap', from: '#8b5cf6', to: '#9333ea', desc: 'Sistema ejecuta acción' },
  { id: 'integration', label: 'Integración', icon: 'link', from: '#06b6d4', to: '#3b82f6', desc: 'Conecta con sistemas' },
  { id: 'end', label: 'Fin', icon: 'circle', from: '#f43f5e', to: '#ec4899', desc: 'Proceso completado' },
] as const;

const STEP_ICONS = {
  circle: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  user: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  diamond: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M12 2L2 12l10 10 10-10-10-10Z" />
    </svg>
  ),
  zap: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  link: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M13.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8.5M10 3v4M3 10h4M17 21h4v-4M21 17h-4" />
    </svg>
  ),
} as const;

interface ProblemStoryProps {
  className?: string;
}

export function ProblemStory({ className = '' }: ProblemStoryProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="problem-story"
      className={`section relative bg-surface-50 dark:bg-surface-900/50 ${className}`}
      aria-labelledby="problem-story-heading"
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-30" aria-hidden="true" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="section-header max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <span className="section-badge">El desafío</span>
          <h2
            id="problem-story-heading"
            className="heading-2 text-surface-950 dark:text-white mt-4"
          >
            Cuando el proceso es complejo, el software genérico no alcanza.
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            Las organizaciones modernas operan con procesos que cruzan departamentos, sistemas y geografías.
            El software tradicional no fue diseñado para esta complejidad.
          </p>
        </motion.div>

        {/* Visual BPM Flow - The "What is BPM" visual story */}
        <motion.div
          className="relative my-16 lg:my-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.2 }}
        >
          <div className="relative max-w-6xl mx-auto">
            {/* Connecting flow line */}
            <div className="hidden lg:block absolute top-12 left-20 right-20 h-0.5 bg-gradient-to-r from-transparent via-surface-300 dark:via-surface-700 to-transparent" aria-hidden="true" />
            
            <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 px-4">
              {BPM_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="relative flex flex-col items-center z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {/* Step Node */}
                  <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${step.from}, ${step.to})` }}>
                    <span className="block w-10 h-10 lg:w-12 lg:h-12">{STEP_ICONS[step.icon as keyof typeof STEP_ICONS]}</span>
                  </div>
                  
                  {/* Icon Badge */}
                  <div className="absolute -top-3 -right-3 w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-white dark:bg-surface-900 border-2 border-surface-200 dark:border-surface-700 flex items-center justify-center shadow-md">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center text-white" style={{ background: `linear-gradient(135deg, ${step.from}, ${step.to})` }}>
                      <span className="text-lg lg:text-xl font-display font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Label & Description */}
                  <div className="mt-6 text-center w-44 lg:w-52">
                    <h3 className="heading-4 text-surface-950 dark:text-white mb-2">{step.label}</h3>
                    <p className="text-sm text-surface-600 dark:text-surface-400">{step.desc}</p>
                  </div>
                  
                  {/* Arrow between nodes */}
                  {index < BPM_STEPS.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-12 left-full w-4 h-0.5 bg-gradient-to-r from-surface-300 dark:from-surface-700 to-transparent"
                      initial={{ width: 0 }}
                      animate={{ width: '1rem' }}
                      transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.4 + index * 0.1 }}
                      aria-hidden="true"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile stepper */}
            <div className="lg:hidden mt-10 space-y-4">
              {BPM_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex items-start gap-4 p-4 bg-surface-100 dark:bg-surface-800/50 rounded-xl border border-surface-200 dark:border-surface-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reducedMotion ? 0 : 0.4, delay: 0.2 + index * 0.08 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white" style={{ background: `linear-gradient(135deg, ${step.from}, ${step.to})` }}>
                    <span className="block w-7 h-7">{STEP_ICONS[step.icon as keyof typeof STEP_ICONS]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: `linear-gradient(135deg, ${step.from}, ${step.to})` }}>
                        <span className="text-sm font-display font-bold">{index + 1}</span>
                      </div>
                      <h4 className="font-semibold text-surface-950 dark:text-white">{step.label}</h4>
                    </div>
                    <p className="text-sm text-surface-600 dark:text-surface-400 pl-10">{step.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-surface-400 flex-shrink-0 mt-1" aria-hidden="true" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* The Problems - Card Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.4 }}
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

        {/* The Response - Solution Pillars */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.5 }}
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
                className="relative card-elevated p-6 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" aria-hidden="true" />
                <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 mb-4 group-hover:scale-110 transition-transform">
                  {(() => {
                    const PillarIcon = ({ orchestration: GitBranch, decisions: Scale, measurement: BarChart2, integration: Link2 } as Record<string, ComponentType<{ className?: string; 'aria-hidden'?: boolean | string }>>)[pillar.id];
                    return PillarIcon ? <PillarIcon className="w-6 h-6" aria-hidden="true" /> : null;
                  })()}
                </div>
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
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.9 }}
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