import React, { useEffect, useState } from "react";
import Card from "../../../components/Cards/Card";
import { CardData } from "../../../data/Card";
import '../../../assets/styles/PrivateCabinet/parts/WishList.scss'
function WishList() {
  const [cardData, setCardData] = useState([]);
  const [cardsType, setCardsType] = useState("all");
  const [atHome, setAtHome] = useState(true);
  useEffect(() => {
    setCardData(CardData);
  }, [cardData, cardsType]);
  return (
    <main className="wishlist-container">
      <Card atHome={atHome} num={3} cardData={cardData} cardsType={cardsType} />
    </main>
  );
}

export default WishList;
