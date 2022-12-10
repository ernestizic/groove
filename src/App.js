import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DashboardLayout from './components/dashboardLayout/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
