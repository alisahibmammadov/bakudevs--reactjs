import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavbarMobileMenu from "./components/navbar/NavbarMobileMenu";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SignIn from "./pages/SignIn";
import Sign from "./pages/Sign";

function App() {
  const [menu, setMenu] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setMenu(false);
    }
  });

  return (
    <div className="App" >
      <BrowserRouter>
      <Navbar menu={menu} setMenu={setMenu} />
        {menu === true ? (
          <NavbarMobileMenu menu={menu} setMenu={setMenu} />
          ) : null}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/sign" element={<SignIn/>}/>
          <Route path='/signin' element={<Sign signType='in'/>}/>
          <Route path='/signup' element={<Sign signType='up'/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
