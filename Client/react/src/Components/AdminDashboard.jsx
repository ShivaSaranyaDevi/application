import AdminNavbar from './AdminNavbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import AdminProfile from './AdminProfile';
import Students from './Students';
import AdminApplications from './AdminApplications';
import '../Scss/AdminDashboard.scss';
import { useState } from 'react';

const AdminDashboard = () => {

  const [visible, isVisible] = useState(false);
  const toggleProfile = () => {
    isVisible(visible === 'profile' ? null : 'profile')
  }
  return (
    <div className="AdminDashboard">
      <div className='Navbar-container'>
        <AdminNavbar toggleProfile={toggleProfile} />
      </div>
      <div className={`popUp ${visible === 'profile' ? 'open' : 'collapsed'}`}>
        {visible && <AdminProfile />}
      </div>
      <div className='mainContent-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Applications' element={<AdminApplications />} />
          <Route path='/Students' element={<Students />} />
        </Routes>
      </div>
    </div>
  );
};
export default AdminDashboard;
