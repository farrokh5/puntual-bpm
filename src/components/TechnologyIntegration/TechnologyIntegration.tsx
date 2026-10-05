'use client';

import { motion } from 'framer-motion';
import { INTEGRATION_TECHNOLOGIES } from '../../constants';
import { useReducedMotion } from '../../hooks';
import { Link2, Database, Server, Cpu, HardDrive, Mail, Zap, Box, ChevronRight, Code } from 'lucide-react';

interface TechnologyIntegrationProps {
  className?: string;
}

const TECH_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'APIs': Link2,
  'Legacy': Server,
  'Bases de datos': Database,
  'ERP': Cpu,
  'Archivos': HardDrive,
  'Comunicación': Mail,
  'Eventos': Zap,
  'Desarrollo': Code,
  'Mensajería': Box,
};

const TECH_COLORS: Record<string, string> = {
  'APIs': 'from-brand-500 to-brand-600',
  'Legacy': 'from-slate-500 to-slate-600',
  'Bases de datos': 'from-emerald-500 to-teal-600',
  'ERP': 'from-violet-500 to-purple-600',
  'Archivos': 'from-amber-500 to-orange-600',
  'Comunicación': 'from-rose-500 to-pink-600',
  'Eventos': 'from-cyan-500 to-blue-600',
  'Desarrollo': 'from-indigo-500 to-blue-600',
  'Mensajería': 'from-sky-500 to-cyan-600',
};

export function TechnologyIntegration({ className = '' }: TechnologyIntegrationProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="technology"
      className={`section relative bg-white dark:bg-surface-950 ${className}`}
      aria-labelledby="tech-heading"
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-30" aria-hidden="true" />

      <div className="container relative z-10">

        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <span className="section-badge">Integración</span>
          <h2 id="tech-heading" className="heading-2 text-surface-950 dark:text-white">
            Construido para integrarse con tu ecosistema.
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
            Puntual BPM no es una plataforma aislada. Es la capa de orquestación que conecta, transforma y coordina tus sistemas existentes sin reemplazar lo que ya funciona.
          </p>
        </motion.div>

        {/* Integration Patterns */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.2 }}
        >
          {[
            { title: 'API-First', desc: 'Todo expuesto vía REST/GraphQL. OpenAPI 3.0 nativo.', icon: Link2, color: 'from-brand-500 to-brand-600' },
            { title: 'Event-Driven', desc: 'Webhooks, Kafka, RabbitMQ. Arquitectura reactiva.', icon: Zap, color: 'from-cyan-500 to-blue-600' },
            { title: 'Legacy Ready', desc: 'SOAP, JDBC, SAP RFC/BAPI, mainframes.', icon: Server, color: 'from-slate-500 to-slate-600' },
            { title: 'Extensible', desc: 'SDK TypeScript para conectores custom.', icon: Code, color: 'from-violet-500 to-purple-600' },
          ].map((pattern, index) => (
            <motion.div
              key={pattern.title}
              className="card-elevated p-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br text-white mb-4" style={{ background: `linear-gradient(135deg, ${pattern.color.split(' ')[0]}, ${pattern.color.split(' ')[2]})` }}>
                <pattern.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h4 className="font-semibold text-surface-950 dark:text-white mb-2">{pattern.title}</h4>
              <p className="text-sm text-surface-600 dark:text-surface-400">{pattern.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.3 }}
        >
          {INTEGRATION_TECHNOLOGIES.map((tech, index) => {
            const IconComponent = TECH_ICONS[tech.category] || Link2;
            const color = TECH_COLORS[tech.category] || 'from-brand-500 to-brand-600';
            
            return (
              <motion.div
                key={tech.label}
                className="card-interactive p-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reducedMotion ? 0 : 0.4, delay: 0.4 + index * 0.06 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br text-white" style={{ background: `linear-gradient(135deg, ${color.split(' ')[0]}, ${color.split(' ')[2]})` }}>
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-surface-950 dark:text-white truncate">{tech.label}</p>
                    <p className="text-xs text-surface-500 dark:text-surface-400 capitalize">{tech.category.toLowerCase()}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-surface-300 dark:text-surface-600 group-hover:text-brand-500 transition-colors opacity-0 group-hover:opacity-100" aria-hidden="true" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary */}
        <motion.div
          className="mt-12 p-8 rounded-2xl bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.5 }}
        >
          <p className="body-lg text-surface-700 dark:text-surface-300 max-w-2xl mx-auto mb-6">
            Puntual BPM actúa como la capa de orquestación: conecta, transforma y coordina sin reemplazar lo que ya funciona.
          </p>
          <motion.button className="btn-outline">
            Ver documentación de integración
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}