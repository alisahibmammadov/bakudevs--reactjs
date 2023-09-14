import React from "react";
import "../../assets/styles/HomePage/HomePage.scss";
import { Container, Row, Col } from "react-bootstrap";
import HomeGirl from "../../assets/img/HomePage/HomeGirl.png";
import CoursesBtn from "../../components/Buttons/CoursesBtn";

function HomePageHead() {
  return (
    <Container fluid className="main-home-page">
      <Row className="container main-home-page-row">
        <Col lg={6} md={12} className="home-left-side">
          <Row className="left-side-entry-row">
            <Col>
              <section className="home-page-entry">
                <h2>
                  <span className="goldenrod">Proqramlaşdırmanı </span>
                  onlayn olaraq bizdən öyrənin
                </h2>
              </section>
            </Col>
          </Row>

          <Row className="left-side-btn-row">
            <Col>
              <CoursesBtn />
            </Col>
          </Row>
        </Col>

        <Col lg={6} md={12}>
          <figure>
            <img src={HomeGirl} alt="Home Girl" className="home-girl" />
          </figure>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePageHead;
