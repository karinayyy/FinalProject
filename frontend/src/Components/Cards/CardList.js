import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardItem from './Card'
import { Container, Row } from 'react-bootstrap'
import LoadingBox from '../LoadingAnimation'
import MessageBox from '../MessageBox'


export default function CardList(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () =>{
            try{
                setLoading(true) 
                const { data } = await axios.get('/api/products')
                setLoading(false)
                setProducts(data)
            } catch(err) {
                setError(err.message)
                setLoading(false)
            }
        
        }
        fetchData()
    }, [])
    return(
        <>
         {loading ? 
            (<LoadingBox></LoadingBox> ) :
            error ? 
            (<MessageBox>{error}</MessageBox>) : 
            (
            <Container>
                <Row lg={4} md={3} sm={1}>
                    {products.map((product) => (
                        <CardItem key={product._id} product={product} />
                    ))}
                </Row>
            </Container>
         )}  
        </>
    )
} 