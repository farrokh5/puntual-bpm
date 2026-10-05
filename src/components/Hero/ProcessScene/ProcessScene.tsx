'use client';

import { Suspense, lazy, useEffect, useState } from 'react';
import { useReducedMotion } from '../../../hooks';

// Lazy load the heavy 3D canvas
const ProcessSceneCanvas = lazy(() => import('./ProcessSceneCanvas').then(m => ({ default: m.ProcessSceneCanvas })));

const ProcessSceneFallback = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-surface-50 dark:bg-surface-900">
    <div className="text-center p-8">
      <svg className="w-24 h-24 mx-auto text-brand-500 mb-4 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2v20M17 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        <path d="M7 7l5 5 5-5" />
      </svg>
      <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">
        Visualización de procesos
      </h3>
      <p className="text-surface-500 dark:text-surface-400">
        Cargando escena 3D...
      </p>
    </div>
  </div>
);

export function ProcessScene() {
  const reducedMotion = useReducedMotion();
  const [showCanvas, setShowCanvas] = useState(false);

  // Start loading the canvas after a short delay to prioritize above-fold content
  useEffect(() => {
    if (!reducedMotion) {
      const timer = setTimeout(() => setShowCanvas(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-surface-50 dark:bg-surface-900">
        <div className="text-center p-8">
          <svg className="w-24 h-24 mx-auto text-brand-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M12 2v20M17 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            <path d="M7 7l5 5 5-5" />
          </svg>
          <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">
            Visualización de procesos
          </h3>
          <p className="text-surface-500 dark:text-surface-400">
            Red de nodos BPM interactiva (animación desactivada)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
      {showCanvas ? (
        <Suspense fallback={<ProcessSceneFallback />}>
          <ProcessSceneCanvas />
        </Suspense>
      ) : (
        <ProcessSceneFallback />
      )}
    </div>
  );
}