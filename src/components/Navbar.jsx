import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { name: t('navbar.home'), sectionId: 'home' },
    { name: t('navbar.about'), sectionId: 'about' },
    { name: t('navbar.education'), sectionId: 'education' },
    { name: t('navbar.experience'), sectionId: 'experience' },
    { name: t('navbar.projects'), sectionId: 'projects' },
    { name: t('navbar.skills'), sectionId: 'skills' },
    { name: t('navbar.contact'), sectionId: 'contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // Active section detection
      const ids = navItems.map((n) => n.sectionId);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavClick = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
    setIsOpen(false);
  };

  const handleLanguageSwitch = () =>
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en');

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <NavLink
          to="/"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold shadow-glow">
            B
          </span>
          <span className="hidden sm:inline text-slate-900 dark:text-dark-text font-display font-semibold tracking-tight">
            Berkay <span className="text-gradient">Bilimli</span>
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = active === item.sectionId;
            return (
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-brand-600 dark:text-brand-300'
                    : 'text-slate-600 dark:text-dark-textSecondary hover:text-slate-900 dark:hover:text-dark-text'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-slate-600 dark:text-dark-textSecondary hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button
            onClick={handleLanguageSwitch}
            className="px-3 py-1.5 text-xs font-mono font-semibold rounded-md border border-slate-300 dark:border-dark-border text-slate-700 dark:text-dark-text hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
          >
            {i18n.language === 'tr' ? 'EN' : 'TR'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700 dark:text-dark-text"
            aria-label="Toggle menu"
          >
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-slate-200/60 dark:border-dark-border">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === item.sectionId
                    ? 'text-brand-600 dark:text-brand-300 bg-brand-500/10'
                    : 'text-slate-700 dark:text-dark-text hover:bg-slate-100 dark:hover:bg-dark-card'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
