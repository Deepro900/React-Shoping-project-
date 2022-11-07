import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
    const productData = await fetch('products.json');
    const products = await productData.json();

    //get cart
    const savedCart = getStoredCart();
    console.log('savedCart', savedCart);
    const initialCart = [];
    // console.log(products);
    for (const id in savedCart) {
        // console.log(id);
        const addedProduct = products.find(product => product.id === id)

        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
            console.log(id, quantity);
        }
    }
    // console.log(savedCart);
    return { products: products, initialCart: initialCart };

}