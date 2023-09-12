import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../../assets/styles/navbar/NavbarMobileMenu.scss'

function NavbarMobileMenu({menu,setMenu}) {
  return (
    <Container className='navbar-mobile-menu'>
        <Row className='xmark-row'>
            <Col>
                <div className='xmark'><i class="fa-solid fa-xmark"></i></div>
            </Col>
        </Row>
        <Row>
            <Col md={6} sm={6}>s</Col>
            <Col md={6} sm={6}>s</Col>
        </Row>
        <Row>
            <Col md={6} sm={6}>s</Col>
            <Col md={6} sm={6}>s</Col>
        </Row>
        <Row>
            <Col md={6} sm={6}>s</Col>
            <Col md={6} sm={6}>s</Col>
        </Row>
    </Container>
  )
}

export default NavbarMobileMenu