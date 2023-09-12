import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [menu,setMenu] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar menu={menu} setMenu={setMenu}/>
        
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
