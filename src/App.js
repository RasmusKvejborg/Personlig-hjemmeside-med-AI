import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { Statistik } from "./pages/Statistik.js";
import { Kontakt } from "./pages/Kontakt.js";
import {Jan} from './pages/Jan.js';
import Ai from "./pages/Ai.js"; // ai pagen har en anden måde at eksportere på, så der skal ikke klammer rundt om. const Ai = () => {


import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Settings from "./pages/Settings.js";


function App() {
  return (
    <div style={{ backgroundColor: "#202123" }} className="flex-1 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistik" element={<Statistik />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Jan" element={<Jan />} />
        <Route path="/Ai" element={<Ai />} />
      </Routes>
    </div>
  );
}

export default App;
