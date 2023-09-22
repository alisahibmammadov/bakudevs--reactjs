import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import HomeAdvertisingPage from '../components/HomePage/HomeAdvertisingPage'
import PagesBg from '../components/PagesBg'


function AboutPage() {
  return (
    <Container fluid style={{ padding: "100px 0 0" }}>
    <PagesBg pages='about'/>
        <HomeAdvertisingPage/>
    </Container>
  )
}

export default AboutPage