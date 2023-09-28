import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GFB from "../components/Common/GoogleFb/GFB";
import "../assets/styles/SignIn/SignIn.scss";
import { Link } from "react-router-dom";
import CommonBtn from "../components/Common/Button/CommonBtn";

function SignIn() {
  return (
    <Container className="signinpage-container">
      <h2>Daxil olun</h2>
      <form className="signin-form">
        <GFB />
        <div className="label-input">
          <label htmlFor="email">Email</label>
          <nav className="input">
            <i className="fa-regular fa-envelope"></i>
            <input type="email" placeholder="Email ünvanı" id="email" />
          </nav>
        </div>
        <div className="label-input">
          <label htmlFor="password">Şifrə</label>
          <nav className="input">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Şifrə" id="password" />
          </nav>
        </div>
        <div className="checkbox-save">
          <nav>
            <input type="checkbox" id="save" />
            <label htmlFor="save">Yadda saxla</label>
          </nav>
          <Link to="/forget" className="forget-link">
            Şifrənizi unutmusunuz?
          </Link>
        </div>
        <CommonBtn work="entry" />
        <div className="signup-link">
          <label htmlFor="">Hesabınız yoxdur?</label>
          <Link to="/signup" className="signup">
            Qeydiyyatdan keçin
          </Link>
        </div>
      </form>
    </Container>
  );
}

export default SignIn;
