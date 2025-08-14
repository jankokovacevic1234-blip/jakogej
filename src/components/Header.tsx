import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store, Shield } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Store className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">GmShop</h1>
              <p className="text-sm text-gray-600">Premium Gaming Store</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Products
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="relative p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <Link
              to="/admin"
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              title="Admin Panel"
            >
              <Shield className="w-6 h-6 text-gray-700" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;