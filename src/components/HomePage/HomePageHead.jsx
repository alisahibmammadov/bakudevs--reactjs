import React from "react";
import "../../assets/styles/HomePage/HomePageHead.scss";
import { Container, Row, Col } from "react-bootstrap";
import HomeGirl from "../../assets/img/HomePage/HomeGirl.png";
import CoursesBtn from "../../components/Buttons/CoursesBtn";

function HomePageHead() {
  return (
    <Container fluid className="home-head">
      <Row className="container home-head-row">
        <Col lg={6} md={12} className="home-head-left-side">
          <Row className="home-head-left-side-entry-row">
            <Col>
              <section className="home-head-entry">
                <h2>
                  <span className="goldenrod">Proqramlaşdırmanı </span>
                  onlayn olaraq bizdən öyrənin
                </h2>
              </section>
            </Col>
          </Row>

          <Row className="home-head-left-side-btn-row">
            <Col>
              <CoursesBtn />
            </Col>
          </Row>
        </Col>

        <Col lg={6} md={12} style={{margin:'auto'}}>
          <figure>
            <img src={HomeGirl} alt="Home Girl" className="home-head-girl" />
          </figure>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePageHead;
