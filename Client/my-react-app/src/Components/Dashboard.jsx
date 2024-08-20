import Navbar from './Navbar';
import MainContent from './MainContent';
import '../Scss/Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Navbar />
      <MainContent />
    </div>
  );
};
export default Dashboard;
