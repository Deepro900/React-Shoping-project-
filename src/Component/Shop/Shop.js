import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useState([]);
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        console.log('loacl storeage first line ');
        const storedCart = getStoredCart();
        const savedCart = [];

        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        // console.log('local storage finished');
    }, [products])


    const handleAddToCart = (product) => {
        console.log(products);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
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

                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;