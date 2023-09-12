import React from "react";
import WebLogo from "../../assets/img/logo/websiteLogo.png";
import "../../assets/styles/navbar/Navbar.scss";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Navbar({menu,setMenu}) {
  const handleClick = () =>{  
    setMenu(!menu)
  }
  return (
    <nav className="container main-navbar">
      <Link to='/'>
      <img src={WebLogo} alt="WebSite Logo" className="web-logo"/>
      </Link>

      <div className="navbar__menu-course">
        <span className="bars-icon">
          <i className="fa-solid fa-bars-staggered"></i>
        </span>
        <Link className="course-link" to="/">Kurslar</Link>
      </div>

      <div className="navbar__wishlist">
        <span className="heart-icon"><i className="fa-regular fa-heart"></i></span>
        <Link className="wishlist-link" to='/'>İstək siyahısı</Link>
      </div>

      <div className="navbar__btn-boxes">
        <Button className="login" variant="link"><i className="fa-solid fa-arrow-right-to-bracket"></i> Daxil ol</Button>
        <Button className="signup" variant="link"><i className="fa-regular fa-pen-to-square"></i> Qeydiyyatdan keç</Button>
      </div>
      <div className="menu-icon-box" onClick={handleClick}>
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
    </nav>
  );
}

export default Navbar;
