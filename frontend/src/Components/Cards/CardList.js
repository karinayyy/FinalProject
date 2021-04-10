import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardItem from './Card'
import { Container, Row } from 'react-bootstrap'

export default function CardList(){
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () =>{
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        fetchData()
    }, [])
    return(
        <Container >
            <Row lg={4} md={3} sm={1}>
                {products.map((product) => (
                    <CardItem key={product._id} product={product} />
                ))}
            </Row>
        </Container>
    )
} 