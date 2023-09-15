import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CardData } from "../../data/Card.js";
import "../../assets/styles/Buttons/CoursesPositionBtn.scss";

function CoursesPositionBtn({ cardsType, setCardsType }) {
  const uniquePositions = [...new Set(CardData.map((item) => item.position))];

  const [selectedPositionBtn, setSelectedPositionBtn] = useState(null);
  const handleClick = (position) => {
    setSelectedPositionBtn(position);
  };
  return (
    <>
      {uniquePositions.map((position) => (
        <Button
          className={`courses-position-btn ${
            selectedPositionBtn === position && cardsType !== "all"
              ? "position-btn-active"
              : ""
          }`}
          key={position}
          variant="link"
          onClick={() => {
            setCardsType(position);
            handleClick(position);
          }}
        >
          {position}
        </Button>
      ))}
    </>
  );
}

export default CoursesPositionBtn;
