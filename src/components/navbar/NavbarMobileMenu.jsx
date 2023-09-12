import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/styles/navbar/NavbarMobileMenu.scss";

function NavbarMobileMenu({ menu, setMenu }) {
    const [position,setPosition] = useState(false)
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
          <h2 onClick={()=>setPosition(!position)}>Frontend</h2>
        </Col>
        {
            position === true ? ( <Col sm={6}>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>React.JS</li>
            </ul>
          </Col>) : null
        }
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
