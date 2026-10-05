'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { GitBranch, Layout, Scale, Link2, CheckSquare, BarChart2, FileText, Shield, Sparkles } from 'lucide-react';

interface PlatformArchitectureProps {
  className?: string;
}

const CAPABILITIES = [
  { id: 'bpmn-engine', title: 'Motor BPMN 2.0', description: 'Modela y ejecuta procesos empresariales con BPMN 2.0.', category: 'Procesos', icon: GitBranch },
  { id: 'low-code-forms', title: 'Formularios Low-Code', description: 'Constructor visual con 40+ controles y lógica condicional.', category: 'Datos', icon: Layout },
  { id: 'rules-engine', title: 'Motor de Reglas DMN', description: 'Externaliza decisiones de negocio en reglas versionables y auditables.', category: 'Decisiones', icon: Scale },
  { id: 'integration-hub', title: 'Hub de Integración', description: 'Conecta procesos con sistemas, APIs y servicios externos.', category: 'Integración', icon: Link2 },
  { id: 'task-management', title: 'Gestión de Tareas', description: 'Bandeja unificada, SLAs, escalamiento y trabajo offline.', category: 'Operación', icon: CheckSquare },
  { id: 'analytics', title: 'Analítica en Tiempo Real', description: 'KPIs de proceso, cuellos de botella y trazabilidad completa.', category: 'Medición', icon: BarChart2 },
  { id: 'document-mgmt', title: 'Gestión Documental', description: 'Repositorio con versionado, OCR, búsqueda y firma digital.', category: 'Documentos', icon: FileText },
  { id: 'security', title: 'Seguridad Empresarial', description: 'RBAC, SSO, auditoría completa, ISO 27001.', category: 'Seguridad', icon: Shield },
] as const;

function polarToCartesian(cx: number, cy: number, radius: number, angleDeg: number) {
  const angleRad = (angleDeg - 90) * Math.PI / 180;
  return { x: cx + radius * Math.cos(angleRad), y: cy + radius * Math.sin(angleRad) };
}

export function PlatformArchitecture({ className = '' }: PlatformArchitectureProps) {
  const [hoveredCapability, setHoveredCapability] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 800, height: 600 });

  const handleResize = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const centerX = containerSize.width / 2;
  const centerY = containerSize.height / 2;

  const nodes = useMemo(() =>
    CAPABILITIES.map(cap => ({
      ...cap,
      pos: polarToCartesian(centerX, centerY, cap.id === 'security' ? 140 : 170, {
        'bpmn-engine': -135,
        'low-code-forms': -45,
        'rules-engine': 45,
        'integration-hub': 135,
        'task-management': 180,
        'analytics': 90,
        'document-mgmt': -90,
        security: -180,
      }[cap.id] || 0),
    })),
    [centerX, centerY]
  );

  const isMobile = window.innerWidth < 768;

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
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium border border-brand-200 dark:border-brand-800">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            PLATAFORMA PUNTUAL BPM
          </span>
          <h2 id="platform-heading" className="heading-2 mt-4 text-surface-950 dark:text-white">
            Un core tecnológico para construir soluciones complejas
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
            Procesos, decisiones, integraciones y datos conectados en una plataforma diseñada para acelerar el desarrollo de software a medida.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {CAPABILITIES.map((cap) => (
            <div key={cap.id} className="p-4 bg-surface-50 dark:bg-surface-900/50 rounded-xl border border-surface-200 dark:border-surface-800 text-center transition-all duration-300 hover:border-[#3B82F6] hover:shadow-md hover:shadow-[#3B82F6]/20">
              <cap.icon className="w-5 h-5 mx-auto mb-2 text-brand-600 dark:text-brand-400" aria-hidden="true" />
              <h4 className="font-semibold text-surface-950 dark:text-white mt-1 mb-1">{cap.title}</h4>
              <p className="text-xs text-surface-500 dark:text-surface-400">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}