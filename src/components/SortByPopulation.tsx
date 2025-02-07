import {useSearchParams} from "react-router-dom";
import {FC} from "react";
import {IUpdateParams} from "../types";
import {cn} from "../lib/utils.ts";
import {useTranslation} from "react-i18next";

interface ISortByPopulation {
    className?: string;
    updateParams: IUpdateParams;
}

const SortByPopulation: FC<ISortByPopulation> = ({ className, updateParams }) => {
    const [searchParams] = useSearchParams();
    const sortPopulation = searchParams.get("populationSort") || "";
    const {t} = useTranslation();

    return (
        <select
            className={cn(className, "mx-4 bg-transparent cursor-pointer border-none focus:outline-none rounded-md")}
            value={sortPopulation}
            onChange={(e) => updateParams("populationSort", e.target.value)}
        >
            <option value="">{t("sort")}</option>
            <option value="ascending">{t("ascending")}</option>
            <option value="descending">{t("descending")}</option>
        </select>
    );
};

export default SortByPopulation;