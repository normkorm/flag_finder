import {FC} from "react";
import {cn} from "../lib/utils.ts";
import LanguageSelector from "./LanguageSelector.tsx";
import {useTranslation} from "react-i18next";

interface HeaderProps {
    className?: string;
}


const Header: FC<HeaderProps> = ({className}) => {
    const {t} = useTranslation()
    return (
        <header className={cn(className, 'px-3 sm:px-20 bg-dark-light h-24 flex justify-between items-center')}>
            <h1 className='text-xl md:text-2xl'>{t("headerText")}</h1>
            <LanguageSelector />
        </header>
    );
};



export default Header;