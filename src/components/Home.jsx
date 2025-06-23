import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    
    return (
        <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 dark:from-dark-bg dark:to-dark-surface transition-colors duration-200">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6">
                {/* Text Content */}
                <div className="text-center md:text-left md:mr-12 mb-8 md:mb-0">
                    <motion.h1 
                        className="text-5xl font-bold text-white"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {t('home.title')}
                    </motion.h1>
                    <motion.p 
                        className="mt-4 text-2xl text-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {t('home.subtitle')}
                    </motion.p>
                    <motion.a 
                        href="#about" 
                        className="mt-8 inline-block bg-white dark:bg-dark-card text-teal-500 dark:text-white px-6 py-3 rounded-md font-medium hover:bg-teal-500 hover:text-white dark:hover:bg-dark-accent dark:hover:text-white transition-colors duration-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        {t('home.learnMore')}
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

export default Home;
