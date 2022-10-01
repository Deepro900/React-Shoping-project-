import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        console.log(products);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                <h3> This is for products :{products.length}</h3>

            </div>
            <div className="cart-container">
                <h4>Order Summary </h4>
                <p>Selected item:{cart.length}</p>

            </div>
        </div>
    );
};

export default Shop;