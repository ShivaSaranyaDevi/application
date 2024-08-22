/* eslint-disable react/prop-types */
import '../Scss/AdminNavbar.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AdminNavbar = ({toggleProfile}) => {

 const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const response = localStorage.getItem('adminData');
        const dataContent = response ? JSON.parse(response) : {};
        console.log(dataContent);
        setData(dataContent)

      } catch (error) {
        console.error("Failed to fetch employee data:", error);
      }
    };

    fetchData();
  }, []);

 
  return (
    <nav className="navbar">
      <div className="navbar-brand"><Link to="/AdminDashboard">VISION</Link></div>
      <ul className="navbar-menu">
        <li><Link to="/AdminDashboard" style={{ textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/AdminDashboard/Applications" style={{ textDecoration: 'none' }}>Applicants</Link></li>
        <li><Link to="/AdminDashboard/Students" style={{ textDecoration: 'none' }}>Students</Link></li>
        <li><img src={data.admin_image} alt="Admin" onClick={toggleProfile} style={{ textDecoration: 'none' }}></img></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
