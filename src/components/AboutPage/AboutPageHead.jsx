import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/styles/AboutPage/AboutPageHead.scss";
import Laptop from "../../assets/img/AboutPage/laptopAtAboutPage.jpg";

function AboutPageHead() {
  return (
    <Container className="about-head-container">
      <Row className="about-head-row">
        <Col md={12} lg={6} style={{padding:'0'}}>
          <div className="about-head-left">
            <div className="about-head-left__border">
              <img src={Laptop} alt="Laptop" />
            </div>
          </div>
        </Col>
        <Col md={12} lg={6} style={{padding:'0'}}>
          <div className="about-head-right">
            <h2>BakuDevs haqqında məlumat</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              sed turpis risus molestie auctor vel. Iaculis augue diam tempus
              aliquet eu, pulvinar feugiat. Suscipit non viverra dignissim dolor
              augue morbi. Odio maecenas dolor, hac sodales non donec. Felis,
              non venenatis massa tincidunt massa quis libero in odio. Sapien,
              quis a viverra odio orci. Pretium molestie blandit faucibus eu,
              placerat sagittis, odio duis molestie. Sagittis, pretium, mi,
              faucibus lectus posuere pharetra amet, in.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPageHead;
