import React from 'react';
import { FaReact, FaDocker, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiKubernetes, SiMysql, SiPostgresql,SiMicrosoftsqlserver,SiVuedotjs, SiRedis, SiFirebase } from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { motion } from 'framer-motion';

function ToolsTechnologies() {
    const tools = [
        { name: 'Spring Boot', icon: <SiSpringboot size={30} color="#6DB33F" /> },
        { name: 'React.js', icon: <FaReact size={30} color="#61DAFB" /> },
        
        { name: 'Docker', icon: <FaDocker size={30} color="#2496ED" /> },
        { name: 'Kubernetes', icon: <SiKubernetes size={30} color="#326CE5" /> },
        { name: 'Git', icon: <DiGit size={30} color="#F05032" /> },
        { name: 'Vue.js', icon: <SiVuedotjs size={30} color="#6DB33F" /> },
        { name: 'MySQL', icon: <SiMysql size={30} color="#4479A1" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql size={30} color="#336791" /> },
        { name: 'MsSQL', icon: <SiMicrosoftsqlserver size={30} color="#336791" /> },
        { name: 'Firebase', icon: <SiFirebase size={30} color="#FFCA28" /> },
        { name: 'AWS', icon: <FaAws size={30} color="#FF9900" /> },
       
        { name: 'Redis', icon: <SiRedis size={30} color="#DC382D" /> },
       
    ];

    return (
        <section id="tools-technologies" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-teal-600 text-center">Tools & Technologies</h2>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 mr-10 ml-10">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            className="text-center bg-white p-4 rounded-lg shadow-md"
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: '#E6FFFA',
                                transition: { duration: 0.3 },
                            }}
                        >
                            <div className="flex justify-center mb-2">
                                {tool.icon}
                            </div>
                            <p className="text-lg font-medium">{tool.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ToolsTechnologies;
