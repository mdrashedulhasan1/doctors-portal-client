
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Navbar from './Components/Shared/Navbar';
import Appointment from "./Components/Appointment/Appointment";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import PrivateRoute from "./Components/Login/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/appointment" element={
          <PrivateRoute>
            <Appointment></Appointment>
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </div>
  );
}

export default App;
