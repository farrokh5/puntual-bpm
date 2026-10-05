'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX, Fullscreen, Minimize } from 'lucide-react';
import videoUrl from '../../assets/BPM-Puntual.mp4';
import { useReducedMotion } from '../../hooks';

interface VideoSectionProps {
  className?: string;
}

export function VideoSection({ className = '' }: VideoSectionProps) {
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

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.ended) {
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="video-explanation"
      className={`section relative bg-surface-50 dark:bg-surface-900/50 ${className}`}
      aria-labelledby="video-heading"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,_123,_240,_0.04)_0%,_transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-30" aria-hidden="true" />

      <div className="container relative z-10">
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
            id="video-heading"
            className="heading-2 mt-4 text-surface-950 dark:text-white"
          >
            ¿Qué es un BPM y por qué lo necesitas?
          </h2>
          <p className="body-lg mt-4 text-surface-600 dark:text-surface-300">
            En menos de 3 minutos te explicamos cómo la gestión de procesos transforma la operación de tu organización.
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden bg-surface-950 shadow-2xl"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative aspect-video">
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-cover"
              muted={isMuted}
              playsInline
              onEnded={handleEnded}
              onTimeUpdate={handleTimeUpdate}
              onClick={togglePlay}
              poster=""
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
          className="mt-10 grid sm:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.4 }}
        >
          <div className="p-6 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800">
            <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mx-auto mb-3 text-brand-600 dark:text-brand-400">
              <Play className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-surface-950 dark:text-white mb-1">Explicación clara</h3>
            <p className="text-sm text-surface-600 dark:text-surface-400">Conceptos BPM sin tecnicismos</p>
          </div>
          <div className="p-6 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800">
            <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mx-auto mb-3 text-brand-600 dark:text-brand-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M12 2v20M17 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M7 7l5 5 5-5"/></svg>
            </div>
            <h3 className="font-semibold text-surface-950 dark:text-white mb-1">Casos reales</h3>
            <p className="text-sm text-surface-600 dark:text-surface-400">Ejemplos de automatización</p>
          </div>
          <div className="p-6 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800">
            <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mx-auto mb-3 text-brand-600 dark:text-brand-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
            </div>
            <h3 className="font-semibold text-surface-950 dark:text-white mb-1">Próximos pasos</h3>
            <p className="text-sm text-surface-600 dark:text-surface-400">Cómo empezar con Puntual BPM</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}