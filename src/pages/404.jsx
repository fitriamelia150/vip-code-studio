import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
    const error = useRouteError()
    
    return (
        <div className="">
            <h1>Ooooopps!!</h1>
            <p>Sorry, your page not found!</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default PageNotFound