import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MessageBox from '../Components/MessageBox'
import { addToCart, removeFromCart } from '../redux/actions/cartActions'

export const Cart = (props) => {
    const productId = props.match.params.id
    const quantity = props.location.search ? Number(props.location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, quantity))
        }
    }, [dispatch, productId, quantity])
    const removeFromCartHandler = (id) => {
        //delete action
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping')
    }
    return( 
        <Container>
                    <h3>Shopping Cart</h3>
            <Row>
                <Col>
                    {cartItems.length === 0 
                    ? <MessageBox> 
                        Cart is empty. <Link to="/">Go Shopping</Link>
                    </MessageBox>
                    : (
                        <Row style={{'display':'flex','flexDirection':'row'}}>
                            {
                                cartItems.map((item) => (
                                    <Row key={item.product}>
                                        <Col>
                                            <Image style={{'width':'50%'}} src={item.image} alt={item.name}  />
                                        </Col>
                                        <Col>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col>
                                            <select value={item.quantity} 
                                                    onChange={e => dispatch(addToCart(item.product, Number(e.target.value))
                                                    )} >
                                                {
                                                    [...Array(item.countInStock).keys()].map( x => (
                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                    ))
                                                }
                                            </select>
                                            ${item.price}
                                        </Col>
                                        <Col>
                                            <Button variant="outline-secondary" onClick={() => removeFromCartHandler(item.product)} >Delete</Button>
                                        </Col>
                                    </Row>
                                ))
                            }
                        </Row>
                    )
                    }
                    <Row>
                        <Col>
                            Subtotal ({cartItems.reduce((a,c) => a + c.quantity, 0)} items) : 
                            ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                            
                            <Button variant="info" onClick={checkoutHandler} disabled={cartItems.length === 0}>
                                Proceed to Checkout
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}