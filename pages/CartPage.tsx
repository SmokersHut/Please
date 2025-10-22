
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
    </svg>
);


const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center bg-brand-secondary p-12 rounded-lg">
        <h1 className="text-3xl font-bold text-brand-light mb-4">Your Cart is Empty</h1>
        <p className="text-gray-400 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link
          to="/products"
          className="inline-block bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-transform transform hover:scale-105 duration-300"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-secondary shadow-2xl rounded-lg p-8">
      <h1 className="text-3xl font-extrabold text-brand-primary mb-8 border-b border-brand-secondary pb-4">Your Shopping Cart</h1>
      <div className="space-y-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-brand-dark rounded-lg">
            <div className="flex items-center space-x-4">
              <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div>
                <h2 className="text-lg font-semibold text-brand-light">{item.name}</h2>
                <p className="text-gray-400">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-600 rounded">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-lg text-gray-300 hover:bg-gray-700">-</button>
                <span className="px-4 py-1 text-brand-light">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-lg text-gray-300 hover:bg-gray-700">+</button>
              </div>
              <p className="text-lg font-semibold text-brand-light w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500 transition-colors">
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-6 border-t border-gray-700 flex justify-between items-center">
        <div>
            <Link to="/products" className="text-brand-primary hover:underline">
                &larr; Continue Shopping
            </Link>
        </div>
        <div className="text-right">
          <p className="text-xl text-gray-300">
            Subtotal: <span className="text-3xl font-bold text-brand-primary ml-2">${cartTotal.toFixed(2)}</span>
          </p>
          <button className="mt-4 w-full bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-transform transform hover:scale-105 duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
