import React from "react";
import { Container } from "react-bootstrap";
import HomeAdvertisingPage from "../components/HomePage/HomeAdvertisingPage";
import PagesBg from "../components/PagesBg";
import AboutPageHead from "../components/AboutPage/AboutPageHead";

function AboutPage() {
  return (
    <Container  fluid style={{ padding: "100px 0 0" }}>
      <PagesBg pages="about" />
      <AboutPageHead/>
      <HomeAdvertisingPage />
    </Container>
  );
}

export default AboutPage;
