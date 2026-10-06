'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_dl8fje4';
const EMAILJS_TEMPLATE_ID = 'template_7digdjt';
const EMAILJS_PUBLIC_KEY = 'yTfNWlKAIwN606avC';

interface ScheduleCallFormProps {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export function ScheduleCallForm({
  onSuccess,
  onError,
}: ScheduleCallFormProps) {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido');
      setSubmitting(false);
      return;
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: email,
        from_email: 'contacto@puntual.biz',
        mensaje: mensaje,
      }, EMAILJS_PUBLIC_KEY);

      setEmail('');
      setMensaje('');
      setSuccess(true);
      onSuccess?.();
    } catch (err) {
      console.error('Error sending email via EmailJS', err);
      setError('No se pudo enviar el correo. Inténtalo de nuevo.');
      onError?.(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      className="max-w-lg mx-auto p-6 lg:p-8 bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center mb-6">
        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <h2 className="heading-4 text-surface-950 dark:text-white mb-2">
          Agendar una llamada
        </h2>
        <p className="body-sm text-surface-600 dark:text-surface-400">
          Te contactamos en menos de 24hs para coordinar
        </p>
      </div>

      {success && (
        <motion.div
          className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400">
            <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="font-medium">¡Gracias! Te contactaremos pronto.</p>
              <p className="text-sm">Revisa tu bandeja de entrada para confirmar.</p>
            </div>
          </div>
        </motion.div>
      )}

      {error && (
        <motion.div
          className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="flex items-center gap-3 text-red-700 dark:text-red-400">
            <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <p>{error}</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5"
            htmlFor="email"
          >
            Tu correo electrónico
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full px-4 py-3 border border-surface-300 dark:border-surface-600 rounded-xl 
              dark:bg-surface-800 dark:text-white 
              focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
              transition-all duration-200
              placeholder:text-surface-400 dark:placeholder:text-surface-500
            "
            placeholder="ejemplo@dominio.com"
            disabled={submitting || success}
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5"
            htmlFor="mensaje"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            rows={4}
            required
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="
              w-full px-4 py-3 border border-surface-300 dark:border-surface-600 rounded-xl 
              dark:bg-surface-800 dark:text-white 
              focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
              transition-all duration-200
              placeholder:text-surface-400 dark:placeholder:text-surface-500
              resize-none
            "
            placeholder="Breve mensaje: ¿qué proceso querés mejorar? ¿Cuál es el mayor desafío actual?"
            disabled={submitting || success}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={submitting || success}
          className="
            w-full py-3 px-4 bg-brand-600 text-white font-medium rounded-xl
            hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
            flex items-center justify-center gap-2
          "
        >
          {submitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
              Enviando…
            </>
          ) : success ? (
            <>
              <CheckCircle className="w-5 h-5" aria-hidden="true" />
              Enviado
            </>
          ) : (
            'Agendar llamada'
          )}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-surface-500 dark:text-surface-400">
        Al enviar, aceptás nuestra <a href="#privacy" className="text-brand-600 dark:text-brand-400 hover:underline">Política de Privacidad</a>.
        No hacemos spam. Solo contacto relevante.
      </p>
    </motion.div>
  );
}
