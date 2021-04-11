import React, { useEffect, useState } from 'react'
import  { Card, Button, Col }  from 'react-bootstrap';
import {Link} from 'react-router-dom';
import LoadingBox from '../LoadingAnimation'
import MessageBox from '../MessageBox'
import axios from 'axios'


export default function CardItem(props){
    const { product } = props
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
            <Col>
                <Card style={{ width: '18rem',
                                height: '30rem'}} key={product._id}>
                    <Card.Img variant="top" src={product.image} rounded/>
                    <Card.Body style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                                }}>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                        {product.description}
                        </Card.Text>
                        <Link to={`/product/${product._id}`}><Button variant="outline-info" style={{float: 'right'}}> Go somewhere</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        )}
    </>
    )
}