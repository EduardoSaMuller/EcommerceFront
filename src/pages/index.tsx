import React from 'react';
import ProductCard from '../components/molecules/ProductCard';
import  keyboard  from '../data/keyboard';
import { Mouse } from '../data/mouse';

const Home: React.FC = () => {
  const handleAddToCart = () => {
     console.log('Product added to cart');
  };

  return (
    <div>
      <h1>Teste meu Ecommerce</h1>
      <ProductCard product={keyboard} addToCart={handleAddToCart} />
      {/* <ProductCard product={Mouse} addToCart={handleAddToCart}  /> */}
    </div>
  );
};

export default Home;