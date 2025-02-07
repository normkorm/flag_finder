export type ICountry = {
    cca3: string;
    name: {
        official: string;
        common: string;
    };
    flags: {
        svg: string;
        alt: string;
    };
    translations: {
        rus: {
            common: string;
        }
    }
    capital?: string[];
    region: string;
    subregion: string;
    population: number;
    area: number;
    languages: { [key: string]: string };
    currencies: { [key: string]: { name: string; symbol: string } };
    tld: string[];
    borders: string[];
};

export type IUpdateParams = (name: string, value: string) => void;
