import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/PagesBg.scss";
import { Link } from "react-router-dom";

function PagesBg({ pages }) {
  const sitePages = [
    { props: "courses", link: "Kurslar", head: "Kurslar" },
    { props: "course", link: null, head: "Android Program Development" },
    { props: "about", link: "Haqqımızda", head: "Haqqımızda" },
    { props: "contact", link: "Əlaqə", head: "Əlaqə" },
  ];

  return (
    <main className="main-pages-bg">
      <section style={pages === "course" ? { padding: "49px 0" } : {}}>
        <Container className="pages-bg-container">
          <Row>
            <Col>
              <div className="pages-bg-head">
                {sitePages
                  .filter((item) => item.props === pages)
                  .map((item) => (
                    <h2>{item.head}</h2>
                  ))}
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              {sitePages
                .filter((item) => item.props === pages)
                .map(
                  (item) =>
                    item.props !== "course" && (
                      <div className="pages-bg-links">
                        {item.props !== "course" ? (
                          <Link to="/" className="pages-bg-home">
                            Əsas səhifə
                          </Link>
                        ) : null}
                        <ul>
                          <li>
                            
                              {item.link}
                          </li>
                        </ul>
                      </div>
                    )
                )}
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default PagesBg;
