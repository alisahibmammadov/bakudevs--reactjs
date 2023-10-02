import React from "react";
import "../assets/styles/Sign/PasswordUpdate.scss";
import { Container } from "react-bootstrap";
import CommonBtn from "../components/Common/Button/CommonBtn";

function PasswordUpdate({ updateType }) {
  return (
    <Container className="passwordUpdate-container">
      <h2>Şifrənin yenilənməsi</h2>
      {updateType === "send" ? (
        <form className="password-update-form">
          <div className="update-label-input">
            <label htmlFor="email">Email</label>
            <nav className="input">
              <i className="fa-regular fa-envelope"></i>
              <input type="email" placeholder="Email ünvanı" id="email" />
            </nav>
          </div>
          <CommonBtn work="passwordUpdate" />
        </form>
      ) : null}
      {updateType === "accept" ? (
        <form className="password-update-form">
          <div className="update-label-input">
            <label htmlFor="email">Email-ə gələn kod</label>
            <nav className="input">
              <i className="fa-regular fa-envelope"></i>
              <input type="email" placeholder="Email ünvanı" id="email" />
            </nav>
          </div>
          <div className="update-label-input">
            <label htmlFor="email">Yeni şifrə</label>
            <nav className="input">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Şifrə" id="email" />
            </nav>
          </div>
          <div className="update-label-input">
            <label htmlFor="email">Yeni şifrənin təkrarı</label>
            <nav className="input">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Şifrə" id="email" />
            </nav>
          </div>
          <CommonBtn work="entry" />
        </form>
      ) : null}
    </Container>
  );
}

export default PasswordUpdate;
