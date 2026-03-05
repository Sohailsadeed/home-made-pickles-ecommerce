import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userApi } from '../api/api';
import { useStore } from '../context/StoreContext';
import { Mail, Lock, UserPlus, LogIn } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await userApi.login({ email, password });
            login(res.data);
            navigate('/');
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-12 animate-in fade-in zoom-in duration-500">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-orange-50">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
                    <p className="text-gray-500 italic">Login to your homemade flavor account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                            <Mail size={16} className="text-brand-primary" /> Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                            <Lock size={16} className="text-brand-primary" /> Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-lg">
                        <LogIn size={20} /> Sign In
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-50 text-center">
                    <p className="text-gray-600">
                        Don't have an account?
                        <Link to="/register" className="text-brand-primary font-bold ml-2 hover:underline inline-flex items-center gap-1">
                            Join us <UserPlus size={14} />
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
