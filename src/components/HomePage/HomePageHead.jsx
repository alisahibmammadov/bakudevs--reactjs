import React from "react";
import "../../assets/styles/HomePage/HomePageHead.scss";
import { Container, Row, Col } from "react-bootstrap";
import HomeGirl from "../../assets/img/HomePage/HomeGirl.png";
import CoursesBtn from "../../components/Buttons/CoursesBtn";

function HomePageHead() {
  return (
    <Container fluid className="home-page-head">
      <Row className="container home-page-head-row">
        <Col lg={6} md={12} className="home-page-head-left-side">
          <Row className="home-page-head-left-side-entry-row">
            <Col>
              <section className="home-page-head-entry">
                <h2>
                  <span className="goldenrod">Proqramlaşdırmanı </span>
                  onlayn olaraq bizdən öyrənin
                </h2>
              </section>
            </Col>
          </Row>

          <Row className="home-page-head-left-side-btn-row">
            <Col>
              <CoursesBtn />
            </Col>
          </Row>
        </Col>

        <Col lg={6} md={12}>
          <figure>
            <img src={HomeGirl} alt="Home Girl" className="home-page-head-girl" />
          </figure>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePageHead;
