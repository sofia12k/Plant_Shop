import React from 'react';
import Cart from './Cart';
import ProductList from './ProductList';

const sampleProducts = [
  {
    id: 1,
    name: 'Spider Plant',
    price: 12,
    image: '/images/spider-plant.jpg',
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 18,
    image: '/images/peace-lily.jpg',
  },
  {
    id: 3,
    name: 'Snake Plant',
    price: 15,
    image: '/images/snake-plant.jpg',
  },
];

const App = () => {
  return (
    <div>
      <h1>🌱 Plant Shop</h1>
      <ProductList products={sampleProducts} />
      <hr />
      <Cart />
    </div>
  );
};

export default App;
