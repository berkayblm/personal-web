import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Experience() {
    const { t } = useTranslation();
    return (
        <section id="experience" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-teal-600 text-center">{t('navbar.experience')}</h2>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 150, 136)', color: '#ffffff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 150, 136)' }}
                        date={<span style={{ color: 'rgb(0, 150, 136)' }}>{t('experience.intern.date')}</span>}
                        iconStyle={{ background: 'rgb(0, 150, 136)', color: '#ffffff' }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: '#ffffff' }}>{t('experience.intern.title')}</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ffffff' }}>{t('experience.intern.company')}</h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={<span style={{ color: 'rgb(33, 150, 243)' }}>{t('experience.parttime1.date')}</span>}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: '#ffffff' }}>{t('experience.parttime1.title')}</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ffffff' }}>{t('experience.parttime1.company')}</h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#ffffff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                        date={<span style={{ color: 'rgb(233, 30, 99)' }}>{t('experience.parttime2.date')}</span>}
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#ffffff' }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: '#ffffff' }}>{t('experience.parttime2.title')}</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ffffff' }}>{t('experience.parttime2.company')}</h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(76, 175, 80)', color: '#ffffff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(76, 175, 80)' }}
                        date={<span style={{ color: 'rgb(76, 175, 80)' }}>{t('experience.intern2.date')}</span>}
                        iconStyle={{ background: 'rgb(76, 175, 80)', color: '#ffffff' }}
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
