import SortByPopulation from "./SortByPopulation.tsx";
import SortByRegion from "./SortByRegion.tsx";
import SearchInput from "./SearchInput.tsx";
import {FC} from "react";
import {IUpdateParams} from "../types";
import {clsx} from "clsx";

interface FiltersProps {
    className?: string;
    updateParams: IUpdateParams;
}

const Filters:FC<FiltersProps> = ({updateParams, className}) => {
    return (
        <div className={clsx(className, 'rounded-2xl flex flex-col md:flex-row justify-between h-16 md:bg-dark-light  my-10')}>
            <SearchInput updateParams={updateParams} />
            <div className='flex'>
                <SortByPopulation updateParams={updateParams} />
                <SortByRegion updateParams={updateParams} />
            </div>
        </div>
    );
};

export default Filters;