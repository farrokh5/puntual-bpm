'use client';

import { motion } from 'framer-motion';
import { PROCESS_STAGES } from '../../constants';
import { useReducedMotion } from '../../hooks';
import { 
  Search, Layout, Code, Rocket, RefreshCw, 
  CheckCircle, Clock, Users, BarChart, Shield, Zap 
} from 'lucide-react';

type ProcessStageType = typeof PROCESS_STAGES[number];

const STAGE_ICONS = {
  discovery: Search,
  architecture: Layout,
  development: Code,
  deployment: Rocket,
  evolution: RefreshCw,
} as const;

const STAGE_ACCENTS = {
  discovery: 'from-brand-500 to-brand-600',
  architecture: 'from-emerald-500 to-teal-600',
  development: 'from-violet-500 to-purple-600',
  deployment: 'from-amber-500 to-orange-600',
  evolution: 'from-rose-500 to-pink-600',
} as const;

const STAGE_DELIVERABLES = {
  discovery: [
    'Mapeo de procesos actuales (AS-IS)',
    'Definición de procesos objetivo (TO-BE)',
    'Matriz de stakeholders y RACI',
    'KPIs de éxito acordados',
    'Análisis de riesgos y mitigaciones',
  ],
  architecture: [
    'Arquitectura técnica detallada',
    'Modelo de datos y diccionario',
    'Diseño de integraciones y APIs',
    'Plan de seguridad y compliance',
    'Roadmap de entregas por sprints',
  ],
  development: [
    'Sprints de 2-3 semanas con demo',
    'Entregas funcionales validadas',
    'Código versionado y revisado',
    'Pruebas automatizadas (unit/integration)',
    'Documentación técnica viva',
  ],
  deployment: [
    'Plan de migración de datos',
    'Pruebas de carga y rendimiento',
    'Capacitación a usuarios clave',
    'Puesta en producción controlada',
    'Período de hipercuidado (2-4 semanas)',
  ],
  evolution: [
    'Soporte 24/7 Nivel 1/2/3',
    'Monitoreo proactivo de SLA',
    'Backlog de mejoras priorizado',
    'Nuevas funcionalidades por sprint',
    'Revisiones trimestrales de negocio',
  ],
} as const;

