import { Route, Routes } from 'react-router-dom';
import './Main.css';
import Navbar from './utils/Navbar';
import Home from './pages/Home';
import Main from './pages/Main';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar />

      {
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Main />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      }
    </div>
  );
}

export default App;