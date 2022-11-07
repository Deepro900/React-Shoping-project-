import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart, clearCart, children } = props;
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h3>Order Summary </h3>
            <p>select items:{cart.length}</p>
            <p> Total price:${total} </p>
            <p>Total shipping:${shipping} </p>
            <p>tax :{tax}</p>
            <h2>Grand total:{grandTotal}</h2>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;