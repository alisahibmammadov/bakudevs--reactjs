import React from "react";
import { Button } from "react-bootstrap";
import "../../../assets/styles/Common/Button/CommonBtn.scss";
import { Link } from "react-router-dom";

function CommonBtn({ work }) {
  return (
    <Button className="commonBtn" variant="link">
      <Link
        className="commonbtnLink"
        to={work === "passwordUpdate" ? "/passwordUpdateAccept" : null}
      >
        {work === "send"
          ? "Göndər"
          : work === "entry"
          ? "Daxil ol"
          : work === "passwordUpdate"
          ? "Şifrəni yenilə"
          : work === "up"
          ? "Qeydiyyatdan keç"
          : work === "save"
          ? "Yadda saxla"
          : work === "subscribe"
          ? "Abunə ol"
          : work === "refresh"
          ? "Yenilə"
          : null}{" "}
        <i className="fa-solid fa-chevron-right"></i>
      </Link>
    </Button>
  );
}

export default CommonBtn;
