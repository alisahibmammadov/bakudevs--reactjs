import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/styles/navbar/NavbarMobileMenu.scss";
import SignupBtn from "../Buttons/SignupBtn";
import LoginBtn from "../Buttons/LoginBtn";



function NavbarMobileMenu({ menu, setMenu }) {
  const [frontend, setFrontend] = useState(false);
  const [backend, setBackend] = useState(false);
  const [uiux, setUiux] = useState(false);
  return (
    <Container className="navbar-mobile-menu">
      <Row className="xmark-row">
        <Col sm={12} md={12}>
          <div className="xmark" onClick={() => setMenu(false)}>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </Col>
      </Row>

      <Container fluid>
        <Row className="frontend-row">
          <Col sm={6}>
            <h2 onClick={() => setFrontend(!frontend)}>Frontend</h2>
          </Col>
          {frontend === true ? (
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
          ) : null}
        </Row>

        <Row className="backend-row">
          <Col md={6} sm={6}>
            <h2 onClick={() => setBackend(!backend)}>Backend</h2>
          </Col>
          {backend === true ? (
            <Col md={6} sm={6}>
              <ul>
                <li>Php</li>
                <li>Java</li>
                <li>Python</li>
                <li>C#</li>
              </ul>
            </Col>
          ) : null}
        </Row>
        <Row className="uiux-row">
          <Col md={6} sm={6}>
            <h2 onClick={() => setUiux(!uiux)}>UI/UX</h2>
          </Col>
          {uiux === true ? (
            <Col md={6} sm={6}>
              <ul>
                <li>Figma</li>
                <li>Xd</li>
                <li>Photshop</li>
              </ul>
            </Col>
          ) : null}
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <div><i class="fa-regular fa-heart"></i> İstək siyahısı <SignupBtn/> <LoginBtn/></div>
          </Col>
        </Row>
        <Row></Row>
        <Row></Row>
      </Container>
    </Container>
  );
}

export default NavbarMobileMenu;
