import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Total Cart Amount: ${totalAmount}</h1>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
