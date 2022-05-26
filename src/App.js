
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Footer from './components/shared/Footer/Footer';
import ForgotPass from './components/shared/ForgotPass';
import Navbar from './components/shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import ToolsDetails from './components/pages/ToolsDetails/ToolsDetails';
import RequireAuth from './components/shared/RequireAuth/RequireAuth';
import OrderModal from './components/pages/ToolsDetails/OrderModal';
import Dashboard from './components/pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <div className="App mt-10 pt-10">


        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forget-pass" element={<ForgotPass />}></Route>

          <Route path="/details/:id" element={<RequireAuth><ToolsDetails /></RequireAuth>}></Route>
          <Route path="/order/:id" element={<RequireAuth><OrderModal /></RequireAuth>}></Route>
          
          
          
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}></Route>

        </Routes>

      <ToastContainer />

      </div>
    
      <Footer />
    </>
  );
}

export default App;
