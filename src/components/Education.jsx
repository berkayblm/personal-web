import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

function Education() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { t } = useTranslation();

    const education = [
        {
            degree: t('education.degree'),
            institution: t('education.institution'),
            period: t('education.period'),
            details: t('education.details', { returnObjects: true }),
        },
    ];

    return (
        <section id="education" className="py-20 bg-gray-100 dark:bg-dark-bg transition-colors duration-200" ref={ref}>
            <motion.h2 
                className="text-3xl font-bold text-teal-600 dark:text-dark-accent text-center transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1 }}
            >
                {t('navbar.education')}
            </motion.h2>
            <div className="mt-10 ml-10 mr-10">
                {education.map((edu, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white dark:bg-dark-card shadow-md p-6 rounded-lg mb-6 transition-colors duration-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <h3 className="text-lg font-semibold text-teal-500 dark:text-dark-accent transition-colors duration-200">{edu.degree}</h3>
                        <h4 className="text-sm text-gray-600 dark:text-dark-textSecondary transition-colors duration-200">{edu.institution}</h4>
                        <p className="text-sm text-gray-500 dark:text-dark-textSecondary mb-2 transition-colors duration-200">{edu.period}</p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-dark-text transition-colors duration-200">
                            {edu.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Education;
