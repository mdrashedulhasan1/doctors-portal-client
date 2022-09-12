
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Navbar from './Components/Shared/Navbar';
import Appointment from "./Components/Appointment/Appointment";
import Login from "./Components/Login/Login";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/appointment" element={<Appointment></Appointment>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
