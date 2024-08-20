import '../Scss/AdminNavbar.scss';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><Link to="/AdminDashboard">VISION</Link></div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Applications">Applications</Link></li>
        <li><Link to="/AdminDashboard/Students">Students</Link></li>
        <li><Link to="/AdminDashboard/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
