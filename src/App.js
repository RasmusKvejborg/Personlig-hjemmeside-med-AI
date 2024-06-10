import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { Statistik } from "./pages/Statistik.js";
import { Kontakt } from "./pages/Kontakt.js";
import Navbar from "./components/Navbar.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Settings from "./pages/Settings.js";

function App() {
  return (
    <div style={{ backgroundColor: "#202123" }} className="flex-1 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistik" element={<Statistik />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
