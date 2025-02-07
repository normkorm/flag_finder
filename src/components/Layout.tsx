import Header from "./Header.tsx";
import {Outlet} from "react-router-dom";
import {cn} from "../lib/utils.ts";
import {FC} from "react";

interface LayoutProps {
    className?: string;
}

const Layout: FC<LayoutProps> = ({className}) => {
    return (
        <>
            <Header />
            <main className={cn(className, 'bg-dark px-3 sm:px-20')}>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;