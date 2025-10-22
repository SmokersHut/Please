import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const filteredProducts = query
    ? PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      )
    : PRODUCTS;

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-brand-primary mb-12">
        {query ? `Results for "${searchParams.get('q')}"` : 'Our Collection'}
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center bg-brand-secondary p-12 rounded-lg">
          <h2 className="text-2xl font-bold text-brand-light mb-4">No Products Found</h2>
          <p className="text-gray-400">
            Your search for "{searchParams.get('q')}" did not match any products.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;