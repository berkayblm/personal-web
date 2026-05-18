import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SkillRating from './SkillRating';
import ToolsTechnologies from './ToolsTechnologies';

function Skills() {
  const { t } = useTranslation();
  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-dark-bg transition-colors duration-300"
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
            {t('sections.skills.eyebrow')}
          </p>
          <h2 className="section-title mt-2 text-4xl md:text-5xl text-slate-900 dark:text-dark-text">
            {t('sections.skills.headlineA')} <span className="text-gradient">{t('sections.skills.headlineB')}</span>
          </h2>
        </motion.div>

        <SkillRating />
        <ToolsTechnologies />
      </div>
    </section>
  );
}

export default Skills;
