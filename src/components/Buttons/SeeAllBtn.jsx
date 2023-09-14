import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../../assets/styles/Buttons/CoursesPositionBtn.scss";

function SeeAllBtn({selectedBtn,setSelectedBtn}) {

  const [selectedPositionBtn, setSelectedPositionBtn] = useState(null);
  const handleClick = (position) => {
    setSelectedPositionBtn(position);
  };
  return (
        <Button
          className={`courses-position-btn ${
            selectedPositionBtn === 'active'  ? "position-btn-active"  : ''
          }`}
          variant="link"
          onClick={() => {
            handleClick("active");
          }}
        >
            Hamısı
        </Button>
  );
}

export default SeeAllBtn;
