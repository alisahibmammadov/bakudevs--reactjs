import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/styles/navbar/NavbarMobileMenu.scss";

function NavbarMobileMenu({ menu, setMenu }) {
  return (
    <Container className="navbar-mobile-menu">

      <Row className="xmark-row">
        <Col sm={12} md={12}>
          <div className="xmark" onClick={() => setMenu(false)}>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </Col>
      </Row>

      <Row className="frontend-row">
        <Col sm={6}>
          <h2>Frontend</h2>
        </Col>
        <Col sm={6}>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>React.JS</li>
          </ul>
        </Col>
      </Row>
      <Row className="backend-row">
        <Col md={6} sm={6}>
          s
        </Col>
        <Col md={6} sm={6}>
          s
        </Col>
      </Row>
      <Row className="uiux-row">
        <Col md={6} sm={6}>
          s
        </Col>
        <Col md={6} sm={6}>
          s
        </Col>
      </Row>
    </Container>
  );
}

export default NavbarMobileMenu;
