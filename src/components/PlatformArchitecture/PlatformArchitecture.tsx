'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitBranch, Layout, Scale, Link2, CheckSquare, BarChart2, FileText, Shield, 
  Sparkles, ChevronRight, ChevronLeft, ExternalLink, Check 
} from 'lucide-react';
import { useReducedMotion } from '../../hooks';

interface PlatformArchitectureProps {
  className?: string;
}

const CAPABILITIES = [
  { 
    id: 'bpmn-engine', 
    title: 'Motor BPMN 2.0', 
    description: 'Ejecución nativa de procesos estándar con gateways, eventos, subprocessos, temporizadores y compensación.',
    category: 'Procesos', 
    icon: GitBranch,
    color: 'from-brand-500 to-brand-600',
    details: [
      'Compatible con BPMN 2.0 completo',
      'Gateways exclusivos, inclusivos, paralelos',
      'Eventos de inicio, intermedios, final',
      'Subprocesos y call activities',
      'Temporizadores y escalamientos',
      'Compensación y manejo de errores'
    ]
  },
  { 
    id: 'low-code-forms', 
    title: 'Formularios Low-Code', 
    description: 'Constructor visual con 40+ controles, validaciones dinámicas, lógica condicional, firmas y adjuntos.',
    category: 'Datos', 
    icon: Layout,
    color: 'from-emerald-500 to-teal-600',
    details: [
      '40+ tipos de controles nativos',
      'Validaciones cruzadas y asíncronas',
      'Lógica condicional sin código',
      'Firma digital y adjuntos',
      'Responsive y accesible (WCAG 2.1)',
      'Plantillas reutilizables'
    ]
  },
  { 
    id: 'rules-engine', 
    title: 'Motor de Reglas DMN', 
    description: 'Decisiones de negocio externalizadas en tablas de decisión versionables, auditables y sin deploy.',
    category: 'Decisiones', 
    icon: Scale,
    color: 'from-amber-500 to-orange-600',
    details: [
      'Estándar DMN 1.3 nativo',
      'Tablas de decisión visuales',
      'Versionado y auditoría completa',
      'Cambios en caliente sin deploy',
      'Testing A/B de reglas',
      'Simulador de decisiones'
    ]
  },
  { 
    id: 'integration-hub', 
    title: 'Hub de Integración', 
    description: 'Conectores preconstruidos (REST, SOAP, JDBC, SAP, SFTP, Email) y framework para crear los tuyos.',
    category: 'Integración', 
    icon: Link2,
    color: 'from-violet-500 to-purple-600',
    details: [
      'Conectores REST, SOAP, GraphQL',
      'JDBC para bases de datos',
      'SAP RFC/BAPI nativo',
      'SFTP, Email, Webhooks',
      'Colas de mensajes (Kafka, RabbitMQ)',
      'SDK TypeScript para conectores custom'
    ]
  },
  { 
    id: 'task-management', 
    title: 'Gestión de Tareas', 
    description: 'Bandeja unificada, asignación por rol/regla, SLAs, escalamiento automático, delegación y trabajo offline.',
    category: 'Operación', 
    icon: CheckSquare,
    color: 'from-cyan-500 to-blue-600',
    details: [
      'Bandeja unificada multi-proceso',
      'Asignación por rol, regla o usuario',
      'SLAs con escalamiento automático',
      'Delegación y sustitución',
      'Modo offline con sincronización',
      'App móvil nativa (iOS/Android)'
    ]
  },
  { 
    id: 'analytics', 
    title: 'Analítica en Tiempo Real', 
    description: 'Dashboards operativos y ejecutivos, KPIs de proceso, cuellos de botella, trazabilidad completa y alertas.',
    category: 'Medición', 
    icon: BarChart2,
    color: 'from-rose-500 to-pink-600',
    details: [
      'Dashboards operativos y ejecutivos',
      'KPIs de ciclo, throughput, SLA',
      'Detección de cuellos de botella',
      'Trazabilidad completa de instancias',
      'Alertas configurables',
      'Exportación a Power BI / Tableau'
    ]
  },
  { 
    id: 'document-mgmt', 
    title: 'Gestión Documental', 
    description: 'Repositorio con versionado, metadatos, OCR, búsqueda full-text, retención legal y firma digital.',
    category: 'Datos', 
    icon: FileText,
    color: 'from-indigo-500 to-blue-600',
    details: [
      'Versionado automático',
      'Metadatos y taxonomía',
      'OCR y extracción de datos',
      'Búsqueda full-text',
      'Políticas de retención legal',
      'Firma digital integrada'
    ]
  },
  { 
    id: 'security', 
    title: 'Seguridad Empresarial', 
    description: 'RBAC granular, SSO (SAML/OIDC), auditoría completa, encriptación en tránsito/reposo, certificación ISO 27001.',
    category: 'Seguridad', 
    icon: Shield,
    color: 'from-slate-500 to-slate-600',
    details: [
      'RBAC granular por recurso/acción',
      'SSO SAML 2.0 / OIDC',
      'Auditoría inmutable de eventos',
      'Encriptación AES-256 en reposo',
      'TLS 1.3 en tránsito',
      'ISO 27001, SOC 2 Type II'
    ]
  },
] as const;

const CAPABILITY_CATEGORIES = [
  { id: 'all', label: 'Todas', color: 'text-surface-500' },
  { id: 'Procesos', label: 'Procesos', color: 'text-brand-600' },
  { id: 'Datos', label: 'Datos', color: 'text-emerald-600' },
  { id: 'Decisiones', label: 'Decisiones', color: 'text-amber-600' },
  { id: 'Integración', label: 'Integración', color: 'text-violet-600' },
  { id: 'Operación', label: 'Operación', color: 'text-cyan-600' },
  { id: 'Medición', label: 'Medición', color: 'text-rose-600' },
  { id: 'Seguridad', label: 'Seguridad', color: 'text-slate-600' },
] as const;

