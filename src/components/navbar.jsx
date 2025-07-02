// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        MBC Lab <span className="brand-accent">| Navigating The Digital Ocean</span>
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/divisions">Divisions</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/developer">Developer</Link>
      </div>
    </nav>
  );
};

export default Navbar;