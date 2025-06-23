import React from 'react';
import SkillRating from './SkillRating';
import ToolsTechnologies from './ToolsTechnologies';

function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-100 dark:bg-dark-bg transition-colors duration-200">
            <SkillRating />
            <ToolsTechnologies />
        </section>
    );
}

export default Skills;
