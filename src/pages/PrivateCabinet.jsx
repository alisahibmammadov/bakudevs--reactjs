import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../assets/styles/PrivateCabinet/PrivateCabinet.scss";


function PrivateCabinet() {
  const [clicked,setClicked] = useState(true)
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
              <button> {clicked ? <span></span> : null} <p><i className="fa-regular fa-user"></i>Profil</p></button>
              <button> {clicked ? <span></span> : null}  <p><i className="fa-solid fa-plus"></i>Abunəlik</p></button>
              <button> {clicked ? <span></span> : null}  <p><i className="fa-solid fa-receipt"></i>Qəbzlər</p></button>
              <button> {clicked ? <span></span> : null}  <p><i className="fa-regular fa-heart"></i>İstək siyahısı</p></button>
              <button> {clicked ? <span></span> : null}  <p><i className="fa-solid fa-arrow-right-from-bracket"></i>Çıxış</p></button>
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
