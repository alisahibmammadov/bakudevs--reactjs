import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/PagesBg.scss";
import { Link } from "react-router-dom";
function PagesBg({ pages }) {
  const data = ["Kurslar", "Haqqımızda", "Əlaqə"];
  let dataLar =  data.filter(item=>item === pages)
  console.log(dataLar);
  return (
    <main className="main-pages-bg">
      <section style={pages === "Kurs" ? { padding: "49px 0" } : {}}>
        <Container className="pages-bg-container">
          <Row>
            <Col>
              <div className="pages-bg-head">
                {pages === "Kurslar" ? (
                  <h2>Kurslar</h2>
                ) : pages === "Kurs" ? (
                  <h2>Android Program Development</h2>
                ) : pages === "Haqqımızda" ? (
                  <h2>Haqqımızda</h2>
                ) : pages === "Əlaqə" ? (
                  <h2>Əlaqə</h2>
                ) : null}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
            {
              data.filter(item => item === pages).map(item=>(
                <div className="pages-bg-links">
                  <Link to="/" className="pages-bg-home">
                    Əsas səhifə
                  </Link>
                  <ul>
                    <li>
                      <Link className="pages-bg-link" to={`/${item.toLowerCase()}`}>
                        {item}
                      </Link>
                    </li>
                  </ul>
                </div>
              ))
            }
              {/* {pages === "courses" ? (
                <div className="pages-bg-links">
                  <Link to="/" className="pages-bg-home">
                    Əsas səhifə
                  </Link>
                  <ul>
                    <li>
                      <Link className="pages-bg-link" to="/courses">
                        {dataLar}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : pages === "course" ? null : pages === "about" ? (
                <div className="pages-bg-links">
                  <Link to="/" className="pages-bg-home">
                    Əsas səhifə
                  </Link>
                  <ul>
                    <li>
                      <Link className="pages-bg-link" to="/about">
                        Haqqımızda
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : pages === "contact" ? (
                <div className="pages-bg-links">
                  <Link to="/" className="pages-bg-home">
                    Əsas səhifə
                  </Link>
                  <ul>
                    <li>
                      <Link className="pages-bg-link" to="/about">
                        Əlaqə
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : null} */}
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default PagesBg;
