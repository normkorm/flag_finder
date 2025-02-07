import {useSearchParams} from "react-router-dom";
import {IUpdateParams} from "../types";
import {FC} from "react";
import {useTranslation} from "react-i18next";

interface SortByPopulationProps {
    className?: string;
    updateParams: IUpdateParams;
}

const SortByRegion:FC<SortByPopulationProps> = ({updateParams}) => {
    const [ searchParams ] = useSearchParams();
    const region = searchParams.get("region") || "";
    const {t} = useTranslation();

    return (
        <select className='mx-4 cursor-pointer bg-transparent border-none focus:outline-none rounded-md' value={region} onChange={(e) => updateParams("region", e.target.value)}>
            <option value="">{t("all-regions")}</option>
            <option value="africa">{t("africa")}</option>
            <option value="americas">{t("americas")}</option>
            <option value="asia">{t("asia")}</option>
            <option value="europe">{t("europe")}</option>
            <option value="oceania">{t("oceania")}</option>
        </select>
    );
};

export default SortByRegion;