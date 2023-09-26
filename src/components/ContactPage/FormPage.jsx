import React from 'react'
import '../../assets/styles/ContactPage/FormPage.scss'
import { Container,Row,Col } from 'react-bootstrap'
import CommonBtn from '../Common/Button/CommonBtn'


function FormPage() {
  return (
    <Container style={{display:"flex",alignItems:"center"}}>
        <Row>
            <div className='formPage-head'>
                
            </div>
        </Row>
        <Row></Row>
        <Row>
            <CommonBtn work='send'/>
        </Row>
    </Container>
  )
}

export default FormPage