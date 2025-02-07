import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <h1>Page not found</h1>
            <h2>
                <Link to="/">Back to home</Link>
            </h2>
        </>
    );
};

export default NotFoundPage;