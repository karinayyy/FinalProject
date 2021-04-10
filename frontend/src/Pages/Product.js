import React from 'react'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import cards from '../Components/Cards/Cards'

export const Product = (props) => {
    const product = cards.products.find(a => a._id === props.match.params.id)
    if (!product) return <div>Product not found</div>
    return(
        <Container>
            <Row>
                <Col>
                    <Image src={product.image} alt={product.name} />
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Text>
                            {product.name}
                            </Card.Text>
                            <Card.Text>
                                Description: {product.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Text>
                            Price: ${product.price}
                            </Card.Text>
                            <Card.Text>
                                Status
                                {product.countInStock > 0 ?
                                        (<Button variant='outline-success' disabled>In Stock</Button>) :
                                        (<Button variant='outline-danger' disabled>Unavailable</Button>)
                                    }
                            </Card.Text>
                            <Card.Link href="#">Add to Cart</Card.Link>
                        </Card.Body>
                    </Card>
                    <Link to='/'><Button variant="outline-info">Go Back</Button></Link>
                </Col>
            </Row>
        </Container>
    )
}