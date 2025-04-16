import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} width="100" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
