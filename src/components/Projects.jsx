import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-dark-surface transition-colors duration-300"
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
            {t('sections.projects.eyebrow')}
          </p>
          <h2 className="section-title mt-2 text-4xl md:text-5xl text-slate-900 dark:text-dark-text">
            {t('sections.projects.headlineA')} <span className="text-gradient">{t('sections.projects.headlineB')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg border border-slate-200/60 dark:border-dark-border overflow-hidden flex flex-col"
            >
              {/* Hover gradient ring */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/10 to-accent-500/10" />
              </div>

              <div className="relative flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-display font-semibold text-slate-900 dark:text-dark-text leading-tight">
                    {project.title}
                  </h3>
                </div>
                <div className="mt-1 flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-dark-textSecondary">
                  <span>{project.date}</span>
                  <span className="opacity-50">·</span>
                  <span>{project.location}</span>
                </div>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-700 dark:text-dark-text">
                  {project.description.map((desc, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-brand-500 flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                {project.tech && project.tech.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2 py-1 rounded-md bg-slate-100 dark:bg-dark-bg text-slate-600 dark:text-dark-textSecondary border border-slate-200 dark:border-dark-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative mt-6 flex items-center gap-3 border-t border-slate-100 dark:border-dark-border pt-4">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-dark-textSecondary hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
                  >
                    <FaGithub /> {t('projects.repo')}
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-300 hover:text-accent-500 transition-colors"
                  >
                    <FaExternalLinkAlt size={12} /> {t('projects.demo')}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
