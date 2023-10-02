import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../assets/styles/PrivateCabinet/PrivateCabinet.scss";


function PrivateCabinet() {
  return (
    <Container fluid className="private-cabinet-container">
      <main className='container'>

      <Row>
        <Col lg={4}>
          <div className="private-cabinet-links-boxes">
            <header>
              <h6>Şəxsi kabinet</h6>
            </header>
            <div className='btn-boxes'>
              <Button><i className="fa-regular fa-user"></i>Profil</Button>
              <Button><i className="fa-solid fa-plus"></i>Abunəlik</Button>
              <Button><i className="fa-solid fa-receipt"></i>Qəbzlər</Button>
              <Button><i className="fa-regular fa-heart"></i>İstək siyahısı</Button>
              <Button><i className="fa-solid fa-arrow-right-from-bracket"></i>Çıxış</Button>
            </div>
          </div>
        </Col>
        <Col lg={8}>
          <div className="private-cabinet-links-boxes"></div>
        </Col>
      </Row>
      </main>
    </Container>
  );
}

export default PrivateCabinet;
