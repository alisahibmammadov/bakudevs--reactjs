import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../assets/styles/PrivateCabinet/PrivateCabinet.scss'


function PrivateCabinet() {
  return (
    <Container className='private-cabinet-container'>
        <Row>
          <Col lg={4}>
            <div className=''></div>
          </Col>
          <Col lg={8}></Col>
        </Row>
    </Container>
  )
}

export default PrivateCabinet