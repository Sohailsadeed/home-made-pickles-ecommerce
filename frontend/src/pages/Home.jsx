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
        <div className="space-y-24 pb-20">
            {/* Hero Section */}
            <section className="relative rounded-[3rem] overflow-hidden bg-brand-secondary py-24 px-8 md:px-16 shadow-2xl shadow-brand-secondary/20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 -left-20 w-80 h-80 bg-brand-accent rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 -right-20 w-80 h-80 bg-brand-primary rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 max-w-3xl">
                    <span className="inline-block bg-brand-accent/20 backdrop-blur-md text-brand-accent text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                        Authentic & Homemade
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight font-serif italic">
                        The Taste of <span className="text-brand-accent">Tradition</span> in Every Bite.
                    </h1>
                    <p className="text-lg md:text-xl text-brand-bg/80 mb-10 leading-relaxed font-medium max-w-2xl">
                        Handcrafted with love from ancestral recipes. Experience the crunch of premium snacks and the tang of authentic pickles.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-brand-accent text-brand-secondary px-8 py-4 rounded-full font-bold shadow-lg shadow-brand-accent/20 hover:scale-105 transition-transform active:scale-95">
                            Shop Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Filtering Section */}
            <section>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-gray-900 font-serif">Our Collections</h2>
                        <p className="text-gray-500 font-medium">Browse through our meticulously curated selections.</p>
                    </div>

                    <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
                        {['', 'Pickles', 'Snacks'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${category === cat
                                    ? 'bg-brand-secondary text-white shadow-md'
                                    : 'text-gray-500 hover:text-brand-secondary hover:bg-brand-secondary/5'
                                    }`}
                            >
                                {cat || 'All Items'}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-40 space-y-4">
                        <div className="relative w-16 h-16">
                            <div className="absolute inset-0 border-4 border-brand-secondary/20 rounded-full" />
                            <div className="absolute inset-0 border-4 border-brand-secondary border-t-transparent rounded-full animate-spin" />
                        </div>
                        <p className="text-sm font-bold text-brand-secondary/60 uppercase tracking-widest animate-pulse">Loading Flavors...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;
