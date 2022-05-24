
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import Navbar from './components/shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

      </Routes>
    </div>
  );
}

export default App;
