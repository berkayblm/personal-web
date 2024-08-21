import React, { useState } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (route, sectionId) => {
        navigate(route); // Navigate to the correct route
        if (sectionId) {
            // Use react-scroll to scroll to the section
            setTimeout(() => {
                document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
        toggleMenu(); // Close the menu
    };

    const navItems = [
        { name: 'Home', route: '/', sectionId: 'home' },
        { name: 'About', route: '/', sectionId: 'about' },
        { name: 'Education', route: '/', sectionId: 'education' },
        { name: 'Experience', route: '/', sectionId: 'experience' },
        { name: 'Skills', route: '/', sectionId: 'skills' },
        { name: 'Contact', route: '/', sectionId: 'contact' },
    
    ];

    return (
        <nav className="bg-teal-600 fixed w-full z-10 top-0 shadow-lg">
            <div className="container mx-auto flex items-center justify-between p-4">
                <NavLink 
                    to="/" 
                    className="text-white text-2xl font-bold cursor-pointer"
                    onClick={() => handleNavClick('/', 'home')}
                >
                    Berkay Bilimli
                </NavLink>
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item, index) => (
                        item.route === '/blog' ? (
                            <NavLink 
                                key={index} 
                                to={item.route} 
                                className="text-white text-lg hover:text-teal-200 transition cursor-pointer"
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </NavLink>
                        ) : (
                            <span 
                                key={index} 
                                className="text-white text-lg hover:text-teal-200 transition cursor-pointer"
                                onClick={() => handleNavClick(item.route, item.sectionId)}
                            >
                                {item.name}
                            </span>
                        )
                    ))}
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? (
                            <XIcon className="h-6 w-6" />
                        ) : (
                            <MenuIcon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-teal-600">
                    <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item, index) => (
                            item.route === '/blog' ? (
                                <NavLink 
                                    key={index} 
                                    to={item.route} 
                                    className="block text-white text-lg hover:text-teal-200 transition cursor-pointer"
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </NavLink>
                            ) : (
                                <span 
                                    key={index} 
                                    className="block text-white text-lg hover:text-teal-200 transition cursor-pointer"
                                    onClick={() => handleNavClick(item.route, item.sectionId)}
                                >
                                    {item.name}
                                </span>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
