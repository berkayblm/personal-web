import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-900 dark:bg-dark-bg border-t border-slate-800 dark:border-dark-border py-10 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center text-slate-400 space-y-2">
        <div className="flex justify-center items-center gap-2 mb-2">
          <span className="w-7 h-7 rounded-md bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold">
            B
          </span>
          <span className="font-display font-semibold text-slate-200">Berkay Bilimli</span>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
