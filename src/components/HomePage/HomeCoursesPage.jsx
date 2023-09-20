import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoursesPositionBtn from "../Buttons/CoursesPositionBtn";
import SeeAllBtn from "../Buttons/SeeAllBtn";
import Card from "../../components/Cards/Card";
import { CardData } from "../../data/Card";
import "../../assets/styles/HomePage/HomeCoursesPage.scss";
import AllCoursesBtn from "../Buttons/AllCoursesBtn";

function HomeCoursesPage({ course }) {
  const [cardsType, setCardsType] = useState("all");
  const [atHome, setAtHome] = useState(true);
  useEffect(() => {
    if (course === false) {
      setAtHome(false);
    } else {
      setAtHome(true);
    }
  }, [atHome]);

  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    setCardData(CardData);
  }, [cardData, cardsType]);

  return (
    <Container className="main-home-course">
      <Row className="home-courseshead-row">
        <Col md={5} sm={12}>
          <div className="home-courses-head">
            <h6>Populyar Kurslar</h6>
          </div>
        </Col>
        <Col md={7} sm={12}>
          <div className="home-courses-head-btns">
            <SeeAllBtn setCardsType={setCardsType} cardsType={cardsType} />
            <CoursesPositionBtn
              setCardsType={setCardsType}
              cardsType={cardsType}
            />
          </div>
        </Col>
      </Row>
      <Row className="home-courselist-row">
        <Col md={12}>
          <div className="home-courses-cards-list">
            <Card atHome={atHome} cardData={cardData} cardsType={cardsType} />
          </div>
        </Col>
      </Row>
      <Row style={{ margin: "auto" }}>
        <Col md={11} xs={12} className="home-allcourses">
          {
            course === false ? null : <AllCoursesBtn />
          }
          {/* <AllCoursesBtn /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default HomeCoursesPage;
