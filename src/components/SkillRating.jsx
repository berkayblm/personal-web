import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiCsharp, SiTypescript } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

function SkillRating() {
  const { t } = useTranslation();

  const skills = [
    { name: t('skills.java'), icon: <FaJava size={28} />, color: 'text-[#f89820]' },
    { name: t('skills.csharp'), icon: <SiCsharp size={28} />, color: 'text-[#9b4f96]' },
    { name: t('skills.python'), icon: <FaPython size={28} />, color: 'text-[#3776AB]' },
    { name: t('skills.javascript'), icon: <FaJsSquare size={28} />, color: 'text-[#F7DF1E]' },
    { name: t('skills.typescript'), icon: <SiTypescript size={28} />, color: 'text-[#3178C6]' },
    {
      name: t('skills.htmlcss'),
      icon: (
        <div className="flex gap-1">
          <FaHtml5 size={28} className="text-[#e44d26]" />
          <FaCss3Alt size={28} className="text-[#1572b6]" />
        </div>
      ),
      color: '',
    },
    { name: t('skills.sql'), icon: <FaDatabase size={28} />, color: 'text-brand-500' },
  ];

  return (
    <div className="mb-12">
      <h3 className="text-center font-mono text-sm uppercase tracking-widest text-slate-500 dark:text-dark-textSecondary mb-8">
        {t('skills.title')}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-dark-card rounded-xl p-5 shadow border border-slate-200/60 dark:border-dark-border text-center card-hover"
          >
            <div className={`flex justify-center mb-2 ${skill.color}`}>{skill.icon}</div>
            <p className="text-sm font-medium text-slate-700 dark:text-dark-text">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SkillRating;
