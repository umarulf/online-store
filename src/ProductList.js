import React from 'react';
import "./ProductList.css";

// display a list of products, allows user to select a product for viewing details.
const ProductList = ({ products, onProductSelect }) => {
  return (

    // maps over the products array, rendering elements of each product.
    <div className="product-list">

      {products.map((product) => (

       // key for React to efficiently update UI when the list of products changes.
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} className="product-image"/>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          {/* button that passes product , allowing to show product details. */}
          <button onClick={() => onProductSelect(product)}>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
