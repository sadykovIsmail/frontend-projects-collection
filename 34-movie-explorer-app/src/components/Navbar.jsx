import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid gray' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link> |
      <Link to="/favourite" style={{ padding: '1rem' }}>Favourite</Link> |
      <Link to="/search" style={{padding: '1rem'}} >Search</Link> 
      
    </nav>
  );
}