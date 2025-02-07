import {ICountry} from "../../types";

export const sortCountriesByAlphabet = (data: ICountry[]) => {
    if (!data) return [];

    return [...data].sort((a, b) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
};
