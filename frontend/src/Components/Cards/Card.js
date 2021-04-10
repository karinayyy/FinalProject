import React from 'react'
import  { Card, Button, Col }  from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function CardItem(props){
    const { product } = props
    return(
        <Col>
            <Card style={{ width: '18rem'}} key={product._id}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                    <Link to={`/product/${product._id}`}><Button variant="outline-info"> Go somewhere</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    )
}