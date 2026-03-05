import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Package } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Navbar = () => {
    const { user, logout, cartCount } = useStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-brand-secondary flex items-center gap-2">
                    <span className="text-brand-primary">HomeMade</span> Pickles
                </Link>

                <div className="flex items-center gap-6">
                    <Link to="/" className="text-gray-700 hover:text-brand-primary font-medium transition-colors">Home</Link>

                    <Link to="/cart" className="relative text-gray-700 hover:text-brand-primary transition-colors">
                        <ShoppingCart size={24} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-gray-600 hidden md:block">Hi, {user.name}</span>
                            <button onClick={handleLogout} className="text-gray-700 hover:text-red-600 transition-colors" title="Logout">
                                <LogOut size={22} />
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="flex items-center gap-1 text-gray-700 hover:text-brand-primary font-medium transition-colors">
                            <User size={22} />
                            <span>Login</span>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
