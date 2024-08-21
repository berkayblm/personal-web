import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Education() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const education = [
        {
            degree: 'Bachelor of Computer Engineering',
            institution: 'Izmir University, Izmir, Turkey',
            period: 'Sept 2020 - Present',
            details: [
                'GPA: 3.4',
                
            ],
        },
    ];

    return (
        <section id="education" className="py-20 bg-gray-100" ref={ref}>
            <div className="container mx-auto">
                <motion.h2 
                    className="text-3xl font-bold text-teal-600 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1 }}
                >
                    Education
                </motion.h2>
                <div className="mt-10 ml-10 mr-10">
                    {education.map((edu, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white shadow-md p-6 rounded-lg mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <h3 className="text-lg font-semibold text-teal-500">{edu.degree}</h3>
                            <h4 className="text-sm text-gray-600">{edu.institution}</h4>
                            <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                            <ul className="list-disc list-inside">
                                {edu.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
