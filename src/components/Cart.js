
import React, { useContext } from 'react';
import { CartContext } from './CartContext';   // Import CartContext
import CartItems from './CartItems';           // Import CartItems component
import './cart.css';

export default function Cart() {
  const { cartItems } = useContext(CartContext);  // Access cartItems from context

  return (
    <div className="cart">
      <div className="cart-items">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <CartItems
            key={item.id}  // Provide unique id to each cart item
                            id={item.id}
                            image={item.image}
                            description={item.description}
            />
          ))
        )}
      </div>
    </div>
  );
}
