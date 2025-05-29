import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Hello from the main page!</h1>
    <p>Here are some links:</p>
    <ul>
      <li><Link to="/profile">Go to Profile</Link></li>
    </ul>
  </div>
);

export default App;
