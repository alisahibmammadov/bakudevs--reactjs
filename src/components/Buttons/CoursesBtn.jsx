import React from "react";
import "../../assets/styles/Buttons/CoursesBtn.scss";
import { Button } from "react-bootstrap";

function CoursesBtn() {
  return (
    <Button variant="link" className="courses-btn">
      Kurslar <i className="fa-solid fa-chevron-right"></i>
    </Button>
  );
}

export default CoursesBtn;
