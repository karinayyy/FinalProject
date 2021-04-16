import React, { useEffect, useState } from 'react'
import  { Card, Button, Col }  from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function CardItem(props){
    const {product} = props
    return(
            <Col>
                <Card  key={product._id}>
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
                        <Link to={`/product/${product._id}`}><Button variant="outline-info" style={{float: 'right'}}>View more</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
    )
}