import React from 'react'
import { Container } from 'react-bootstrap'
import PagesBg from '../components/PagesBg'
import CardList from '../components/ContactPage/CardList'


function ContactPage() {
  return (
    <Container fluid style={{ padding: "100px 0 0" }}>
        <PagesBg pages="contact"/>
        <CardList/>
    </Container>
  )
}

export default ContactPage