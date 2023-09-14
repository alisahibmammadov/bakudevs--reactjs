import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../../assets/styles/Buttons/CoursesPositionBtn.scss";

function SeeAllBtn({setType , type}) {

  const [selectedPositionBtn, setSelectedPositionBtn] = useState(null);
  const handleClick = (position) => {
    setSelectedPositionBtn(position);
  };
  return (
        <Button
          className={`courses-position-btn ${
            selectedPositionBtn === 'active' && type === 'all' ? "position-btn-active"  : ''
          }`}
          variant="link"
          onClick={() => {
            setType('all')
            handleClick("active");
          }}
        >
            Hamısı
        </Button>
  );
}

export default SeeAllBtn;
