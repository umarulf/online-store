import React from 'react';

// represents a shopping cart interface


// cart prop is an array of items in shopping cart, onRemoveFromCart function called when you clicking "Remove" button for an item.
function ShoppingCart({ cart, onRemoveFromCart }) {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>

      {/* map to iterate over cart array and render list item for each item in cart. Each item with its name price,"Remove" buttonprovided. */}
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
