import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoursesPositionBtn from "../Buttons/CoursesPositionBtn";
import SeeAllBtn from "../Buttons/SeeAllBtn";
import Card from "../../components/Cards/Card";
import { CardData } from "../../data/Card";
function HomeCoursesPage() {
  const [selectedBtn, setSelectedBtn] = useState();

  const [type, setType] = useState("all");

  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    setCardData(CardData);
  }, [cardData]);


  const handleFilter = (selectedType) => {
    setType(selectedType);
  };
  return (
    <Container>
        <div>
        <button onClick={() => handleFilter("Backend")}>backend</button>
        <button onClick={() => handleFilter("FrontEnd")}>frontend</button>
        <button onClick={() => handleFilter("UI/UX")}>ui/ux</button>
      </div>
      <Row>
        <Col style={{ background: "red" }}>
          <h3>Populyar Kurslar</h3>
        </Col>
        <Col>
          <CoursesPositionBtn setType={setType}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card atHome cardData={cardData} type={type}/>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default HomeCoursesPage;
