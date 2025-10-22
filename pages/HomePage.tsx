
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import AgeVerificationModal from '../components/AgeVerificationModal';

const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Check session storage to see if age has already been verified
    const hasVerified = sessionStorage.getItem('ageVerified') === 'true';
    if (hasVerified) {
      setIsVerified(true);
    }
  }, []);

  const handleVerification = () => {
    sessionStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
  };

  return (
    <>
      {!isVerified && <AgeVerificationModal onVerified={handleVerification} />}
      <div className={`space-y-16 ${!isVerified ? 'blur-md pointer-events-none' : 'transition-all duration-500'}`}>
        {/* Hero Section */}
        <div className="text-center bg-brand-secondary rounded-lg p-12 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-4 tracking-tight">
            Premium Smoking Essentials
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
            Discover a curated collection of high-quality pipes, vaporizers, and accessories for the discerning enthusiast.
          </p>
          <Link
            to="/products"
            className="inline-block bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-transform transform hover:scale-105 duration-300"
          >
            Shop All Products
          </Link>
        </div>

        {/* Featured Products Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-brand-light mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
