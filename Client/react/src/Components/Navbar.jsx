import '../Scss/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><Link to="/">VISION</Link></div>
      <ul className="navbar-menu">
        <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
        <li><Link to="/application" style={{ textDecoration: 'none' }}>Apply</Link></li>
        <li><Link to="/admin" style={{ textDecoration: 'none' }}>Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
