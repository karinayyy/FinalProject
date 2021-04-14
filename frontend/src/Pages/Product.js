import React, { useEffect, useState } from 'react'
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
    const [quantity, setQuantity] = useState(1)
    const productDetails = useSelector( (state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect( () => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?quantity=${quantity}`)
    }

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
                                    {
                                        product.countInStock > 0 ?
                                            (<Button variant='outline-success' disabled>In Stock</Button>) :
                                            (<Button variant='outline-danger' disabled>Unavailable</Button>)
                                    }
                                </Card.Text>
                                {
                                    product.countInStock > 0 && (
                                        <>
                                            <Card.Text>Quantity</Card.Text>
                                            <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                                                {
                                                    [...Array(product.countInStock).keys()].map( x => (
                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                    ))
                                                }
                                            </select>
                                            <Button onClick={addToCartHandler} variant="warning">Add to Cart</Button>
                                        </>
                                    )
                                }
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