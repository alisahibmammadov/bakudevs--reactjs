import React from 'react'
import '../../assets/styles/ContactPage/CardList.scss'
import { Container } from 'react-bootstrap'
import Card from './card/Card'

function CardList() {
  return (
    <Container className='cardList-container'><Card/></Container>
  )
}

export default CardList