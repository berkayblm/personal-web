import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="bg-gray-800 py-6 mt-20">
            <div className="container mx-auto text-center text-white">
                <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
                <p>{t('footer.business')}</p>
            </div>
        </footer>
    );
}

export default Footer;
