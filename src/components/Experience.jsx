import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();

  const items = [
    { key: 'intern', accent: 'from-brand-500 to-cyan-400' },
    { key: 'parttime1', accent: 'from-accent-500 to-fuchsia-400' },
    { key: 'parttime2', accent: 'from-pink-500 to-rose-400' },
    { key: 'intern2', accent: 'from-emerald-500 to-teal-400' },
  ].map((it) => ({
    ...it,
    date: t(`experience.${it.key}.date`),
    title: t(`experience.${it.key}.title`),
    company: t(`experience.${it.key}.company`),
  }));

  return (
    <section
      id="experience"
      className="relative py-24 bg-slate-50 dark:bg-dark-bg transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-300">
            {t('sections.experience.eyebrow')}
          </p>
          <h2 className="section-title mt-2 text-4xl md:text-5xl text-slate-900 dark:text-dark-text">
            {t('sections.experience.headlineA')} <span className="text-gradient">{t('sections.experience.headlineB')}</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/40 via-accent-500/40 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {items.map((it, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={it.key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-white dark:bg-dark-bg border-2 border-brand-500 flex items-center justify-center shadow-glow z-10">
                    <FaBriefcase className="text-brand-600 dark:text-brand-300" size={12} />
                  </div>

                  <div
                    className={`pl-14 md:pl-0 ${
                      isLeft
                        ? 'md:col-start-1 md:pr-10 md:text-right'
                        : 'md:col-start-2 md:pl-10'
                    }`}
                  >
                    <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg border border-slate-200/60 dark:border-dark-border card-hover">
                      <div
                        className={`inline-block h-1 w-12 rounded-full bg-gradient-to-r ${it.accent} mb-3`}
                      />
                      <p className="font-mono text-xs text-slate-500 dark:text-dark-textSecondary">
                        {it.date}
                      </p>
                      <h3 className="mt-1 text-lg font-display font-semibold text-slate-900 dark:text-dark-text">
                        {it.title}
                      </h3>
                      <p className="text-sm text-brand-600 dark:text-brand-300">{it.company}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
