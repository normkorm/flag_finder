import {useState} from "react";
import {useCountry} from "../hooks/useCountry.ts";
import CountryList from "../components/CountryList.tsx";
import {ICountry} from "../types";
import Filters from "../components/Filters.tsx";

const MainPage = () => {
    const [matchedCountries, setMatchedCountries] = useState<ICountry[]>([]);
    const {isLoadingName, isLoadingRegion, updateParams} = useCountry(setMatchedCountries)
    return (
        <>
            <Filters updateParams={updateParams} />
            <CountryList matchedCountries={matchedCountries} isLoadingName={isLoadingName} isLoadingRegion={isLoadingRegion} />
        </>
    )
}

export default MainPage
