import { useParams } from "react-router-dom";
import Plans from "./Plans";
import Current from "./current";
import Biography from "./Biography";
import ErrorPage from "./ErrorPage";

const Profile = () => {
    const { name } = useParams()

    return(
        <div>
            <h1>Hello</h1>
            <hr />
            {name === "biography" ? (
                <Biography />
            ) : name === "current" ? (
                <Current />
            ) : name === "plans" ? (
                <Plans />
            ) : <ErrorPage />}
        </div> 
    )
}

export default Profile