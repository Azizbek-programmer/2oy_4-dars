import { memo as nemo } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/dashboard"}>Dashboard</Link>
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
};

export default nemo(App);