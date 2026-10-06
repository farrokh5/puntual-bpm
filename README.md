# Puntual BPM — Sitio Web

Landing page de **Puntual BPM** (software a medida para procesos complejos): sitio corporativo en español, orientado a convertir visitantes en reuniones de contacto.

**Demo en vivo:** https://yellow-ocean-0a30ba210.2.azurestaticapps.net/

## Stack técnico

| Capa | Tecnología |
|---|---|
| Build | [Vite 8](https://vitejs.dev/) |
| UI | React 19 + TypeScript |
| Estilos | Tailwind CSS 3 (design tokens en `tailwind.config.js`) |
| Animaciones | framer-motion |
| Gráficos 3D/escenas | Three.js (`@react-three/fiber`, `@react-three/drei`) |
| Íconos | lucide-react |
| Formulario de contacto | EmailJS (`@emailjs/browser`) |

## Requisitos

- Node.js 22+ y npm

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (HMR)
npm run build    # typecheck (tsc) + build de producción en dist/
npm run preview  # sirve el build de producción
```

## Secciones del sitio

El orden de la página se define en `src/App.tsx`:

1. **Hero** — propuesta de valor principal
2. **¿Qué es BPM?** — video explicativo (carga diferida con `React.lazy` + IntersectionObserver)
3. **El desafío** (`ProblemStory`) — dolores operativos que resuelve
4. **Plataforma** (`PlatformShowcase`) — capacidades con panel expandible
5. **Cómo trabajamos** (`Methodology`) — metodología de entrega
6. **Por qué Puntual** (`WhyPuntual`) — comparativa y diferenciadores
7. **Contacto** (`ScheduleCallForm`) — formulario con envío vía EmailJS
8. **Footer**

Navegación: `Navbar` (enlaces internos suaves hacia las secciones) + `FOOTER_LINKS` en `src/constants/index.ts`.

## Estructura

```
src/
├── App.tsx            # composición de secciones y navegación
├── components/        # secciones y piezas de UI (una carpeta por componente)
├── constants/         # copy, menús, links del footer, datos estáticos
├── hooks/             # useActiveSection, useReducedMotion, etc.
├── utils/             # helpers
├── assets/            # imágenes/estáticos
└── index.css          # estilos globales + design tokens (Tailwind)
.github/workflows/     # CI/CD (ver más abajo)
```

## Despliegue

- Repo: `https://github.com/farrokh5/puntual-bpm.git` (raíz del repo = la app).
- **CI/CD:** [Azure Static Web Apps](https://azure.microsoft.com/products/static-web-apps/) vía GitHub Actions.
- Workflow activo: `.github/workflows/azure-static-web-apps-yellow-ocean-0a30ba210.yml`
  - Se dispara en cada push a `master`.
  - `app_location: "/"`, `output_location: "dist"`.
  - Node 22, `actions/checkout@v5`, `actions/setup-node@v5`.

## Formulario de contacto

`src/components/ScheduleCallForm/ScheduleCallForm.tsx` envía emails con EmailJS (service/template/public key definidos en el archivo). Las claves de EmailJS son públicas por diseño (client-side), pero si se rotan hay que actualizarlas ahí.

## Notas de desarrollo

- El copy y los menús viven en `src/constants/index.ts`; las secciones importan de ahí.
- Respetar `prefers-reduced-motion` con `useReducedMotion` en las animaciones.
- Verificar siempre `npm run build` (tsc incluido) antes de commitear.
