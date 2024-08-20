import './App.css'
import Dashboard from './Components/Dashboard.jsx'
import AdminDashboard from './Components/AdminDashboard.jsx'
import { BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <Routes>
        <Route path="/*" element={<Dashboard />} />
            <Route path='/AdminDashboard/*' element={<AdminDashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
