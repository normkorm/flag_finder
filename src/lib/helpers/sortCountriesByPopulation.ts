import { ICountry } from "../../types";

export const sortCountriesByPopulation = (
    data: ICountry[],
    populationSort: "ascending" | "descending" | unknown
) => {
    return data.sort((a, b) => {
        if (populationSort === "ascending") {
            return a.population - b.population;
        }
        if (populationSort === "descending") {
            return b.population - a.population;
        }
        return 0;
    });
};
