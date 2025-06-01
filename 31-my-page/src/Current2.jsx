import {Link} from "react-router-dom"

const Current = () => {
    return(
<>
    <h2>I am studying in NAU</h2>
    <h4>Additionally learning from online resources</h4>
   <li><Link to="/">Go to the main page</Link></li> 
   <li><Link to="/profile/plans">My future plans</Link></li>

    </>
    )
    
}

export default Current