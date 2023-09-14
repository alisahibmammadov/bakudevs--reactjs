import React, { useEffect, useState } from "react";
import { CardData } from "../../data/Card.js";
import "../../assets/styles/Cards/Card.scss";

function Card({ atHome }) {
  const [cardData, setCardData] = useState([]);
  const [type, setType] = useState("all");
  useEffect(() => {
    setCardData(CardData);
  }, [cardData]);

  const handleFilter = (selectedType) => {
    setType(selectedType);
  };
  return (
    <>
      <div>
        <button onClick={() => handleFilter("Backend")}>backend</button>
        <button onClick={() => handleFilter("FrontEnd")}>frontend</button>
        <button onClick={() => handleFilter("UI/UX")}>ui/ux</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {cardData
          .filter(
            (item) =>
              type === "all" ??
              item.position.toLowerCase() === type.toLowerCase()
          )
          .slice(0, atHome ? 8 : undefined)
          .map((item) => (
            <div className="main-card">
              <img src={item.cardImg} alt="" />
              <div className="card-pos-lessonNum">
                <h3>{item.position}</h3>
                <span className="lesson-num">
                  <i class="fa-regular fa-circle-play"></i>
                  {item.lessonNum}
                </span>
              </div>
              <div className="card-info">
                <span>{item.info}</span>
                <i class="fa-solid fa-circle-play"></i>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Card;
