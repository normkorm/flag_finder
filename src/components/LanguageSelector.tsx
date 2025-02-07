import { useTranslation } from "react-i18next";
import { FC, useEffect } from "react";
import { cn } from "../lib/utils.ts";

interface LanguageSelectorProps {
    className?: string;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({ className }) => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: 'en' | 'ru') => {
        try {
            i18n.changeLanguage(lng);
            localStorage.setItem('language', lng);
        } catch (error) {
            console.error("Error changing language:", error);
        }
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as 'en' | 'ru' | null;
        if (savedLanguage && savedLanguage !== i18n.language) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    return (
        <select className={cn(className, 'bg-transparent border-none focus:outline-none cursor-pointer')} onChange={(e) => changeLanguage(e.target.value as 'en' | 'ru')} value={i18n.language}>
            <option value="en">(EN)</option>
            <option value="ru">(RU)</option>
        </select>
    );
};

export default LanguageSelector;
