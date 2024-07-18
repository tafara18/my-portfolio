import React from "react";
import "./index.css";
import HOME from "./routes/HOME";
import PROJECTS from "./routes/PROJECTS";
import CONTACT from "./routes/CONTACT";
import ABOUT from "./routes/ABOUT";
import NavBar from "./components/NavBar";
import { FaBars } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Heroimg from "./components/Heroimg";
import Form from "./components/Form";

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<HOME/>}/>
        <Route path="/PROJECTS" element={<PROJECTS/>}/>
        <Route path="/CONTACT" element={<CONTACT/>}/>
        <Route path="/ABOUT" element={<ABOUT/>}/>
      </Routes>
    </>
  );
};

export default App;
