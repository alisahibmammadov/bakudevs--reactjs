import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../assets/styles/Buttons/LoginBtn.scss";

function LoginBtn() {
  return (
    <Button className="login-btn" variant="link">
      <Link className="login-btn" to="/signin">
        <i className="fa-solid fa-arrow-right-to-bracket"></i> Daxil ol
      </Link>
    </Button>
  );
}

export default LoginBtn;
