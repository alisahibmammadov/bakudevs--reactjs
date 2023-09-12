import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../../assets/styles/navbar/NavbarMobileMenu.scss'

function NavbarMobileMenu() {
  return (
    <Container fluid className='nav'>
        <Row>
            <Col md={12}>
                <div className='xmark'>X</div>
            </Col>
        </Row>
        <Row>
            <Col md={6} sm={6}>s</Col>
            <Col md={6} sm={6}>s</Col>
        </Row>
    </Container>
  )
}

export default NavbarMobileMenu