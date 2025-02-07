import { FC } from "react";
import { cn } from "../lib/utils.ts";
import { Link, useParams } from "react-router-dom";
import { useGetOneCountryQuery } from "../store/api/api.ts";
import { ICountry } from "../types";
import { useTranslation } from "react-i18next";

interface CountryInfoPageProps {
    className?: string;
}

const CountryInfoPage: FC<CountryInfoPageProps> = ({ className }) => {
    const { t } = useTranslation();
    const { name } = useParams();

    const { data, error, isLoading } = useGetOneCountryQuery({ name });

    if (isLoading) {
        return <h2>{t('loading')}</h2>;
    }

    if (error) {
        let errorMessage = t('unknownError');

        if ('status' in error && 'data' in error) {
            errorMessage = (error.data as { message?: string }).message || t('dataRequestError');
        } else if ('message' in error) {
            errorMessage = error.message || t('unknownError');
        }

        return <h2>{t('errorOccurred')}: {errorMessage}</h2>;
    }

    const country: ICountry = data[0];

    return (
        <div className={cn(className, 'mt-10')}>
            <Link to={'/'} className='p-4 border rounded'>
                {t('back')}
            </Link>
            <div className="my-10 flex flex-col md:flex-row">
                <img
                    src={country.flags.svg}
                    alt={country.flags.alt}
                    className="w-96 h-64"
                />
                <div className='md:ml-10'>
                    <div className="flex items-center"></div>
                    <h2>{t('officialName')}: {country.name.official}</h2>
                    <h2>{t('officialName')}: {country.name.official}</h2>
                    <h3>{t('capital')}: {country.capital?.[0] || t('noCapital')}</h3>
                    <p>{t('region')}: {country.region || t('noRegion')}</p>
                    <p>{t('subregion')}: {country.subregion || t('noSubregion')}</p>
                    <p>{t('population')}: {country.population ? Intl.NumberFormat('ru-RU').format(country.population) : t('noPopulation')}</p>
                    <p>{t('area')}: {country.area ? Intl.NumberFormat('ru-RU').format(country.area) : t('noArea')} km²</p>
                    <p>{t('languages')}: {country.languages ? Object.values(country.languages).join(', ') : t('noLanguages')}</p>
                    <p>{t('topLevelDomain')}: {country.tld?.length > 0 ? country.tld.join(', ') : t('noTLD')}</p>
                    <p>
                        {t('borders')}: {Array.isArray(country.borders) && country.borders.length > 0 ? (
                        country.borders.map((border, index) => (
                            <span key={border}>
                                    {index > 0 && ', '} {border}
                        </span>
                        ))
                    ) : (
                        t('noBorders')
                    )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CountryInfoPage;
