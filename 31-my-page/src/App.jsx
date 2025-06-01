import {Link} from react-router-dom

const App = () => {
  <div>
    <h1>My name is Ismail</h1>
    <h4>My pages:</h4>

    <nav>
      <ul>
        <li>
          <Link to="profile/biography">My biography</Link>
          <Link to="profile/current">What I am doing currently</Link>
          <Link to="profile/plams">My future plans</Link>
        </li>
      </ul>
    </nav>
  </div>
}

export default App