import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import CoursesPositionBtn from '../Buttons/CoursesPositionBtn'

function HomeCoursesPage() {
  return (
    <Container>
        <Row>
            <Col style={{background:'red'}}><h3>Populyar Kurslar</h3></Col>
            <Col ><CoursesPositionBtn/></Col>
        </Row>
        <Row></Row>
        <Row></Row>
    </Container>
  )
}

export default HomeCoursesPage