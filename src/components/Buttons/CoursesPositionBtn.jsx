import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CardData } from "../../data/Card.js";

function CoursesPositionBtn() {
  const [cardData, setCardData] = useState(CardData);
  const uniquePositions = [...new Set(cardData.map((item) => item.position))];
  console.log(uniquePositions);
  return (
    <>
      {uniquePositions.map((position) => (
        <Button key={position} variant="link" onClick={()=>console.log(position)}>
          {position}
        </Button>
      ))}
    </>
  );
}

export default CoursesPositionBtn;
