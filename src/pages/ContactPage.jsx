import React from 'react'
import { Container } from 'react-bootstrap'
import PagesBg from '../components/PagesBg'
import CardList from '../components/ContactPage/CardList'
import FormPage from '../components/ContactPage/FormPage'


function ContactPage() {
  return (
    <Container fluid style={{ padding: "100px 0 0" }}>
        <PagesBg pages="contact"/>
        <CardList/>
        <FormPage/>
    </Container>
  )
}

export default ContactPage