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
import Sign from "./pages/Sign";
import PasswordUpdate from "./pages/PasswordUpdate";
import Page404 from "./pages/Page404";
export const userData = [
  {
    name: "Alisahib Mammadov",
    email: "alisahib@mail.ru",
    password: "alisahib123",
  },
  {
    name: "Elnur Aliyev",
    email: "elnur@mail.ru",
    password: "elnur123",
  },
  {
    name: "Qurban Haciyev",
    email: "qurban@mail.ru",
    password: "qurban123",
  },
];
export const currentUser = []

function App() {
  const [menu, setMenu] = useState(false);
  console.log(currentUser);

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
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signin" element={<Sign signType="in" userData={userData}/>} />
          <Route path="/signup" element={<Sign signType="up" userData={userData}/>} />
          <Route
            path="/passwordUpdateSend"
            element={<PasswordUpdate updateType="send" />}
          />
          <Route
            path="/passwordUpdateAccept"
            element={<PasswordUpdate updateType="accept" />}
          />
          <Route path="/notFound" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
