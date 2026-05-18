import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Home() {
  const { t, i18n } = useTranslation();
  const roles = t('home.roles', { returnObjects: true });
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, [roles.length]);

  // re-sync index when language changes
  useEffect(() => {
    setRoleIdx(0);
  }, [i18n.language]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-dark-bg transition-colors duration-300"
    >
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-1/4 -left-24 w-[420px] h-[420px] rounded-full bg-brand-400/30 dark:bg-brand-500/25 blur-3xl animate-blob" />
        <div
          className="absolute bottom-10 right-0 w-[480px] h-[480px] rounded-full bg-accent-500/25 dark:bg-accent-500/20 blur-3xl animate-blob"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute top-10 right-1/3 w-[300px] h-[300px] rounded-full bg-cyan-300/30 dark:bg-cyan-500/10 blur-3xl animate-blob"
          style={{ animationDelay: '6s' }}
        />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-700 dark:text-brand-300 text-xs font-mono"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-slate-600 dark:text-dark-textSecondary font-mono"
          >
            {t('home.greeting')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-2 section-title text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-dark-text"
          >
            <span className="text-gradient">{t('home.title')}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 h-8 flex items-center justify-center"
          >
            <span className="text-slate-500 dark:text-dark-textSecondary mr-2 font-mono">/</span>
            <motion.span
              key={roleIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-xl font-medium text-slate-700 dark:text-dark-text font-mono"
            >
              {roles[roleIdx]}
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 text-slate-600 dark:text-dark-textSecondary max-w-2xl mx-auto leading-relaxed"
          >
            {t('home.tagline')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium shadow-glow hover:shadow-glow-accent transition-all duration-300 hover:-translate-y-0.5"
            >
              {t('home.learnMore')}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-dark-border text-slate-700 dark:text-dark-text font-medium hover:border-brand-500 dark:hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
            >
              {t('home.contactCta')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-10 flex items-center justify-center gap-6 text-slate-500 dark:text-dark-textSecondary"
          >
            <a
              href="https://github.com/berkayblm"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/berkay-bilimli-9860911b6/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:berkayant4@gmail.com"
              className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
              aria-label="Email"
            >
              <HiOutlineMail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 dark:text-dark-textSecondary text-xs font-mono"
      >
        <span>{t('home.scroll')}</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <FaArrowDown />
        </motion.span>
      </motion.a>
    </section>
  );
}

export default Home;
