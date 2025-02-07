import {useGetCountriesByNameQuery, useGetCountriesByRegionQuery} from "../store/api/api.ts";
import {Dispatch, SetStateAction, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {ICountry, IUpdateParams} from "../types";

export const useCountry = (setMatchedCountries: Dispatch<SetStateAction<ICountry[]>>) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search");
    const populationSort = searchParams.get("populationSort");
    const region = searchParams.get("region");

    const { data: countriesByName, isLoading: isLoadingName } = useGetCountriesByNameQuery({ search, populationSort });
    const { data: countriesByRegion, isLoading: isLoadingRegion } = useGetCountriesByRegionQuery({ region, populationSort })

    useEffect(() => {
        if (countriesByName && countriesByRegion) {
            const matches = countriesByName.filter((countryName) =>
                countriesByRegion.some((countryRegion) => countryRegion.name.common === countryName.name.common)
            );
            setMatchedCountries(matches);
        }
    }, [countriesByName, countriesByRegion])

    const updateParams: IUpdateParams = (key, value) => {
        const newParams = new URLSearchParams(searchParams);
        if (value) {
            newParams.set(key, value);
        } else {
            newParams.delete(key);
        }
        setSearchParams(newParams);
    };

    return {updateParams, isLoadingName, isLoadingRegion}
}