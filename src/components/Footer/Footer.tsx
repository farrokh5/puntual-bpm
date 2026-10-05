'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, type LucideIcon } from 'lucide-react';
import { FOOTER_LINKS, COMPANY_INFO } from '../../constants';
import { useReducedMotion } from '../../hooks';

interface FooterProps {
  className?: string;
}

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.24h-3.304l-7.125-8.196-8.166 8.196h-3.306l7.267-8.263-8.49-9.24h3.308l7.19 8.285 8.113-8.285z"/>
  </svg>
);

type SocialIcon = LucideIcon | (() => React.ReactElement);

const SOCIAL_LINKS: readonly { icon: SocialIcon; href: string; label: string }[] = [
  { icon: LinkedInIcon, href: 'https://linkedin.com/company/puntualbpm', label: 'LinkedIn' },
  { icon: TwitterIcon, href: 'https://twitter.com/puntualbpm', label: 'Twitter' },
  { icon: GithubIcon, href: 'https://github.com/puntualbpm', label: 'GitHub' },
  { icon: Mail, href: `mailto:${COMPANY_INFO.email}`, label: 'Email' },
];

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
        <div className="grid lg:grid-cols-6 gap-8 lg:gap-10 mb-12">
          <motion.div
            className="lg:col-span-2 max-w-xs"
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
            <p className="body text-surface-400 mb-6 max-w-xs">
              {COMPANY_INFO.description}
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:bg-brand-600 hover:text-white transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {typeof social.icon === 'function' 
                    ? React.createElement(social.icon as () => React.ReactElement)
                    : React.createElement(social.icon as LucideIcon, { className: 'w-5 h-5', 'aria-hidden': 'true' })}
                </motion.a>
              ))}
            </div>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <address className="not-italic space-y-3 text-surface-400">
              <p>{COMPANY_INFO.location}</p>
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.email}
              </a>
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.phone}
              </a>
            </address>
          </motion.div>
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
            <span>Fundada en {COMPANY_INFO.founded} · Hecho con precisión en Argentina</span>
            <motion.div className="w-3 h-3 rounded-full bg-brand-500 animate-pulse-slow" aria-label="Latido" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}