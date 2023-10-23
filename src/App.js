// src/App.js

import React, { useState } from 'react';
import './App.css';
import products from './products';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    // Check if the product is already in the cart by searching for its id in the cart array.
    const isProductInCart = cart.some((item) => item.id === product.id);
  
    if (!isProductInCart) {
      //  adds the product to the cart state
      setCart([...cart, product]);
    } else {
      // display alert product is already in the cart
      alert("the product is already in the cart!");
    }
  };

  const handleRemoveFromCart = (product) => {

  // filters the cart array to remove the product with a matching id
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Online Store</h1>
      {/* passes in the products data and the function to handle product selection */}
      <ProductList products={products} onProductSelect={handleProductSelect} />
     {/* if a selectedProduct is set. allows the user to add to cart and view details . */}
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onAddToCart={handleAddToCart} />
      )}
      {/* displays the contents of the shopping cart and allows the user to remove items */}
      <ShoppingCart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default App;
