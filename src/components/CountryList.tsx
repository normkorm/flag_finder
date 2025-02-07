import {FC, useEffect, useState} from "react";
import Country from "./Country.tsx";
import {ICountry} from "../types";
import i18n from "i18next";

interface CountryListProps {
    className?: string;
    isLoadingName?: boolean;
    isLoadingRegion?: boolean;
    matchedCountries?: ICountry[];
}

const CountryList: FC<CountryListProps> = ({isLoadingName, isLoadingRegion, matchedCountries}) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

    useEffect(() => {
        const handleLanguageChange = () => {
            setLanguage(i18n.language);
        };

        i18n.on("languageChanged", handleLanguageChange);

        return () => {
            i18n.off("languageChanged", handleLanguageChange);
        };
    }, [i18n]);

    if (isLoadingName || isLoadingRegion) {
        return <div>Loading...</div>;
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center '>
            {matchedCountries?.map((country) => (
                <Country link={country.name.common} population={country.population} region={country.region} name={language === 'ru' ? country.translations.rus.common : country.name.common} src={country.flags.svg} alt={country.flags.alt} />
            ))}
        </div>
    );
};

export default CountryList;