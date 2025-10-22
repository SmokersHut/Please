import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-brand-secondary rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
      <img className="w-full h-56 object-cover" src={product.imageUrl} alt={product.name} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-brand-light mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-2xl font-bold text-brand-primary">${product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            disabled={added}
            className={`px-4 py-2 rounded-md font-semibold text-sm transition-colors duration-300 flex items-center justify-center ${
              added
                ? 'bg-green-600 text-white cursor-not-allowed'
                : 'bg-brand-primary text-white hover:bg-opacity-80'
            }`}
          >
            {added ? <><CheckIcon /> Added</> : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;