function MethodologyStep({ 
  stage, 
  index, 
  reducedMotion,
  isLast
}: { 
  stage: ProcessStageType; 
  index: number; 
  reducedMotion: boolean;
  isLast: boolean;
}) {
  const isEven = index % 2 === 0;
  const IconComponent = STAGE_ICONS[stage.id as keyof typeof STAGE_ICONS] || Search;
  const accentColor = STAGE_ACCENTS[stage.id as keyof typeof STAGE_ACCENTS] || 'from-brand-500 to-brand-600';
  const deliverables = STAGE_DELIVERABLES[stage.id as keyof typeof STAGE_DELIVERABLES] || [];

  return (
    <motion.div
      className={`relative flex lg:flex-row ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-8 lg:gap-16 pb-12 lg:pb-20`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: reducedMotion ? 0 : 0.5, delay: index * 0.12 }}
    >
      {/* Timeline connector */}
      <div className="relative lg:w-1/2 lg:pr-8 lg:pl-8 lg:flex lg:items-center lg:justify-end">
        {index > 0 && (
          <div 
            className="absolute top-0 bottom-0 left-1/2 lg:left-auto lg:right-0 w-px h-full bg-gradient-to-b from-transparent via-surface-300 dark:via-surface-700 to-transparent -translate-x-1/2" 
            aria-hidden="true" 
          />
        )}
        {!index && !isLast && (
          <div 
            className="absolute top-10 bottom-0 left-1/2 lg:left-auto lg:right-0 w-px h-full bg-gradient-to-b from-transparent via-surface-300 dark:via-surface-700 to-transparent -translate-x-1/2" 
            aria-hidden="true" 
          />
        )}

        <motion.div
          className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-surface-900 border-2 border-surface-200 dark:border-surface-700 flex items-center justify-center shadow-lg shadow-brand-500/5 flex-shrink-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.6 + index * 0.12 }}
        >
          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-gradient-to-br text-white" style={{ background: `linear-gradient(135deg, ${accentColor.split(' ')[0]}, ${accentColor.split(' ')[2]})` }}>
            <span className="font-display text-2xl lg:text-3xl font-bold">{stage.number}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="lg:w-1/2 lg:pl-8 lg:pr-8 pt-4"
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.3 + index * 0.12 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-medium border border-brand-200 dark:border-brand-800">
            Paso {stage.number}
          </span>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br text-white" style={{ background: `linear-gradient(135deg, ${accentColor.split(' ')[0]}, ${accentColor.split(' ')[2]})` }}>
            <IconComponent className="w-5 h-5" aria-hidden="true" />
          </div>
        </div>
        
        <h3 className="heading-3 text-surface-950 dark:text-white mb-2">
          {stage.title}
        </h3>
        <p className="body text-surface-600 dark:text-surface-300 mb-6">
          {stage.description}
        </p>

        {/* Deliverables */}
        <div className="space-y-3">
          <h4 className="font-medium text-surface-950 dark:text-white text-sm uppercase tracking-wider mb-3">Entregables clave:</h4>
          <ul className="space-y-2" role="list">
            {deliverables.map((deliverable, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-sm text-surface-600 dark:text-surface-400"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.3, delay: 0.4 + i * 0.06 }}
              >
                <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{deliverable}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Methodology({ className = '' }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  const steps = PROCESS_STAGES.map((stage, index) => (
    <MethodologyStep
      key={stage.id}
      stage={stage}
      index={index}
      reducedMotion={reducedMotion}
      isLast={index === PROCESS_STAGES.length - 1}
    />
  ));

  return (
    <section
      id="process"
      className={`section relative bg-white dark:bg-surface-950 ${className}`}
      aria-labelledby="process-heading"
    >
      <div className="container relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <span className="section-badge">Metodología</span>
          <h2
            id="process-heading"
            className="heading-2 text-surface-950 dark:text-white"
          >
            Cómo trabajamos: de la idea a la evolución continua.
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            Metodología probada en 500+ proyectos. Entregas de valor temprano, riesgo controlado y alineación constante.
          </p>
        </motion.div>

        <div className="relative">
          <div className="space-y-0">
            {steps}
          </div>
        </div>

        {/* Summary Value Props */}
        <motion.div
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.8 }}
        >
          <div className="p-6 bg-surface-50 dark:bg-surface-900/50 rounded-xl border border-surface-200 dark:border-surface-800 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
              <Clock className="w-6 h-6" aria-hidden="true" />
            </div>
            <h4 className="font-semibold text-surface-950 dark:text-white mb-1">Time-to-value</h4>
            <p className="text-sm text-surface-600 dark:text-surface-400">Primera entrega funcional en 6-8 semanas</p>
          </div>
          <div className="p-6 bg-surface-50 dark:bg-surface-900/50 rounded-xl border border-surface-200 dark:border-surface-800 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Users className="w-6 h-6" aria-hidden="true" />
            </div>
            <h4 className="font-semibold text-surface-950 dark:text-white mb-1">Equipo dedicado</h4>
            <p className="text-sm text-surface-600 dark:text-surface-400">Arquitectos, developers, QA y PM asignados</p>
          </div>
          <div className="p-6 bg-surface-50 dark:bg-surface-900/50 rounded-xl border border-surface-200 dark:border-surface-800 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
              <Zap className="w-6 h-6" aria-hidden="true" />
            </div>
            <h4 className="font-semibold text-surface-950 dark:text-white mb-1">Iteraciones cortas</h4>
            <p className="text-sm text-surface-600 dark:text-surface-400">Sprints de 2-3 semanas con demo real</p>
          </div>
          <div className="p-6 bg-surface-50 dark:bg-surface-900/50 rounded-xl border border-surface-200 dark:border-surface-800 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <BarChart className="w-6 h-6" aria-hidden="true" />
            </div>
            <h4 className="font-semibold text-surface-950 dark:text-white mb-1">Métricas claras</h4>
            <p className="text-sm text-surface-600 dark:text-surface-400">KPIs definidos y monitoreados desde día 1</p>
          </div>
          <div className="p-6 bg-surface-50 dark:bg-surface-900/50 rounded-xl border border-surface-200 dark:border-surface-800 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400">
              <Shield className="w-6 h-6" aria-hidden="true" />
            </div>
            <h4 className="font-semibold text-surface-950 dark:text-white mb-1">Socio a largo plazo</h4>
            <p className="text-sm text-surface-600 dark:text-surface-400">Evolución continua, no proyecto y chau</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}