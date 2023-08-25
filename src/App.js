import { Route, Routes } from 'react-router-dom';
import './Main.css';
import Navbar from './utils/Navbar';
import Home from './pages/Home';
import Main from './pages/Main';
import Login from './pages/Login';
import ClockIn from './pages/ClockIn';
import ClockOut from './pages/ClockOut';
import Orders from './pages/Orders';
import Tables from './pages/Tables';

function App() {
  return (
    <div className="App">
      <Navbar />

      {
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/clockin' element={<ClockIn />} />
          <Route path='/clockout' element={<ClockOut />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/tables' element={<Tables />} />
        </Routes>
      }
    </div>
  );
}

export default App;