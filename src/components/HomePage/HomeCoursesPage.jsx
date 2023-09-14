import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoursesPositionBtn from "../Buttons/CoursesPositionBtn";
import SeeAllBtn from "../Buttons/SeeAllBtn";
import Card from "../../components/Cards/Card";
import { CardData } from "../../data/Card";
import "../../assets/styles/HomePage/HomeCoursesPage.scss";




function HomeCoursesPage() {
  const [cardsType, setCardsType] = useState("all");

  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    setCardData(CardData);
  }, [cardData, cardsType]);

  return (
    <Container>
      <Row>
        <Col style={{ background: "red" }}>
          <h3>Populyar Kurslar</h3>
        </Col>
        <Col>
          <SeeAllBtn setCardsType={setCardsType} cardsType={cardsType} />
          <CoursesPositionBtn setCardsType={setCardsType} cardsType={cardsType}/>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="home-courses-cards-list">
            <Card atHome cardData={cardData} cardsType={cardsType} />
          </div>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default HomeCoursesPage;
