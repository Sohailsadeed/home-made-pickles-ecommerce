import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, ShoppingCart } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useStore();

    return (
        <div className="group bg-white rounded-[2rem] border border-gray-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 overflow-hidden flex flex-col h-full">
            <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/5] sm:aspect-square">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-brand-secondary text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                        {product.category}
                    </span>
                </div>
                {product.stockQuantity <= 0 && (
                    <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-tighter shadow-xl">
                            Sold Out
                        </span>
                    </div>
                )}
            </Link>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <Link to={`/product/${product.id}`} className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-secondary transition-colors line-clamp-1 font-serif">
                            {product.name}
                        </h3>
                    </Link>
                    <span className="text-lg font-bold text-brand-primary ml-2">
                        ${product.price.toFixed(2)}
                    </span>
                </div>

                <p className="text-sm text-gray-500 line-clamp-2 mb-6 leading-relaxed flex-grow">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <span className={`text-[10px] uppercase tracking-widest font-bold ${product.stockQuantity > 0 ? 'text-green-600' : 'text-red-400'}`}>
                        {product.stockQuantity > 0 ? `${product.stockQuantity} available` : 'Restocking soon'}
                    </span>

                    <button
                        onClick={() => addToCart(product)}
                        disabled={product.stockQuantity <= 0}
                        className="bg-brand-secondary text-white p-3.5 rounded-2xl hover:bg-green-800 transition-all disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed shadow-lg shadow-brand-secondary/10 group-active:scale-95 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                        title="Add to cart"
                    >
                        <ShoppingCart size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
