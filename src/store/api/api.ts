import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {sortCountriesByAlphabet} from "../../lib/helpers/sortCountriesByAlphabet.ts";
import {sortCountriesByPopulation} from "../../lib/helpers/sortCountriesByPopulation.ts";
import {ICountry} from "../../types";
const URL = "https://restcountries.com/v3.1/";

type IQuery =  {
    search?: string | null;
    region?: string | null;
    name?: string | null;
    populationSort?: string | null;
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        getCountriesByName: builder.query({
            query: ({ search }: IQuery) => {
                if (search) {
                    return `translation/${search}`;
                } else {
                    return 'all'
                }
            },
            transformResponse: (response, _, arg) => {
                if (arg.populationSort) {
                    return sortCountriesByPopulation(response as ICountry[], arg.populationSort)
                } else {
                    return sortCountriesByAlphabet(response as ICountry[])
                }
            }
        }),
        getCountriesByRegion: builder.query({
            query: ({ region }: IQuery) => {
                if (region) {
                    return `region/${region}`;
                } else {
                    return 'all'
                }
            },
            transformResponse: (response, _, arg ) => {
                if (arg.populationSort) {
                    return sortCountriesByPopulation(response as ICountry[], arg.populationSort)
                } else {
                    return sortCountriesByAlphabet(response as ICountry[])
                }
            }
        }),
        getOneCountry: builder.query({
            query({name}: IQuery) {
                if (name) {
                    return `name/${name}`
                } else {
                    return 'all'
                }
            }
        })
    }),
});

export const { useGetCountriesByNameQuery, useGetCountriesByRegionQuery, useGetOneCountryQuery } = api;
