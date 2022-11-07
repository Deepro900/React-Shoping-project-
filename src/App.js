
// import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Inventory from './Component/Inventory/Inventory';
import Main from './Component/Layout/Main';
import Orders from './Component/Orders/Orders';

import Product from './Component/Product/Product';
import Shop from './Component/Shop/Shop';
import { productAndCartLoader } from './Loaders/ProductAndCartLoader';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    },

  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

// function Item(props) {
//   const [count, setCount] = useState([]);
//   // useEffect(() => {
//   //   fetch('https://restcountries.com/v3.1/all')
//   //     .then(res => res.json())
//   //     .then(data => setCount(data))
//   // }, [])
//   return (
//     <div>
//       <h1>Count:{count}</h1>

//       <h3>name:{props.name}</h3>
//       <p>price:{props.price}</p>
//     </div>
//   )
// }
export default App;