export function PlatformArchitecture({ className = '' }: PlatformArchitectureProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | string>('all');
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const filteredCapabilities = activeCategory === 'all' 
    ? CAPABILITIES 
    : CAPABILITIES.filter(c => c.category === activeCategory);

  return (
    <section
      ref={containerRef}
      id="platform"
      className={`section relative bg-white dark:bg-surface-950 ${className}`}
      aria-labelledby="platform-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,123,240,0.03)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[ repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(99,123,240,0.03) 10px, rgba(99,123,240,0.03) 20px) ]" />
      </div>

      <div className="container relative z-10 pt-16 lg:pt-24">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <span className="section-badge">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            PLATAFORMA PUNTUAL BPM
          </span>
          <h2 id="platform-heading" className="heading-2 mt-4 text-surface-950 dark:text-white">
            Un core tecnológico para construir soluciones complejas
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
            Procesos, decisiones, integraciones y datos conectados en una plataforma diseñada para acelerar el desarrollo de software a medida.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.2 }}
          role="tablist"
          aria-label="Filtrar capacidades por categoría"
        >
          {CAPABILITY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id as any); setSelectedCapability(null); }}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25'
                  : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-700'
              } ${cat.color}`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.3 }}
        >
          {filteredCapabilities.map((cap, index) => (
            <motion.article
              key={cap.id}
              className="card-interactive relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.4 + index * 0.08 }}
              onClick={() => setSelectedCapability(selectedCapability === cap.id ? null : cap.id)}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedCapability(selectedCapability === cap.id ? null : cap.id); } }}
              role="button"
              aria-expanded={selectedCapability === cap.id}
              aria-controls={`capability-${cap.id}-details`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br text-white" style={{ background: `linear-gradient(135deg, ${cap.color.split(' ')[0]}, ${cap.color.split(' ')[2]})` }}>
                    <cap.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="label">{cap.category}</span>
                </div>
                
                <h4 className="heading-4 text-surface-950 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {cap.title}
                </h4>
                <p className="body-sm text-surface-600 dark:text-surface-400 flex-1 mb-4">
                  {cap.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-400 group-hover:gap-3 transition-all">
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  Ver detalles
                </div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {selectedCapability === cap.id && (
                  <motion.div
                    id={`capability-${cap.id}-details`}
                    className="absolute inset-0 bg-white dark:bg-surface-950 z-20 p-6 overflow-y-auto border-t border-surface-200 dark:border-surface-800"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.3 }}
                    role="region"
                    aria-label={`Detalles de ${cap.title}`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br text-white" style={{ background: `linear-gradient(135deg, ${cap.color.split(' ')[0]}, ${cap.color.split(' ')[2]})` }}>
                          <cap.icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h5 className="heading-4 text-surface-950 dark:text-white">{cap.title}</h5>
                          <span className="label">{cap.category}</span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedCapability(null); }}
                        className="p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 hover:text-surface-700 dark:hover:text-surface-300"
                        aria-label="Cerrar detalles"
                      >
                        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                      </button>
                    </div>
                    
                    <p className="body text-surface-600 dark:text-surface-300 mb-6">{cap.description}</p>
                    
                    <div className="space-y-3">
                      <h6 className="font-semibold text-surface-950 dark:text-white">Capacidades incluidas:</h6>
                      <ul className="space-y-2">
                        {cap.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-surface-600 dark:text-surface-400">
                            <Check className="w-4 h-4 text-brand-500 flex-shrink-0" aria-hidden="true" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-surface-200 dark:border-surface-800">
                      <button className="btn-outline w-full">
                        Ver documentación técnica
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>

        {/* Architecture Summary */}
        <motion.div
          className="mt-16 lg:mt-24 p-8 lg:p-12 rounded-2xl bg-surface-50 dark:bg-surface-900/50 border border-surface-200 dark:border-surface-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="heading-3 text-surface-950 dark:text-white text-center mb-8">
              Arquitectura pensada para escalar
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                  <Sparkles className="w-7 h-7" aria-hidden="true" />
                </div>
                <h4 className="font-semibold text-surface-950 dark:text-white mb-2">Multi-tenant nativo</h4>
                <p className="text-sm text-surface-600 dark:text-surface-400">Aislamiento completo de datos y configuración por cliente</p>
              </div>
              <div className="p-4">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <BarChart2 className="w-7 h-7" aria-hidden="true" />
                </div>
                <h4 className="font-semibold text-surface-950 dark:text-white mb-2">Cloud-agnostic</h4>
                <p className="text-sm text-surface-600 dark:text-surface-400">AWS, Azure, GCP, on-premise o híbrido</p>
              </div>
              <div className="p-4">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                  <Link2 className="w-7 h-7" aria-hidden="true" />
                </div>
                <h4 className="font-semibold text-surface-950 dark:text-white mb-2">API-first</h4>
                <p className="text-sm text-surface-600 dark:text-surface-400">Todo expuesto via REST/GraphQL para integración total</p>
              </div>
              <div className="p-4">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Shield className="w-7 h-7" aria-hidden="true" />
                </div>
                <h4 className="font-semibold text-surface-950 dark:text-white mb-2">Compliance ready</h4>
                <p className="text-sm text-surface-600 dark:text-surface-400">ISO 27001, SOC 2, GDPR, LGPD, Ley 27.444</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}