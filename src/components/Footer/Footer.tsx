'use client';

import { motion } from 'framer-motion';
import { FOOTER_LINKS, COMPANY_INFO } from '../../constants';
import { useReducedMotion } from '../../hooks';

interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const reducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className={`bg-surface-950 text-surface-300 ${className}`}
      role="contentinfo"
    >
      <div className="container py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center" aria-hidden="true">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  <path d="M7 7l5 5 5-5" />
                </svg>
              </div>
              <span className="font-display text-xl font-bold text-white">{COMPANY_INFO.name}</span>
            </div>
            <p className="body text-surface-400 mb-6 max-w-md">
              {COMPANY_INFO.description}
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.1 }}
            aria-label="Soluciones"
          >
            <h3 className="font-semibold text-white mb-4">Soluciones</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-surface-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.2 }}
            aria-label="Empresa"
          >
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-surface-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>

        <motion.div
          className="pt-8 border-t border-surface-800 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-surface-500">
            © {currentYear} {COMPANY_INFO.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-surface-500">
            <span>Fundada en {COMPANY_INFO.founded} · Hecho con precisión en México</span>
            <motion.div className="w-3 h-3 rounded-full bg-brand-500 animate-pulse-slow" aria-label="Latido" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}