import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { Trash2, ShoppingBag, ArrowRight, CreditCard } from 'lucide-react';
import { orderApi } from '../api/api';

const Cart = () => {
    const { cart, updateQuantity, removeFromCart, cartTotal, user, clearCart } = useStore();
    const navigate = useNavigate();

    const handleCheckout = async () => {
        if (!user) return navigate('/login');
        if (cart.length === 0) return;

        try {
            const orderData = {
                userId: user.id,
                items: cart.map(item => ({
                    productId: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price
                }))
            };
            const res = await orderApi.place(orderData);
            clearCart();
            navigate('/order-confirmation', { state: { order: res.data } });
        } catch (error) {
            alert('Error placing order: ' + (error.response?.data?.message || error.message));
        }
    };

    if (cart.length === 0) {
        return (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-orange-50">
                <div className="flex justify-center mb-6 text-orange-200">
                    <ShoppingBag size={80} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/" className="btn-primary inline-flex items-center gap-2">
                    Browse Products <ArrowRight size={18} />
                </Link>
            </div>
        );
    }

    return (
        <div className="animate-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-bold text-gray-900 mb-10 border-b border-gray-100 pb-6 flex items-center gap-3">
                <ShoppingBag className="text-brand-primary" /> Shopping Cart
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
                            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-gray-800 text-lg mb-1">{item.name}</h3>
                                <p className="text-brand-secondary text-sm font-medium mb-3">{item.category}</p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border border-gray-200 rounded">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 hover:bg-gray-50">-</button>
                                        <span className="px-3 font-semibold text-sm">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 hover:bg-gray-50">+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                <p className="text-xs text-gray-400">${item.price.toFixed(2)} each</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-50 h-fit sticky top-24">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Shipping</span>
                            <span className="text-green-600 font-medium">FREE</span>
                        </div>
                        <div className="border-t border-gray-100 pt-4 flex justify-between font-bold text-xl text-gray-900">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <button
                        onClick={handleCheckout}
                       className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-lg w-full flex items-center justify-center gap-2"
                    >
                        <CreditCard size={20} /> Checkout Now
                    </button>
                    {!user && (
                        <p className="text-center text-sm text-amber-600 mt-4 font-medium">Please login to complete your order</p>
                    )}
                    <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400 opacity-60">
                        <CreditCard size={14} /> Secured Payment Simulation
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
