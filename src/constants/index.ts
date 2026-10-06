export interface ProcessStage {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface OfferPillar {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly longDescription: string;
}

export interface Capability {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly icon: string;
}

export interface CaseStudy {
  readonly id: string;
  readonly industry: string;
  readonly title: string;
  readonly challenge: string;
  readonly solution: string;
  readonly architecture: string;
  readonly results: readonly { readonly metric: string; readonly label: string }[];
  readonly techStack: readonly string[];
}

export type { ProcessStage as ProcessStageType };
export type { OfferPillar as OfferPillarType };
export type { Capability as CapabilityType };
export type { CaseStudy as CaseStudyType };

export const NAV_ITEMS = [
  { label: 'Inicio', href: '#hero' },
  { label: '¿Qué es BPM?', href: '#video-explanation' },
  { label: 'El desafío', href: '#problem-story' },
  { label: 'Plataforma', href: '#platform' },
  { label: 'Cómo trabajamos', href: '#process' },
  { label: 'Por qué Puntual', href: '#why-puntual' },
] as const;

export const HERO_STATS = [
  { value: '30+', label: 'Años de experiencia' },
  { value: '500+', label: 'Proyectos entregados' },
  { value: '98%', label: 'Clientes recurrentes' },
] as const;

export const PROBLEMS = [
  {
    id: 'silos',
    title: 'Sistemas aislados',
    description: 'Cada área opera con herramientas propias que no se comunican entre sí.',
  },
  {
    id: 'manual',
    title: 'Procesos manuales',
    description: 'Tareas repetitivas consumen tiempo valioso y generan errores humanos.',
  },
  {
    id: 'fragmented',
    title: 'Información fragmentada',
    description: 'Los datos están dispersos y no hay una visión unificada del negocio.',
  },
  {
    id: 'legacy',
    title: 'Dependencia de legacy',
    description: 'Sistemas antiguos frenan la innovación y son costosos de mantener.',
  },
  {
    id: 'decisions',
    title: 'Decisiones difíciles de automatizar',
    description: 'La lógica de negocio compleja vive en cabezas, no en sistemas.',
  },
  {
    id: 'traceability',
    title: 'Falta de trazabilidad',
    description: 'No se puede auditar quién hizo qué, cuándo y por qué.',
  },
  {
    id: 'integration',
    title: 'Integraciones complejas',
    description: 'Conectar sistemas existentes requiere desarrollo costoso y frágil.',
  },
] as const;

export const SOLUTION_PILLARS = [
  {
    id: 'orchestration',
    title: 'Orquestación',
    description: 'Personas, sistemas y tareas operan dentro de un mismo proceso controlado.',
    icon: 'git-branch',
  },
  {
    id: 'decisions',
    title: 'Decisiones',
    description: 'Reglas de negocio externalizadas en tablas DMN versionables y auditables.',
    icon: 'scale',
  },
  {
    id: 'measurement',
    title: 'Medición',
    description: 'Cada proceso genera datos para entender qué ocurre y dónde mejorar.',
    icon: 'bar-chart-2',
  },
  {
    id: 'integration',
    title: 'Integración',
    description: 'Conectores REST, SOAP, bases de datos, SAP, APIs y webhooks nativos.',
    icon: 'link-2',
  },
] as const;

export const OFFER_PILLARS = [
  {
    id: 'custom-dev',
    number: '01',
    title: 'Desarrollo a medida',
    description: 'Soluciones diseñadas alrededor de los procesos reales de cada organización, no plantillas genéricas.',
    longDescription: 'Nuestro equipo analiza tus procesos, diseña la arquitectura y desarrolla la solución completa usando Puntual BPM como motor central.',
  },
  {
    id: 'bpm-core',
    number: '02',
    title: 'Puntual BPM como core',
    description: 'Una plataforma propia que proporciona procesos, formularios, reglas, integraciones y trazabilidad como capacidades reutilizables.',
    longDescription: '30 años de conocimiento encapsulados en una plataforma robusta que reduce tiempo de desarrollo y riesgo técnico.',
  },
  {
    id: 'expertise',
    number: '03',
    title: '30+ años de experiencia',
    description: 'Experiencia acumulada en proyectos de software y automatización para organizaciones con procesos complejos.',
    longDescription: 'Hemos automatizado desde procesos simples hasta ecosistemas completos de misión crítica en las principales organizaciones de Latinoamérica.',
  },
  {
    id: 'partnership',
    number: '04',
    title: 'Evolución continua',
    description: 'Acompañamiento desde el descubrimiento hasta la operación y evolución de la solución.',
    longDescription: 'Metodología propia de descubrimiento, arquitectura, desarrollo iterativo, capacitación y soporte 24/7 post-go-live.',
  },
] as const;

export const WHY_PUNTUAL_COMPARISON = {
  fromScratch: [
    'Cada componente debe construirse desde cero',
    'Mayor esfuerzo inicial y riesgo técnico',
    'Más infraestructura que mantener',
    'Más tiempo antes de obtener valor',
    'Reinventar capacidades comunes',
  ],
  withPuntual: [
    'Motor de procesos BPMN 2.0 disponible',
    'Formularios configurables sin código',
    'Reglas de negocio externalizadas (DMN)',
    'Integraciones y conectores preconstruidos',
    'Gestión de tareas, SLAs y escalamiento',
    'Auditoría y trazabilidad nativa',
    'Capacidades reutilizables probadas',
  ],
} as const;

export const PROCESS_STAGES = [
  {
    id: 'discovery',
    number: '01',
    title: 'Descubrimiento',
    description: 'Entendemos el negocio, los procesos y los objetivos. Mapeamos el estado actual y definimos métricas de éxito.',
    icon: 'search',
  },
  {
    id: 'architecture',
    number: '02',
    title: 'Arquitectura',
    description: 'Diseñamos la solución técnica: modelo de datos, integraciones, seguridad, escalabilidad y roadmap de entregas.',
    icon: 'layout',
  },
  {
    id: 'development',
    number: '03',
    title: 'Desarrollo iterativo',
    description: 'Construimos en sprints usando Puntual BPM como core. Entregas funcionales cada 2–3 semanas para validación temprana.',
    icon: 'code',
  },
  {
    id: 'deployment',
    number: '04',
    title: 'Despliegue y capacitación',
    description: 'Puesta en producción controlada, migración de datos, pruebas de carga y capacitación a usuarios clave.',
    icon: 'rocket',
  },
  {
    id: 'evolution',
    number: '05',
    title: 'Evolución continua',
    description: 'Soporte 24/7, monitoreo proactivo, mejoras continuas y nuevas funcionalidades según crece tu negocio.',
    icon: 'refresh-cw',
  },
] as const;

export const PLATFORM_CAPABILITIES = [
  {
    id: 'bpmn-engine',
    title: 'Motor BPMN 2.0',
    description: 'Ejecución nativa de procesos estándar con gateways, eventos, subprocessos, temporizadores y compensación.',
    category: 'Procesos',
    icon: 'git-branch',
  },
  {
    id: 'low-code-forms',
    title: 'Formularios Low-Code',
    description: 'Constructor visual con 40+ controles, validaciones dinámicas, lógica condicional, firmas y adjuntos.',
    category: 'Datos',
    icon: 'layout',
  },
  {
    id: 'rules-engine',
    title: 'Motor de Reglas DMN',
    description: 'Decisiones de negocio externalizadas en tablas de decisión versionables, auditables y sin deploy.',
    category: 'Decisiones',
    icon: 'scale',
  },
  {
    id: 'integration-hub',
    title: 'Hub de Integración',
    description: 'Conectores preconstruidos (REST, SOAP, JDBC, SAP, SFTP, Email) y framework para crear los tuyos.',
    category: 'Integración',
    icon: 'link-2',
  },
  {
    id: 'task-management',
    title: 'Gestión de Tareas',
    description: 'Bandeja unificada, asignación por rol/regla, SLAs, escalamiento automático, delegación y trabajo offline.',
    category: 'Operación',
    icon: 'check-square',
  },
  {
    id: 'analytics',
    title: 'Analítica en Tiempo Real',
    description: 'Dashboards operativos y ejecutivos, KPIs de proceso, cuellos de botella, trazabilidad completa y alertas.',
    category: 'Medición',
    icon: 'bar-chart-2',
  },
  {
    id: 'document-mgmt',
    title: 'Gestión Documental',
    description: 'Repositorio con versionado, metadatos, OCR, búsqueda full-text, retención legal y firma digital.',
    category: 'Datos',
    icon: 'file-text',
  },
  {
    id: 'security',
    title: 'Seguridad Empresarial',
    description: 'RBAC granular, SSO (SAML/OIDC), auditoría completa, encriptación en tránsito/reposo.',
    category: 'Seguridad',
    icon: 'shield',
  },
] as const;

export const INTEGRATION_TECHNOLOGIES = [
  { label: 'REST APIs', category: 'APIs' },
  { label: 'SOAP', category: 'Legacy' },
  { label: 'JDBC / SQL', category: 'Bases de datos' },
  { label: 'SAP RFC/BAPI', category: 'ERP' },
  { label: 'SFTP / Files', category: 'Archivos' },
  { label: 'Email / SMTP', category: 'Comunicación' },
  { label: 'Webhooks', category: 'Eventos' },
  { label: 'SDK / TypeScript', category: 'Desarrollo' },
  { label: 'Message Queues', category: 'Mensajería' },
] as const;

export const BUSINESS_OUTCOMES = [
  {
    id: 'speed',
    title: 'Menor tiempo de entrega',
    description: 'Capacidades reutilizables del core eliminan meses de desarrollo base.',
  },
  {
    id: 'traceability',
    title: 'Mayor trazabilidad',
    description: 'Cada decisión, tarea y dato queda registrado y auditable automáticamente.',
  },
  {
    id: 'automation',
    title: 'Automatización de tareas',
    description: 'Procesos manuales se convierten en flujos digitales con reglas y SLAs.',
  },
  {
    id: 'consistency',
    title: 'Decisiones más consistentes',
    description: 'Reglas de negocio centralizadas eliminan variabilidad y errores humanos.',
  },
  {
    id: 'integration',
    title: 'Integración de sistemas',
    description: 'El hub de integración conecta sistemas existentes sin reemplazar lo que funciona.',
  },
  {
    id: 'evolution',
    title: 'Capacidad de evolución',
    description: 'Cambios en procesos y reglas se despliegan en horas, no en ciclos de release.',
  },
] as const;

export const FOOTER_LINKS = {
  solutions: [
    { label: '¿Qué es BPM?', href: '#video-explanation' },
    { label: 'Plataforma Puntual BPM', href: '#platform' },
    { label: 'Automatización', href: '#process' },
  ],
  company: [
    { label: 'Por qué Puntual', href: '#why-puntual' },
    { label: 'Contacto', href: '#contact' },
  ],
} as const;

export const COMPANY_INFO = {
  name: 'Puntual BPM',
  tagline: 'Software a medida para procesos complejos.',
  description: 'Combinamos desarrollo a medida, automatización de procesos y una plataforma tecnológica propia para convertir desafíos operativos en soluciones escalables.',
  founded: 2002,
  location: 'CDMX, México',
  email: 'hola@puntualbpm.com',
  phone: '+54 11 4000 0000',
} as const;