'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import { useScrollPosition, useReducedMotion } from '../../hooks';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const scrollY = useScrollPosition();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setIsScrolled(scrollY > 20);
  }, [scrollY]);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };

  return (
    <motion.header
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-surface-950/90 backdrop-blur-xl border-b border-surface-200 dark:border-surface-800 shadow-sm'
          : 'bg-transparent'
      }`}
      initial={false}
      animate={{ y: 0 }}
      style={{ willChange: 'transform, background-color, box-shadow' }}
      role="banner"
    >
      <nav className="container" aria-label="Navegación principal">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-brand-600" aria-hidden="true">
              <motion.svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
              >
                <path d="M12 2v20M17 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                <path d="M7 7l5 5 5-5" />
              </motion.svg>
            </div>
            <span className="font-display text-xl lg:text-2xl font-bold text-surface-900 dark:text-white tracking-tight">
              Puntual BPM
            </span>
          </motion.div>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30'
                    : 'text-surface-600 dark:text-surface-300 hover:text-surface-900 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-surface-800'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.3, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: reducedMotion ? 0 : 0.3, delay: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              onClick={() => handleNavClick('#offer')}
              className="btn-ghost text-sm px-4 py-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.3, delay: 0.2 }}
            >
              Conocer la plataforma
            </motion.button>
            <motion.button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-sm px-5 py-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.3, delay: 0.3 }}
            >
              Agendar llamada
            </motion.button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="lg:hidden overflow-hidden border-t border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-950"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
            >
              <div className="py-4 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30'
                        : 'text-surface-600 dark:text-surface-300 hover:text-surface-900 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-surface-800'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.2, delay: 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="pt-2 border-t border-surface-200 dark:border-surface-800" />
                <motion.button
                  onClick={() => handleNavClick('#offer')}
                  className="w-full btn-secondary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2, delay: 0.15 }}
                >
                  Conocer la plataforma
                </motion.button>
                <motion.button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full btn-primary mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2, delay: 0.2 }}
                >
                  Agendar llamada
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}