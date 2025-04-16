import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, decrementItem } from './CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addItem(item));
  };

  const handleDecrement = () => {
    dispatch(decrementItem(item.id));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} style={{ width: '100px' }} />
      <div>
        <h2>{item.name}</h2>
        <p>${item.price}</p>
        <div>
          <button onClick={handleDecrement}>-</button>
          <span> {item.quantity} </span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p>Total: ${item.price * item.quantity}</p>
        <button onClick={handleRemove} style={{ backgroundColor: 'red', color: 'white' }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
