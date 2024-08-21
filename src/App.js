import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                       <Home />
                        <About />
                        <Education />
                        <Experience />
                        <Skills />
                        <Contact />
                    </>
                } />
                
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
