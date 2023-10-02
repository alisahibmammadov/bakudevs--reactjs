import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../assets/styles/404/Page404.scss";
import NotFound from "../assets/img/404.png";
import { Link } from "react-router-dom";


function Page404() {
  return (
    <Container className="notFound-container">
      <h2>Səhifə Tapılmadı</h2>
      <div className="notFund-img-btn">
        <img src={NotFound} alt="NotFound" />
        <Button className="backHome">
          <Link style={{textDecoration:'none',color:'#008d96'}} to='/'><i className="fa-solid fa-chevron-left"></i> Əsas səhifəyə qayıt</Link>
        </Button>
      </div>
    </Container>
  );
}

export default Page404;
