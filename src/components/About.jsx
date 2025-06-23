import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCertificate, FaUser, FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();
    return (
        <section id="about" className="py-20 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-dark-bg dark:to-dark-surface transition-colors duration-200">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-12 px-6">
                {/* Profile Image Placeholder */}
                <div className="flex-shrink-0 mb-8 md:mb-0">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-teal-400 to-blue-400 flex items-center justify-center shadow-lg border-4 border-white dark:border-dark-card transition-colors duration-200">
                        <FaUser className="text-white text-7xl" />
                    </div>
                </div>
                {/* Info Card */}
                <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-8 flex-1 transition-colors duration-200">
                    <h2 className="text-4xl font-extrabold text-teal-600 dark:text-dark-accent mb-2 transition-colors duration-200">{t('about.name')}</h2>
                    <p className="text-lg text-gray-700 dark:text-dark-text mb-4 transition-colors duration-200">{t('about.role')}</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <span className="flex items-center text-gray-600 dark:text-dark-textSecondary transition-colors duration-200"><FaEnvelope className="mr-2 text-teal-500 dark:text-dark-accent" /> berkayant4@gmail.com</span>
                        <span className="flex items-center text-gray-600 dark:text-dark-textSecondary transition-colors duration-200"><FaPhone className="mr-2 text-teal-500 dark:text-dark-accent" /> +90-536-791-4920</span>
                        <span className="flex items-center text-gray-600 dark:text-dark-textSecondary transition-colors duration-200"><FaMapMarkerAlt className="mr-2 text-teal-500 dark:text-dark-accent" /> {t('about.location')}</span>
                    </div>
                    <p className="mb-4 text-gray-700 dark:text-dark-text transition-colors duration-200">
                        {t('about.description')}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4">
                        {t('about.skills', { returnObjects: true })[0] && (
                            <span className="flex items-center text-gray-600 dark:text-dark-textSecondary transition-colors duration-200"><FaStar className="mr-2 text-yellow-500" /> {t('about.skills', { returnObjects: true })[0]}</span>
                        )}
                        {t('about.skills', { returnObjects: true })[1] && (
                            <span className="flex items-center text-gray-600 dark:text-dark-textSecondary transition-colors duration-200"><FaStar className="mr-2 text-yellow-500" /> {t('about.skills', { returnObjects: true })[1]}</span>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <span className="flex items-center text-gray-600 dark:text-dark-textSecondary transition-colors duration-200"><FaStar className="mr-2 text-yellow-500" /> {t('about.interests')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
