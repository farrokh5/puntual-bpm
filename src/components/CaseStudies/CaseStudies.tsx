'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../../constants';
import { useReducedMotion } from '../../hooks';
import { BarChart2, Zap, Shield, Award, ChevronRight } from 'lucide-react';

interface CaseStudiesProps {
  className?: string;
}

export function CaseStudies({ className = '' }: CaseStudiesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const currentCase = CASE_STUDIES[activeIndex];

  const handleCaseChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="cases"
      className={`section relative bg-surface-50 dark:bg-surface-900/50 ${className}`}
      aria-labelledby="cases-heading"
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
          <span className="section-badge">Casos de éxito</span>
          <h2
            id="cases-heading"
            className="heading-2 text-surface-950 dark:text-white"
          >
            Resultados en procesos donde detenerse no es una opción.
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            Tres ejemplos de cómo nuestro desarrollo a medida con Puntual BPM transformó operaciones críticas.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.2 }}
        >
          {/* Case Details */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <motion.div
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium border border-brand-200 dark:border-brand-800 w-fit"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.1 }}
            >
              <BarChart2 className="w-5 h-5" aria-hidden="true" />
              {currentCase.industry}
            </motion.div>

            <motion.h3
              className="heading-2 text-surface-950 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.2 }}
            >
              {currentCase.title}
            </motion.h3>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.3 }}
            >
              <div className="card-elevated p-6">
                <h4 className="font-semibold text-surface-950 dark:text-white mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-brand-500" aria-hidden="true" />
                  El desafío
                </h4>
                <p className="body text-surface-600 dark:text-surface-300">{currentCase.challenge}</p>
              </div>
              <div className="card-elevated p-6">
                <h4 className="font-semibold text-surface-950 dark:text-white mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-500" aria-hidden="true" />
                  Nuestra solución
                </h4>
                <p className="body text-surface-600 dark:text-surface-300">{currentCase.solution}</p>
              </div>
              <div className="card-elevated p-6">
                <h4 className="font-semibold text-surface-950 dark:text-white mb-3 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-violet-500" aria-hidden="true" />
                  Arquitectura
                </h4>
                <p className="body text-surface-600 dark:text-surface-300 font-mono text-sm bg-surface-100 dark:bg-surface-800 p-4 rounded-lg">{currentCase.architecture}</p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.4 }}
            >
              {currentCase.results.map((result, i) => (
                <motion.div
                  key={i}
                  className="card-elevated p-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: reducedMotion ? 0 : 0.4, delay: 0.5 + i * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                      <BarChart2 className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-surface-950 dark:text-white">
                        {result.metric as string}
                      </div>
                      <div className="text-sm text-surface-500 dark:text-surface-400">
                        {result.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.6 }}
            >
              {currentCase.techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 rounded-full border border-surface-200 dark:border-surface-700"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: reducedMotion ? 0 : 0.3, delay: 0.7 + i * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.button
              className="mt-6 w-full btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {}}
            >
              Ver caso completo
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </motion.button>
          </div>

          {/* Visual Representation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.3 }}
          >
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-brand-900 via-brand-800 to-violet-900 p-1">
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
                  <h4 className="text-xl font-semibold text-white mb-2">{currentCase.title}</h4>
                  <p className="text-white/70 max-w-sm mx-auto">Dashboard de métricas en tiempo real</p>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-right">
                <div className="text-2xl font-display font-bold text-white">{currentCase.results[0]?.metric || '99.99%'}</div>
                <div className="text-xs text-white/70">Disponibilidad</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Case Selector */}
        <motion.div
          className="flex justify-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.5 }}
          role="tablist"
          aria-label="Seleccionar caso de éxito"
        >
          {CASE_STUDIES.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => handleCaseChange(i)}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Ver caso ${i + 1}: ${CASE_STUDIES[i].title}`}
              className={`w-3 h-3 rounded-full transition-all ${
                i === activeIndex
                  ? 'bg-brand-600 w-8'
                  : 'bg-surface-300 dark:bg-surface-700 hover:bg-surface-400 dark:hover:bg-surface-600'
              }`}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* All Cases Summary */}
        <motion.div
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.6 }}
        >
          {CASE_STUDIES.map((caseStudy, index) => (
            <motion.article
              key={caseStudy.id}
              className="card-elevated p-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                  {caseStudy.industry}
                </span>
                <Award className="w-5 h-5 text-amber-500" aria-hidden="true" />
              </div>
              <h4 className="heading-4 text-surface-950 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {caseStudy.title}
              </h4>
              <p className="body-sm text-surface-600 dark:text-surface-400 mb-4 line-clamp-2">
                {caseStudy.challenge}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-surface-600 dark:text-surface-400">
                  <Zap className="w-4 h-4 text-brand-500" aria-hidden="true" />
                  <span>{caseStudy.results[0]?.label}</span>
                </div>
                <div className="flex items-center gap-1 text-surface-600 dark:text-surface-400">
                  <BarChart2 className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                  <span className="font-semibold text-surface-950 dark:text-white">{caseStudy.results[0]?.metric}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-surface-200 dark:border-surface-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {caseStudy.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs bg-surface-100 dark:bg-surface-800 text-surface-500 dark:text-surface-400 rounded">
                      {tech}
                    </span>
                  ))}
                  {caseStudy.techStack.length > 3 && (
                    <span className="px-2 py-0.5 text-xs text-surface-400">+{caseStudy.techStack.length - 3} más</span>
                  )}
                </div>
                <button className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 flex items-center gap-1">
                  Ver detalles
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}