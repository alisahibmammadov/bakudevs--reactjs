import React from "react";
import "../../assets/styles/Buttons/CoursesBtn.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CoursesBtn() {
  return (
    <Button variant="link" className="courses-btn">
      <Link className="courses-btn" to='/courses' >Kurslar <i className="fa-solid fa-chevron-right"></i></Link>
    </Button>
  );
}

export default CoursesBtn;
