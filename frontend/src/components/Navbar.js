import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      padding: "16px",
      borderBottom: "2px solid #ddd",
      marginBottom: "20px"
    }}>
      <Link to="/" style={{ marginRight: "12px" }}>Home</Link>
      <Link to="/cats" style={{ marginRight: "12px" }}>Cats</Link>
      <Link to="/memes" style={{ marginRight: "12px" }}>Memes</Link>
      <Link to="/submit">Submit</Link>
    </nav>
  );
}
