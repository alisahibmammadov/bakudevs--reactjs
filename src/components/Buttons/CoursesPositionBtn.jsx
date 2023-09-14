import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CardData } from "../../data/Card.js";

function CoursesPositionBtn() {
  const [cardData, setCardData] = useState(CardData);
  return (
    <>
      {cardData
        .filter(
          (item) => item.position === "Backend" || item.position === "Frontend"
        )
        .map((item) => (
          <Button variant="link">{item.position}</Button>
        ))}
    </>
  );
}

export default CoursesPositionBtn;
