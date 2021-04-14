import React from 'react'

export const Cart = (props) => {
    const productId = props.match.params.id
    const quantity = props.location.search ? Number(props.location.search.split('=')[1]) : 1
    return( 
        <>
            <h1>Cart screen</h1>
            <p>ADD TO CART : ProductID: {productId} qty: {quantity}</p>
        </>
    )
}