import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../../assets/styles/Buttons/CoursesPositionBtn.scss";

function SeeAllBtn({ setType, cardsType, setCardsType }) {
  const [selectedPositionBtn, setSelectedPositionBtn] = useState("all");
  const handleClick = (position) => {
    setSelectedPositionBtn(position);
  };
  console.log();
  return (
    <Button
      className={`courses-position-btn ${
        (selectedPositionBtn === "active" && cardsType === "all") ||
        cardsType === "all"
          ? "position-btn-active"
          : ""
      }`}
      variant="link"
      onClick={() => {
        setCardsType("all");
        handleClick("active");
      }}
    >
      Hamısı
    </Button>
  );
}

export default SeeAllBtn;
