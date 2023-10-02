import React from "react";
import { Button } from "react-bootstrap";
import "../../../assets/styles/Common/Button/CommonBtn.scss";
import { Link } from "react-router-dom";

function CommonBtn({ work,onBtnClick  }) {
  return (
    <Button className="commonBtn" variant="link" onClick={onBtnClick}>
      <Link
        className="commonbtnLink"
        to={work === "passwordUpdate" ? "/passwordUpdateAccept" :null}
      >
        {work === "send"
          ? "Göndər"
          : work === "entry"
          ? "Daxil ol"
          : work === "passwordUpdate"
          ? "Şifrəni yenilə"
          : work === "up"
          ? "Qeydiyyatdan keç"
          : null}{" "}
        <i className="fa-solid fa-chevron-right"></i>
      </Link>
    </Button>
  );
}

export default CommonBtn;
