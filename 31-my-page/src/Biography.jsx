import { Link } from "react-router-dom";

const Biography = () => {
    return(
<>
    <h2>My name is Ismail</h2>
    <h4>I was born in 2007 in the Osh city of Kyrgyzstan.</h4>
    <h4>I have graduated the school name: 40th years of Kyrgyzstan</h4>
    <li>    <Link to="/profile/current">What am I doing currently</Link>
</li>
<li>    <Link to="/">Go to the main page</Link>
</li>
    </>

    )
    
}

export default Biography