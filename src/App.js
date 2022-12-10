import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/dashboardLayout/DashboardLayout';
import DefaultScreen from './screens/DefaultScreen';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<DefaultScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
