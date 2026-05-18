import React from 'react';
import { FaReact, FaDocker, FaAws } from 'react-icons/fa';
import {
  SiSpringboot,
  SiKubernetes,
  SiMysql,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiVuedotjs,
  SiRedis,
  SiFirebase,
  SiAndroidstudio,
  SiApachekafka,
  SiGrafana,
} from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function ToolsTechnologies() {
  const { t } = useTranslation();

  const tools = [
    { name: t('tools.spring'), icon: <SiSpringboot size={28} color="#6DB33F" /> },
    { name: t('tools.react'), icon: <FaReact size={28} color="#61DAFB" /> },
    { name: t('tools.vue'), icon: <SiVuedotjs size={28} color="#41B883" /> },
    { name: t('tools.docker'), icon: <FaDocker size={28} color="#2496ED" /> },
    { name: t('tools.kubernetes'), icon: <SiKubernetes size={28} color="#326CE5" /> },
    { name: t('tools.kafka'), icon: <SiApachekafka size={28} color="#231F20" /> },
    { name: t('tools.redis'), icon: <SiRedis size={28} color="#DC382D" /> },
    { name: t('tools.grafana'), icon: <SiGrafana size={28} color="#F46800" /> },
    { name: t('tools.git'), icon: <DiGit size={28} color="#F05032" /> },
    { name: t('tools.android'), icon: <SiAndroidstudio size={28} color="#3DDC84" /> },
    { name: t('tools.mysql'), icon: <SiMysql size={28} color="#4479A1" /> },
    { name: t('tools.postgresql'), icon: <SiPostgresql size={28} color="#336791" /> },
    { name: t('tools.mssql'), icon: <SiMicrosoftsqlserver size={28} color="#A91D22" /> },
    { name: t('tools.firebase'), icon: <SiFirebase size={28} color="#FFCA28" /> },
    { name: t('tools.aws'), icon: <FaAws size={28} color="#FF9900" /> },
  ];

  return (
    <div>
      <h3 className="text-center font-mono text-sm uppercase tracking-widest text-slate-500 dark:text-dark-textSecondary mb-8">
        {t('tools.title')}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            whileHover={{ scale: 1.06, y: -4 }}
            className="bg-white dark:bg-dark-card rounded-xl p-4 shadow border border-slate-200/60 dark:border-dark-border text-center"
          >
            <div className="flex justify-center mb-2">{tool.icon}</div>
            <p className="text-xs font-medium text-slate-700 dark:text-dark-text">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ToolsTechnologies;
