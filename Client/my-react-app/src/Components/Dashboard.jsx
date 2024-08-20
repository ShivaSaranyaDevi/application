import Navbar from './Navbar';
import { Route,Routes } from 'react-router-dom';
import Application from './Application'
import Home from './Home'
import '../Scss/Dashboard.scss';
import AdminLogin from './AdminLogin';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className='Navbar-container'>
      <Navbar />
      </div>
      <div className='mainContent-container'>
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/application' element={<Application />} />
      <Route path='/admin' element={<AdminLogin />} />

    </Routes>
      </div>
 
    </div>
  );
};
export default Dashboard;
