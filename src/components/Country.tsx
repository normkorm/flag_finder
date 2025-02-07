import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface CountryProps {
    name: string;
    src: string;
    alt: string;
    population: number;
    region: string;
    link: string;
}

const Country: FC<CountryProps> = ({ src, name, alt, population, region, link }) => {
    const { t } = useTranslation();

    return (
        <Link to={`name/${link}`} className='w-52 bg-dark-light rounded-xl overflow-hidden cursor-pointer'>
            <figure>
                <img src={src} alt={alt} className='h-40 w-full object-cover' />
                <figcaption className='p-2'>
                    {name}
                </figcaption>
            </figure>
            <div className='p-2'>
                <p>{t('region')}: {region}</p>
                <p>{t('population')}: {Intl.NumberFormat('ru-RU').format(population)}</p>
            </div>
        </Link>
    );
};

export default Country;
