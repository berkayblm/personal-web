import React from 'react';
import { FaGithub, FaAndroid, FaCloud, FaBook, FaUsers } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiRedis, SiReact, SiVueDotJs, SiMysql, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: 'ExamiNation - Android-Based Social Learning Platform',
    location: 'Izmir, Turkey',
    date: 'Jul 2024 – June 2025',
    description: [
      'A collaborative Android app for university exam preparation, featuring microservices, AI-powered recommendations, and a modern UI.'
    ],
    tech: [
      <FaAndroid key="android" size={22} />, <SiSpringboot key="spring" size={22} />, <SiPostgresql key="postgres" size={22} />, <SiRedis key="redis" size={22} />, <FaCloud key="cloud" size={22} />
    ],
    link: null,
    demo: 'https://youtu.be/udNuJvmDvvk'
  },
  {
    title: 'Conference Management System',
    location: 'Izmir, Turkey',
    date: 'Feb 2024 – June 2024',
    description: [
      'A full-stack web platform for managing conferences, including paper submission, reviews, and participant registration.'
    ],
    tech: [
      <SiSpringboot key="spring" size={22} />, <SiMysql key="mysql" size={22} />, <SiFirebase key="firebase" size={22} />, <FaUsers key="users" size={22} />
    ],
    link: 'https://github.com/berkayblm/Conference_Management_System'
  },
  {
    title: 'Library App',
    location: 'Izmir, Turkey',
    date: 'Feb 2023 – Apr 2023',
    description: [
      'An Android library app with user authentication, book listing, and PDF viewing, backed by a Spring Boot server.'
    ],
    tech: [
      <FaAndroid key="android" size={22} />, <SiSpringboot key="spring" size={22} />, <FaBook key="book" size={22} />
    ],
    link: 'https://github.com/berkayblm/spring-library-hibernate-crud'
  }
];

function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-teal-600 text-center">{t('navbar.projects')}</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-teal-500">{project.title}</h3>
                  <span className="text-xs text-gray-400">{project.date}</span>
                </div>
                <div className="text-sm text-gray-500 mb-2">{project.location}</div>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">{project.tech}</div>
                <div className="flex space-x-2">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-700 flex items-center">
                      <FaGithub size={22} className="mr-1" /> {t('projects.repo')}
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="ml-2 bg-teal-500 text-white px-3 py-1 rounded-md font-medium hover:bg-teal-600 transition text-sm">
                      {t('projects.demo')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 