import React from "react";
import "../../assets/styles/footer/Footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import WebLogo from "../../assets/img/footer/webLogo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <main className="main-footer">
      <Container className="footer-container">
        <Row className="footer-row">
          <Col sm={12} md={3}>
            <div className="footer-head">
              <Link to="/">
                <img src={WebLogo} alt="Web Logo" />
              </Link>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <ul>
              <li>Frontend</li>
              <li>Backend</li>
              <li>UI/UX</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul>
              <Link className="router-link">
                <li>Əsas səhifə</li>
              </Link>
              <Link className="router-link">
                <li>Kurslar</li>
              </Link>
              <Link className="router-link">
                <li>Haqqımızda</li>
              </Link>
              <Link className="router-link">
                <li>Əlaqə</li>
              </Link>
            </ul>
          </Col>
          <Col md={3}>
            <div className="form-box">
              <h4>
                Yeniliklərdən xəbərdar olmaq üçün
                <h3>Qeydiyyatdan keçin.</h3>
              </h4>
              <form>
                <input type="text" placeholder="Email" />
                <button>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </Col>
        </Row>
        <Row>
          <div
            style={{
              borderTop: "1px solid #E5E5E5",
              display: "flex",
              padding: "20px  0",
            }}
          >
            <Col md={4} className="footer-copyright">
              <p>© 2022 BakuDevs.net. Bütün hüquqlar qorunur</p>
            </Col>
            <Col md={8} xs={6} className="footer-jedai">
              <h3>Site by JEDAİ</h3>
            </Col>
          </div>
        </Row>
      </Container>
    </main>
  );
}

export default Footer;
