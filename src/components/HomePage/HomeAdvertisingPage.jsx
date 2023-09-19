import React from "react";
import AdvertisingBoy from "../../assets/img/HomePage/HomeAdvertisingBoy.png";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/styles/HomePage/HomeAdvertisingPage.scss";

function HomeAdvertisingPage() {
  return (
    <main className="main-advertising">
      <Container className="advertising-container">
        <Row className="advertising-head-row">
          <Col>
            <div className="advertising-head">
              <h2>BakuDevs ilə istədiyiniz biliklərə sahib olun!</h2>
              <p>
                Nə üçün tədrisinizi məhz bizdə keçməlisiniz? Bunun üçün ən azı
                dörd səbəb var:
              </p>
            </div>
          </Col>
        </Row>
        <Row className="advertising-cards-row">
          <Col lg={6} md={12} xs={12} >
            <div className="advertising-cards-box">
              <div className="advertising-card">
                <i class="fa-solid fa-money-bill"></i>
                <h3>Sərfəli qiymət</h3>
                <p>
                  Ayda cəmi 10 AZN ödəniş etməklə saytdımızdaki bütün kurslar
                  sizin üçün tam açıq olacaq!
                </p>
              </div>
              <div className="advertising-card">
                <i class="fa-solid fa-money-bill"></i>
                <h3>Sərfəli qiymət</h3>
                <p>
                  Ayda cəmi 10 AZN ödəniş etməklə saytdımızdaki bütün kurslar
                  sizin üçün tam açıq olacaq!
                </p>
              </div>
              <div className="advertising-card">
                <i class="fa-solid fa-money-bill"></i>
                <h3>Sərfəli qiymət</h3>
                <p>
                  Ayda cəmi 10 AZN ödəniş etməklə saytdımızdaki bütün kurslar
                  sizin üçün tam açıq olacaq!
                </p>
              </div>
              <div className="advertising-card">
                <i class="fa-solid fa-money-bill"></i>
                <h3>Sərfəli qiymət</h3>
                <p>
                  Ayda cəmi 10 AZN ödəniş etməklə saytdımızdaki bütün kurslar
                  sizin üçün tam açıq olacaq!
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} xs={12} >
            <div className="advertising-img">
              <img src={AdvertisingBoy} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default HomeAdvertisingPage;
