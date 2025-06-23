import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

function Experience() {
    const { t } = useTranslation();
    const { isDarkMode } = useTheme();

    // Define colors for light and dark modes
    const colors = {
        light: {
            teal: 'rgb(0, 150, 136)',
            blue: 'rgb(33, 150, 243)',
            pink: 'rgb(233, 30, 99)',
            green: 'rgb(76, 175, 80)'
        },
        dark: {
            teal: '#00B4D8',
            blue: '#3B82F6',
            pink: '#EC4899',
            green: '#10B981'
        }
    };

    const currentColors = isDarkMode ? colors.dark : colors.light;

    return (
        <section id="experience" className="py-20 bg-gray-100 dark:bg-dark-bg transition-colors duration-200">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-teal-600 dark:text-dark-accent text-center transition-colors duration-200">{t('navbar.experience')}</h2>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ 
                            background: currentColors.teal, 
                            color: '#ffffff',
                            boxShadow: isDarkMode ? '0 4px 8px rgba(0, 180, 216, 0.3)' : '0 4px 8px rgba(0, 150, 136, 0.3)'
                        }}
                        contentArrowStyle={{ borderRight: `7px solid ${currentColors.teal}` }}
                        date={<span style={{ color: currentColors.teal }}>{t('experience.intern.date')}</span>}
                        iconStyle={{ 
                            background: currentColors.teal, 
                            color: '#ffffff',
                            boxShadow: isDarkMode ? '0 0 0 3px rgba(0, 180, 216, 0.3)' : '0 0 0 3px rgba(0, 150, 136, 0.3)'
                        }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: '#ffffff' }}>{t('experience.intern.title')}</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ffffff' }}>{t('experience.intern.company')}</h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ 
                            background: currentColors.blue, 
                            color: '#ffffff',
                            boxShadow: isDarkMode ? '0 4px 8px rgba(59, 130, 246, 0.3)' : '0 4px 8px rgba(33, 150, 243, 0.3)'
                        }}
                        contentArrowStyle={{ borderRight: `7px solid ${currentColors.blue}` }}
                        date={<span style={{ color: currentColors.blue }}>{t('experience.parttime1.date')}</span>}
                        iconStyle={{ 
                            background: currentColors.blue, 
                            color: '#ffffff',
                            boxShadow: isDarkMode ? '0 0 0 3px rgba(59, 130, 246, 0.3)' : '0 0 0 3px rgba(33, 150, 243, 0.3)'
                        }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: '#ffffff' }}>{t('experience.parttime1.title')}</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ffffff' }}>{t('experience.parttime1.company')}</h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ 
                            background: currentColors.pink, 
                            color: '#ffffff',
                            boxShadow: isDarkMode ? '0 4px 8px rgba(236, 72, 153, 0.3)' : '0 4px 8px rgba(233, 30, 99, 0.3)'
                        }}
                        contentArrowStyle={{ borderRight: `7px solid ${currentColors.pink}` }}
                        date={<span style={{ color: currentColors.pink }}>{t('experience.parttime2.date')}</span>}
                        iconStyle={{ 
                            background: currentColors.pink, 
                            color: '#ffffff',
                            boxShadow: isDarkMode ? '0 0 0 3px rgba(236, 72, 153, 0.3)' : '0 0 0 3px rgba(233, 30, 99, 0.3)'
                        }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: '#ffffff' }}>{t('experience.parttime2.title')}</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ffffff' }}>{t('experience.parttime2.company')}</h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ 
                            background: currentColors.green, 
                            color: '#ffffff',
                            boxShadow: isDarkMode ? '0 4px 8px rgba(16, 185, 129, 0.3)' : '0 4px 8px rgba(76, 175, 80, 0.3)'
                        }}
                        contentArrowStyle={{ borderRight: `7px solid ${currentColors.green}` }}
                        date={<span style={{ color: currentColors.green }}>{t('experience.intern2.date')}</span>}
                        iconStyle={{ 
                            background: currentColors.green, 
                            color: '#ffffff',
                            boxShadow: isDarkMode ? '0 0 0 3px rgba(16, 185, 129, 0.3)' : '0 0 0 3px rgba(76, 175, 80, 0.3)'
                        }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: '#ffffff' }}>{t('experience.intern2.title')}</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ffffff' }}>{t('experience.intern2.company')}</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Experience;
