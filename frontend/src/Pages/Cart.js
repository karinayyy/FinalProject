import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'

export const Cart = (props) => {
    const productId = props.match.params.id
    const quantity = props.location.search ? Number(props.location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, quantity))
        }
    }, [dispatch, productId, quantity])
    return( 
        <>
            <h1>Cart</h1>
            <p>ADD TO CART : ProductID: {productId} qty: {quantity}</p>
        </>
    )
}