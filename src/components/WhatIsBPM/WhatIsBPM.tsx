'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX, Fullscreen, Minimize } from 'lucide-react';
import videoUrl from '../../assets/BPM-Puntual.mp4';
import { useReducedMotion } from '../../hooks';

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
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium border border-brand-200 dark:border-brand-800"
          >
            Video explicativo
          </motion.span>
          <h2
            id="bpm-heading"
            className="heading-2 mt-4 text-surface-950 dark:text-white"
          >
            ¿Qué es un BPM y por qué importa?
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            En menos de 3 minutos te explicamos cómo la gestión de procesos transforma la operación de tu organización.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.2 }}
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
                onTimeUpdate={() => {}}
                onClick={togglePlay}
                preload="metadata"
              />

              {!isPlaying && (
                <motion.button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm hover:bg-black/50 transition-colors"
                  aria-label="Reproducir video"
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
              <div>
                <h3 className="text-xl font-semibold text-surface-950 dark:text-white mb-2 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M12 2v20M17 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M7 7l5 5 5-5"/></svg>
                  </span>
                  Orquestar
                </h3>
                <p className="text-surface-600 dark:text-surface-300 pl-13">
                  Personas, sistemas y tareas trabajan dentro del mismo proceso coordinado.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-surface-950 dark:text-white mb-2 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </span>
                  Decidir
                </h3>
                <p className="text-surface-600 dark:text-surface-300 pl-13">
                  Las reglas de negocio se convierten en decisiones automatizables y auditables.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-surface-950 dark:text-white mb-2 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                  </span>
                  Medir
                </h3>
                <p className="text-surface-600 dark:text-surface-300 pl-13">
                  Cada proceso genera datos para entender qué ocurre y dónde mejorar continuamente.
                </p>
              </div>
            </div>

            <motion.button
              onClick={() => {}}
              className="btn-secondary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Entender Puntual BPM
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}