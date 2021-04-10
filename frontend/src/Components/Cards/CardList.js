import React from 'react'
import CardItem from './Card'
import cards from './Cards'
import { Container, Row } from 'react-bootstrap'

export default function CardList(){
    return(
        <Container >
            <Row lg={4} md={3} sm={1}>
                {cards.products.map((product) => (
                    <CardItem key={product._id} product={product} />
                ))}
            </Row>
        </Container>
    )
} 