import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const { isDarkMode, toggleTheme } = useTheme();

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
        { name: t('navbar.home'), route: '/', sectionId: 'home' },
        { name: t('navbar.about'), route: '/', sectionId: 'about' },
        { name: t('navbar.education'), route: '/', sectionId: 'education' },
        { name: t('navbar.experience'), route: '/', sectionId: 'experience' },
        { name: t('navbar.projects'), route: '/', sectionId: 'projects' },
        { name: t('navbar.skills'), route: '/', sectionId: 'skills' },
        { name: t('navbar.contact'), route: '/', sectionId: 'contact' },
    ];

    const handleLanguageSwitch = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en');
    };

    return (
        <nav className="bg-teal-600 dark:bg-dark-surface fixed w-full z-10 top-0 shadow-lg transition-colors duration-200">
            <div className="container mx-auto flex items-center justify-between p-4">
                <NavLink 
                    to="/" 
                    className="text-white text-2xl font-bold cursor-pointer"
                    onClick={() => handleNavClick('/', 'home')}
                >
                    Berkay Bilimli
                </NavLink>
                <div className="flex items-center">
                    <div className="hidden md:flex space-x-6 items-center">
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
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="ml-4 p-2 text-white hover:text-teal-200 transition-colors duration-200"
                            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {isDarkMode ? (
                                <SunIcon className="h-5 w-5" />
                            ) : (
                                <MoonIcon className="h-5 w-5" />
                            )}
                        </button>
                        {/* Language Switcher - Desktop only */}
                        <button
                            onClick={handleLanguageSwitch}
                            className="ml-2 px-3 py-1 bg-white dark:bg-dark-card text-teal-600 dark:text-white rounded hover:bg-teal-100 dark:hover:bg-dark-border transition text-sm font-semibold"
                        >
                            {i18n.language === 'tr' ? 'EN' : 'TR'}
                        </button>
                    </div>
                    {/* Hamburger + Language Switcher for Mobile only */}
                    <div className="md:hidden flex items-center space-x-2 ml-2">
                        {/* Dark Mode Toggle - Mobile */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-white hover:text-teal-200 transition-colors duration-200"
                            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {isDarkMode ? (
                                <SunIcon className="h-5 w-5" />
                            ) : (
                                <MoonIcon className="h-5 w-5" />
                            )}
                        </button>
                        <button
                            onClick={handleLanguageSwitch}
                            className="px-3 py-1 bg-white dark:bg-dark-card text-teal-600 dark:text-white rounded hover:bg-teal-100 dark:hover:bg-dark-border transition text-sm font-semibold"
                        >
                            {i18n.language === 'tr' ? 'EN' : 'TR'}
                        </button>
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? (
                                <XIcon className="h-6 w-6" />
                            ) : (
                                <MenuIcon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-teal-600 dark:bg-dark-surface transition-colors duration-200">
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
