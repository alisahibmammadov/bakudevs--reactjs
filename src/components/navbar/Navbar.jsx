import React, { useEffect, useState } from "react";
import WebLogo from "../../assets/img/logo/websiteLogo.png";
import "../../assets/styles/navbar/Navbar.scss";
import { Link } from "react-router-dom";
import SignupBtn from "../Buttons/SignupBtn";
import LoginBtn from "../Buttons/LoginBtn";

function Navbar({ menu, setMenu }) {
  
  const handleClick = () => {
    setMenu(!menu);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    checkScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    checkScroll();
  };
  const checkScroll = () => {
    const scrollHeight = window.scrollY;
    const threshold = 100;
    if (scrollHeight > threshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <section className="section-navbar">
      {isScrolled ? <div className="navbar-bg"></div> : null}
      <nav className="container main-navbar">
        <Link to="/">
          <img src={WebLogo} alt="WebSite Logo" className="web-logo" />
        </Link>

        <div className="navbar__menu-course">
          <span className="bars-icon">
            <i className="fa-solid fa-bars-staggered"></i>
          </span>
          <Link className="course-link" to="/courses">
            Kurslar
          </Link>
        </div>

        <div className="navbar__wishlist">
          <span className="heart-icon">
            <i className="fa-regular fa-heart"></i>
          </span>
          <Link className="wishlist-link" to="/">
            İstək siyahısı
          </Link>
        </div>

        <div className="navbar__btn-boxes">
          <LoginBtn />
          <SignupBtn />
        </div>

        <div className="menu-icon-box" onClick={handleClick}>
          <i className="fa-solid fa-bars-staggered"></i>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
