import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useCart();

  // Close mobile menu & search on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileSearchOpen(false);
  }, [location]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMobileSearchOpen(false); // Close mobile search after searching
    }
  };

  const CartIcon = () => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>
  );

  const SearchIcon = ({ className = "h-6 w-6" }) => (
     <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  );

  const MenuIcon = () => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  );

  const CloseIcon = () => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );


  return (
    <header className="bg-brand-secondary shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold text-brand-primary hover:text-opacity-80 transition-colors">
                Smokers Hut
                </Link>
            </div>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-300 hover:bg-brand-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/products" className="text-gray-300 hover:bg-brand-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</Link>
                </div>
            </div>
          </div>
        
          <div className="flex items-center">
             {/* Desktop Search */}
            <form onSubmit={handleSearch} className="relative hidden md:block mr-4">
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-brand-dark w-64 text-white placeholder-gray-500 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <button type="submit" className="absolute right-0 top-0 mt-2.5 mr-3 text-gray-400">
                <SearchIcon className="h-5 w-5" />
              </button>
            </form>

            <Link to="/cart" className="relative p-2 text-gray-400 hover:text-white">
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile buttons */}
            <div className="md:hidden flex items-center ml-2">
                <button onClick={() => setIsMobileSearchOpen(true)} className="p-2 text-gray-400 hover:text-white">
                    <SearchIcon />
                </button>
                 <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-400 hover:text-white">
                    {isMobileMenuOpen ? <CloseIcon/> : <MenuIcon />}
                </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-secondary border-t border-brand-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:bg-brand-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/products" className="text-gray-300 hover:bg-brand-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</Link>
          </div>
        </div>
      )}

      {/* Mobile Search Overlay */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 bg-brand-dark bg-opacity-95 z-50 flex flex-col p-4 pt-10">
            <button onClick={() => setIsMobileSearchOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-white">
                <CloseIcon />
            </button>
            <div className="w-full max-w-md mx-auto">
                <form onSubmit={handleSearch} className="relative w-full">
                    <input
                        type="search"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-brand-secondary w-full text-white placeholder-gray-400 rounded-full py-3 pl-5 pr-12 text-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        autoFocus
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-3.5 mr-4 text-gray-400">
                        <SearchIcon className="h-6 w-6"/>
                    </button>
                </form>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;
