import React, { useState, useEffect } from 'react';
import { productApi } from '../api/api';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const res = await productApi.getAll(category || undefined);
                setProducts(res.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [category]);

    return (
        <div>
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Traditional <span className="text-brand-primary">HomeMade</span> Flavors
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
                    Discover our collection of authentic pickles and crispy snacks, made with traditional recipes and love.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-100 pb-6">
                <div className="flex items-center gap-2">
                    <Filter className="text-brand-secondary" size={20} />
                    <span className="font-bold text-gray-700">Filter by Category:</span>
                </div>
                <div className="flex gap-2">
                    {['', 'Pickles', 'Snacks'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${category === cat
                                    ? 'bg-brand-secondary text-white'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-primary'
                                }`}
                        >
                            {cat || 'All Products'}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
