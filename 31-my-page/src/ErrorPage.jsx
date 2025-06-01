import { Link } from "react-router-dom";

const ErrorPage = () => {
    return(
        <div>
        <h2>Oh no, this link doesn't exists</h2>
        <Link>Click here to go to the main page</Link>
    </div>
    )
    
}

export default ErrorPage