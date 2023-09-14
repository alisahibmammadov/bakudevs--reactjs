import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavbarMobileMenu from "./components/navbar/NavbarMobileMenu";
import HomePage from "./pages/HomePage";

function App() {
  const [menu, setMenu] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setMenu(false);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar menu={menu} setMenu={setMenu} />
        {menu === true ? (
          <NavbarMobileMenu menu={menu} setMenu={setMenu} />
        ) : null}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
