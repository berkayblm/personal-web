import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaJava, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiCsharp, SiTypescript } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

function SkillRating() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { t } = useTranslation();

    const skills = [
        { name: t('skills.java'), icon: <FaJava size={30} color="#007991" /> },
        { name: t('skills.csharp'), icon: <SiCsharp size={30} color="#007991" /> },
        { name: t('skills.python'), icon: <FaPython size={30} color="#007991" /> },
        { name: t('skills.javascript'), icon: <FaJsSquare size={30} color="#007991" /> },
        { name: t('skills.typescript'), icon: <SiTypescript size={30} color="#007991" /> },
        { name: t('skills.htmlcss'), icon: (
            <div className="flex justify-center">
                <FaHtml5 size={30} color="#e44d26" />
                <FaCss3Alt size={30} color="#1572b6" className="ml-2" />
            </div>
        ) },
        { name: t('skills.sql'), icon: <FaDatabase size={30} color="#007991" /> },
    ];

    return (
        <section ref={ref} id="skills-rating" className="py-20">
            <div className="container mx-auto text-center">
                <motion.h2 
                    className="text-3xl font-bold text-teal-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    {t('navbar.skills')}
                </motion.h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index} 
                            className="w-32 mx-auto"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="mb-4 flex justify-center">
                                {skill.icon}
                            </div>
                            <p className="mt-2 text-lg font-medium">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillRating;
