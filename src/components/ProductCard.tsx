import React from 'react';
import { ShoppingCart, Star, Info } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'accounts':
        return 'bg-blue-100 text-blue-800';
      case 'subscriptions':
        return 'bg-green-100 text-green-800';
      case 'addons':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'accounts':
        return 'Gaming Nalozi';
      case 'subscriptions':
        return 'Pretplate';
      case 'addons':
        return 'Dodaci';
      default:
        return category;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}`}>
          {getCategoryLabel(product.category)}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">4.9</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            {product.show_fake_discount && product.original_price && product.original_price > product.price ? (
              <div className="flex flex-col">
                <span className="text-lg text-gray-500 line-through">
                  {product.original_price.toFixed(0)} RSD
                </span>
                <span className="text-2xl font-bold text-red-600">
                  {product.price.toFixed(0)} RSD
                </span>
              </div>
            ) : (
              <span>{product.price.toFixed(0)} RSD</span>
            )}
          </div>
          <div className="flex space-x-2">
            {onViewDetails && (
              <button
                onClick={() => onViewDetails(product)}
                className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition-colors"
                title="Pogledaj detalje"
              >
                <Info className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => addToCart(product)}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Dodaj u Korpu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;