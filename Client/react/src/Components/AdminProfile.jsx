import { useState, useEffect } from 'react';
import '../Scss/AdminProfile.scss';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function AdminProfile({visible}) {
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

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/')
    localStorage.removeItem("adminData");
  }

  return (
    <div className={`admin-container ${visible ? 'open' : 'collapsed'}`}>
        <div className='admin-content'>
        <p className='admin-name'><span className='title'>Name:</span>{data.admin_Name}</p>
        <p className='admin-email'><span className='title'>Email:</span> {data.email}</p>
          <button className='log-out' onClick={handleLogout}>Log out</button>
        </div>
      </div>
  );
}

export default AdminProfile;
