import { Route, Routes } from 'react-router-dom';
import './Main.css';
import Navbar from './utils/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />

      {
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={ } /> */}
        </Routes>
      }
    </div>
  );
}

export default App;