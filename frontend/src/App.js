import './App.css';
import Navbar from './components/Navbar';
import AlertDetails from './components/AlertDetails';
import AllAlerts from './screens/AllAlerts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './screens/AboutUs';
import Cases from './screens/Cases';
import Footer from './components/Footer';
import NewAlert from './screens/NewAlert';
import MyProfile from './screens/MyProfile';
import ContactUs from './screens/ContactUs';
import Test from './screens/Test';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import NewEdit from './screens/NewEdit';
// import EditAlert from './screens/EditAlert';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/allalerts" element={<AllAlerts/>} />
          <Route path="/alert/:id" element={<AlertDetails/>} />
          {/* <Route path="/editalert/:id" element={<EditAlert/>} /> */}
          <Route path="/editalert/:id" element={<NewEdit/>} />
          {/* <Route path="/delalert/:id" element={<EditAlert/>} /> */}
          <Route path="/cases" element={<Cases/>} />
          <Route path="/newalert" element={<NewAlert/>} />
          <Route path="/myprofile" element={<MyProfile/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route exact path="/" element={<AboutUs/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
