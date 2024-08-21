import React from 'react';
import { motion } from 'framer-motion';

function Home() {
    return (
        <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500">
            <div className="text-center text-white">
                <motion.h1 
                    className="text-5xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Berkay Bilimli
                </motion.h1>
                <motion.p 
                    className="mt-4 text-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Software Engineer | Backend Developer 
                </motion.p>
                <motion.a 
                    href="#about" 
                    className="mt-8 inline-block bg-white text-teal-500 px-6 py-3 rounded-md font-medium hover:bg-teal-500 hover:text-white transition"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Learn More
                </motion.a>
            </div>
        </section>
    );
}

export default Home;
