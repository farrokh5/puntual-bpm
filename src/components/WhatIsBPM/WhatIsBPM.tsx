'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX, Fullscreen, Minimize, ChevronRight, Check } from 'lucide-react';
import videoUrl from '../../assets/BPM-Puntual.mp4';
import { useReducedMotion } from '../../hooks';

const BPM_STEPS = [
  {
    id: 'model',
    label: 'Modelar',
    description: 'Diseña procesos con BPMN 2.0 estándar. Gateways, eventos, subprocessos y temporizadores nativos.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path d="M12 2v20M17 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        <path d="M7 7l5 5 5-5" />
      </svg>
    ),
    color: 'from-brand-500 to-brand-600',
  },
  {
    id: 'decide',
    label: 'Decidir',
    description: 'Externaliza reglas de negocio en tablas DMN versionables, auditables y sin necesidad de deploy.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'automate',
    label: 'Automatizar',
    description: 'Ejecuta workflows end-to-end: tareas humanas, llamadas a APIs, reglas, notificaciones y SLAs.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'integrate',
    label: 'Integrar',
    description: 'Conecta con REST, SOAP, bases de datos, SAP, SFTP, colas de mensajes y webhooks de forma nativa.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path d="M13.5 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-8.5M10 3v4M3 10h4M17 21h4v-4M21 17h-4"/>
      </svg>
    ),
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'measure',
    label: 'Medir',
    description: 'Dashboards en tiempo real, KPIs de proceso, cuellos de botella, trazabilidad completa y alertas.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path d="M3 3v18h18M18 7V4M13 7v-3M8 7V4"/>
      </svg>
    ),
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'evolve',
    label: 'Evolucionar',
    description: 'Cambia procesos y reglas en caliente. Versionado, testing A/B y despliegue progresivo sin downtime.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path d="M21 12a9 9 0 00-9-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M21 12a9 9 0 01-9 9 9.75 9.75 0 01-6.74-2.74L3 16"/><path d="M3 21v-5h5"/>
      </svg>
    ),
    color: 'from-rose-500 to-pink-500',
  },
] as const;

interface WhatIsBPMProps {
  className?: string;
}

