import {Link} from "react-router-dom"

const App = () => {
  return(
<div>
    <h1>My name is Ismail</h1>
    <h4>My pages:</h4>

    <nav>
      <ul>
        
           <li><Link to="profile/biography">My biography</Link></li>
           <li><Link to="profile/current">What I am doing currently</Link></li>


           <li><Link to="profile/plans">My future plans</Link></li>
        
      </ul>
    </nav>
  </div>
  )
  
}

export default App