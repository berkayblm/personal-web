import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative py-24 bg-slate-50 dark:bg-dark-bg transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-300">
            {t('sections.about.eyebrow')}
          </p>
          <h2 className="section-title mt-2 text-4xl md:text-5xl text-slate-900 dark:text-dark-text">
            {t('sections.about.headlineA')} <span className="text-gradient">{t('sections.about.headlineB')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Avatar / contact column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="relative bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg border border-slate-200/60 dark:border-dark-border card-hover">
              <div className="relative mx-auto w-36 h-36 mb-4 group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 blur-md opacity-70 animate-float" />
                <div className="relative w-36 h-36 rounded-full p-[3px] bg-gradient-to-br from-brand-500 to-accent-500 shadow-glow">
                  <img
                    src={`${process.env.PUBLIC_URL}/profile.png`}
                    alt="Berkay Bilimli"
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-dark-card transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <h3 className="text-center text-xl font-display font-semibold text-slate-900 dark:text-dark-text">
                {t('about.name')}
              </h3>
              <p className="text-center text-sm text-slate-500 dark:text-dark-textSecondary mb-4">
                {t('about.role')}
              </p>

              <div className="space-y-2 text-sm">
                <a
                  href="mailto:berkayant4@gmail.com"
                  className="flex items-center gap-2 text-slate-600 dark:text-dark-textSecondary hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
                >
                  <FaEnvelope className="text-brand-500" /> berkayant4@gmail.com
                </a>
                <div className="flex items-center gap-2 text-slate-600 dark:text-dark-textSecondary">
                  <FaPhone className="text-brand-500" /> +90 536 791 4920
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-dark-textSecondary">
                  <FaMapMarkerAlt className="text-brand-500" /> {t('about.location')}
                </div>
              </div>

              <div className="mt-5 flex justify-center gap-3">
                <a
                  href="https://github.com/berkayblm"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg border border-slate-200 dark:border-dark-border text-slate-600 dark:text-dark-textSecondary hover:text-brand-600 dark:hover:text-brand-300 hover:border-brand-500 transition-colors"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/berkay-bilimli-9860911b6/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg border border-slate-200 dark:border-dark-border text-slate-600 dark:text-dark-textSecondary hover:text-brand-600 dark:hover:text-brand-300 hover:border-brand-500 transition-colors"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Description + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg border border-slate-200/60 dark:border-dark-border">
              <p className="text-slate-700 dark:text-dark-text leading-relaxed">
                {t('about.description')}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {t('about.skills', { returnObjects: true }).map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-mono rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-300 border border-brand-500/20"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm text-slate-500 dark:text-dark-textSecondary italic">
                {t('about.interests')}
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
