import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import '../../assets/styles/Buttons/SignupBtn.scss'

function SignupBtn() {
  return (
    <Button className="signup-btn" variant="link">
      <Link className="signup-btn" to="/signup">
        <i className="fa-regular fa-pen-to-square"></i> Qeydiyyatdan keç
      </Link>
    </Button>
  );
}

export default SignupBtn;
