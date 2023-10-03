import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../assets/styles/PrivateCabinet/PrivateCabinet.scss";
import Profile from "./parts/Profile";
import Subscription from "./parts/Subscription";
import Receipts from "./parts/Receipts";
import WishList from "./parts/WishList";
import Output from "./parts/Output";

function PrivateCabinet() {
  const [clicked, setClicked] = useState(null);
  const handleClick = (item) => {
    setClicked(item);
  };
  return (
    <Container fluid className="private-cabinet-container">
      <main className="container">
        <Row>
          <Col lg={4}>
            <div className="private-cabinet-links-boxes">
              <header>
                <h6>Şəxsi kabinet</h6>
              </header>
              <div className="btn-boxes">
                <button onClick={() => handleClick("profil")}>
                  {" "}
                  {clicked === "profil" ? <span></span> : null}{" "}
                  <p className={clicked === "profil" ? "active" : null}>
                    <i className="fa-regular fa-user"></i>Profil
                  </p>
                </button>
                <button onClick={() => handleClick("abune")}>
                  {" "}
                  {clicked === "abune" ? <span></span> : null}{" "}
                  <p className={clicked === "abune" ? "active" : null}>
                    <i className="fa-solid fa-plus"></i>Abunəlik
                  </p>
                </button>
                <button onClick={() => handleClick("qebz")}>
                  {" "}
                  {clicked === "qebz" ? <span></span> : null}{" "}
                  <p className={clicked === "qebz" ? "active" : null}>
                    <i className="fa-solid fa-receipt"></i>Qəbzlər
                  </p>
                </button>
                <button onClick={() => handleClick("istek")}>
                  {" "}
                  {clicked === "istek" ? <span></span> : null}{" "}
                  <p className={clicked === "istek" ? "active" : null}>
                    <i className="fa-regular fa-heart"></i>İstək siyahısı
                  </p>
                </button>
                <button onClick={() => handleClick("cixis")}>
                  {" "}
                  {clicked === "cixis" ? <span></span> : null}{" "}
                  <p className={clicked === "cixis" ? "active" : null}>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    Çıxış
                  </p>
                </button>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="private-cabinet-links-boxes">
              {clicked === "profil" ? (
                <Profile />
              ) : clicked === "abune" ? (
                <Subscription />
              ) : clicked === "qebz" ? (
                <Receipts />
              ) : clicked === "istek" ? (
                <WishList />
              ) : clicked === "cixis" ? (
                <Output />
              ) : null}
            </div>
          </Col>
        </Row>
      </main>
    </Container>
  );
}

export default PrivateCabinet;