export function WhatIsBPM({ className = '' }: WhatIsBPMProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section
      id="what-is-bpm"
      className={`section bg-white dark:bg-surface-950 ${className}`}
      aria-labelledby="bpm-heading"
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <span className="section-badge">¿Qué es un BPM?</span>
          <h2
            id="bpm-heading"
            className="heading-2 text-surface-950 dark:text-white"
          >
            Un BPM no es solo software. Es cómo tu organización ejecuta, decide y mejora.
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
            La gestión de procesos de negocio (BPM) transforma operaciones caóticas en flujos orquestados, medibles y evolucionables.
          </p>
        </motion.div>

        <motion.div
          className="space-y-16 lg:space-y-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.2 }}
        >
          {/* Visual Process Flow */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.1 }}
          >
            <div className="relative max-w-6xl mx-auto">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-10 left-24 right-24 h-0.5 bg-gradient-to-r from-transparent via-surface-300 dark:via-surface-700 to-transparent" aria-hidden="true" />
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 px-4">
                {BPM_STEPS.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="relative flex flex-col items-center z-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {/* Node */}
                    <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br text-white shadow-lg shadow-brand-500/25" style={{ background: `linear-gradient(135deg, ${step.color.split(' ')[0]}, ${step.color.split(' ')[2]})` }}>
                      <span className="text-2xl lg:text-3xl font-display font-bold">{index + 1}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-white dark:bg-surface-900 border-2 border-surface-200 dark:border-surface-700 flex items-center justify-center shadow-md">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center bg-gradient-to-br text-white" style={{ background: `linear-gradient(135deg, ${step.color.split(' ')[0]}, ${step.color.split(' ')[2]})` }}>
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Label */}
                    <div className="mt-6 text-center w-40 lg:w-48">
                      <h3 className="heading-4 text-surface-950 dark:text-white mb-2">{step.label}</h3>
                      <p className="body-sm text-surface-600 dark:text-surface-400">{step.description}</p>
                    </div>
                    
                    {/* Arrow between nodes */}
                    {index < BPM_STEPS.length - 1 && (
                      <motion.div
                        className="hidden lg:block absolute top-10 left-full w-4 h-0.5 bg-gradient-to-r from-surface-300 dark:from-surface-700 to-transparent"
                        initial={{ width: 0 }}
                        animate={{ width: '1rem' }}
                        transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.4 + index * 0.1 }}
                        aria-hidden="true"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Mobile stepper */}
            <div className="lg:hidden mt-8 space-y-4">
              {BPM_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex items-start gap-4 p-4 bg-surface-50 dark:bg-surface-900/50 rounded-xl border border-surface-200 dark:border-surface-800"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reducedMotion ? 0 : 0.4, delay: 0.2 + index * 0.08 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br text-white" style={{ background: `linear-gradient(135deg, ${step.color.split(' ')[0]}, ${step.color.split(' ')[2]})` }}>
                    <span className="text-xl font-display font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-surface-950 dark:text-white">{step.label}</h4>
                    <p className="text-sm text-surface-600 dark:text-surface-400 mt-1">{step.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-surface-400 flex-shrink-0 mt-1" aria-hidden="true" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.3 }}
          >
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden bg-surface-950 shadow-2xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  playsInline
                  onEnded={handleEnded}
                  onClick={togglePlay}
                  preload="metadata"
                />

                {!isPlaying && (
                  <motion.button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm hover:bg-black/50 transition-colors"
                    aria-label="Reproducir video explicativo"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Play className="w-8 h-8 text-white ml-1" aria-hidden="true" />
                    </motion.div>
                  </motion.button>
                )}

                <motion.div
                  className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${showControls || isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                    >
                      {isPlaying ? (
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
                      ) : (
                        <Play className="w-5 h-5 ml-0.5" aria-hidden="true" />
                      )}
                    </button>

                    <div className="flex-1 h-1.5 bg-white/20 rounded-full relative cursor-pointer">
                      <div
                        className="h-full bg-brand-500 rounded-full transition-all duration-100"
                        style={{
                          width: videoRef.current ? `${(videoRef.current.currentTime / videoRef.current.duration) * 100}%` : '0%'
                        }}
                      />
                    </div>

                    <span className="text-white/70 text-sm font-mono min-w-[100px] text-right">
                      {videoRef.current ? `${Math.floor(videoRef.current.currentTime / 60)}:${String(Math.floor(videoRef.current.currentTime % 60)).padStart(2, '0')} / ${Math.floor(videoRef.current.duration / 60)}:${String(Math.floor(videoRef.current.duration % 60)).padStart(2, '0')}` : '0:00 / 0:00'}
                    </span>

                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" aria-hidden="true" /> : <Volume2 className="w-5 h-5" aria-hidden="true" />}
                    </button>

                    <button
                      onClick={toggleFullscreen}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
                    >
                      {isFullscreen ? <Minimize className="w-5 h-5" aria-hidden="true" /> : <Fullscreen className="w-5 h-5" aria-hidden="true" />}
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.4 }}
            >
              <div className="space-y-6">
                <h3 className="heading-3 text-surface-950 dark:text-white">
                  Lo que hace diferente a Puntual BPM
                </h3>
                <p className="body-lg text-surface-600 dark:text-surface-300">
                  La mayoría de herramientas BPM solo modelan. Puntual BPM ejecuta, decide, integra y mide — todo en una sola plataforma.
                </p>
              </div>

              <div className="space-y-4">
                {BPM_STEPS.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="flex items-start gap-4 p-4 bg-surface-50 dark:bg-surface-900/50 rounded-xl border border-surface-200 dark:border-surface-800"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: reducedMotion ? 0 : 0.4, delay: 0.5 + index * 0.08 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br text-white" style={{ background: `linear-gradient(135deg, ${step.color.split(' ')[0]}, ${step.color.split(' ')[2]})` }}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-surface-950 dark:text-white">{step.label}</h4>
                      <p className="text-sm text-surface-600 dark:text-surface-400 mt-1">{step.description}</p>
                    </div>
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" aria-hidden="true" />
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => {}}
                className="btn-secondary w-full mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Entender Puntual BPM
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}