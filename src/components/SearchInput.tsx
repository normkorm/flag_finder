import {useSearchParams} from "react-router-dom";
import {ChangeEvent, FC} from "react";
import {IUpdateParams} from "../types";
import {cn} from "../lib/utils.ts";
import {useTranslation} from "react-i18next";

interface SearchInputProps {
    className?: string;
    updateParams?: IUpdateParams
}


const SearchInput: FC<SearchInputProps> = ({className, updateParams}) => {
    const [searchParams] = useSearchParams();
    const {t} = useTranslation();
    const search = searchParams.get("search") || "";
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value ?? "";
        if (updateParams) {
            updateParams("search", value);
        }
    };
    return (
        <input
            className={cn(className, 'border-none mx-4 focus:ring-0 outline-none p-0 bg-transparent')}
            type="text"
            placeholder={t("inputPlaceholder")}
            value={search}
            onChange={handleChange}
        />
    );
};

export default SearchInput;