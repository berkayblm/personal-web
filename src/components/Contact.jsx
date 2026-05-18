import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name') || '';
    const email = form.get('email') || '';
    const message = form.get('message') || '';
    const subject = encodeURIComponent(`Portfolio contact — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:berkayant4@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-white dark:bg-dark-surface transition-colors duration-300 overflow-hidden"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-500/10 to-accent-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-300">
            {t('sections.contact.eyebrow')}
          </p>
          <h2 className="section-title mt-2 text-4xl md:text-5xl text-slate-900 dark:text-dark-text">
            {t('contact.title')}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-dark-textSecondary max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white dark:bg-dark-card rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200/60 dark:border-dark-border space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder={t('contact.name')}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg text-slate-900 dark:text-dark-text placeholder-slate-400 dark:placeholder-dark-textSecondary focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t('contact.email')}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg text-slate-900 dark:text-dark-text placeholder-slate-400 dark:placeholder-dark-textSecondary focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition"
              required
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder={t('contact.message')}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg text-slate-900 dark:text-dark-text placeholder-slate-400 dark:placeholder-dark-textSecondary focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition"
            required
          />
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium shadow-glow hover:shadow-glow-accent transition-all hover:-translate-y-0.5"
          >
            {t('contact.send')} →
          </button>
        </motion.form>

        <div className="mt-10 flex justify-center gap-5">
          <a
            href="mailto:berkayant4@gmail.com"
            className="p-3 rounded-full border border-slate-200 dark:border-dark-border text-slate-600 dark:text-dark-textSecondary hover:text-brand-600 dark:hover:text-brand-300 hover:border-brand-500 transition-colors"
            aria-label="Email"
          >
            <HiOutlineMail size={22} />
          </a>
          <a
            href="https://github.com/berkayblm"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-slate-200 dark:border-dark-border text-slate-600 dark:text-dark-textSecondary hover:text-brand-600 dark:hover:text-brand-300 hover:border-brand-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/berkay-bilimli-9860911b6/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-slate-200 dark:border-dark-border text-slate-600 dark:text-dark-textSecondary hover:text-brand-600 dark:hover:text-brand-300 hover:border-brand-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://www.instagram.com/berkay_bilimli/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-slate-200 dark:border-dark-border text-slate-600 dark:text-dark-textSecondary hover:text-brand-600 dark:hover:text-brand-300 hover:border-brand-500 transition-colors"
            aria-label="Instagram"
          >
            <SiInstagram size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
