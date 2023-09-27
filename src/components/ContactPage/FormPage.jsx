import React from "react";
import "../../assets/styles/ContactPage/FormPage.scss";
import { Container, Row, Col } from "react-bootstrap";
import CommonBtn from "../Common/Button/CommonBtn";

function FormPage() {
  return (
    <Container
      fluid
      style={{ display: "flex", alignItems: "center" }}
      className="contact-form-page-container"
    >
      <Row style={{maxWidth:"100%"} }>
        <div className="formPage-head">
          <h3>Suallarınız var?</h3>
          <p>Formu doldurun. Yaxın zamanda sizinlə əlaqə saxlayacayıq.</p>
        </div>
      </Row>
        <Row style={{maxWidth:"100%"} } className="form-boxes-row">
          <Col sm={12} md={6}>
            <div className="form-input-box">
              <input type="text"  placeholder="Adınız və Soyadınız" name="nameSurname"/>
              <input type="email" placeholder="Email ünvanı"  name="email"/>
              <input type="tel"   placeholder="Əlaqə nömrəsi" name="tel"/>
            </div>
          </Col>
          <Col md={6}>
            <div className="form-textarea-box">
              <textarea name="message" placeholder="Mesajınız" id="" cols="30" rows="10"></textarea>
            </div>
          </Col>
        </Row>
      <Row>
        <CommonBtn work="send" />
      </Row>
    </Container>
  );
}

export default FormPage;
