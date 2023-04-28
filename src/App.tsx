import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/dashboard";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
