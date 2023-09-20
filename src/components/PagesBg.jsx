import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/PagesBg.scss";
import { Link } from "react-router-dom";

function PagesBg({ pages }) {
  console.log(pages);
  return (
    <main className="main-pages-bg">
      <section>
        <Container className="pages-bg-container">
          <Row>
            <Col>
              <div className="pages-bg-head">
                {pages === "courses" ? (
                  <h2>Kurslar</h2>
                ) : pages === "course" ? (
                  <h2>Android Program Development</h2>
                ) : pages === "about" ? (
                  <h2>Haqqımızda</h2>
                ) : pages === "contact" ? (
                  <h2>Əlaqə</h2>
                ) : null}
              </div>
            </Col>
          </Row>
          <Row >
            <Col >
              <div className="pages-bg-links">
                <Link to="/" className="pages-bg-home">Əsas səhifə</Link>
                <ul>
                  <li>
                    <Link className="pages-bg-link" to="/courses">Kurslar</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default PagesBg;
