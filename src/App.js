
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
import MyOrders from './components/pages/Dashboard/Customers/MyOrders';
import AddReview from './components/pages/Dashboard/Customers/AddReview';
import MyProfile from './components/pages/Dashboard/MyProfile';
import ManageOrders from './components/pages/Dashboard/Admin/ManageOrders';
import RequireAdmin from './components/shared/RequireAdmin/RequireAdmin';
import AllUsers from './components/pages/Dashboard/Admin/AllUsers';
import AddTools from './components/pages/Dashboard/Admin/AddTools';
import Blogs from './components/Blogs/Blogs';
import NotFoundPage from './components/NotFoundPage';


function App() {
  return (
    <>
      <Navbar />
      <div className="App mt-7 pt-10">


        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forget-pass" element={<ForgotPass />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>

          <Route path="/details/:id" element={<RequireAuth><ToolsDetails /></RequireAuth>}></Route>
          <Route path="/order/:id" element={<RequireAuth><OrderModal /></RequireAuth>}></Route>
          
          
          
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route index element={<MyProfile/>}></Route>
            <Route path="my-orders" element={<MyOrders/>}></Route>
            <Route path="addreview" element={<AddReview/>}></Route>
            <Route path="myProfile" element={<MyProfile/>}></Route>

            <Route path="manageOrders" element={<RequireAdmin><ManageOrders/></RequireAdmin>}></Route>
            <Route path="allusers" element={<RequireAdmin><AllUsers/></RequireAdmin>}></Route>
            <Route path="addtools" element={<RequireAdmin><AddTools/></RequireAdmin>}></Route>
          </Route>

          <Route path="*" element={<NotFoundPage/>} ></Route>

        </Routes>

      <ToastContainer />

      </div>
    
      <Footer />
    </>
  );
}

export default App;
