import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productApi, subscriptionApi } from '../api/api';
import { useStore } from '../context/StoreContext';
import { ShoppingCart, Calendar, ArrowLeft, CheckCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, user } = useStore();
    const [product, setProduct] = useState(null);
    const [recommended, setRecommended] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [subFrequency, setSubFrequency] = useState('MONTHLY');
    const [subSuccess, setSubSuccess] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [productRes, allProductsRes] = await Promise.all([
                    productApi.getById(id),
                    productApi.getAll()
                ]);
                setProduct(productRes.data);
                // Simple recommendation: other products in same category
                setRecommended(allProductsRes.data.filter(p => p.category === productRes.data.category && p.id !== id).slice(0, 4));
            } catch (error) {
                console.error('Error fetching details:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, [id]);

    const handleSubscribe = async () => {
        if (!user) return navigate('/login');
        try {
            await subscriptionApi.subscribe({
                userId: user.id,
                productId: product.id,
                productName: product.name,
                frequency: subFrequency
            });
            setSubSuccess(true);
            setTimeout(() => setSubSuccess(false), 3000);
        } catch (error) {
            alert('Error subscribing');
        }
    };

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div></div>;
    if (!product) return <div className="text-center py-20 text-gray-600 font-bold">Product not found.</div>;

    return (
        <div className="animate-in fade-in duration-500">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-brand-primary mb-8 transition-colors">
                <ArrowLeft size={20} /> Back to Products
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="rounded-xl overflow-hidden shadow-inner bg-gray-50 flex items-center justify-center">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col justify-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-brand-secondary mb-2">{product.category}</span>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
                    <p className="text-2xl font-bold text-brand-primary mb-6">${product.price.toFixed(2)}</p>
                    <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-2 hover:bg-gray-100">-</button>
                            <span className="px-4 font-bold">{quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-2 hover:bg-gray-100">+</button>
                        </div>
                        <button
                            onClick={() => addToCart(product, quantity)}
                            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
>

                            <ShoppingCart size={20} /> Add to Cart
                        </button>
                    </div>

                    <div className="border-t border-gray-100 pt-8 mt-2">
                        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Calendar size={18} className="text-brand-secondary" />
                            Subscribe & Save
                        </h3>
                        <div className="flex gap-4">
                            <select
                                value={subFrequency}
                                onChange={(e) => setSubFrequency(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-2 bg-white"
                            >
                                <option value="WEEKLY">Weekly Delivery</option>
                                <option value="MONTHLY">Monthly Delivery</option>
                            </select>
                            <button
                                onClick={handleSubscribe}
                                className="btn-secondary flex items-center gap-2"
                            >
                                {subSuccess ? <><CheckCircle size={18} /> Subscribed</> : 'Subscribe Now'}
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 italic">*Get fresh supplies delivered automatically!</p>
                    </div>
                </div>
            </div>

            {recommended.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-brand-primary pl-4">Recommended for You</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {recommended.map(p => <ProductCard key={p.id} product={p} />)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
