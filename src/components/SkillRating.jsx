import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaJava, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiCsharp, SiTypescript } from 'react-icons/si';

function SkillRating() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const skills = [
        { name: 'Java', level: 90, icon: <FaJava size={30} color="#007991" /> },
        { name: 'C#', level: 70, icon: <SiCsharp size={30} color="#007991" /> },
        { name: 'Python', level: 70, icon: <FaPython size={30} color="#007991" /> },
        { name: 'JavaScript', level: 75, icon: <FaJsSquare size={30} color="#007991" /> },
        { name: 'TypeScript', level: 50, icon: <SiTypescript size={30} color="#007991" /> },
        { name: 'HTML/CSS', level: 75, icon: (
            <div className="flex justify-center">
                <FaHtml5 size={30} color="#e44d26" />
                <FaCss3Alt size={30} color="#1572b6" className="ml-2" />
            </div>
        ) },
        { name: 'SQL', level: 85, icon: <FaDatabase size={30} color="#007991" /> },
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
                    Skills
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
                            <CircularProgressbar 
                                value={inView ? skill.level : 0} 
                                text={`${skill.level}%`} 
                                styles={buildStyles({
                                    pathTransitionDuration: 1.5,
                                    pathColor: `#007991`,
                                    textColor: '#007991',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                })}
                            />
                            <p className="mt-4 text-lg font-medium">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillRating;
