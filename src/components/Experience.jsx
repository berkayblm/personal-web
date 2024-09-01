import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';

function Experience() {
    return (
        <section id="experience" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-teal-600 text-center">Experience</h2>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={<span style={{ color: 'rgb(33, 150, 243)' }}>Feb 2024 - Present</span>}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: '#ffffff' }}>Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ffffff' }}>Mobility Payment, Dubai, UAE</h4>
                        
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#ffffff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                        date={<span style={{ color: 'rgb(233, 30, 99)' }}>Jul 2023 – Jan 2024</span>}
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#ffffff' }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: '#ffffff' }}>Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ffffff' }}>TPR Information Technologies, Izmir, Turkey</h4>
                        
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(76, 175, 80)', color: '#ffffff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(76, 175, 80)' }}
                        date={<span style={{ color: 'rgb(76, 175, 80)   ' }}>Aug 2022 – Sep 2022</span>}
                        iconStyle={{ background: 'rgb(76, 175, 80)', color: '#ffffff' }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: '#ffffff' }}>Finance 101 Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ffffff' }}>Finansbank, Istanbul, Turkey</h4>
                        
                    </VerticalTimelineElement>

                   
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Experience;
