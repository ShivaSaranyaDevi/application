import AdminNavbar from './AdminNavbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Home'
import AdminApplications from './AdminApplications';
import '../Scss/AdminDashboard.scss';

const AdminDashboard = () => {
  return (
    <div className="AdminDashboard">
      <div className='Navbar-container'>
      <AdminNavbar />
      </div>
      <div className='mainContent-container'>
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Applications' element={<AdminApplications />} />
    </Routes>
      </div>
    </div>
  );
};
export default AdminDashboard;
