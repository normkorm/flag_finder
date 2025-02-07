import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Layout from "./components/Layout.tsx";
import CountryInfo from "./pages/CountryInfoPage.tsx";
import './lib/i18n.ts'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/name/:name" element={<CountryInfo />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default App;