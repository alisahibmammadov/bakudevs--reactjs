import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GFB from "../components/Common/GoogleFb/GFB";
import "../assets/styles/Sign/Sign.scss";
import { Link, useNavigate } from "react-router-dom";
import CommonBtn from "../components/Common/Button/CommonBtn";
import { userData } from "../App";
// import SignupBtn from "../components/Buttons/SignupBtn";

function Sign({ signType }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  console.log(email);
  const [password, setPassword] = useState("");
  console.log(password);
  const getUser = (work) => {
    if (work === "in") {
      const user = userData.find(
        (user) => user.email === email && user.password === password
      );
      console.log(user);
    }
  };

  return (
    <Container className="signpage-container">
      {signType === "in" ? <h2>Daxil olun</h2> : <h2>Qeydiyyatdan keçin</h2>}
      <form className="sign-form">
        <GFB />
        {signType === "up" ? (
          <div className="label-input">
            <label htmlFor="nameSurname">Adınız və Soyadınız</label>
            <nav className="input">
              <i class="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Adınız və Soyadınız"
                id="nameSurname"
              />
            </nav>
          </div>
        ) : null}
        <div className="label-input">
          <label htmlFor="email">Email</label>
          <nav className="input">
            <i className="fa-regular fa-envelope"></i>
            <input
              type="email"
              placeholder="Email ünvanı"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </nav>
        </div>
        <div className="label-input">
          <label htmlFor="password">Şifrə</label>
          <nav className="input">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Şifrə"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </nav>
        </div>
        {signType === "up" ? (
          <div className="label-input">
            <label htmlFor="repassword">Şifrənin təkrarı</label>
            <nav className="input">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Şifrə" id="repassword" />
            </nav>
          </div>
        ) : null}

        <div className="checkbox-save">
          <nav>
            <input type="checkbox" id="save" />
            <label htmlFor="save">Yadda saxla</label>
          </nav>
          {signType === "in" ? (
            <Link to="/passwordUpdateSend" className="forget-link">
              Şifrənizi unutmusunuz?
            </Link>
          ) : null}
        </div>
        {/* <CommonBtn work="entry" /> */}
        {signType === "in" ? (
          <CommonBtn
            work="entry"
            onBtnClick={() => {
              getUser("in");
              navigate("/");
            }}
          />
        ) : signType === "up" ? (
          <CommonBtn work="up" />
        ) : null}

        {signType === "in" ? (
          <div className="signup-link">
            <label htmlFor="">Hesabınız yoxdur?</label>
            <Link to="/signup" className="signup">
              Qeydiyyatdan keçin
            </Link>
          </div>
        ) : (
          <div className="signup-link">
            <label htmlFor="">Hesabınız var?</label>
            <Link to="/signin" className="signup">
              Daxil olun
            </Link>
          </div>
        )}
      </form>
    </Container>
  );
}

export default Sign;
