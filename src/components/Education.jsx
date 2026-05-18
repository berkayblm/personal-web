import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Education() {
  const { t } = useTranslation();
  const details = t('education.details', { returnObjects: true });

  return (
    <section
      id="education"
      className="py-24 bg-white dark:bg-dark-surface transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-300">
            {t('sections.education.eyebrow')}
          </p>
          <h2 className="section-title mt-2 text-4xl md:text-5xl text-slate-900 dark:text-dark-text">
            {t('sections.education.headlineA')} <span className="text-gradient">{t('sections.education.headlineB')}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg border border-slate-200/60 dark:border-dark-border card-hover overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-brand-500/20 to-accent-500/20 blur-2xl" />
            <div className="relative flex items-start gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white shadow-glow">
                <FaGraduationCap size={28} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-dark-text">
                    {t('education.degree')}
                  </h3>
                  <span className="font-mono text-xs px-2 py-1 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-300 border border-brand-500/20">
                    {t('education.period')}
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-dark-textSecondary mt-1">
                  {t('education.institution')}
                </p>
                <ul className="mt-4 space-y-2 text-slate-700 dark:text-dark-text">
                  {details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 flex-shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
