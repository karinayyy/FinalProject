import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, 
        Row, 
        Col, 
        Image, 
        Card, 
        Button } from 'react-bootstrap'
import LoadingBox from '../Components/LoadingAnimation'
import MessageBox from '../Components/MessageBox'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../redux/actions/productActions'

export const Product = (props) => {
    const dispatch = useDispatch()
    const productId = props.match.params.id
    const productDetails = useSelector( (state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect( () => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])

    return(
        <>
         {loading ? 
            (<LoadingBox></LoadingBox> ) :
            error ? 
            (<MessageBox>{error}</MessageBox>) : 
            (
            <Container>
                <Row>
                    <Col>
                        <Image src={product.image} alt={product.name} />
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }} key={product._id}>
                            <Card.Body style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                <Card.Text>
                                {product.name}
                                </Card.Text>
                                <Card.Text>
                                    Description: {product.description}
                                </Card.Text>
                                <Card.Text style={{textAlign:'justify'}}>
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
         )}  
        </>
    )
}