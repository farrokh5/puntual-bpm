'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, TrendingUp, Shield, MessageSquare } from 'lucide-react';
import { useReducedMotion } from '../../hooks';

interface CTASectionProps {
  className?: string;
  onPrimaryCtaClick: (sectionId: string) => void;
  onSecondaryCtaClick: () => void;
}

const STATS = [
  { icon: Users, value: '500+', label: 'Proyectos entregados' },
  { icon: Clock, value: '30+', label: 'Años de experiencia' },
  { icon: TrendingUp, value: '98%', label: 'Clientes recurrentes' },
  { icon: Shield, value: '24/7', label: 'Soporte crítico' },
] as const;

export function CTASection({ className = '', onPrimaryCtaClick, onSecondaryCtaClick }: CTASectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className={`section relative overflow-hidden ${className}`}
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-violet-800" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-10" aria-hidden="true" />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 2 }}
        aria-hidden="true"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20"
          >
            ¿Tenés un desafío complejo?
          </motion.span>
          <h2
            id="cta-heading"
            className="heading-2 mt-4 text-white"
          >
            Construyamos la solución que tu negocio necesita
          </h2>
          <p className="body-lg mt-4 text-white/80">
            Agendá una llamada de descubrimiento sin compromiso. Analizamos tu caso y te mostramos cómo Puntual BPM acelera la entrega.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.2 }}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reducedMotion ? 0 : 0.4, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4 text-white">
                <stat.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={() => onPrimaryCtaClick('contact')}
            className="w-full sm:w-auto btn bg-white text-brand-700 hover:bg-white/90 focus-visible:ring-white group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Agendar llamada de descubrimiento
            <motion.span
              className="transition-transform group-hover:translate-x-1"
              whileHover={{ x: 4 }}
            >
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </motion.span>
          </motion.button>
          <motion.button
            onClick={onSecondaryCtaClick}
            className="w-full sm:w-auto btn border-2 border-white/30 text-white hover:bg-white/10 focus-visible:ring-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageSquare className="w-5 h-5 mr-2" aria-hidden="true" />
            Enviar mensaje
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-12 pt-12 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-sm text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-white/50" aria-hidden="true" />
            <span>Seguridad empresarial</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-white/50" aria-hidden="true" />
            <span>Cumplimiento normativo</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-white/50" aria-hidden="true" />
            <span>Implementación en semanas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}