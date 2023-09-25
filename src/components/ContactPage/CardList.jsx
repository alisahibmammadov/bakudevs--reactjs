import React from 'react'
import '../../assets/styles/ContactPage/CardList.scss'
import { Container,Row,Col } from 'react-bootstrap'
import Card from './card/Card'

function CardList() {
  return (
    <div style={{display:"flex",gap:'100px'}}><Card/></div>
  )
}

export default CardList