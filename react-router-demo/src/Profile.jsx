import { Link, Outlet } from 'react-router-dom';

const Profile = () => (
  <div>
    <h1>Hello from profile page!</h1>
    <p>So, how are you?</p>
    <nav>
      <ul>
        <li><Link to="spinach">Spinach</Link></li>
        <li><Link to="popeye">Popeye</Link></li>
        <li><Link to="/">Back to Home</Link></li>
      </ul>
    </nav>
    <hr />
    <Outlet />
  </div>
);

export default Profile;
