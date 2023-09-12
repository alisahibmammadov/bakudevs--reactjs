import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavbarMobileMenu from "./components/navbar/NavbarMobileMenu";

function App() {
  const [menu,setMenu] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar menu={menu} setMenu={setMenu}/>
        {
          menu === true ? <NavbarMobileMenu/> : null
        }
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
