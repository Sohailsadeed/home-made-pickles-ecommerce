import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, Home } from 'lucide-react';

const OrderConfirmation = () => {
    const location = useLocation();
    const order = location.state?.order;

    if (!order) return <Navigate to="/" />;

    return (
        <div className="max-w-2xl mx-auto py-12 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="bg-white rounded-3xl shadow-lg border border-green-50 overflow-hidden">
                <div className="bg-brand-secondary p-10 text-center text-white">
                    <div className="flex justify-center mb-4">
                        <CheckCircle size={64} className="text-brand-primary bg-white rounded-full p-2" />
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
                    <p className="opacity-90 italic">Thank you for your purchase. We're preparing your treats.</p>
                </div>

                <div className="p-10">
                    <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-100">
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Order ID</p>
                            <p className="font-mono font-bold text-gray-700">#{order.id.slice(-8).toUpperCase()}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Date</p>
                            <p className="font-bold text-gray-700">{new Date(order.orderDate).toLocaleDateString()}</p>
                        </div>
                    </div>

                    <div className="space-y-4 mb-10">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4">
                            <Package size={18} className="text-brand-primary" /> Order Details
                        </h3>
                        {order.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between text-sm">
                                <span className="text-gray-600">{item.name} x {item.quantity}</span>
                                <span className="font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="border-t border-gray-50 pt-4 flex justify-between font-extrabold text-xl text-brand-secondary">
                            <span>Total Paid</span>
                            <span>${order.totalAmount.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/" className="btn-secondary flex items-center justify-center gap-2 py-4">
                            <Home size={18} /> Continue Shopping
                        </Link>
                        <Link to="/account" className="bg-gray-100 text-gray-700 font-bold px-4 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                            Track Order <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-gray-400 text-sm">
                A confirmation email has been sent to your registered address.
            </div>
        </div>
    );
};

export default OrderConfirmation;
