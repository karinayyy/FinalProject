import React, { useEffect } from 'react'
import CardItem from './Card'
import { Container, Row } from 'react-bootstrap'
import LoadingBox from '../LoadingAnimation'
import MessageBox from '../MessageBox'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../redux/actions/productActions'


export default function CardList(props){
    const dispatch = useDispatch()
    const productList = useSelector( (state) => state.productList )
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
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