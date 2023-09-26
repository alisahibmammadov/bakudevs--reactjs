import React from "react";
import { Button } from "react-bootstrap";
import '../../../assets/styles/Common/Button/CommonBtn.scss'

function CommonBtn({ work }) {
  return (
    <Button className="commonBtn" variant="link">
      {work === "send" ? "Göndər" : null}{" "}
      <i className="fa-solid fa-chevron-right"></i>
    </Button>
  );
}

export default CommonBtn;
