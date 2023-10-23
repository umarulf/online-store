import React from 'react';


// displays details about a product and allows you to add the product to a cart
function ProductDetails({ product, onAddToCart }) {
  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <h3>{product.name} (black)</h3>
      <h4>256gb </h4>
      <p>${product.price}</p>
      <p>{product.description}</p>
      {/* button that allows you to add the product to a cart */}
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
