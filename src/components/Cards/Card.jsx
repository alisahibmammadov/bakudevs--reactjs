import React from "react";
import "../../assets/styles/Cards/Card.scss";

function Card({ atHome, cardData, cardsType }) {
  return (
    <>
      {cardData
        .filter(
          (item) =>
          cardsType === "all" || item.position.toLowerCase() === cardsType.toLowerCase()
        )
        .slice(0, atHome ? 8 : undefined)
        .map((item) => (
          <div className="main-card" key={item.id}>
            <img src={item.cardImg} alt="" />
            <div className="card-pos-lessonNum">
              <h3>{item.position}</h3>
              <span className="lesson-num">
                <i className="fa-regular fa-circle-play"></i>
                {item.lessonNum}
              </span>
            </div>
            <div className="card-info">
              <span>{item.info}</span>
              <i className="fa-solid fa-circle-play"></i>
            </div>
          </div>
        ))}
    </>
  );
}

export default Card;
