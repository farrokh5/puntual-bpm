'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EMAILJS_SERVICE_ID = 'service_dl8fje4';
const EMAILJS_TEMPLATE_ID = 'template_7digdjt';
const EMAILJS_PUBLIC_KEY = 'yTfNWlKAIwN606avC';

import emailjs from '@emailjs/browser';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

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

      // Success → reset form and call optional callback
      setEmail('');
      setMensaje('');
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
      className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg dark:bg-surface-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-surface-900 dark:text-white mb-4">
        Agendar una llamada
      </h2>

      {error && (
        <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1"
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
              w-full px-3 py-2 border border-surface-300 rounded-lg dark:bg-surface-700
              dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500
              transition-colors
            "
            placeholder="ejemplo@dominio.com"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1"
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
              w-full px-3 py-2 border border-surface-300 rounded-lg dark:bg-surface-700
              dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500
              transition-colors resize-none
            "
            placeholder="Breve mensaje sobre la llamada (horario, tema, etc.)"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="
            w-full py-2 px-4 bg-brand-600 text-white font-medium rounded-lg
            hover:bg-brand-500 disabled:opacity-50 transition-colors
          "
        >
          {submitting ? 'Enviando…' : 'Enviar correo'}
        </button>
      </form>
    </motion.div>
  );
}