import '../Scss/MainContent.scss';
import { Route,Routes } from 'react-router-dom';
import Application from './Application'

const MainContent = () => {
  return (
    <main className="main-content">
    <Routes>
      
      <Route path='/application' element={<Application/>}/>
    </Routes>
    </main>
  );
};

export default MainContent;
