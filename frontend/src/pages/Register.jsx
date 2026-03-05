import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userApi } from '../api/api';
import { Mail, Lock, User, MapPin, UserPlus } from 'lucide-react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userApi.register(formData);
            alert('Registration successful! Please login.');
            navigate('/login');
        } catch (error) {
            alert('Error registering user');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 animate-in fade-in zoom-in duration-500">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-orange-50">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create Account</h2>
                    <p className="text-gray-500 italic">Start your pickling journey with us</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                            <User size={16} className="text-brand-primary" /> Full Name
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                            <Mail size={16} className="text-brand-primary" /> Email
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                            <Lock size={16} className="text-brand-primary" /> Password
                        </label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                            <MapPin size={16} className="text-brand-primary" /> Delivery Address
                        </label>
                        <textarea
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all h-24 resize-none"
                            required
                        />
                    </div>
                    <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-lg">
                        <UserPlus size={20} /> Register Now
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-50 text-center">
                    <p className="text-gray-600">
                        Already have an account?
                        <Link to="/login" className="text-brand-primary font-bold ml-2 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
