import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, ShoppingCart } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useStore();

    return (
        <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden hover:shadow-md transition-shadow group">
            <Link to={`/product/${product.id}`} className="block overflow-hidden h-48">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </Link>
            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-secondary bg-green-50 px-2 py-0.5 rounded">
                        {product.category}
                    </span>
                    <span className="text-sm font-bold text-brand-primary">${product.price.toFixed(2)}</span>
                </div>
                <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold text-gray-800 mb-1 hover:text-brand-primary transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[40px]">
                    {product.description}
                </p>
                <div className="flex justify-between items-center">
                    <span className={`text-xs font-medium ${product.stockQuantity > 0 ? 'text-green-600' : 'text-red-500'}`}>
                        {product.stockQuantity > 0 ? `${product.stockQuantity} in stock` : 'Out of stock'}
                    </span>
                    <button
                        onClick={() => addToCart(product)}
                        disabled={product.stockQuantity <= 0}
                        className="bg-brand-primary text-white p-2 rounded-lg hover:bg-amber-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-sm"
                        title="Add to cart"
                    >
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
